(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(6),r=t.n(c),o=(t(13),t(7)),i=t(2),s=t(4),u=t(3);var m=function(e){var a=e.value,t=e.handleClick,n=null;return"o"===a&&(n=l.a.createElement(u.b,null)),"x"===a&&(n=l.a.createElement(u.a,null)),l.a.createElement("button",{className:"square",onClick:t},n)};var d=function(e){e.player;var a=e.data,t=e.handleClick,n=function(e){return l.a.createElement(m,{value:a[e],handleClick:function(){return t(e)},index:e})};return l.a.createElement("div",{className:"board"},l.a.createElement("div",{className:"board-row"},n(0),n(1),n(2)),l.a.createElement("div",{className:"board-row"},n(3),n(4),n(5)),l.a.createElement("div",{className:"board-row"},n(6),n(7),n(8)))};t(14);var v=function(){var e=Object(n.useState)("o"),a=Object(i.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(Array(9).fill(null)),u=Object(i.a)(r,2),m=u[0],v=u[1],b=Object(n.useState)(null),E=Object(i.a)(b,2),f=E[0],h=E[1],N="o"===t?l.a.createElement(s.a,null):l.a.createElement(s.b,null);return l.a.createElement("div",{className:"game"},l.a.createElement("div",{className:"game-board"},l.a.createElement("h2",{className:"title"},f?"Winnir is ".concat(f):"Tic Tac Toe"),f?null:l.a.createElement("p",{className:"status"},l.a.createElement("span",null,"Next player: "),"  ",N),l.a.createElement(d,{data:m,handleClick:function(e){var a=Object(o.a)(m);a[e]||f||(a[e]=t,v(a),c("o"===t?"x":"o"),function(e){for(var a=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<a.length;t++){var n=Object(i.a)(a[t],3),l=n[0],c=n[1],r=n[2];e[l]&&e[l]===e[c]&&e[l]===e[r]&&h(e[l])}}(a))},player:t}),l.a.createElement("div",{className:"game-result"},l.a.createElement("button",{onClick:function(){c("o"),v(Array(9).fill(null)),h(null)},className:"btn"},"Restart"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8fd4f867.chunk.js.map