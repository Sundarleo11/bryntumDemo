
StartTest(t => {

    const
        calendar                        = bryntum.query('calendar'),
        { localeManager, localeHelper } = calendar;

    t.it('Check all locales', t => {
        // Use the local one, not the testConfigs one.
        // We are testing that the formatted time is local.
        calendar.activeView.timeFormat = 'LT';

        t.chain(
            Object.values(localeHelper.locales).map(l => l.localeDesc).map(locale => [
                { diag : `Checking locale ${locale}` },
                { waitForSelectorNotFound : '[data-ref=localeCombo] input' },
                { click : '[data-ref=infoButton]' },
                { moveMouseTo : '.info-popup .b-checkbox' },
                { waitForSelector : '.b-tooltip-shared' },
                async() => {
                    t.contentNotLike('.b-tooltip-shared', /L{/, 'Tooltip is localized');
                },
                { click : '[data-ref=localeCombo]' },

                // Must cause a refresh
                {
                    waitForEvent : [calendar.activeView, 'refresh'],
                    trigger      : { click : `.b-list-item:contains(${locale})` }
                },

                next => {
                    // Updating of the stepUnits must all work.
                    // A non-existent step unit results in disabling prev/next
                    t.notOk(calendar.tbar.widgetMap.prevButton.disabled);
                    t.notOk(calendar.tbar.widgetMap.nextButton.disabled);

                    // Check that times are formatted correctly
                    calendar.eventStore.forEach(rec => {
                        if (!rec.isInterDay) {
                            const el = calendar.activeView.getEventElement(rec);

                            // Check that event times times are displayed in the locale-appropriate format
                            if (el) {
                                const
                                    time       = el.querySelector('.b-event-time').textContent,
                                    timeNeeded = DateHelper.format(rec.startDate, 'LT');
                                t.is(time, timeNeeded, `Time is formatted correctly: ${time}`);
                            }
                        }
                    });

                    t.is(calendar.activeView.startDate.getDay(), DateHelper.weekStartDay, 'Week starts correctly');

                    // Check each day cell is for the correct day of week
                    Array.from(calendar.activeView.dayContainerElement.children).forEach((el, idx) => {
                        const
                            day       = DateHelper.parseKey(el.dataset.date).getDay(),
                            dayNeeded = (DateHelper.weekStartDay + idx) % 7;
                        t.is(day, dayNeeded, `Day cell ${day} is for the correct day of week`);
                    });
                    next();
                }
            ])
        );
    });

    t.it('Should be possible to update weekends dynamically (configured in locale)', t => {
        localeManager.applyLocale('En', true);
        const locale = localeHelper.locales.En;

        t.diag('Check header: SA and SU are non-working days');
        t.selectorExists('.b-calendar-days .b-calendar-cell.b-nonworking-day[data-date="2020-10-11"]');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-12"]:not(.b-nonworking-day)');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-13"]:not(.b-nonworking-day)');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-14"]:not(.b-nonworking-day)');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-15"]:not(.b-nonworking-day)');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-16"]:not(.b-nonworking-day)');
        t.selectorExists('.b-calendar-days .b-calendar-cell.b-nonworking-day[data-date="2020-10-17"]');

        t.diag('Check body: SA and SU are non-working days');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell.b-nonworking-day[data-date="2020-10-11"]');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-12"]:not(.b-nonworking-day)');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-13"]:not(.b-nonworking-day)');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-14"]:not(.b-nonworking-day)');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-15"]:not(.b-nonworking-day)');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-16"]:not(.b-nonworking-day)');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell.b-nonworking-day[data-date="2020-10-17"]');

        locale.DateHelper.nonWorkingDays = {};
        localeManager.applyLocale('En', true);

        t.diag('Check header: all days are working');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-11"]:not(.b-nonworking-day)');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-12"]:not(.b-nonworking-day)');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-13"]:not(.b-nonworking-day)');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-14"]:not(.b-nonworking-day)');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-15"]:not(.b-nonworking-day)');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-16"]:not(.b-nonworking-day)');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-17"]:not(.b-nonworking-day)');

        t.diag('Check body: all days are working');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-11"]:not(.b-nonworking-day)');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-12"]:not(.b-nonworking-day)');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-13"]:not(.b-nonworking-day)');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-14"]:not(.b-nonworking-day)');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-15"]:not(.b-nonworking-day)');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-16"]:not(.b-nonworking-day)');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-17"]:not(.b-nonworking-day)');

        locale.DateHelper.nonWorkingDays = { 5 : true, 6 : true };
        localeManager.applyLocale('En', true);

        t.diag('Check header: FR and SA are non-working days');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-11"]:not(.b-nonworking-day)');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-12"]:not(.b-nonworking-day)');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-13"]:not(.b-nonworking-day)');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-14"]:not(.b-nonworking-day)');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-15"]:not(.b-nonworking-day)');
        t.selectorExists('.b-calendar-days .b-calendar-cell.b-nonworking-day[data-date="2020-10-16"]');
        t.selectorExists('.b-calendar-days .b-calendar-cell.b-nonworking-day[data-date="2020-10-17"]');

        t.diag('Check body: FR and SA are non-working days');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-11"]:not(.b-nonworking-day)');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-12"]:not(.b-nonworking-day)');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-13"]:not(.b-nonworking-day)');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-14"]:not(.b-nonworking-day)');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-15"]:not(.b-nonworking-day)');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell.b-nonworking-day[data-date="2020-10-16"]');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell.b-nonworking-day[data-date="2020-10-17"]');

    });

    t.it('Should be possible to update weekends dynamically (configured in panel)', t => {
        localeManager.applyLocale('En', true);

        calendar.nonWorkingDays = { 1 : true, 2 : true };

        t.diag('Check header: MO and TU are non-working days');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-11"]:not(.b-nonworking-day)');
        t.selectorExists('.b-calendar-days .b-calendar-cell.b-nonworking-day[data-date="2020-10-12"]');
        t.selectorExists('.b-calendar-days .b-calendar-cell.b-nonworking-day[data-date="2020-10-13"]');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-14"]:not(.b-nonworking-day)');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-15"]:not(.b-nonworking-day)');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-16"]:not(.b-nonworking-day)');
        t.selectorExists('.b-calendar-days .b-calendar-cell[data-date="2020-10-17"]:not(.b-nonworking-day)');

        t.diag('Check body: MO and TU are non-working days');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-11"]:not(.b-nonworking-day)');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell.b-nonworking-day[data-date="2020-10-12"]');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell.b-nonworking-day[data-date="2020-10-13"]');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-14"]:not(.b-nonworking-day)');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-15"]:not(.b-nonworking-day)');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-16"]:not(.b-nonworking-day)');
        t.selectorExists('.b-dayview-day-container .b-calendar-cell[data-date="2020-10-17"]:not(.b-nonworking-day)');

    });
});
