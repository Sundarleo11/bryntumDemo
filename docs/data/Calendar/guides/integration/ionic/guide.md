<h1 class="title-with-image"><img src="Core/logo/ionic.svg" alt="Bryntum Calendar supports Ionic"/>
Using Bryntum Calendar with Ionic</h1>

## Bryntum NPM repository access

Please refer to this [guide for Bryntum NPM repository access](#Calendar/guides/npm-repository.md).

## Ionic with Angular

The guide below references to using Ionic Framework for building application based on Angular.

## Bryntum Calendar

The Bryntum Calendar itself is framework agnostic, but it ships with demos and wrappers to simplify its use with popular
frameworks such as Ionic. The purpose of this guide is to give you a basic introduction on how to use Bryntum Calendar
with Ionic.

## View online demos

Bryntum Calendar Ionic demos can be viewed in our
[online example browser](https://bryntum.com/products/calendar/examples/#Integration).

## Build and run local demos

Download distribution zip with demos according to this [guide](#Calendar/guides/download.md#distribution).

Ionic demos are located in **examples/frameworks/ionic** folder inside
distribution zip.

Each demo contains bundled `README.md` file in demo folder with build and run instructions.

To view and run an example locally in development mode, you can use the following commands:

```shell
$ npm install
$ npm run start
```

That starts a local server accessible at [http://localhost:4200"](http://localhost:4200). If
you modify the example code while running it locally it is automatically rebuilt and updated in the browser allowing you
to see your changes immediately.

The production version of an example, or your application, is built by running:

```shell
$ npm install
$ npm run build
```

The built version is then located in `dist` sub-folder which contains the compiled code that can be deployed to your
production server.

## Install Ionic framework

Installation and API documentation can be found at the Ionic project's page https://ionicframework.com/.

Install the Ionic CLI globally with npm:

```shell
$ npm install -g ionic
```

The -g means it is a global install. For Windows it is recommended to open an Admin command prompt. For Mac/Linux, run
the command with sudo.

## Create Ionic app

Create an App:

```shell
$ ionic start IonicApp blank
```

`blank` is a common starter template for the app.

Run the App:

```shell
$ cd IonicApp
$ ionic serve
```

## TypeScript and Typings

Bryntum bundles ship with typings for the classes for usage in TypeScript applications. You can find `calendar*.d.ts`
files in the `build` folder inside the distribution zip package. The definitions also contain a special config type
which can be passed to the class constructor.

The config specific types are also accepted by multiple other properties and functions, for example
the [Store.data](#Core/data/Store#config-data) config of the `Store` which accepts type `Partial<ModelConfig>[]`.

Sample code for tree store creation with `ModelConfig` and `StoreConfig` classes:

```typescript
import { Store, StoreConfig, ModelConfig } from '@bryntum/calendar';

const storeConfig: Partial<StoreConfig> = {
    tree : true,
    data : [
        {
            id       : 1,
            children : [
                {
                    id : 2
                }
            ] as Partial<ModelConfig>[]
        }
    ] as Partial<ModelConfig>[]
};

new Store(storeConfig);
```

## Wrappers

The Ionic wrappers encapsulate Bryntum Calendar and other Bryntum widgets in Ionic components that expose configuration
options, properties, features and events. The wrapped all Bryntum UI components so they can be used the usual Ionic way.

To use native API package classes with wrappers import them from `@bryntum/calendar`.

```typescript
import { Calendar } from '@bryntum/calendar';
```

### Installing the wrappers package

The wrappers are distributed as a separate package `@bryntum/calendar-angular` that is installed according to the used
package manager. Please refer to this [guide for Bryntum NPM repository access](#Calendar/guides/npm-repository.md).

### Wrappers Overview

Wrappers are Ionic components which provide full access to Bryntum API widget class configs, properties, events and
features. Each Wrapper has it's own HTML tag which can be used in ionic templates. This is the list of available
wrappers for Bryntum Calendar Ionic package:

| Wrapper tag name | Wrapper component name | API widget reference |
|------------------|------------------------|----------------------|
| &lt;bryntum-button/&gt; | BryntumButtonComponent | [Button](#Core/widget/Button) |
| &lt;bryntum-button-group/&gt; | BryntumButtonGroupComponent | [ButtonGroup](#Core/widget/ButtonGroup) |
| &lt;bryntum-calendar/&gt; | BryntumCalendarComponent | [Calendar](#Calendar/view/Calendar) |
| &lt;bryntum-calendar-date-picker/&gt; | BryntumCalendarDatePickerComponent | [CalendarDatePicker](#Calendar/widget/CalendarDatePicker) |
| &lt;bryntum-checkbox/&gt; | BryntumCheckboxComponent | [Checkbox](#Core/widget/Checkbox) |
| &lt;bryntum-chip-view/&gt; | BryntumChipViewComponent | [ChipView](#Core/widget/ChipView) |
| &lt;bryntum-combo/&gt; | BryntumComboComponent | [Combo](#Core/widget/Combo) |
| &lt;bryntum-container/&gt; | BryntumContainerComponent | [Container](#Core/widget/Container) |
| &lt;bryntum-date-field/&gt; | BryntumDateFieldComponent | [DateField](#Core/widget/DateField) |
| &lt;bryntum-date-picker/&gt; | BryntumDatePickerComponent | [DatePicker](#Core/widget/DatePicker) |
| &lt;bryntum-date-time-field/&gt; | BryntumDateTimeFieldComponent | [DateTimeField](#Core/widget/DateTimeField) |
| &lt;bryntum-display-field/&gt; | BryntumDisplayFieldComponent | [DisplayField](#Core/widget/DisplayField) |
| &lt;bryntum-duration-field/&gt; | BryntumDurationFieldComponent | [DurationField](#Core/widget/DurationField) |
| &lt;bryntum-field-filter-picker/&gt; | BryntumFieldFilterPickerComponent | [FieldFilterPicker](#Core/widget/FieldFilterPicker) |
| &lt;bryntum-field-filter-picker-group/&gt; | BryntumFieldFilterPickerGroupComponent | [FieldFilterPickerGroup](#Core/widget/FieldFilterPickerGroup) |
| &lt;bryntum-file-field/&gt; | BryntumFileFieldComponent | [FileField](#Core/widget/FileField) |
| &lt;bryntum-file-picker/&gt; | BryntumFilePickerComponent | [FilePicker](#Core/widget/FilePicker) |
| &lt;bryntum-filter-field/&gt; | BryntumFilterFieldComponent | [FilterField](#Core/widget/FilterField) |
| &lt;bryntum-grid/&gt; | BryntumGridComponent | [Grid](#Grid/view/Grid) |
| &lt;bryntum-grid-base/&gt; | BryntumGridBaseComponent | [GridBase](#Grid/view/GridBase) |
| &lt;bryntum-grid-field-filter-picker/&gt; | BryntumGridFieldFilterPickerComponent | [GridFieldFilterPicker](#Grid/widget/GridFieldFilterPicker) |
| &lt;bryntum-grid-field-filter-picker-group/&gt; | BryntumGridFieldFilterPickerGroupComponent | [GridFieldFilterPickerGroup](#Grid/widget/GridFieldFilterPickerGroup) |
| &lt;bryntum-list/&gt; | BryntumListComponent | [List](#Core/widget/List) |
| &lt;bryntum-menu/&gt; | BryntumMenuComponent | [Menu](#Core/widget/Menu) |
| &lt;bryntum-mode-selector/&gt; | BryntumModeSelectorComponent | [ModeSelector](#Calendar/widget/ModeSelector) |
| &lt;bryntum-number-field/&gt; | BryntumNumberFieldComponent | [NumberField](#Core/widget/NumberField) |
| &lt;bryntum-paging-toolbar/&gt; | BryntumPagingToolbarComponent | [PagingToolbar](#Core/widget/PagingToolbar) |
| &lt;bryntum-panel/&gt; | BryntumPanelComponent | [Panel](#Core/widget/Panel) |
| &lt;bryntum-password-field/&gt; | BryntumPasswordFieldComponent | [PasswordField](#Core/widget/PasswordField) |
| &lt;bryntum-project-combo/&gt; | BryntumProjectComboComponent | [ProjectCombo](#Scheduler/widget/ProjectCombo) |
| &lt;bryntum-radio/&gt; | BryntumRadioComponent | [Radio](#Core/widget/Radio) |
| &lt;bryntum-radio-group/&gt; | BryntumRadioGroupComponent | [RadioGroup](#Core/widget/RadioGroup) |
| &lt;bryntum-resource-combo/&gt; | BryntumResourceComboComponent | [ResourceCombo](#Scheduler/widget/ResourceCombo) |
| &lt;bryntum-resource-filter/&gt; | BryntumResourceFilterComponent | [ResourceFilter](#Scheduler/widget/ResourceFilter) |
| &lt;bryntum-resource-view/&gt; | BryntumResourceViewComponent | [ResourceView](#Calendar/widget/ResourceView) |
| &lt;bryntum-scheduler-date-picker/&gt; | BryntumSchedulerDatePickerComponent | [SchedulerDatePicker](#Scheduler/widget/SchedulerDatePicker) |
| &lt;bryntum-sidebar/&gt; | BryntumSidebarComponent | [Sidebar](#Calendar/widget/Sidebar) |
| &lt;bryntum-slider/&gt; | BryntumSliderComponent | [Slider](#Core/widget/Slider) |
| &lt;bryntum-slide-toggle/&gt; | BryntumSlideToggleComponent | [SlideToggle](#Core/widget/SlideToggle) |
| &lt;bryntum-splitter/&gt; | BryntumSplitterComponent | [Splitter](#Core/widget/Splitter) |
| &lt;bryntum-tab-panel/&gt; | BryntumTabPanelComponent | [TabPanel](#Core/widget/TabPanel) |
| &lt;bryntum-text-area-field/&gt; | BryntumTextAreaFieldComponent | [TextAreaField](#Core/widget/TextAreaField) |
| &lt;bryntum-text-area-picker-field/&gt; | BryntumTextAreaPickerFieldComponent | [TextAreaPickerField](#Core/widget/TextAreaPickerField) |
| &lt;bryntum-text-field/&gt; | BryntumTextFieldComponent | [TextField](#Core/widget/TextField) |
| &lt;bryntum-time-field/&gt; | BryntumTimeFieldComponent | [TimeField](#Core/widget/TimeField) |
| &lt;bryntum-time-picker/&gt; | BryntumTimePickerComponent | [TimePicker](#Core/widget/TimePicker) |
| &lt;bryntum-toolbar/&gt; | BryntumToolbarComponent | [Toolbar](#Core/widget/Toolbar) |
| &lt;bryntum-tree-combo/&gt; | BryntumTreeComboComponent | [TreeCombo](#Grid/widget/TreeCombo) |
| &lt;bryntum-undo-redo/&gt; | BryntumUndoRedoComponent | [UndoRedo](#Scheduler/widget/UndoRedo) |
| &lt;bryntum-view-preset-combo/&gt; | BryntumViewPresetComboComponent | [ViewPresetCombo](#Scheduler/widget/ViewPresetCombo) |
| &lt;bryntum-widget/&gt; | BryntumWidgetComponent | [Widget](#Core/widget/Widget) |
| &lt;bryntum-year-picker/&gt; | BryntumYearPickerComponent | [YearPicker](#Core/widget/YearPicker) |

### Import BryntumCalendarModule

Add the following code to your `app.module.ts`:

```typescript
import { BryntumCalendarModule } from '@bryntum/calendar-angular'

@NgModule({
    imports : [
        BryntumCalendarModule
    ]
})
```

Then you will be able to use the custom tag like `<bryntum-calendar>` and others listed above the same way as you use
your application components. Our examples are built this way so you can refer to them to see how to use the tag and how
to pass parameters.

### Using the wrapper in your application

Now you can use the the component defined in the wrapper in your application:

```html
<bryntum-calendar
    #calendar
    tooltip="My cool Bryntum Calendar component" ,
    (onCatchAll)="onCalendarEvents($event)"
// other configs, properties, events or features
></bryntum-calendar>
```

You will also need to import CSS file for Bryntum Calendar. We recommend to do it in `src/styles.scss`:

```typescript
@import "@bryntum/calendar/calendar.material.css";

// other application-global styling
```

### Embedding widgets inside wrapper

Wrappers are designed to allow using Bryntum widgets as Angular components, but they themselves cannot contain other
Bryntum wrappers inside their tag. To embed Bryntum widgets inside a wrapper you should instead use the available
configuration options for the wrapper's widget. Please note that not all widgets may contain inner widgets, please refer
to the API docs to check for valid configuration options.

This example shows how to use a `Toolbar` widget inside the wrapper for Bryntum Calendar:

Sample code for `app.component.ts`:

```typescript
export class AppComponent {

    // Toolbar (tbar) config
    tbarConfig = {
        items : [
            {
                type : 'button',
                text : 'My button'
            }
        ]
    }

}
```

Sample code for `app.component.html`:

```html
<bryntum-calendar
    #calendar
    tbar="tbarConfig",
></bryntum-calendar>
```

## Configs, properties and events

All Bryntum Ionic Wrappers support the full set of the public configs, properties and events of a component.

## Listening to Bryntum Calendar events

The Bryntum Calendar events are passed up to the Angular wrapper which makes it possible to listen to them the standard Angular
way. 

The following code demonstrates listening to the `eventClick` event:

Sample code for `app.component.ts`:

```typescript
export class AppComponent implements AfterViewInit {

    onCalendarEventClick(e : {[key:string] : any}) : void {
        console.log('onEventClick', e);
    }
    // etc.
```

Sample code for `app.component.html`:

```html
<bryntum-calendar
    #calendar
    (onEventClick) = "onCalendarEventClick($event)"
```

Please note that we prefix the capitalized event name with the `on` keyword and that we pass `$event` as
the argument to the listener.

Another valid method is to pass a [`listeners`](https://bryntum.com/products/calendar/docs/api/Core/mixin/Events#config-listeners)
config object to the Angular wrapper. For example:

Sample code for `app.config.ts`:

```typescript
export const calendarConfig = {
    listeners : {
        eventClick(e) {
            console.log('eventClick', e);
        }
    },
    // etc
```

and `app.component.html`:

```html
<bryntum-calendar
    #calendar
    [listeners] = "calendarConfig.listeners"
```

Please note that we use unprefixed event names in this case.

### Using dataChange event to synchronize data

Bryntum Calendar keeps all data in its stores which are automatically synchronized with the UI and the user actions.
Nevertheless, it is sometimes necessary for the rest of the application to be informed about data changes. For that
it is easiest to use `dataChange` event.

`app.component.html`:

```html
<bryntum-calendar
    #calendar
    (onDataChange) = "syncData($event)"
```

`app.component.ts`:

```typescript
export class AppComponent {

    syncData({ store, action, records } : { store : Store; action : String; records : Model[]}) : void {
        console.log(`${store.id} changed. The action was: ${action}. Changed records: `, records);
        // Your sync data logic comes here
    }

    // ...
}
```

## Features

Features are suffixed with `Feature` and act as both configs and properties for `BryntumCalendarComponent`. They are
mapped to the corresponding API features of the Bryntum Calendar `instance`.

This is a list of all `BryntumCalendarComponent` features:

|Wrapper feature name|API feature reference |
|--------------------|----------------------|
| dragFeature | [CalendarDrag](#Calendar/feature/CalendarDrag) |
| eventEditFeature | [EventEdit](#Calendar/feature/EventEdit) |
| eventMenuFeature | [EventMenu](#Calendar/feature/EventMenu) |
| eventTooltipFeature | [EventTooltip](#Calendar/feature/EventTooltip) |
| externalEventSourceFeature | [ExternalEventSource](#Calendar/feature/ExternalEventSource) |
| loadOnDemandFeature | [LoadOnDemand](#Calendar/feature/LoadOnDemand) |
| printFeature | [Print](#Calendar/feature/print/Print) |
| scheduleMenuFeature | [ScheduleMenu](#Calendar/feature/ScheduleMenu) |
| timeRangesFeature | [TimeRanges](#Calendar/feature/TimeRanges) |
| weekExpanderFeature | [WeekExpander](#Calendar/feature/WeekExpander) |

## Bryntum Calendar API instance

It is important to know that the Ionic `BryntumCalendarComponent` is **not** the native Bryntum Calendar instance, it
is a wrapper or an interface between the Ionic application and the Bryntum Calendar itself.

All available configs, properties and features are propagated from the wrapper down to the underlying Bryntum Calendar
instance, but there might be the situations when you want to access the Bryntum Calendar directly. That is fully valid
approach and you are free to do it.

### Accessing the Bryntum Calendar instance

If you need to access Bryntum Calendar functionality not exposed by the wrapper, you can access the Bryntum Calendar instance
directly. Within the wrapper it is available under the `instance` property.

This simple example shows how you could use it:

app.component.html

```html
<ion-header>
...
</ion-header>

<ion-content>
    <calendar
        #calendar
        tooltip = "My cool Bryntum Calendar component"
    ></calendar>
</ion-content>
```

Sample code for `app.component.ts`:

```typescript
import { BryntumCalendarComponent } from '@bryntum/calendar-angular';
import { Calendar } from '@bryntum/calendar';

export class AppComponent implements AfterViewInit {

    @ViewChild(BryntumCalendarComponent, { static : false }) calendarComponent: BryntumCalendarComponent;

    private calendar : Calendar;

    @ViewChild(BryntumCalendarComponent, { static : false }) calendarComponent: BryntumCalendarComponent;

    ngAfterViewInit(): void {
        // store Bryntum Calendar isntance
        this.calendar = this.calendarComponent.instance;
    }
}
```

When accessing `instance` directly, use wrapper's API widget reference docs from the list above to get available configs
and properties.

## Troubleshooting

Please refer to this [Troubleshooting guide](#Calendar/guides/integration/ionic/troubleshooting.md).

## References

* Config options, features, events and methods [Bryntum Calendar API docs](#api)
* Visit [Ionic Framework Homepage](https://ionicframework.com)
* Visit [Angular Framework Homepage](https://angular.io)
* Post your questions to [Bryntum Support Forum](https://forum.bryntum.com/)
* [Contact us](https://bryntum.com/contact/)


<p class="last-modified">Last modified on 2023-05-26 9:24:35</p>