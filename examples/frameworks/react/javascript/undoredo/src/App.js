/**
 * Application
 */
import React from 'react';

import { BryntumCalendar, BryntumDemoHeader, BryntumThemeCombo } from '@bryntum/calendar-react';

import { calendarConfig } from './AppConfig';

import './App.scss';

function App() {
    return (
        <>
            {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
            <BryntumDemoHeader
                children={<BryntumThemeCombo />}
            />
            <BryntumCalendar
                {...calendarConfig}
            />
        </>
    );
}

export default App;
