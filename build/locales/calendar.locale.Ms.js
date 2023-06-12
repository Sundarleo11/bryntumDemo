/*!
 *
 * Bryntum Calendar 5.3.6 (TRIAL VERSION)
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(s,r){var l=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],r);else if(typeof module=="object"&&module.exports)module.exports=r();else{var d=r(),p=l?exports:s;for(var m in d)p[m]=d[m]}})(typeof self<"u"?self:void 0,()=>{var s={},r={exports:s},l=Object.defineProperty,d=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,h=(a,e,n)=>e in a?l(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,c=(a,e)=>{for(var n in e)l(a,n,{get:e[n],enumerable:!0})},k=(a,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of p(e))!m.call(a,t)&&t!==n&&l(a,t,{get:()=>e[t],enumerable:!(i=d(e,t))||i.enumerable});return a},b=a=>k(l({},"__esModule",{value:!0}),a),y=(a,e,n)=>(h(a,typeof e!="symbol"?e+"":e,n),n),g={};c(g,{default:()=>f}),r.exports=b(g);var u=class{static mergeLocales(...a){let e={};return a.forEach(n=>{Object.keys(n).forEach(i=>{typeof n[i]=="object"?e[i]={...e[i],...n[i]}:e[i]=n[i]})}),e}static trimLocale(a,e){let n=(i,t)=>{a[i]&&(t?a[i][t]&&delete a[i][t]:delete a[i])};Object.keys(e).forEach(i=>{Object.keys(e[i]).length>0?Object.keys(e[i]).forEach(t=>n(i,t)):n(i)})}static normalizeLocale(a,e){if(!a)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof a=="string"){if(!e)throw new Error('"config" parameter can not be empty');e.locale?e.name=a||e.name:e.localeName=a}else e=a;let n={};if(e.name||e.locale)n=Object.assign({localeName:e.name},e.locale),e.desc&&(n.localeDesc=e.desc),e.code&&(n.localeCode=e.code),e.path&&(n.localePath=e.path);else{if(!e.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);n=Object.assign({},e)}for(let i of["name","desc","code","path"])n[i]&&delete n[i];if(!n.localeName)throw new Error("Locale name can not be empty");return n}static get locales(){return globalThis.bryntum.locales||{}}static set locales(a){globalThis.bryntum.locales=a}static get localeName(){return globalThis.bryntum.locale||"En"}static set localeName(a){globalThis.bryntum.locale=a||u.localeName}static get locale(){return u.localeName&&this.locales[u.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(a,e){let{locales:n}=globalThis.bryntum,i=u.normalizeLocale(a,e),{localeName:t}=i;return!n[t]||e===!0?n[t]=i:n[t]=this.mergeLocales(n[t]||{},i||{}),n[t]}},o=u;y(o,"skipLocaleIntegrityCheck",!1),globalThis.bryntum=globalThis.bryntum||{},globalThis.bryntum.locales=globalThis.bryntum.locales||{},o._$name="LocaleHelper";var S={localeName:"Ms",localeDesc:"Melayu",localeCode:"ms",Object:{Yes:"Ya",No:"Tidak",Cancel:"Batal",Ok:"OK",Week:"Minggu"},Combo:{noResults:"Tiada keputusan",recordNotCommitted:"Rekod tidak boleh ditambah",addNewValue:a=>`Tambah ${a}`},FilePicker:{file:"Fail"},Field:{badInput:"Nilai medan tak sah",patternMismatch:"Nilai harus sepadan dengan corak tertentu",rangeOverflow:a=>`Nilai mestilah kurang daripada atau sama dengan ${a.max}`,rangeUnderflow:a=>`Nilai mestilah lebih besar daripada atau sama dengan ${a.max}`,stepMismatch:"Nilai harus sesuai dengan langkah",tooLong:"Nilai harus lebih pendek",tooShort:"Nilai harus lebih panjang",typeMismatch:"Nilai diperlukan dalam format khas",valueMissing:"Medan ini diperlukan",invalidValue:"Nilai medan tak sah",minimumValueViolation:"Pelanggaran nilai minimum",maximumValueViolation:"Pelanggaran nilai maksimum",fieldRequired:"Medan ini diperlukan",validateFilter:"Nilai mesti dipilih daripada senarai"},DateField:{invalidDate:"Input tarikh tidak sah"},DatePicker:{gotoPrevYear:"Pergi ke tahun sebelumnya",gotoPrevMonth:"Pergi ke bulan sebelumnya",gotoNextMonth:"Pergi ke bulan berikutnya",gotoNextYear:"Pergi ke tahun berikutnya"},NumberFormat:{locale:"ms",currency:"MYR"},DurationField:{invalidUnit:"Unit tak sah"},TimeField:{invalidTime:"Input masa tak sah"},TimePicker:{hour:"Jam",minute:"Minit",second:"Saat"},List:{loading:"Memuatkan..."},GridBase:{loadMask:"Memuatkan...",syncMask:"Menyimpan perubahan, sila tunggu..."},PagingToolbar:{firstPage:"Pergi ke halaman pertama",prevPage:"Pergi ke halaman sebelumnya",page:"Halaman",nextPage:"Pergi ke halaman berikutnya",lastPage:"Pergi ke halaman terakhir",reload:"Muat semula halaman semasa",noRecords:"Tiada rekod untuk dipaparkan",pageCountTemplate:a=>`daripada ${a.lastPage}`,summaryTemplate:a=>`Memaparkan rekod ${a.start} - ${a.end} daripada ${a.allCount}`},PanelCollapser:{Collapse:"Kecil",Expand:"Kembang"},Popup:{close:"Tutup Pop Timbul"},UndoRedo:{Undo:"Buat Asal",Redo:"Buat Semula",UndoLastAction:"Buat asal tindakan terakhir",RedoLastAction:"Buat semula tindakan buat asal yang terakhir",NoActions:"Tiada item dalam baris gilir buat asal"},FieldFilterPicker:{equals:"sama dengan",doesNotEqual:"tidak sama dengan",isEmpty:"kosong",isNotEmpty:"tidak kosong",contains:"mengandungi",doesNotContain:"tidak mengandungi",startsWith:"bermula dengan",endsWith:"berakhir dengan",isOneOf:"salah satu daripada",isNotOneOf:"bukan salah satu daripada",isGreaterThan:"lebih besar daripada",isLessThan:"kurang daripada",isGreaterThanOrEqualTo:"lebih besar daripada atau sama dengan",isLessThanOrEqualTo:"kurang daripada atau sama dengan",isBetween:"antara",isNotBetween:"tidak antara",isBefore:"sebelum",isAfter:"selepas",isToday:"hari ini",isTomorrow:"esok",isYesterday:"semalam",isThisWeek:"minggu ini",isNextWeek:"minggu depan",isLastWeek:"minggu lepas",isThisMonth:"bulan ini",isNextMonth:"bulan depan",isLastMonth:"bulan lepas",isThisYear:"tahun ini",isNextYear:"tahun depan",isLastYear:"tahun lepas",isYearToDate:"tahun hingga kini",isTrue:"betul",isFalse:"salah",selectAProperty:"Pilih properti",selectAnOperator:"Pilih operator",caseSensitive:"Sensitif huruf",and:"dan",dateFormat:"D/M/YY",selectOneOrMoreValues:"Pilih satu atau lebih nilai",enterAValue:"Masukkan nilai",enterANumber:"Masukka nombor",selectADate:"Pilih tarikh"},FieldFilterPickerGroup:{addFilter:"Tambah penapis"},DateHelper:{locale:"ms",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"milisaat",plural:"ms",abbrev:"ms"},{single:"saat",plural:"saat",abbrev:"s"},{single:"minit",plural:"minit",abbrev:"min"},{single:"jam",plural:"jam",abbrev:"j"},{single:"hari",plural:"hari",abbrev:"h"},{single:"minggu",plural:"minggu",abbrev:"m"},{single:"bulan",plural:"bulan",abbrev:"bul"},{single:"sukutahun",plural:"sukutahun",abbrev:"st"},{single:"tahun",plural:"tahun",abbrev:"th"},{single:"dekad",plural:"dekad",abbrev:"dek"}],unitAbbreviations:[["mil"],["s","saat"],["m","min"],["j","jam"],["h"],["m","mg"],["b","bul","bln"],["st","suku","skt"],["t","th"],["dek"]],parsers:{L:"DD-MM-YYYY",LT:"HH:mm",LTS:"HH:mm:ss A"},ordinalSuffix:a=>"ke-"+a}},P=o.publishLocale(S),v=new String,M={localeName:"Ms",localeDesc:"Melayu",localeCode:"ms",ColumnPicker:{column:"Kolum",columnsMenu:"Kolum",hideColumn:"Sembunyi kolum",hideColumnShort:"Sembunyi",newColumns:"Kolum baharu"},Filter:{applyFilter:"Guna penapis",filter:"Penapis",editFilter:"Edit penapis",on:"Hidup",before:"Sebelum",after:"Selepas",equals:"Sama dengan",lessThan:"Kurang daripada",moreThan:"Lebih daripada",removeFilter:"Buang penapis",disableFilter:"Nyahdaya penapis"},FilterBar:{enableFilterBar:"Tunjuk bar penapis",disableFilterBar:"Sembunyi bar penapis"},Group:{group:"Kumpulan",groupAscending:"Kumpulan menaik",groupDescending:"Kumpulan menurun",groupAscendingShort:"Menaik",groupDescendingShort:"Menurun",stopGrouping:"Henti mengumpulkan",stopGroupingShort:"Henti"},HeaderMenu:{moveBefore:a=>`Gerak sebelum "${a}"`,moveAfter:a=>`Gerak selepas "${a}"`,collapseColumn:"Runtuh lajur",expandColumn:"Kembang lajur"},ColumnRename:{rename:"Nama semula"},MergeCells:{mergeCells:"Gabung sel",menuTooltip:"Gabungkan sel dengan nilai yang sama apabila diisih mengikut kolum ini"},Search:{searchForValue:"Cari nilai"},Sort:{sort:"Isih",sortAscending:"Isih menaik",sortDescending:"Isih menurun",multiSort:"Multi isih",removeSorter:"Buang pengisih",addSortAscending:"Tambah pengisih menaik",addSortDescending:"Tambah pengisih menurun",toggleSortAscending:"Tukar kepada menaik",toggleSortDescending:"Tukar kepada menurun",sortAscendingShort:"Menaik",sortDescendingShort:"Menurun",removeSorterShort:"Buang",addSortAscendingShort:"+ Menaik",addSortDescendingShort:"+ Menurun"},Column:{columnLabel:a=>`${a.text?`${a.text} kolum. `:""}SPACE untuk menu konteks${a.sortable?", ENTER untuk isih":""}`,cellLabel:v},Checkbox:{toggleRowSelect:"Togel pemilihan baris",toggleSelection:"Togel pemilihan set data keseluruhan"},RatingColumn:{cellLabel:a=>{var e;return`${a.text?a.text:""} ${(e=a.location)!=null&&e.record?` penilaian : ${a.location.record[a.field]||0}`:""}`}},GridBase:{loadFailedMessage:"Pemuatan data gagal!",syncFailedMessage:"Sinkronisasi data gagal!",unspecifiedFailure:"Kegagalan tak dinyata",networkFailure:"Ralat rangkaian",parseFailure:"Gagal menghuraikan respons pelayan",serverResponse:"Respons pelayan:",noRows:"Tiada rekod untuk dipaparkan",moveColumnLeft:"Gerak ke bahagian kiri",moveColumnRight:"Gerak ke bahagian kanan",moveColumnTo:a=>`Gerak kolum ke ${a}`},CellMenu:{removeRow:"Hapus"},RowCopyPaste:{copyRecord:"Salin",cutRecord:"Potong",pasteRecord:"Tampal",rows:"baris-baris",row:"baris"},CellCopyPaste:{copy:"Salin",cut:"Potong",paste:"Tampal"},PdfExport:{"Waiting for response from server":"Menunggu respons daripada pelayan...","Export failed":"Eksport gagal","Server error":"Ralat pelayan","Generating pages":"Menjana halaman...","Click to abort":"Batal"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Tetapan eksport",export:"Eksport",exporterType:"Kawal penomboran",cancel:"Batal",fileFormat:"Format fail",rows:"Baris",alignRows:"Jajarkan baris",columns:"Kolum",paperFormat:"Format kertas",orientation:"Orientasi",repeatHeader:"Pengepala ulang"},ExportRowsCombo:{all:"Semua baris",visible:"Baris boleh lihat"},ExportOrientationCombo:{portrait:"Portret",landscape:"Landskap"},SinglePageExporter:{singlepage:"Halaman tunggal"},MultiPageExporter:{multipage:"Halaman pelbagai",exportingPage:({currentPage:a,totalPages:e})=>`Mengeksport halaman ${a}/${e}`},MultiPageVerticalExporter:{multipagevertical:"Halaman pelbagai (menegak)",exportingPage:({currentPage:a,totalPages:e})=>`Mengeksport halaman ${a}/${e}`},RowExpander:{loading:"Memuat",expand:"Kembang",collapse:"Kecil"}},D=o.publishLocale(M),T={localeName:"Ms",localeDesc:"Melayu",localeCode:"ms",Object:{newEvent:"Peristiwa baharu"},ResourceInfoColumn:{eventCountText:a=>a+" peristiwa"},Dependencies:{from:"Daripada",to:"Kepada",valid:"Sah",invalid:"Tidak sah"},DependencyType:{SS:"MM",SF:"MS",FS:"SM",FF:"SS",StartToStart:"Mula ke Mula",StartToEnd:"Mula ke Selesai",EndToStart:"Selesai ke Mula",EndToEnd:"Selesai ke Selesai",short:["MM","MS","SM","SS"],long:["Mula ke Mula","Mula ke Selesai","Selesai ke Mula","Selesai ke Selesai"]},DependencyEdit:{From:"Daripada",To:"Kepada",Type:"Jenis",Lag:"Sela","Edit dependency":"Edit kebergantungan",Save:"Simpan",Delete:"Hapus",Cancel:"Batal",StartToStart:"Mula ke Mula",StartToEnd:"Mula ke Akhir",EndToStart:"Akhir ke Mula",EndToEnd:"Akhir ke Akhir"},EventEdit:{Name:"Nama",Resource:"Sumber",Start:"Mula",End:"Akhir",Save:"Simpan",Delete:"Hapus",Cancel:"Batal","Edit event":"Edit peristiwa",Repeat:"Ulang"},EventDrag:{eventOverlapsExisting:"Peristiwa bertindih dengan peristiwa sedia ada untuk sumber ini",noDropOutsideTimeline:"Peristiwa tidak boleh digugurkan sepenuhnya di luar garis masa"},SchedulerBase:{"Add event":"Tambah peristiwa","Delete event":"Hapus peristiwa","Unassign event":"Nyahtetap peristiwa"},TimeAxisHeaderMenu:{pickZoomLevel:"Zum",activeDateRange:"Julat tarikh",startText:"Tarikh mula",endText:"Tarikh akhir",todayText:"Hari ini"},EventCopyPaste:{copyEvent:"Salin peristiwa",cutEvent:"Potong peristiwa",pasteEvent:"Tampal peristiwa"},EventFilter:{filterEvents:"Tapis tugas",byName:"Ikut nama"},TimeRanges:{showCurrentTimeLine:"Tunjuk garis masa semasa"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"Saat"},minuteAndHour:{topDateFormat:"ddd DD-MM, H",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd DD-MM",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"Hari"},day:{name:"Hari/jam"},week:{name:"Minggu/jam"},dayAndWeek:{displayDateFormat:"ll LST",name:"Minggu/hari"},dayAndMonth:{name:"Bulan"},weekAndDay:{displayDateFormat:"ll LST",name:"Minggu"},weekAndMonth:{name:"Minggu"},weekAndDayLetter:{name:"Minggu/hari biasa"},weekDateAndMonth:{name:"Bulan/minggu"},monthAndYear:{name:"Bulan"},year:{name:"Tahun"},manyYears:{name:"Berbilang tahun"}},RecurrenceConfirmationPopup:{"delete-title":"Anda menghapuskan peristiwa","delete-all-message":"Adakah anda mahu menghapuskan semua kejadian peristiwa ini?","delete-further-message":"Adakah anda mahu menghapuskan ini dan semua kejadian masa hadapan peristiwa ini, atau hanya kejadian yang dipilih?","delete-further-btn-text":"Hapus Semua Peristiwa Masa Depan","delete-only-this-btn-text":"Padam Hanya Peristiwa Ini","update-title":"Anda mengubah peristiwa berulang","update-all-message":"Adakah anda mahu mengubah semua kejadian peristiwa ini?","update-further-message":"Adakah anda mahu menukar kejadian peristiwa ini sahaja, atau ini dan semua kejadian akan datang?","update-further-btn-text":"Semua Peristiwa Masa Depan","update-only-this-btn-text":"Hanya Peristiwa Ini",Yes:"Ya",Cancel:"Batal",width:600},RecurrenceLegend:{" and ":" dan ",Daily:"Harian","Weekly on {1}":({days:a})=>`Mingguan pada ${a}`,"Monthly on {1}":({days:a})=>`Bulanan pada ${a}`,"Yearly on {1} of {2}":({days:a,months:e})=>`Tahunan pada ${a} daripada ${e}`,"Every {0} days":({interval:a})=>`Setiap ${a} hari`,"Every {0} weeks on {1}":({interval:a,days:e})=>`Setiap ${a} minggu pada ${e}`,"Every {0} months on {1}":({interval:a,days:e})=>`Setiap ${a} bulan pada ${e}`,"Every {0} years on {1} of {2}":({interval:a,days:e,months:n})=>`Setiap ${a} tahun pada ${e} daripada ${n}`,position1:"pertama",position2:"kedua",position3:"ketiga",position4:"keempat",position5:"kelima","position-1":"terakhir",day:"hari",weekday:"hari minggu","weekend day":"hari hujung minggu",daysFormat:({position:a,days:e})=>`${a} ${e}`},RecurrenceEditor:{"Repeat event":"Peristiwa ulang",Cancel:"Batal",Save:"Simpan",Frequency:"Frekuensi",Every:"Setiap",DAILYintervalUnit:"hari",WEEKLYintervalUnit:"minggu",MONTHLYintervalUnit:"bulan",YEARLYintervalUnit:"tahun",Each:"Setiap","On the":"Pada","End repeat":"Akhir ulang","time(s)":"masa"},RecurrenceDaysCombo:{day:"hari",weekday:"hari minggu","weekend day":"hari hujung minggu"},RecurrencePositionsCombo:{position1:"pertama",position2:"kedua",position3:"ketiga",position4:"keempat",position5:"kelima","position-1":"terakhir"},RecurrenceStopConditionCombo:{Never:"Jangan",After:"Selepas","On date":"Pada tarikh"},RecurrenceFrequencyCombo:{None:"Tiada ulangan",Daily:"Harian",Weekly:"Mingguan",Monthly:"Bulanan",Yearly:"Tahunan"},RecurrenceCombo:{None:"Tiada",Custom:"Suaikan..."},Summary:{"Summary for":a=>`Ringkasan untuk ${a}`},ScheduleRangeCombo:{completeview:"Jadual lengkap",currentview:"Jadual boleh lihat",daterange:"Julat tarikh",completedata:"Jadual lengkap (untuk semua peristiwa)"},SchedulerExportDialog:{"Schedule range":"Julat jadual","Export from":"Daripada","Export to":"Kepada"},ExcelExporter:{"No resource assigned":"Tiada sumber diperuntukkan"},CrudManagerView:{serverResponseLabel:"Respons pelayan:"},DurationColumn:{Duration:"Tempoh"}},C=o.publishLocale(T),w={localeName:"Ms",localeDesc:"Melayu",localeCode:"ms",EventEdit:{Calendar:"Kalendar","All day":"Sepanjang hari",day:"Hari",week:"Minggu",month:"Bulan",year:"Tahun",decade:"Dekad"},EventMenu:{duplicateEvent:"Duplikat peristiwa",copy:"salin"},Calendar:{Today:"Hari ini",next:a=>`Berikutnya ${a}`,previous:a=>`Sebelumnya ${a}`,plusMore:a=>`+${a} lagi`,allDay:"Sepanjang hari",endsOn:a=>`Berakhir ${a}`,weekOfYear:([a,e])=>`Minggu ${e}, ${a}`,loadFail:"Pemuatan data kalendar gagal. Sila hubungi pentadbir sistem anda"},CalendarDrag:{holdCtrlForRecurrence:"Tahan CTRL untuk peristiwa berulang"},CalendarMixin:{eventCount:a=>`${a||"Jumlah"} peristiwa`},EventTip:{"Edit event":"Ubah peristiwa",timeFormat:"LST"},ModeSelector:{includeWeekends:"Termasuk hujung minggu",weekends:"Hujung minggu"},AgendaView:{Agenda:"Agenda"},MonthView:{Month:"Bulan",monthUnit:"bulan"},WeekView:{weekUnit:"minggu"},YearView:{Year:"Tahun",yearUnit:"tahun"},EventList:{List:"Senarai",Start:"Mula",Finish:"Selesai",days:a=>`${a>1?`${a} `:""}hari`},DayView:{Day:"Hari",dayUnit:"hari",daysUnit:"hari",expandAllDayRow:"Kembangkan bahagian sepanjang hari",collapseAllDayRow:"Kecilkan bahagian sepanjang hari",timeFormat:"LST"},Sidebar:{"Filter events":"Tapis peristiwa"},WeekExpander:{expandTip:"Klik untuk kembangkan baris",collapseTip:"Klik untuk kecilkan baris"}},f=o.publishLocale(w);if(typeof r.exports=="object"&&typeof s=="object"){var E=(a,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of Object.getOwnPropertyNames(e))!Object.prototype.hasOwnProperty.call(a,t)&&t!==n&&Object.defineProperty(a,t,{get:()=>e[t],enumerable:!(i=Object.getOwnPropertyDescriptor(e,t))||i.enumerable});return a};r.exports=E(r.exports,s)}return r.exports});
