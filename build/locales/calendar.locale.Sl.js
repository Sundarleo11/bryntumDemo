/*!
 *
 * Bryntum Calendar 5.3.6 (TRIAL VERSION)
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(s,i){var r=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],i);else if(typeof module=="object"&&module.exports)module.exports=i();else{var c=i(),v=r?exports:s;for(var p in c)v[p]=c[p]}})(typeof self<"u"?self:void 0,()=>{var s={},i={exports:s},r=Object.defineProperty,c=Object.getOwnPropertyDescriptor,v=Object.getOwnPropertyNames,p=Object.prototype.hasOwnProperty,u=(e,a,o)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,k=(e,a)=>{for(var o in a)r(e,o,{get:a[o],enumerable:!0})},j=(e,a,o,t)=>{if(a&&typeof a=="object"||typeof a=="function")for(let n of v(a))!p.call(e,n)&&n!==o&&r(e,n,{get:()=>a[n],enumerable:!(t=c(a,n))||t.enumerable});return e},g=e=>j(r({},"__esModule",{value:!0}),e),b=(e,a,o)=>(u(e,typeof a!="symbol"?a+"":a,o),o),m={};k(m,{default:()=>P}),i.exports=g(m);var d=class{static mergeLocales(...e){let a={};return e.forEach(o=>{Object.keys(o).forEach(t=>{typeof o[t]=="object"?a[t]={...a[t],...o[t]}:a[t]=o[t]})}),a}static trimLocale(e,a){let o=(t,n)=>{e[t]&&(n?e[t][n]&&delete e[t][n]:delete e[t])};Object.keys(a).forEach(t=>{Object.keys(a[t]).length>0?Object.keys(a[t]).forEach(n=>o(t,n)):o(t)})}static normalizeLocale(e,a){if(!e)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof e=="string"){if(!a)throw new Error('"config" parameter can not be empty');a.locale?a.name=e||a.name:a.localeName=e}else a=e;let o={};if(a.name||a.locale)o=Object.assign({localeName:a.name},a.locale),a.desc&&(o.localeDesc=a.desc),a.code&&(o.localeCode=a.code),a.path&&(o.localePath=a.path);else{if(!a.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);o=Object.assign({},a)}for(let t of["name","desc","code","path"])o[t]&&delete o[t];if(!o.localeName)throw new Error("Locale name can not be empty");return o}static get locales(){return globalThis.bryntum.locales||{}}static set locales(e){globalThis.bryntum.locales=e}static get localeName(){return globalThis.bryntum.locale||"En"}static set localeName(e){globalThis.bryntum.locale=e||d.localeName}static get locale(){return d.localeName&&this.locales[d.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(e,a){let{locales:o}=globalThis.bryntum,t=d.normalizeLocale(e,a),{localeName:n}=t;return!o[n]||a===!0?o[n]=t:o[n]=this.mergeLocales(o[n]||{},t||{}),o[n]}},l=d;b(l,"skipLocaleIntegrityCheck",!1),globalThis.bryntum=globalThis.bryntum||{},globalThis.bryntum.locales=globalThis.bryntum.locales||{},l._$name="LocaleHelper";var y={localeName:"Sl",localeDesc:"Slovensko",localeCode:"sl",Object:{Yes:"Da",No:"Ne",Cancel:"Prekliči",Ok:"OK",Week:"Teden"},Combo:{noResults:"Ni rezultatov",recordNotCommitted:"Zapisa ni bilo mogoče dodati",addNewValue:e=>` Dodajte ${e}`},FilePicker:{file:"Datoteka"},Field:{badInput:"Neveljavna vrednost polja",patternMismatch:"Vrednost se mora ujemati z določenim vzorcem",rangeOverflow:e=>` Vrednost mora biti manjša ali enaka ${e.max}`,rangeUnderflow:e=>` Vrednost mora biti večja ali enaka ${e.min}`,stepMismatch:"Vrednost mora ustrezati koraku",tooLong:"Vrednost naj bo krajša",tooShort:"Vrednost naj bo daljša",typeMismatch:"Vrednost mora biti v posebni obliki",valueMissing:"To polje je obvezno",invalidValue:"Neveljavna vrednost polja",minimumValueViolation:"Kršitev najmanjše vrednosti",maximumValueViolation:"Kršitev največje vrednosti",fieldRequired:"To polje je obvezno",validateFilter:"Vrednost mora biti izbrana s seznama"},DateField:{invalidDate:"Neveljaven vnos datuma"},DatePicker:{gotoPrevYear:"Pojdi na prejšnje leto",gotoPrevMonth:"Pojdi na prejšnji mesec",gotoNextMonth:"Pojdi na naslednji mesec",gotoNextYear:"Pojdi na naslednje leto"},NumberFormat:{locale:"sl",currency:"EUR"},DurationField:{invalidUnit:"Neveljavna enota"},TimeField:{invalidTime:"Neveljaven vnos časa"},TimePicker:{hour:"Ura",minute:"Minuta",second:"Drugi"},List:{loading:"Nalaganje..."},GridBase:{loadMask:"Nalaganje...",syncMask:"Shranjevanje sprememb, prosim počakajte ..."},PagingToolbar:{firstPage:"Pojdi na prvo stran",prevPage:"Pojdi na prejšnjo stran",page:"Stran",nextPage:"Pojdi na naslednjo stran",lastPage:"Pojdi na zadnjo stran",reload:"Znova naloži trenutno stran",noRecords:"Ni zapisov za prikaz",pageCountTemplate:e=>`od ${e.lastPage}`,summaryTemplate:e=>` Prikaz zapisov ${e.start} - ${e.end} od ${e.allCount}`},PanelCollapser:{Collapse:"Strni",Expand:"Razširi"},Popup:{close:"Zapri pojavno okno"},UndoRedo:{Undo:"Razveljavi",Redo:"Ponovno uveljav",UndoLastAction:"Razveljavi zadnje dejanje",RedoLastAction:"Ponovi zadnje razveljavljeno dejanje",NoActions:"V čakalni vrsti za razveljavitev ni elementov"},FieldFilterPicker:{equals:"enako",doesNotEqual:"ni enako",isEmpty:"je prazno",isNotEmpty:"ni prazno",contains:"vsebuje",doesNotContain:"ne vsebuje",startsWith:"začne se z",endsWith:"konča se z",isOneOf:"je eden od",isNotOneOf:"ni eden od",isGreaterThan:"je večje kot",isLessThan:"je manjše kot",isGreaterThanOrEqualTo:"je večje ali enako",isLessThanOrEqualTo:"je manjše ali enako",isBetween:"je vmes",isNotBetween:"ni vmes",isBefore:"je pred",isAfter:"je potem",isToday:"je danes",isTomorrow:"je jutri",isYesterday:"je včeraj",isThisWeek:"je ta teden",isNextWeek:"je naslednji teden",isLastWeek:"je prejšnji teden",isThisMonth:"je ta mesec",isNextMonth:"je naslednji mesec",isLastMonth:"je prejšnji mesec",isThisYear:"je to leto",isNextYear:"je naslednje leto",isLastYear:"je prejšnje leto",isYearToDate:"je leto do danes",isTrue:"je res",isFalse:"je napačno",selectAProperty:"Izberite lastnost",selectAnOperator:"Izberite operaterja",caseSensitive:"Razlikuje med velikimi in malimi črkami",and:"in",dateFormat:"D/M/YY",selectOneOrMoreValues:"Izberite eno ali več vrednosti",enterAValue:"Vnesite vrednost",enterANumber:"Vnesite številko",selectADate:"Izberite datum"},FieldFilterPickerGroup:{addFilter:"Dodajte filter"},DateHelper:{locale:"sl",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"milisekunda",plural:"milisekunde",abbrev:"ms"},{single:"sekunda",plural:"sekunde",abbrev:"s"},{single:"minuta",plural:"minute",abbrev:"min"},{single:"ura",plural:"ure",abbrev:"ur"},{single:"dan",plural:"dnevi",abbrev:"d"},{single:"teden",plural:"tedni",abbrev:"t"},{single:"mesec",plural:"meseci",abbrev:"m"},{single:"četrtletje",plural:"četrtletja",abbrev:"četrt"},{single:"leto",plural:"leta",abbrev:"l"},{single:"desetletje",plural:"desetletja",abbrev:"des"}],unitAbbreviations:[["ms"],["s","sek"],["m","min"],["ur","ur"],["d"],["t","t"],["m","m","m"],["četrt","četrt","četrt"],["l","l"],["des"]],parsers:{L:"D. M. YYYY.",LT:"HH:mm ",LTS:"HH:mm:ss A"},ordinalSuffix:e=>e+"."}},T=l.publishLocale(y),h=new String,z={localeName:"Sl",localeDesc:"Slovensko",localeCode:"sl",ColumnPicker:{column:"Stolpec",columnsMenu:"Stolpci",hideColumn:"Skrij stolpec",hideColumnShort:"Skrij",newColumns:"Novi stolpci"},Filter:{applyFilter:"Uporabi filter",filter:"Filter",editFilter:"Uredi filter",on:"Vklopljeno",before:"Prej",after:"Po",equals:"Enako",lessThan:"Manj kot",moreThan:"Več kot",removeFilter:"Odstrani filter",disableFilter:"Onemogoči filter"},FilterBar:{enableFilterBar:"Pokaži vrstico s filtri",disableFilterBar:"Skrij vrstico s filtri"},Group:{group:"Skupina",groupAscending:"Skupina narašča",groupDescending:"Skupina pada",groupAscendingShort:"Naraščajoče",groupDescendingShort:"Padajoče",stopGrouping:"Ustavi združevanje",stopGroupingShort:"Ustavi"},HeaderMenu:{moveBefore:e=>` Premakni pred"${e}"`,moveAfter:e=>` Premakni za "${e}"`,collapseColumn:"Strni stolpec",expandColumn:"Razširi stolpec"},ColumnRename:{rename:"Preimenuj"},MergeCells:{mergeCells:"Združi celice",menuTooltip:"Združi celice z isto vrednostjo, ko so razvrščene po tem stolpcu"},Search:{searchForValue:"Išči vrednost"},Sort:{sort:"Razvrsti",sortAscending:"Razvrsti naraščajoče",sortDescending:"Razvrsti padajoče",multiSort:"Več razvrstitev",removeSorter:"Odstrani razvrščevalnik",addSortAscending:"Dodaj naraščajoči razvrščevalnik",addSortDescending:"Dodaj padajoči razvrščevalnik",toggleSortAscending:"Spremeni v naraščajoče",toggleSortDescending:"Spremeni v padajoče",sortAscendingShort:"Naraščajoče",sortDescendingShort:"Padajoče",removeSorterShort:"Odstrani",addSortAscendingShort:"+Naraščajoče",addSortDescendingShort:"+Padajoče"},Column:{columnLabel:e=>`${e.text?`${e.text} stolpec. `:""}PRESLEDNICA za kontekstni meni${e.sortable?", VNESI za razvrstitev":""}`,cellLabel:h},Checkbox:{toggleRowSelect:"Preklop izbire vrstice",toggleSelection:"Preklopi izbor celotnega nabora podatkov"},RatingColumn:{cellLabel:e=>{var a;return`${e.text?e.text:""} ${(a=e.location)!=null&&a.record?`ocena : ${e.location.record[e.field]||0}`:""}`}},GridBase:{loadFailedMessage:"Nalaganje podatkov ni uspelo!",syncFailedMessage:"Sinhronizacija podatkov ni uspela!",unspecifiedFailure:"Nedoločena napaka",networkFailure:"Napaka omrežja",parseFailure:"Razčlenitev odgovora strežnika ni uspela",serverResponse:"Odziv strežnika:",noRows:"Ni zapisov za prikaz",moveColumnLeft:"Premakni se v levi odsek",moveColumnRight:"Premakni se v desni odsek",moveColumnTo:e=>` Premakni stolpec v ${e}`},CellMenu:{removeRow:"Izbriši"},RowCopyPaste:{copyRecord:"Kopiraj",cutRecord:"Izreži",pasteRecord:"Prilepi",rows:"vrstice",row:"vrstica"},CellCopyPaste:{copy:"Kopiraj",cut:"Izreži",paste:"Prilepi"},PdfExport:{"Waiting for response from server":"Čakanje na odgovor strežnika ...","Export failed":"Izvoz ni uspel","Server error":"Napaka strežnika","Generating pages":"Ustvarjanje strani ...","Click to abort":"Prekliči"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Izvozi nastavitve",export:"Izvozi",exporterType:"Nadzor številčenja strani",cancel:"Prekliči",fileFormat:"Oblika datoteke",rows:"Vrstice",alignRows:"Poravnaj vrstice",columns:"Stolpci",paperFormat:"Format papirja",orientation:"Orientacija",repeatHeader:"Ponovi glavo"},ExportRowsCombo:{all:"Vse vrstice",visible:"Vidne vrstice"},ExportOrientationCombo:{portrait:"Portret",landscape:"Pokrajina"},SinglePageExporter:{singlepage:"Ena stran"},MultiPageExporter:{multipage:"Več strani",exportingPage:({currentPage:e,totalPages:a})=>`Izvažanje strani ${e}/${a}`},MultiPageVerticalExporter:{multipagevertical:"Več strani (navpično)",exportingPage:({currentPage:e,totalPages:a})=>`Izvažanje strani ${e}/${a}`},RowExpander:{loading:"Nalaganje",expand:"Razširi",collapse:"Strni"}},E=l.publishLocale(z),S={localeName:"Sl",localeDesc:"Slovensko",localeCode:"sl",Object:{newEvent:"Nov dogodek"},ResourceInfoColumn:{eventCountText:e=>e+" dogod"+(e!==1?"ke":"ek")},Dependencies:{from:"Od",to:"Do",valid:"Veljavno",invalid:"Neveljavno"},DependencyType:{SS:"ZZ",SF:"ZK",FS:"KZ",FF:"KK",StartToStart:"Od začetka do začetka",StartToEnd:"Od začetka do konca",EndToStart:"Od konca do začetka",EndToEnd:"Od konca do konca",short:["SS","SF","FS","FF"],long:["Od začetka do začetka","Od začetka do konca","Od konca do začetka","Od konca do konca"]},DependencyEdit:{From:"Od",To:"Do",Type:"Vrsta",Lag:"Zaostajanje","Edit dependency":"Uredi odvisnost",Save:"Shrani",Delete:"Izbriši",Cancel:"Prekliči",StartToStart:"Od začetka do začetka",StartToEnd:"Od začetka do konca",EndToStart:"Od konca do začetka",EndToEnd:"Od konca do konca"},EventEdit:{Name:"Ime",Resource:"Vir",Start:"Začetek",End:"Konec",Save:"Shrani",Delete:"Izbriši",Cancel:"Prekliči","Edit event":"Uredi dogodek",Repeat:"Ponovi"},EventDrag:{eventOverlapsExisting:"Dogodek prekriva obstoječi dogodek za ta vir",noDropOutsideTimeline:"Dogodek ne sme biti popolnoma izpuščen izven časovnice"},SchedulerBase:{"Add event":"Dodaj dogodek","Delete event":"Izbriši dogodek","Unassign event":"Prekliči dodelitev dogodka"},TimeAxisHeaderMenu:{pickZoomLevel:"Povečaj",activeDateRange:"Datumski obseg",startText:"Začetni datum",endText:"Končni datum",todayText:"Danes"},EventCopyPaste:{copyEvent:"Kopiraj dogodek",cutEvent:"Izreži dogodek",pasteEvent:"Prilepi dogodek"},EventFilter:{filterEvents:"Filtriraj opravila",byName:"Po imenu"},TimeRanges:{showCurrentTimeLine:"Pokaži trenutno časovnico"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"Sekunde"},minuteAndHour:{topDateFormat:"ddd MM/DD, hA",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd MM/DD",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"Dan"},day:{name:"Dan/ure"},week:{name:"Teden/ure"},dayAndWeek:{displayDateFormat:"ll LST",name:"Teden/dnevi"},dayAndMonth:{name:"Mesec"},weekAndDay:{displayDateFormat:"ll LST",name:"Teden"},weekAndMonth:{name:"Tedni"},weekAndDayLetter:{name:"Tedni/delavniki"},weekDateAndMonth:{name:"Meseci/tedni"},monthAndYear:{name:"Meseci"},year:{name:"Leta"},manyYears:{name:"Več let"}},RecurrenceConfirmationPopup:{"delete-title":"Brišete dogodek","delete-all-message":"Želite izbrisati vse pojavitve tega dogodka?","delete-further-message":"Želite izbrisati to in vse prihodnje pojavitve tega dogodka ali samo trenutno pojavitev?","delete-further-btn-text":"Izbriši vse prihodnje dogodke","delete-only-this-btn-text":"Izbriši samo ta dogodek","update-title":"Spreminjate ponavljajoči se dogodek","update-all-message":"Želite spremeniti vse pojavitve tega dogodka?","update-further-message":"Želite spremeniti samo to pojavitev dogodka ali to in vse prihodnje pojavitve?","update-further-btn-text":"Vsi prihodnji dogodki","update-only-this-btn-text":"Samo ta dogodek",Yes:"Da",Cancel:"Prekliči",width:600},RecurrenceLegend:{" and ":" in ",Daily:"Dnevno","Weekly on {1}":({days:e})=>` Tedensko ob ${e}`,"Monthly on {1}":({days:e})=>`Mesečno ob ${e}`,"Yearly on {1} of {2}":({days:e,months:a})=>`Letno ob ${e} v mesecu  ${a}`,"Every {0} days":({interval:e})=>`Vsakih ${e} dni`,"Every {0} weeks on {1}":({interval:e,days:a})=>` Vsakih ${e} tednov ob ${a}`,"Every {0} months on {1}":({interval:e,days:a})=>` Vsakih ${e} mesecev ob ${a}`,"Every {0} years on {1} of {2}":({interval:e,days:a,months:o})=>` Vsakih ${e} let ob ${a} v mesecu ${o}`,position1:"prvi",position2:"drugi",position3:"tretji",position4:"četrti",position5:"peti","position-1":"zadnji",day:"dan",weekday:"delovni dan","weekend day":"dan za vikend",daysFormat:({position:e,days:a})=>`${e} ${a}`},RecurrenceEditor:{"Repeat event":"Ponovi dogodek",Cancel:"Prekliči",Save:"Shrani",Frequency:"Pogostost",Every:"Vsak",DAILYintervalUnit:"dan",WEEKLYintervalUnit:"teden",MONTHLYintervalUnit:"mesec",YEARLYintervalUnit:"leto",Each:"Vsak","On the":"Na","End repeat":"Končaj ponavljanje","time(s)":"krat"},RecurrenceDaysCombo:{day:"dan",weekday:"delovni dan","weekend day":"dan za vikend"},RecurrencePositionsCombo:{position1:"prvi",position2:"drugi",position3:"tretji",position4:"četrti",position5:"peti","position-1":"zadnji"},RecurrenceStopConditionCombo:{Never:"Nikoli",After:"Po","On date":"Na datum"},RecurrenceFrequencyCombo:{None:"Brez ponavljanja",Daily:"Dnevno",Weekly:"Tedensko",Monthly:"Mesečno",Yearly:"Letno"},RecurrenceCombo:{None:"Brez",Custom:"Po meri..."},Summary:{"Summary for":e=>` Povzetek za ${e}`},ScheduleRangeCombo:{completeview:"Celoten urnik",currentview:"Viden urnik",daterange:"Datumski obseg",completedata:"Celoten urnik (za vse dogodke)"},SchedulerExportDialog:{"Schedule range":"Obseg urnika","Export from":"Od","Export to":"Do"},ExcelExporter:{"No resource assigned":"Ni dodeljenega vira"},CrudManagerView:{serverResponseLabel:"Odziv strežnika:"},DurationColumn:{Duration:"Trajanje"}},N=l.publishLocale(S),D={localeName:"Sl",localeDesc:"Slovensko",localeCode:"sl",EventEdit:{Calendar:"Koledar","All day":"Ves dan",day:"Dan",week:"Teden",month:"Mesec",year:"Leto",decade:"Desetletje"},EventMenu:{duplicateEvent:"Podvojeni dogodek",copy:"kopiraj"},Calendar:{Today:"Danes",next:e=>`Naslednji ${e}`,previous:e=>`Prejšnji ${e}`,plusMore:e=>`+${e} več`,allDay:"Ves dan",endsOn:e=>`Konec ${e}`,weekOfYear:([e,a])=>`Teden ${a}, ${e}`,loadFail:"Nalaganje podatkov iz koledarja ni uspelo. Obrnite se na skrbnika sistema"},CalendarDrag:{holdCtrlForRecurrence:"Drži CTRL za ponavljajoči se dogodek"},CalendarMixin:{eventCount:e=>`${e||"Brez"} dogod${e&&e>1?"ka":"ek"}`},EventTip:{"Edit event":"Uredi dogodek",timeFormat:"LST"},ModeSelector:{includeWeekends:"Vključno z vikendi",weekends:"Vikendi"},AgendaView:{Agenda:"Dnevni red"},MonthView:{Month:"Mesec",monthUnit:"mesec"},WeekView:{weekUnit:"Teden"},YearView:{Year:"Leto",yearUnit:"Leto"},EventList:{List:"Seznam",Start:"Začetek",Finish:"Konec"},DayView:{Day:"Dan",dayUnit:"dan",daysUnit:"dnevi",expandAllDayRow:"Razširi celodnevni razdelek",collapseAllDayRow:"Strni celodnevni razdelek",timeFormat:"LST"},Sidebar:{"Filter events":"Filtriraj dogodke"},WeekExpander:{expandTip:"Klikni za razširitev vrstice",collapseTip:"Klikni za strnitev vrstice"}},P=l.publishLocale(D);if(typeof i.exports=="object"&&typeof s=="object"){var f=(e,a,o,t)=>{if(a&&typeof a=="object"||typeof a=="function")for(let n of Object.getOwnPropertyNames(a))!Object.prototype.hasOwnProperty.call(e,n)&&n!==o&&Object.defineProperty(e,n,{get:()=>a[n],enumerable:!(t=Object.getOwnPropertyDescriptor(a,n))||t.enumerable});return e};i.exports=f(i.exports,s)}return i.exports});
