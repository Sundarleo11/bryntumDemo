
StartTest(t => {
    let calendar, agendaView, eventStore, resourceStore;

    async function getAgendaView(config) {
        const agendaView = await t.getAgendaView(config);
        eventStore = agendaView.eventStore;
        resourceStore = agendaView.resourceStore;

        return agendaView;
    }

    t.beforeEach(function() {
        calendar && !calendar.isDestroyed && calendar.destroy();
        agendaView && !agendaView.isDestroyed && agendaView.destroy();

        // Check that none of the floating things are persisting
        if (t.query('.b-overflowpopup,.b-sch-event-tooltip, .b-eventeditor').length > 0) {
            t.selectorNotExists('.b-overflowpopup:visible');
            t.selectorNotExists('.b-sch-event-tooltip');
            t.selectorNotExists('.b-eventeditor');
        }
    });

    t.it('sanity', async t => {
        eventStore = new EventStore({
            // Add a recurring meeting
            data : t.getHackathonData().events.rows.concat([{
                duration       : 1,
                durationUnit   : 'hour',
                id             : 'twice-weekly',
                name           : 'Recurring Meeting',
                recurrenceRule : 'FREQ=WEEKLY;BYDAY=TU,TH',
                startDate      : new Date(2019, 9, 15, 13)
            }])
        });

        const eventRec = eventStore.getById(3);

        eventRec.iconCls = 'b-fa-cog';

        resourceStore = new ResourceStore({
            data : t.getHackathonData().resources.rows
        });

        agendaView = await getAgendaView({
            height       : 510,
            width        : 700,
            eventStore,
            resourceStore,
            cellRenderer : function({ cellElement, record  }) {
                if (!(record.date - new Date(2019, 9, 17))) {
                    cellElement.classList.add('hackathon-dayoff');
                    // Mutate day cell information
                    record.isNonWorking = true;
                }
                // All other days of the hackathon are designated working days
                else {
                    record.isNonWorking = false;
                }
            },
            eventRenderer : function({ eventRecord, renderData }) {
                // highlight all events which are related to conferences
                if (eventRecord.name.indexOf('conference') !== -1) {
                    renderData.style.fontWeight        = '700';
                    renderData.cls['conference-event'] = true;
                }
            }
        });

        await t.waitForSelector('.b-cal-agenda-grid-row[data-id="2019-10-14"] .b-cal-agenda-date');

        // https://github.com/bryntum/support/issues/6266
        // All rows must be positioned using top, *not* transform : translate
        t.query('.b-cal-agenda-grid-row').forEach(r => t.notOk(r.style.transform));

        const
            dateRect = Rectangle.from(agendaView.element.querySelector('.b-cal-agenda-grid-row[data-id="2019-10-14"] .b-cal-agenda-date')),
            buttonRect = Rectangle.from(agendaView.settings.element);

        // Button must be square
        t.isApproxPx(buttonRect.width, buttonRect.height);

        agendaView.scrollable.scrollBy(0, 50);

        const newDateRect = Rectangle.from(agendaView.element.querySelector('.b-cal-agenda-grid-row[data-id="2019-10-14"] .b-cal-agenda-date'));

        // Stickiness must work
        t.isApproxRect(newDateRect, dateRect, 'Sticky date header works');

        await t.click('.b-calendar-cell.b-nonworking-day[data-date="2019-10-17"]', null, null, null, [100, '50%']);

        t.ok(agendaView.getDayElement('2019-10-17').classList.contains('b-nonworking-day'));
        t.notOk(agendaView.getDayElement('2019-10-20').classList.contains('b-nonworking-day'));
        t.notOk(agendaView.getDayElement('2019-10-21').classList.contains('b-nonworking-day'));

        // Only the recurring events within the rendered range within the range (Which is year) are visible
        t.selectorCountIs('.b-cal-event-body:contains(Recurring Meeting)', 12);

        // Back to top
        await agendaView.scrollTo(agendaView.store.first);

        t.selectorCountIs('.b-cal-event-wrap.b-allday.b-continues-future:not(.b-continues-past)', 1, 'Hackathon start el found');
        t.selectorCountIs('.b-cal-event-wrap.b-allday.b-continues-past:not(.b-continues-future)', 1, 'Hackathon end el found');
        t.selectorCountIs('.b-cal-event-wrap.b-allday.b-continues-past.b-continues-future', 6, 'Hackathon interior els found');

        const conferenceEls = t.query('.b-cal-event-body:contains(conference)');

        // Check renderer has worked
        conferenceEls.forEach(el => {
            const fontWeight = DomHelper.getStyleValue(el, 'font-weight');

            // Some browsers report "bold" for 700.
            t.ok(fontWeight === 'bold' || fontWeight === '700');
        });

        t.selectorCountIs('.b-cal-event-icon', 22, 'Only custom allDay icons visible');

        // This must not cause an error.
        await t.type(null, '[DOWN]');
    });

    t.it('sanity when loaded asynchronously', async t => {
        t.mockUrl('test-sanity-data', {
            delay        : 100,
            responseText : JSON.stringify({
                success   : true,
                resources : {
                    rows : [
                        {
                            id         : 'bryntum',
                            name       : 'Bryntum team',
                            eventColor : '#249fbc'
                        }
                    ]
                },
                events : {
                    rows : t.getHackathonData().events.rows.concat([{
                        duration       : 1,
                        durationUnit   : 'hour',
                        id             : 'twice-weekly',
                        name           : 'Recurring Meeting',
                        recurrenceRule : 'FREQ=WEEKLY;BYDAY=TU,TH',
                        startDate      : new Date(2019, 9, 15, 13)
                    }])
                }
            })
        });

        calendar = await t.getCalendar({
            height      : 500,
            width       : 700,
            sidebar     : false,
            date        : new Date(2019, 9, 17),
            crudManager : {
                transport : {
                    load : {
                        url : 'test-sanity-data'
                    }
                },
                autoLoad : true,
                autoSync : false
            },
            modes : {
                agenda : {
                    cellRenderer : function({ cellElement, record  }) {
                        if (!(record.date - new Date(2019, 9, 17))) {
                            cellElement.classList.add('hackathon-dayoff');
                            // Mutate day cell information
                            record.isNonWorking = true;
                        }
                        // All other days of the hackathon are designated working days
                        else {
                            record.isNonWorking = false;
                        }
                    },
                    eventRenderer : function({ eventRecord, renderData }) {
                        // highlight all events which are related to conferences
                        if (eventRecord.name.indexOf('conference') !== -1) {
                            renderData.style.fontWeight = '700';
                            renderData.cls['conference-event'] = true;
                        }
                    }
                },
                year  : null,
                month : null,
                week  : null,
                day   : null
            }
        });
        agendaView     = calendar.modes.agenda;

        await t.waitForSelector('.b-cal-event-wrap');

        t.ok(agendaView.getDayElement('2019-10-17').classList.contains('b-nonworking-day'));
        t.notOk(agendaView.getDayElement('2019-10-20').classList.contains('b-nonworking-day'));
        t.notOk(agendaView.getDayElement('2019-10-21').classList.contains('b-nonworking-day'));

        // Only the recurring events within the rendered range within the date range (Which is year) are visible
        t.selectorCountIs('.b-cal-event-body:contains(Recurring Meeting)', 11);

        t.selectorCountIs('.b-cal-event-wrap.b-allday.b-continues-future:not(.b-continues-past)', 1, 'Hackathon start el found');
        t.selectorCountIs('.b-cal-event-wrap.b-allday.b-continues-past:not(.b-continues-future)', 1, 'Hackathon end el found');
        t.selectorCountIs('.b-cal-event-wrap.b-allday.b-continues-past.b-continues-future', 6, 'Hackathon interior els found');

        const conferenceEls = t.query('.b-cal-event-body:contains(conference)');

        // Check renderer has worked
        conferenceEls.forEach(el => {
            const fontWeight = DomHelper.getStyleValue(el, 'font-weight');

            // Some browsers report "bold" for 700.
            t.ok(fontWeight === 'bold' || fontWeight === '700');
        });
    });

    t.it('dateRangeChange with autoLoad : false and sole view', async t => {
        let dateRangeChangeCount = 0;

        calendar = await t.getCalendar({
            height      : 500,
            width       : 700,
            sidebar     : false,
            date        : new Date(2019, 9, 17),
            crudManager : {
                transport : {
                    load : {
                        url : 'test-sanity-data'
                    }
                },
                autoLoad : false,
                autoSync : false
            },
            modes : {
                year  : null,
                month : null,
                week  : null,
                day   : null
            },
            listeners : {
                dateRangeChange() {
                    dateRangeChangeCount++;
                }
            }
        });
        await t.waitFor(() => dateRangeChangeCount === 1);

        // Nothing to wait for. Nothing should happen
        await t.waitFor(500);

        // Only one event
        t.is(dateRangeChangeCount, 1);
    });

    t.it('dateRangeChange with autoLoad : false and switch to AgendaView', async t => {
        let dateRangeChangeCount = 0;

        calendar = await t.getCalendar({
            height      : 500,
            width       : 1200,
            sidebar     : false,
            date        : new Date(2019, 9, 17),
            crudManager : {
                transport : {
                    load : {
                        url : 'test-sanity-data'
                    }
                },
                autoLoad : false,
                autoSync : false
            },
            modes : {
                year  : null,
                month : null,
                day   : null
            },
            listeners : {
                dateRangeChange() {
                    dateRangeChangeCount++;
                }
            }
        });
        await t.waitFor(() => dateRangeChangeCount === 1);

        await t.click('button[data-ref="agendaShowButton"]');

        await t.waitFor(() => dateRangeChangeCount === 2);

        // Nothing to wait for. Nothing should happen
        await t.waitFor(500);

        // Only 2 events
        t.is(dateRangeChangeCount, 2);
    });

    t.it('scrollTo', async t => {
        eventStore = new EventStore({
            data : t.getHackathonData().events.rows
        });

        resourceStore = new ResourceStore({
            data : t.getHackathonData().resources.rows
        });

        agendaView = await getAgendaView({
            height : 500,
            width  : 700,
            eventStore,
            resourceStore
        });

        await t.waitForSelector('.b-calendar-cell[data-date="2019-10-17"]');

        await agendaView.scrollTo(new Date(2019, 9, 21));

        t.isApprox(agendaView.scrollable.y, agendaView.scrollable.maxY, 2, 'Correctly scrolled to last date');
    });

    t.it('Custom eventRenderer', async t => {
        eventStore = new EventStore({
            data : t.getHackathonData().events.rows
        });

        resourceStore = new ResourceStore({
            data : t.getHackathonData().resources.rows
        });

        agendaView = await getAgendaView({
            height : 500,
            width  : 700,
            eventStore,
            resourceStore,
            eventRenderer({ eventRecord, renderData }) {
                const startHour = eventRecord.startDate.getHours();

                if (startHour > 12) {
                    renderData.eventHeight = 'auto';

                    return [{
                        tag       : 'span',
                        style     : 'margin: 0.5em 0.5em 0.5em 0',
                        className : {
                            'b-early-afternoon' : startHour < 15 && startHour > 12,
                            'b-mid-afternoon'   : startHour < 18 && startHour > 14,
                            'b-late-afternoon'  : startHour > 17,
                            'b-fa b-icon-clock' : 1
                        }
                    }, {
                        tag  : 'span',
                        html : eventRecord.name
                    }];
                }
            }
        });

        await t.waitForSelector('.b-cal-event-wrap[data-event-id="8"] .b-early-afternoon');
        t.selectorExists('.b-cal-event-wrap[data-event-id="9"] .b-mid-afternoon');
        t.selectorExists('.b-cal-event-wrap[data-event-id="10"] .b-late-afternoon');

        const cell = agendaView.getDayElement('2019-10-15');

        // Must have heighted the cell to fit the custom content
        t.ok(cell.scrollHeight <= cell.clientHeight);
    });

    // https://github.com/bryntum/support/issues/2943
    t.it('Should not scroll when clicking event', async t => {
        calendar = await t.getCalendar({
            sidebar    : false,
            date       : new Date(2019, 9, 17),
            eventStore : eventStore = new EventStore({
                data : t.getHackathonData().events.rows
            }),

            modes : {
                agenda : true,
                year   : null,
                month  : null,
                week   : null,
                day    : null
            }
        });

        agendaView = calendar.activeView;

        await t.waitForSelector('.b-cal-event-wrap');
        await agendaView.scrollable.scrollTo(null, 500);

        t.wontFire(agendaView.scrollable, 'scroll');
        await t.click('.b-cal-event-wrap[data-event-id="13"]');
    });

    t.it('autoCreate in AgendaView', async t => {
        // AgendaView needs at least one event to display any rows
        eventStore = new EventStore({
            data : [
                {
                    name         : 'Lunch',
                    startDate    : '2019-10-07T12:00:00.000',
                    endDate      : '2019-10-07T13:00:00.000',
                    durationUnit : 'h',
                    duration     : 1
                }
            ],
            defaultCalendarId : 'r2'
        });

        resourceStore = new ResourceStore({
            data : [{
                id   : 'r1',
                name : 'Calendar 1'
            }, {
                id   : 'r2',
                name : 'Calendar 2'
            }]
        });

        calendar = await t.getCalendar({
            date     : new Date(2019, 9, 7),
            eventStore,
            resourceStore,
            sidebar  : false,
            features : {
                eventTooltip : false,
                eventEdit    : false
            },
            modes : {
                agenda : true,
                year   : null,
                week   : null,
                day    : null,
                month  : null
            }
        });
        t.selectorCountIs('.b-calendar-cell .b-cal-event', 1, 'One event');

        await t.waitFor(1000);
        t.chain(
            { dblclick : '.b-calendar-cell' },

            { waitFor : () => calendar.activeView.element.querySelectorAll('.b-cal-event-wrap').length === 2 },

            next => {
                t.is(calendar.eventStore.count, 2);
                t.selectorCountIs('.b-calendar-cell .b-cal-event', 2, 'Two events');

                const newEvent = calendar.eventStore.getAt(1);

                t.is(newEvent.startDate, new Date(2019, 9, 7, 8), 'Correct start date');
                t.is(newEvent.endDate, new Date(2019, 9, 7, 9), 'Correct end date');
                t.is(newEvent.resource, calendar.resourceStore.getAt(1), 'Correct resource');

                calendar.autoCreate = false;
                next();
            },

            { dblclick : '.b-calendar-cell' },

            next => {
                t.is(calendar.eventStore.count, 2, 'Still two events, autoCreate disabled');
                t.selectorCountIs('.b-calendar-cell .b-cal-event', 2, 'Still two events, autoCreate disabled');

                calendar.autoCreate = 'click';
                next();
            },

            { click : '.b-calendar-cell' },

            { waitFor : () => calendar.activeView.element.querySelectorAll('.b-cal-event-wrap').length === 3 },

            () => {
                t.is(calendar.eventStore.count, 3);
                t.selectorCountIs('.b-calendar-cell .b-cal-event', 3, 'Three events');

                const newEvent = calendar.eventStore.getAt(2);

                t.is(newEvent.startDate, new Date(2019, 9, 7, 8), 'Correct start date');
                t.is(newEvent.endDate, new Date(2019, 9, 7, 9), 'Correct end date');
                t.is(newEvent.resource, calendar.resourceStore.getAt(1), 'Correct resource');
            }
        );
    });

    t.it('AgendaView should not reset scroll upon return', async t => {
        eventStore = new EventStore({
            data : t.getHackathonData().events.rows
        });

        resourceStore = new ResourceStore({
            data : t.getHackathonData().resources.rows
        });

        calendar = await t.getCalendar({
            date : new Date(2019, 9, 14),
            eventStore,
            resourceStore
        });
        const { agenda } = calendar.modes;

        t.chain(
            { click : 'button:contains(Agenda)' },

            async() => t.is(calendar.mode, 'agenda'),

            {
                waitForEvent : [agenda.scrollable, 'scrollEnd'],
                trigger      : () => agenda.scrollable.scrollBy(null, 10000)
            },

            { click : 'button[data-ref=monthShowButton]' },

            async() => t.is(calendar.mode, 'month'),

            { click : 'button:contains(Agenda)' },

            async() => t.is(calendar.mode, 'agenda'),

            () => {
                t.isApprox(agenda.scrollable.y, agenda.scrollable.maxY, 'Scroll position still correct');
            }
        );
    });

    t.it('AgendaView autoCreate', async t => {
        eventStore = new EventStore({
            data : t.getHackathonData().events.rows
        });
        const { count } = eventStore;

        resourceStore = new ResourceStore({
            data : t.getHackathonData().resources.rows
        });

        calendar = await t.getCalendar({
            eventStore,
            resourceStore,
            width   : 1024,
            height  : 768,
            sidebar : false,
            date    : new Date(2019, 9, 14),
            modes   : {
                day   : null,
                week  : null,
                month : null,
                year  : null
            }
        });

        await t.doubleClick('.b-calendar-cell[data-date="2019-10-17"]');

        await t.waitFor(() => calendar.features.eventEdit.editor?.containsFocus);

        await t.type(document.activeElement, '[ESCAPE]');

        t.selectorNotExists('.b-eventeditor');

        await t.doubleClick('.b-calendar-cell[data-date="2019-10-17"]');

        await t.waitFor(() => calendar.features.eventEdit.editor?.containsFocus);

        await t.type(document.activeElement, '[ESCAPE]');

        t.selectorNotExists('.b-eventeditor');

        t.is(eventStore.count, count, 'autoCreate records not added when edit canceled');
    });

    t.it('AgendaView set date scroll', async t => {
        eventStore = new EventStore({
            data : t.getHackathonData().events.rows
        });

        resourceStore = new ResourceStore({
            data : t.getHackathonData().resources.rows
        });

        calendar = await t.getCalendar({
            eventStore,
            resourceStore,
            width  : 1024,
            height : 768,
            date   : new Date(2019, 9, 14),
            modes  : {
                day   : null,
                week  : null,
                month : null,
                year  : null
            }
        });
        const agenda = calendar.modes.agenda;

        await t.click(`#${calendar.sidebar.id} .b-datepicker .b-calendar-cell[data-date="2019-10-21"]`);

        // That's the last fully visible date, so it must scroll to the end (with 1px leeway due to Firefox).
        await t.waitFor(() => Math.abs(agenda.scrollable.y - agenda.scrollable.maxY)) < 2;

        await t.click(`#${calendar.sidebar.id} .b-datepicker .b-calendar-cell[data-date="2019-10-14"]`);

        // That's the first fully visible date, so it must scroll to the top
        // Subpixel scroll positions possible.
        await t.waitFor(() => agenda.scrollable.y < 1);
    });

    // https://github.com/bryntum/support/issues/2850
    t.it('Should respect weekStartDay set on Calendar', async t => {
        calendar = await t.getCalendar({
            weekStartDay : 1,
            date         : new Date(2019, 9, 17),
            eventStore   : eventStore = new EventStore({
                data : t.getHackathonData().events.rows
            }),

            modes : {
                agenda : {
                    range : '1 week'
                },
                year  : null,
                month : null,
                week  : null,
                day   : null
            }
        });

        agendaView = calendar.activeView;

        await t.waitForSelector('.b-cal-event-wrap');
        await t.click('[data-ref="nextButton"]');
        t.is(agendaView.store.first.date.getDay(), 1, 'First event starts on a Monday');
    });

    t.it('daySelectable', async t => {
        calendar = await t.getCalendar({
            weekStartDay : 1,
            date         : new Date(2019, 9, 14),
            eventStore   : eventStore = new EventStore({
                data : t.getHackathonData().events.rows
            }),

            modes : {
                agenda : {
                    range       : '1 day',
                    daySelector : true
                },
                year  : null,
                month : null,
                week  : null,
                day   : null
            }
        });

        t.is(calendar.date, new Date(2019, 9, 14));

        // Seven daySelector header cells
        t.selectorCountIs('.b-agendaview-dayselector .b-cal-cell-header', 7);

        await t.click('[data-ref="nextButton"]');

        // Should only step onwards one day
        t.is(calendar.date, new Date(2019, 9, 15));
    });

    // https://github.com/bryntum/support/issues/4437
    t.it('Should use eventTimeRenderer', async t => {
        let e, d;

        calendar = await t.getCalendar({
            date   : new Date(2019, 9, 17),
            events : [{
                name      : 'test',
                startDate : new Date(2019, 9, 17),
                endDate   : new Date(2019, 9, 18)
            }],

            modes : {
                agenda : {
                    range : '1 week',
                    eventTimeRenderer(eventRecord, date) {
                        e = eventRecord;
                        d = date;

                        return '*time*';
                    }
                },
                year  : null,
                month : null,
                week  : null,
                day   : null
            }
        });

        agendaView = calendar.activeView;

        await t.waitForSelector('.b-cal-event-wrap');

        // Renderer worked
        t.is(e, calendar.eventStore.first);
        t.is(d, new Date(2019, 9, 17));
        t.selectorExists('.b-cal-eventlist-event-time:contains(*time*)');
    });

    t.it('Should use eventTimeRenderer as a string', async t => {
        let e, d;

        calendar = await t.getCalendar({
            date   : new Date(2019, 9, 17),
            events : [{
                name      : 'test',
                startDate : new Date(2019, 9, 17),
                endDate   : new Date(2019, 9, 18)
            }],

            modes : {
                agenda : {
                    range             : '1 week',
                    eventTimeRenderer : 'up.myTimeRenderer'
                },
                year  : null,
                month : null,
                week  : null,
                day   : null
            },
            myTimeRenderer(eventRecord, date) {
                e = eventRecord;
                d = date;

                return '*time*';
            }
        });

        agendaView = calendar.activeView;

        await t.waitForSelector('.b-cal-event-wrap');

        // Renderer worked
        t.is(e, calendar.eventStore.first);
        t.is(d, new Date(2019, 9, 17));
        t.selectorExists('.b-cal-eventlist-event-time:contains(*time*)');
    });

    // https://github.com/bryntum/support/issues/4451
    t.it('Should handle removal of resources', async t => {
        calendar = await t.getCalendar({
            mode      : 'agenda',
            resources : [{ id : 1, name : 'Phil' }]
        });

        calendar.resourceStore.remove(1);

        t.pass('No crash');
    });

    // https://github.com/bryntum/support/issues/5044
    t.it('offsetStartsBeforeEvents should offset events which start before the cell\'s date', async t => {
        eventStore = new EventStore({
            data : t.getHackathonData().events.rows
        });

        resourceStore = new ResourceStore({
            data : t.getHackathonData().resources.rows
        });

        agendaView = await getAgendaView({
            height : 510,
            width  : 700,
            eventStore,
            resourceStore
        });

        await t.waitForSelector('.b-cal-agenda-grid-row[data-id="2019-10-14"] .b-cal-agenda-date');

        // Events from previous cells have negative start margin by default
        t.query('.b-cal-event-wrap.b-continues-past').forEach(e => {
            t.isLess(parseInt(DomHelper.getStyleValue(e, 'margin-inline-start')), -7);
        });

        // Don't want the offset now
        agendaView.offsetStartsBeforeEvents = false;

        // Events from previous cells have zero start margin
        t.query('.b-cal-event-wrap.b-continues-past').forEach(e => {
            t.is(parseInt(DomHelper.getStyleValue(e, 'margin-inline-start')), 0);
        });
    });

    // https://github.com/bryntum/support/issues/5495
    t.it('Should handle custom event renderer', async t => {
        calendar = await t.getCalendar({
            sidebar : false,
            date    : '2022-10-12',
            modes   : {
                day    : false,
                week   : false,
                month  : false,
                year   : false,
                agenda : {
                    eventRenderer({ eventRecord, resourceRecord, renderData }) {
                        renderData.style.height = '200px';
                        renderData.style.width = '200px';
                        renderData.style.backgroundColor = 'red';
                    }
                }
            },
            resources : [{ id : 1, name : 'Phil' }],
            events    : [{
                id         : 1,
                name       : 'Phil\'s Event',
                resourceId : 1,
                startDate  : '2022-10-12T10:00',
                endDate    : '2022-10-12T11:00'
            }]
        });

        const el = await t.waitForSelector('.b-grid-row.b-cal-agenda-grid-row');

        // Row must be expanded to accommodate big render data
        t.isApproxPx(el[0].offsetHeight, 243, 5);
    });

    t.it('dblclick on empty AgendaView should be OK', async t => {
        calendar = await t.getCalendar({
            height  : 500,
            width   : 700,
            sidebar : false,
            date    : new Date(2019, 9, 17),
            events  : [],
            modes   : {
                year  : null,
                month : null,
                week  : null,
                day   : null
            }
        });

        await t.doubleClick('.b-grid-subgrid');

        t.pass('no Error thrown');
    });

    // https://github.com/bryntum/support/issues/5934
    t.it('Time navigation to empty range should clear AgendaView', async t => {
        eventStore = new EventStore({
            data : t.getHackathonData().events.rows
        });

        resourceStore = new ResourceStore({
            data : t.getHackathonData().resources.rows
        });

        calendar = await t.getCalendar({
            eventStore,
            resourceStore,
            height  : 500,
            width   : 700,
            sidebar : false,
            date    : new Date(2019, 9, 17),
            modes   : {
                year  : null,
                month : null,
                week  : null,
                day   : null
            }
        });

        await t.click('button[data-ref="nextButton"]');

        // Grid refreshes to be empty
        await t.waitFor(() => calendar.activeView.rowManager.rowCount === 0);
    });

    t.it('Hiding non working days should update row count and count in title', async t => {
        eventStore = new EventStore({
            data : t.getHackathonData().events.rows
        });

        resourceStore = new ResourceStore({
            data : t.getHackathonData().resources.rows
        });

        calendar = await t.getCalendar({
            eventStore,
            resourceStore,
            height  : 500,
            width   : 700,
            sidebar : false,
            date    : new Date(2019, 9, 17),
            modes   : {
                year  : null,
                month : null,
                week  : null,
                day   : null
            }
        });
        const agendaView = calendar.activeView;

        t.is(agendaView.store.count, 8);
        t.selectorExists('.b-calendar-view-desc-text:contains(2019. 32 events)');

        agendaView.hideNonWorkingDays = true;

        // Wait for refresh of title and view
        await t.waitFor(() => agendaView.store.count === 6);
        t.waitForSelector('.b-calendar-view-desc-text:contains(2019. 24 events)');
    });

    t.it('Should be able to reconfigure listRangeMenu', async t => {
        calendar = await t.getCalendar({
            date  : '2019-12-01',
            eventStore,
            modes : {
                day    : null,
                week   : null,
                month  : null,
                year   : null,
                agenda : {
                    listRangeMenu : {
                        items : {
                            listRangeDecadeItem : null
                        }
                    }
                }
            }
        });
        const agenda = calendar.activeView;

        await t.click('.b-cal-widget-settings-button');

        await t.waitForSelector(`.b-menu [data-group="${agenda.id}-range-items"]`);

        t.selectorExists('.b-menuitem[data-ref="listRangeDayItem"]');
        t.selectorExists('.b-menuitem[data-ref="listRangeWeekItem"]');
        t.selectorExists('.b-menuitem[data-ref="listRangeMonthItem"]');
        t.selectorExists('.b-menuitem[data-ref="listRangeYearItem"]');
        t.selectorNotExists('.b-menuitem[data-ref="listRangeDecadeItem"]');
    });
});
