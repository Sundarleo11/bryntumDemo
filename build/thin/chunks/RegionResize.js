/*!
 *
 * Bryntum Calendar 5.3.6 (TRIAL VERSION)
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(a,b){const c=a();function m(a,b){return _cmpb(b-0x48,a);}while(!![]){try{const d=parseInt(m(0x187,0x1b3))/0x1+parseInt(m(0x1af,0x19c))/0x2*(parseInt(m(0x1e8,0x1d0))/0x3)+-parseInt(m(0x1ab,0x18d))/0x4*(parseInt(m(0x1b0,0x190))/0x5)+parseInt(m(0x19c,0x1b5))/0x6*(-parseInt(m(0x158,0x17c))/0x7)+parseInt(m(0x1d2,0x1c0))/0x8+-parseInt(m(0x16c,0x19d))/0x9+parseInt(m(0x19a,0x17d))/0xa;if(d===b){break;}else{c['push'](c['shift']());}}catch(e){c['push'](c['shift']());}}}(_cmpa,0x7c302));import{ColumnStore,Column,GridFeatureManager}from'./GridBase.js';import{NumberFormat}from'./MessageDialog.js';import{ObjectHelper,InstancePlugin,EventHelper}from'./Editor.js';class NumberColumn extends Column{static [_cmpn(0x2de,0x2f5)]=_cmpn(0x2cb,0x2a5);static [_cmpn(0x2f6,0x2de)]=_cmpn(0x2cb,0x2ed);static [_cmpn(0x2d9,0x2c3)]=[_cmpn(0x32b,0x2ff),_cmpn(0x308,0x329),_cmpn(0x32f,0x33e),_cmpn(0x325,0x31a),_cmpn(0x2ff,0x2f0),_cmpn(0x324,0x334)];static get[_cmpn(0x319,0x32b)](){function o(a,b){return _cmpn(a-0x4e,b);}return{'filterType':o(0x319,0x324),'format':''};}get[_cmpn(0x326,0x351)](){const {format:a,name:b,max:c,min:d,step:e,largeStep:f,align:g}=this;function p(a,b){return _cmpn(b- -0xc4,a);}return ObjectHelper[p(0x267,0x26d)]({'type':p(0x25c,0x24d),'format':a,'name':b,'max':c,'min':d,'step':e,'largeStep':f,'textAlign':g});}get[_cmpn(0x32a,0x31d)](){function q(a,b){return _cmpn(b-0x1fd,a);}const a=this,{format:b}=a;let c=a[q(0x4d4,0x4ca)];if(!c||a[q(0x52b,0x52a)]!==b){a['_formatter']=c=NumberFormat[q(0x49a,0x4c6)](a[q(0x54f,0x52a)]=b);}return c;}[_cmpn(0x305,0x2f7)](a){if(a!=null){a=this[r(-0x21a,-0x1eb)][r(-0x1e5,-0x1ea)](a);if(this[r(-0x220,-0x1f1)]){a=''+a+this['unit'];}}function r(a,b){return _cmpn(b- -0x515,a);}return a??'';}['defaultRenderer']({value:a}){function s(a,b){return _cmpn(b- -0x2ec,a);}return this[s(0x4b,0x19)](a);}}ColumnStore[_cmpn(0x2d7,0x2c7)](NumberColumn,!![]);function _cmpn(a,b){return _cmpb(a-0x1a8,b);}NumberColumn['exposeProperties']();function _cmpb(a,b){const c=_cmpa();_cmpb=function(d,e){d=d-0x120;let f=c[d];return f;};return _cmpb(a,b);}NumberColumn[_cmpn(0x2d0,0x2ca)]=_cmpn(0x2ec,0x314);class RegionResize extends InstancePlugin{static [_cmpn(0x2d1,0x2fb)]=_cmpn(0x2ee,0x303);static get[_cmpn(0x2f9,0x2d6)](){function t(a,b){return _cmpn(a- -0x101,b);}return{'chain':['onElementPointerDown',t(0x202,0x1de),t(0x1f6,0x20e),'onSubGridCollapse',t(0x1e2,0x1bd),'render']};}[_cmpn(0x303,0x31b)](a){function u(a,b){return _cmpn(b-0x1aa,a);}const b=this,{client:c}=b,d=a['target'][u(0x471,0x492)](u(0x490,0x49d));if(d&&!b['expanding']){b[u(0x472,0x48b)]=!![];let e=d[u(0x484,0x490)][u(0x4a5,0x4a5)],f=c[u(0x4d3,0x4c0)](e);if(!f[u(0x49c,0x484)]){e=c[u(0x4c9,0x4c6)]()[0x1];f=c['getSubGrid'](e);}f['expand']()[u(0x454,0x47c)](()=>b[u(0x4a8,0x48b)]=![]);}}[_cmpn(0x2cf,0x2f2)](a,b){const c=this,{client:d}=c,e=a[v(0xfd,0xe4)][v(0x115,0xf9)],f=d['element'],g=d[v(0x108,0xf8)][d[v(0xff,0xf8)][v(0xf8,0x11b)](e)+0x1],h=d[v(0xea,0x114)](g),i=d[v(0x118,0x114)](e);let j=i,k=0x1;if(j[v(0xae,0xcc)]!=null){if(h[v(0xc9,0xcc)]==null){j=h;k=-0x1;}}if(d[v(0xf6,0x115)]){k*=-0x1;}if(a[v(0x14b,0x127)][v(0xe8,0x10a)](v(0x124,0x10b))){return;}function v(a,b){return _cmpn(b- -0x202,a);}const l=j[v(0x124,0x104)]['offsetWidth']+h['element'][v(0x121,0x11c)];c[v(0x10b,0xdd)]={'element':a,'headerEl':j['header'][v(0x11f,0x104)],'subGridEl':j[v(0x11a,0x104)],'subGrid':j,'splitterSubGrid':i,'originalWidth':j[v(0x111,0x104)][v(0x139,0x11c)],'originalX':b,'minWidth':j[v(0x11e,0x125)]||0x0,'maxWidth':Math['min'](l,j['maxWidth']||l),'flip':k};f['classList'][v(0xf4,0xd2)](v(0xd3,0x100));i[v(0xe7,0xd6)](v(0xdd,0xe3));c[v(0x13b,0x12a)]=EventHelper['on']({'element':document,'pointermove':v(0xc1,0xef),'pointerup':v(0xc3,0xde),'thisObj':c});}[_cmpn(0x2f5,0x2fb)](){const a=this,{dragContext:b}=a;function w(a,b){return _cmpn(b- -0x3d7,a);}if(b){a[w(-0xb9,-0xab)]();a['client']['element']['classList'][w(-0xc6,-0xb5)]('b-moving-splitter');b[w(-0xb8,-0xc3)][w(-0x109,-0xff)](w(-0xce,-0xf2),![]);a[w(-0x10d,-0xf8)]=null;}}[_cmpn(0x2cc,0x2af)](a,b,c){const d=this,{client:e}=d,f=b[x(0x7d,0xac)][x(0x92,0xbb)],g=e['getLastRegions']();function x(a,b){return _cmpn(a- -0x269,b);}if(e[x(0xbf,0xcc)](x(0xa1,0x7a),{'subGrid':a,'domEvent':c})===![]){return;}if(g[0x0]===f){const h=e['getSubGrid'](g[0x1]);if(h['collapsed']){h[x(0x7b,0x9e)]();return;}}a[x(0xb1,0x94)]();}[_cmpn(0x2ea,0x2dd)](a,b,c){const d=this,{client:e}=d,f=b[y(0x313,0x30a)][y(0x328,0x342)],g=e[y(0x349,0x323)]();if(e['trigger'](y(0x33f,0x36f),{'subGrid':a,'domEvent':c})===![]){return;}if(g[0x0]===f){if(!a['collapsed']){const h=e[y(0x343,0x360)](g[0x1]);h[y(0x347,0x36f)]();return;}}function y(a,b){return _cmpn(a-0x2d,b);}a[y(0x311,0x2f5)]();}[_cmpn(0x2d5,0x2f9)](a){const {dragContext:b}=this;function z(a,b){return _cmpn(a-0xd5,b);}if(b){const c=a-b[z(0x3cd,0x39e)],d=Math['max'](Math['min'](b[z(0x3b0,0x3af)],b[z(0x3d5,0x3c5)]+c*b[z(0x3be,0x3d5)]),0x0);b[z(0x3a8,0x3b5)][z(0x3bc,0x3a0)]=Math[z(0x404,0x3e8)](d,b['minWidth']);}}[_cmpn(0x2fe,0x2f9)](a){const b=this,{target:c}=a,d=a[A(-0x290,-0x270)]===0x0&&c[A(-0x29a,-0x284)](A(-0x274,-0x297)),e=d&&b[A(-0x254,-0x273)]['getSubGrid'](d[A(-0x29c,-0x285)][A(-0x287,-0x29d)]);function A(a,b){return _cmpn(a- -0x582,b);}let f;if(d){if(c[A(-0x29a,-0x2a5)](A(-0x2a0,-0x2b7))){b[A(-0x2b6,-0x288)](e,d,a);}else if(c[A(-0x29a,-0x284)](A(-0x293,-0x2b7))){b[A(-0x298,-0x2b0)](e,d,a);}else{b[A(-0x2b3,-0x2cc)](d,a[A(-0x2b8,-0x2bd)]);f=d;}}if(a['pointerType']===A(-0x281,-0x2b6)){b[A(-0x27e,-0x28c)](f);}}[_cmpn(0x2f1,0x2cb)](a){function B(a,b){return _cmpn(b- -0x400,a);}if(this[B(-0xf3,-0x121)]){this['updateMove'](a[B(-0x133,-0x136)]);a[B(-0xc0,-0xe1)]();}}[_cmpn(0x2f7,0x2ed)](a){if(this['dragContext']){a['preventDefault']();}}['onPointerUp'](a){function C(a,b){return _cmpn(b-0x14,a);}if(this[C(0x2ee,0x2f3)]){this[C(0x2d4,0x309)]();a['preventDefault']();}}['onSubGridCollapse']({subGrid:a}){function D(a,b){return _cmpn(a-0x72,b);}const b=this[D(0x3a0,0x3a4)][D(0x395,0x399)](a),c=this[D(0x3a0,0x36b)][D(0x38e,0x3ad)]();if(c[0x1]===a[D(0x36d,0x35f)]){b[D(0x39b,0x370)]['add'](D(0x366,0x366));}}[_cmpn(0x2e3,0x2ea)]({subGrid:a}){const b=this[E(0x1d4,0x207)][E(0x1e5,0x1fc)](a);function E(a,b){return _cmpn(b- -0x127,a);}b[E(0x1db,0x202)][E(0x1cc,0x1fb)]('b-grid-splitter-allow-collapse');}[_cmpn(0x304,0x2cf)](a){const b=this,{touchedSplitter:c}=b;if(a&&c&&a[F(-0x124,-0x106)][F(-0x10f,-0x129)]!==c[F(-0x124,-0x10b)][F(-0x10f,-0x122)]){b[F(-0x106,-0x13b)]();}const d=b[F(-0xdc,-0xf6)][F(-0xf4,-0xf7)](a?a['dataset'][F(-0x10f,-0xe9)]:c===null||c===void 0x0?void 0x0:c[F(-0x124,-0x124)][F(-0x10f,-0x10a)]);if(d){d['toggleSplitterCls'](F(-0x11f,-0x12a),Boolean(a));if(a){d[F(-0xfb,-0xc7)]();}else{d[F(-0xfa,-0x118)]();}}function F(a,b){return _cmpn(a- -0x40a,b);}b[F(-0x142,-0x147)]=a;}[_cmpn(0x2d6,0x2bc)](){function G(a,b){return _cmpn(a- -0x2b2,b);}const {regions:a,subGrids:b}=this[G(0x7c,0x48)];if(a[G(0x59,0x78)]>0x2){b[a[0x0]]['splitterElement'][G(0x77,0xa8)][G(0x22,0x19)](G(0x57,0x48));b[a[0x1]][G(0x69,0x9e)]['classList'][G(0x22,0x7)](G(0x66,0x37));}}}RegionResize[_cmpn(0x307,0x329)]='b-split';function _cmpa(){const H=['1934596wRfYKr','RegionResize','.b-grid-splitter-button-expand','5QrHkBf','onPointerMove','button','.b-grid-splitter-collapsed','b-grid-splitter-allow-collapse','endMove','fieldType','onElementTouchMove','originalX','pluginConfig','regions','region','6kTYZPV','6354819cnTCNE','onElementPointerDown','largeStep','originalWidth','touch','b-moving-splitter','onElementDblClick','toggleTouchSplitter','formatValue','element','featureClass','min','b-left-only','splitterCollapseClick','length','contains','b-grid-splitter-collapsed',':not(.b-row-reordering):not(.b-dragging-event):not(.b-dragging-task):not(.b-dragging-header):not(.b-dragselecting)\x20.b-grid-splitter','startSplitterButtonSyncing','stopSplitterButtonSyncing','numberfield','splitterExpandClick','530585EtccpU','splitterSubGrid','12DGWRlm','getSubGrid','rtl','b-right-only','defaults','collapse','splitterElement','getLastRegions','indexOf','offsetWidth','preventDefault','1130152cZWZwD','registerFeature','remove','resolveSplitter','unit','step','defaultEditor','minWidth','trigger','classList','formatter','format','pointerDetacher','_lastFormat','client','max','914451sQJHie','cleanupProperties','touchedSplitter','get','clientX','number','onCollapseClick','_formatter','flex','startMove','_$name','$name','then','subGrid','add','updateMove','render','registerColumnType','toggleSplitterCls','fields','collapsed','maxWidth','2387343yIKQmF','7942070hHfSZk','type','dragContext','onPointerUp','expanding','.b-grid-splitter-button-collapse','onSubGridExpand','expand','b-moving','dataset','width','closest','flip','onExpandClick','b-touching','NumberColumn'];_cmpa=function(){return H;};return _cmpa();}RegionResize[_cmpn(0x2d0,0x2cf)]=_cmpn(0x2ee,0x2dc);GridFeatureManager[_cmpn(0x321,0x30b)](RegionResize);export{NumberColumn,RegionResize};