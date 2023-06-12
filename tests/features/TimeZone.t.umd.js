
StartTest(t => {
    let calendar;

    t.beforeEach(function() {
        calendar?.destroy();
    });

    async function assertTimeZoneConversion(t, { startDateString, endDateString, events }) {
        t.is(calendar.activeView.startDate.toString(), new Date(startDateString).toString());
        t.is(calendar.activeView.endDate.toString(), new Date(endDateString).toString());

        // Check events
        for (const expectEvent of events) {
            if (expectEvent.id) {
                t.diag('Checking event ' + expectEvent.id);
                const event = calendar.eventStore.getById(expectEvent.id);
                if (expectEvent.startDateString) {
                    t.is(event.startDate.toString(), new Date(expectEvent.startDateString), 'Start date ok');
                }
                if (expectEvent.endDateString) {
                    t.is(event.endDate.toString(), new Date(expectEvent.endDateString), 'End date ok');
                }
            }
        }

        t.is(calendar.eventStore.modified.count, 0, 'No modifications found');
    }

    t.it('Should work to set IANA time zone initially', async t => {
        calendar = await t.getCalendar({
            timeZone : 'America/Chicago',
            date     : new Date('2022-10-11T13:00:00-05:00'),
            events   : [
                { id : 1, startDate : '2022-10-11T20:00:00Z', duration : 1, durationUnit : 'hour', resourceId : 'r1' }
            ]
        });

        await assertTimeZoneConversion(t, {
            startDateString : '2022-10-09T00:00:00',
            endDateString   : '2022-10-16T00:00:00',
            events          : [
                { id : 1, startDateString : '2022-10-11T15:00:00' }
            ]
        });
    });

    t.it('Should work to set time zone at runtime', async t => {
        calendar = await t.getCalendar({
            date   : new Date('2022-10-11T13:00:00Z'),
            events : [
                { id : 1, startDate : '2022-10-11T20:00:00Z', duration : 1, durationUnit : 'hour' }
            ]
        });

        calendar.timeZone = 'America/Chicago';
        await assertTimeZoneConversion(t, {
            startDateString : '2022-10-09T00:00:00',
            endDateString   : '2022-10-16T00:00:00',
            events          : [
                { id : 1, startDateString : '2022-10-11T15:00:00' }
            ]
        });
    });

    t.it('Should work to change time zone at runtime', async t => {
        calendar = await t.getCalendar({
            date     : new Date('2022-10-11T13:00:00-05:00'),
            timeZone : 'America/Chicago',
            events   : [
                { id : 1, startDate : '2022-10-11T20:00:00Z', duration : 1, durationUnit : 'hour' }
            ]
        });

        calendar.timeZone = 'Europe/Stockholm';
        await assertTimeZoneConversion(t, {
            startDateString : '2022-10-09T00:00:00',
            endDateString   : '2022-10-16T00:00:00',
            events          : [
                { id : 1, startDateString : '2022-10-11T22:00:00' }
            ]
        });
    });

    t.it('Should get local unconverted date when commiting', async t => {
        calendar = await t.getCalendar({
            date     : new Date('2022-10-24T10:00:00-05:00'),
            timeZone : 'America/Chicago',
            events   : [
                { id : 1, startDate : '2022-10-24T20:00:00Z', duration : 1, durationUnit : 'hour' }
            ]
        });

        const rec = calendar.eventStore.first;

        t.is(rec.persistableData.startDate.toISOString(), '2022-10-24T20:00:00.000Z', 'Original date correct');

        rec.startDate = DateHelper.add(rec.startDate, 2, 'hour');

        t.is(rec.persistableData.startDate.toISOString(), '2022-10-24T22:00:00.000Z', 'Modified date correct');
    });

    t.it('New record should be created with dates in current active time zone', async t => {
        calendar = await t.getCalendar({
            date     : new Date('2022-10-11T13:00:00-05:00'),
            timeZone : 'America/Chicago',
            events   : [
                { id : 1, startDate : '2022-10-11T20:00:00Z', duration : 1, durationUnit : 'hour' }
            ]
        });
        calendar.eventStore.add({ id : 2, startDate : new Date('2022-10-12T01:00:00'), duration : 1, durationUnit : 'hour' });

        await assertTimeZoneConversion(t, {
            startDateString : '2022-10-09T00:00:00',
            endDateString   : '2022-10-16T00:00:00',
            events          : [
                { id : 1, startDateString : '2022-10-11T15:00:00' },
                { id : 2, startDateString : '2022-10-12T01:00:00' }
            ]
        });
    });

    t.it('Should display correct today when converted to timezone', async t => {
        const
            localToday = new Date(),
            activeDay  = DateHelper.add(localToday, localToday.getDay() === 0 ? -1 : 1, 'day');

        calendar = await t.getCalendar({
            timeZone : -24 * 60, // Using a UTC offset in minutes to simplify this test.
            mode     : 'day',
            date     : activeDay
        });

        const today = TimeZoneHelper.toTimeZone(localToday, calendar.timeZone);

        // All views
        t.selectorExists(`.b-calendar-days .b-today[data-date="${DateHelper.makeKey(today)}"]`, 'Converted today marked in datepicker correctly');

        t.diag('Testing day view');
        t.selectorExists(`.b-calendarrow-header .b-today[data-header-date="${DateHelper.makeKey(today)}"]`, 'Converted today marked in header correctly');

        // Switch to local today
        calendar.date = localToday;
        t.selectorNotExists(`[data-date="${DateHelper.makeKey(localToday)}"] .b-current-time-indicator`, 'No current time indicator present');

        // Switch to tz today
        calendar.date = today;
        t.selectorExists(`[data-date="${DateHelper.makeKey(today)}"] .b-current-time-indicator`, 'Current time indicator present');

        t.diag('Testing week view');
        calendar.mode = 'week';
        await t.waitForAnimations();
        // Restore date
        calendar.date = activeDay;
        t.selectorExists(`.b-calendarrow-header .b-today[data-header-date="${DateHelper.makeKey(today)}"]`, 'Converted today marked in header correctly');
        t.selectorNotExists(`[data-date="${DateHelper.makeKey(localToday)}"] .b-current-time-indicator`, 'No current time indicator present at local today');
        t.selectorExists(`[data-date="${DateHelper.makeKey(today)}"] .b-current-time-indicator`, 'Current time indicator present at tz today');

        t.diag('Testing month view');
        calendar.mode = 'month';
        await t.waitForAnimations();
        t.selectorExists(`.b-monthview .b-calendar-cell.b-today[data-date="${DateHelper.makeKey(today)}"]`, 'Correct cell marked as today');

        t.diag('Testing year view');
        calendar.mode = 'year';
        await t.waitForAnimations();
        t.selectorExists(`.b-yearview .b-calendar-cell.b-today[data-date="${DateHelper.makeKey(today)}"]`, 'Correct cell marked as today');

    });

});
