(window.webpackJsonpmap=window.webpackJsonpmap||[]).push([[0],{142:function(e){e.exports=JSON.parse('{"data":[{"id":1,"title":"Operahuset Oslo","name":"Operahuset Oslo","position":{"lat":-12.058553451600776,"lng":-77.0330945435819}},{"id":2,"title":"Vigelandsparken","name":"Operahuset Oslo","lat":53.22952,"lng":-4.129987},{"id":3,"title":"Vikingshuset","name":"Operahuset Oslo","lat":51.482708,"lng":-3.165881}]}')},144:function(e,t,l){e.exports=l(348)},347:function(e){e.exports=JSON.parse('[{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#7f2200"},{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#87ae79"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#495421"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"on"},{"weight":1.1}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#abce83"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"lightness":"25"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#97b771"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#7B8758"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#EBF4A4"}]},{"featureType":"poi.attraction","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#8dab68"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#5B5B3F"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ABCE83"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#EBF4A4"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#9BBF72"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#A4C67D"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#aee2e0"}]}]')},348:function(e,t,l){"use strict";l.r(t);var a=l(0),r=l.n(a),i=l(35),o=l.n(i),n=l(82),s=l(36),p=l(356),y=l(140),c=Object(p.a)({searchBox:{marginTop:10,boxShadow:"0 2px 6px rgba(0, 0, 0, 0.3)"},input:{width:240,height:40,fontSize:14,borderRadius:5,outline:"none",padding:"0 12px",boxSizing:"border-box",textOverflow:"ellipses",border:"1px solid transparent"}}),m=function(e){var t=e.onPlacesChanged,l=e.controlPosition,i=void 0===l?google.maps.ControlPosition.TOP_LEFT:l,o=c(),n=Object(a.useRef)(null);return r.a.createElement(y.SearchBox,{ref:n,onPlacesChanged:function(){t(n.current.getPlaces()[0])},controlPosition:i},r.a.createElement("div",{className:o.searchBox},r.a.createElement("input",{type:"text",placeholder:"Where to?",className:o.input})))},f=l(142),u=l(347),d=Object(s.withScriptjs)(Object(s.withGoogleMap)((function(e){var t=Object(a.useRef)(null),l=Object(a.useState)(13),i=Object(n.a)(l,2),o=i[0],p=i[1],y=Object(a.useState)({lat:59.911491,lng:10.757933}),c=Object(n.a)(y,2),d=c[0],g=c[1];return r.a.createElement("div",null,r.a.createElement(s.GoogleMap,{zoom:o,ref:t,center:d,defaultOptions:{disableDefaultUI:!0,draggable:!0,keyboardShortcuts:!1,scaleControl:!0,scrollwheel:!0,styles:u},onDragEnd:function(){return g(t.current.getCenter())},onZoomChanged:function(){return p(t.current.getZoom())}},f.data.map((function(e){return r.a.createElement(s.Marker,{key:e.id,title:e.name,name:e.name,position:{lat:e.lat,lng:e.lng}})})),r.a.createElement(m,{onPlacesChanged:function(e){p(13),g({lat:e.geometry.location.lat(),lng:e.geometry.location.lng()})}})))}))),g={width:"100%",height:"536px"};var b=document.getElementById("root");o.a.render(r.a.createElement((function(){return r.a.createElement("div",{style:g},r.a.createElement(d,{defaultOptions:{scaleControl:!0},googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBt5F_65miIiCpSgOEmbg3hACbgU0RwZas&libraries=visualization,drawing,geometry,places",loadingElement:r.a.createElement("div",{style:{height:"calc(100vh - 112px)"}}," Loading... "),containerElement:r.a.createElement("div",{style:{height:"calc(100vh - 112px)"}}),mapElement:r.a.createElement("div",{style:{height:"calc(100vh - 112px)"}})}))}),null),b)}},[[144,1,2]]]);
//# sourceMappingURL=main.b42b7c01.chunk.js.map