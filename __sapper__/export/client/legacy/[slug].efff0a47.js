import{E as t,F as s,_ as n,a,b as e,c as r,i,s as o,d as c,S as u,q as f,h as l,t as h,u as p,g as m,v,j as d,k as b,w as x,l as g,f as j,y as k,m as w,D as y,n as E}from"./client.345beb32.js";function H(t){var s,n,a,e,r,i,o=t[0].title+"",c=t[0].html+"";return document.title=s=t[0].title,{c:function(){n=f(),a=l("h1"),e=h(o),r=f(),i=l("div"),this.h()},l:function(t){p('[data-svelte="svelte-m6zla3"]',document.head).forEach(m),n=v(t),a=d(t,"H1",{});var s=b(a);e=x(s,o),s.forEach(m),r=v(t),i=d(t,"DIV",{class:!0}),b(i).forEach(m),this.h()},h:function(){g(i,"class","content svelte-11wk5df")},m:function(t,s){j(t,n,s),j(t,a,s),k(a,e),j(t,r,s),j(t,i,s),i.innerHTML=c},p:function(t,n){var a=w(n,1)[0];1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&o!==(o=t[0].title+"")&&y(e,o),1&a&&c!==(c=t[0].html+"")&&(i.innerHTML=c)},i:E,o:E,d:function(t){t&&m(n),t&&m(a),t&&m(r),t&&m(i)}}}function q(t){return D.apply(this,arguments)}function D(){return(D=t(s.mark(function t(n){var a,e,r;return s.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.params,n.query,t.next=3,this.fetch("blog/".concat(a.slug,".json"));case 3:return e=t.sent,t.next=6,e.json();case 6:if(r=t.sent,200!==e.status){t.next=11;break}return t.abrupt("return",{post:r});case 11:this.error(e.status,r.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function L(t,s,n){var a=s.post;return t.$set=function(t){"post"in t&&n(0,a=t.post)},[a]}export default(function(t){function s(t){var n;return a(this,s),n=e(this,r(s).call(this)),i(c(n),t,L,H,o,{post:0}),n}return n(s,u),s}());export{q as preload};
