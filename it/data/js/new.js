/* */




/* JQuery */ 
/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);


/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};

/* */
 

jQuery.noConflict();
 
/* */

/* jQuery Module AdvancedGallery  */
(function(jQuery) {
  var $topGallery = {},
      imageLinksSelector = "a.fbimgAdv",
      currentIndex = 0,
      selectedArray = [],
      scrollerIndex = 0,
      $tmp,
      $overlay,
      $wrap,
      $navigation,
      $imageNavigation,
      $gallery,
      $content,
      $inner,
      $scroller,
      $scrollerLeft,
      $scrollerRight,
      $scrollerContent,
      $scrollerWrap,
      $title,
      $index,
      imagePreloader,
      titleh = 0,
      finalPos,
      imageHref,
      isSeriesMode = false,
      fx = jQuery.extend(jQuery('<div/>')[0], { prop: 0 }),
      startPos,
      isIE6 = jQuery.browser.msie && jQuery.browser.version < 7 && !window.XMLHttpRequest,
      options = {};
      
  _init = function() {   
    if (jQuery("#advGallery_wrap").length) {
        return;
    }
            
    jQuery('body').append(
        $tmp = jQuery('<div id="advGallery_tmp"></div>'),
        $gallery = jQuery('<div id="advGallery"></div>'),
        $overlay = jQuery('<div id="advGallery_overlay"></div>'),        
        $index = jQuery('<div id="advGallery_index-content"></div>')
    );
    
    $gallery.append(
      $wrap = jQuery('<div id="advGallery_wrap"></div>')
    );
    $wrap.append(
      $inner = jQuery('<div id="advGallery_inner"></div>')
    );
    $inner.append(
      $navigation = jQuery('<div id="advGallery_navigation"><ul><li><a href="#index" id="advGallery_index">Index</a></li><li><a href="#" id="advGallery_close">Close</a></li></ul></div>'),
      $scroller = jQuery('<div id="advGallery_scroller"></div>'),
      $imageNavigation = jQuery('<div id="advGallery_image-navigation"><a href="#prev" id="advGallery_prev"></a><a href="#next" id="advGallery_next"></a></div>'),
      $content = jQuery('<div id="advGallery_content"></div>'),
      $title = jQuery('<div id="advGallery_title"></div>')
    );
    
    $scroller.append(
      $scrollerLeft = jQuery('<a href="#" id="advGallery_scroller-left"></a>'),
      $scrollerRight = jQuery('<a href="#" id="advGallery_scroller-right"></a>'),
      $scrollerWrap = jQuery('<div id="advGallery_scroller-wrap"></div>')
    );
    
    $scrollerWrap.append(
      $scrollerContent = jQuery('<div id="advGallery_scroller-content"></div>')
    );
    
    if (isIE6) {
            $gallery.addClass('advGallery_ie6');
      var my_height = jQuery("#layoutMain").height()+jQuery("#layoutFooter").height();
      $overlay.get(0).style.setExpression('height',    "document.body.scrollHeight > document.body.offsetHeight ? document.body.scrollHeight : document.body.offsetHeight + 'px'");
      $overlay.get(0).style.setExpression('height', my_height);
        }
        
        jQuery("#advGallery_index").bind('click', function() {
          _index_start();
          
          return false;
        });
    
    jQuery("#advGallery_close").bind('click', function() {
      _close();
      return false;
    });
    
    $overlay.bind('click', function() {
      _close();
    });
    
    jQuery("#advGallery_prev").bind('click', function() {
      _prev();
      return false;
    });
    
    jQuery("#advGallery_next").bind('click', function() {
      _next();
      return false;
    });  
    
    $scrollerLeft.bind('click', function() {
      _scroller_prev();
      return false;
    });
    
    $scrollerRight.bind('click', function() {
      _scroller_next();
      return false;
    });   
  };
  
  function _index_init() {
    $index.empty();
    
    for (var i = 0; i < selectedArray.length; ++i) {
      var $image = jQuery(selectedArray[i]).find('img'),
          div = jQuery('<div />'),
          newWidth, newHeight;
       
      if (isSeriesMode)  
        $image.parent().css({display: 'block'});  
      
      if (parseInt($image.width(), 10) >= parseInt($image.height(), 10)) {
        newWidth = 50;
        newHeight = parseInt($image.height(), 10) / parseInt($image.width(), 10) * newWidth;
      } else {
        newHeight = 50;
        newWidth = parseInt($image.width(), 10) / parseInt($image.height(), 10) * newHeight; 
      }
      
      div.addClass('advGallery_index-image-wrap')
         .html('<p class="dotted">' + (i+1) + '</p>');
      
      if (isSeriesMode && i != 0)  
        $image.parent().css({display: 'none'});     
      
      div.appendTo($index);
      jQuery('<img />').attr({
          'class': 'advGallery_index-image',
          src: $image.attr('src'),
          height: newHeight,
          width: newWidth,
          rel: 'image-' + i
      }).css({
        left: (75 - newWidth) / 2
      }).bind('click', function() {
        var jumpTo = jQuery(this).attr('rel').replace(/image-/, '');
        _scroller_pos(jumpTo);
        _pos(jumpTo);
      }).appendTo(div);
    }
  };
  
  function _index_start() {
    _abort();
    
    $index.clone(true).css({ display: 'block' }).appendTo($tmp);
    
    options.width = $index.width();
    options.height = $index.height();
    
    _index_show();
  };
  
  function _index_show() {
    finalPos = _zoom_to();
    
    jQuery("#advGallery_next").hide();
    jQuery("#advGallery_prev").hide();
    
    jQuery("#advGallery_index").addClass('advGallery-disabled');
      
    if ($wrap.is(":visible")) {
      var pos = $gallery.position(),
          equal;
          
      startPos = {
          top: pos.top ,
          left: pos.left,
          width: $gallery.width(),
          height: $gallery.height()
      };
      equal = (startPos.width == finalPos.width && startPos.height == finalPos.height);
                
      $inner.fadeOut(200, function() {
        var finish_resizing = function() {
          $content.append($tmp.contents());
          $inner.fadeIn(200);
          _finish_index();
        };
        
        $content.empty();
        $content.css({
          backgroundImage: 'none'
        });
        
        $gallery.css(startPos);
          
        if (!equal) {
          fx.prop = 0;
          jQuery(fx).animate({ prop: 1 }, {
               duration    : 300,
               step        : _draw,
               complete    : finish_resizing
          });
        } else {
          finish_resizing();
        }
        
      });
      
      return;
    }
  };
  
  function _finish_index() {
    $wrap.css({ width: finalPos.width, height: finalPos.height });
    $imageNavigation.hide();
    $scroller.hide();
  };
  
  function _start() {
    var obj = selectedArray[currentIndex];
    imagePreloader = new Image();
    _abort();
    
    _index_init();
    
    imagePreloader.onerror = function() {
        _error();
    };
    imagePreloader.onload = function() {
        imagePreloader.onerror = null;
        imagePreloader.onload = null;
        _process_image();
    };
    imagePreloader.src = obj.href;
    
  };
  
  function _process_image() {
    options.width = imagePreloader.width;
    options.height = imagePreloader.height;
    options.src = imagePreloader.src;
    
    jQuery("<img />").attr({
        'id'    : 'advGallery_image',
        'src'    : imagePreloader.src
    }).appendTo($tmp);
    
    jQuery("#advGallery_prev").css({
      height: imagePreloader.height,
      width: imagePreloader.width / 2
    });
        
    jQuery("#advGallery_next").css({
      height: imagePreloader.height,
      width: imagePreloader.width / 2
    });
    
    $imageNavigation.css({
      height: imagePreloader.height,
      width: imagePreloader.width + 13
    });
    
    $content.css({
      height: imagePreloader.height,
      width: imagePreloader.width
    });
    
    _show();
  };
  
  function _show() {
    finalPos = _zoom_to();
    
    _process_title();
    
    jQuery("#advGallery_next").hide();
    jQuery("#advGallery_prev").hide();
    
    jQuery("#advGallery_index").removeClass('advGallery-disabled');
      
    if ($wrap.is(":visible")) {
      var pos = $gallery.position(),
          equal;
          
      startPos = {
          top: pos.top ,
          left: pos.left,
          width: $gallery.width(),
          height: $gallery.height() + titleh
      };
      equal = (startPos.width == finalPos.width && startPos.height == (finalPos.height + titleh));
                
      $inner.fadeOut(200, function() {
        var finish_resizing = function() {
          $content.css({
            backgroundImage: 'url('+options.src+')',
            backgroundRepeat: 'no-repeat'
          });
         
          $inner.fadeIn(200);
          _finish();
        };
        
        $content.empty();
        $content.css({
          backgroundImage: 'none'
        });
        
        $gallery.css(startPos);
          
        if (!equal) {
          fx.prop = 0;
          jQuery(fx).animate({ prop: 1 }, {
               duration    : 300,
               step        : _draw,
               complete    : finish_resizing
          });
        } else {
          finish_resizing();
        }
        
      });
      
      return;
    }
    
    $content.css({
            backgroundImage: 'url('+options.src+')',
            backgroundRepeat: 'no-repeat'
          });
    $overlay.css({opacity: .7}).show();
    
    $gallery.css({ 
      width: finalPos.width, 
      height: finalPos.height + titleh, 
      top: finalPos.top, 
      left: finalPos.left }).fadeIn();
      
    _finish();
  };
  
  function _process_title() {
    $title.hide();
    $title.empty();
    $title.css({width: options.width});
    $title.html(jQuery(selectedArray[currentIndex]).attr('title'));
    $title.appendTo('body');
    titleh = $title.outerHeight(true);
    $title.appendTo($inner);
  };
  
  function _finish() {
    $wrap.css({ width: finalPos.width, height: finalPos.height });
    $imageNavigation.show();
    $title.show();
    $imageNavigation.find("ul").css({ width: finalPos.width });
    $scroller.css({display: 'block'});
    $scroller.css({ left: (finalPos.width - parseInt($scroller.css('width'), 10)) / 2 + parseInt($gallery.css('padding-left'), 10) });
    
    _set_navigation();
    _scroller_start();
  };
  
  function _scroller_start() {    
    $scrollerContent.empty();      
    for (var i = 0; i < selectedArray.length; ++i) {
      var $image = jQuery(selectedArray[i]).find('img'),
          div = jQuery('<div />'),
          newWidth, newHeight;
          
      div.appendTo($scrollerContent);
      
      if (isSeriesMode && i != 0)  
        $image.parent().css({display: 'block'});  
      
      if (parseInt($image.width(), 10) >= parseInt($image.height(), 10)) {
        newWidth = 50;
        newHeight = parseInt($image.height(), 10) / parseInt($image.width(), 10) * newWidth;
      } else {
        newHeight = 50
        newWidth = parseInt($image.width(), 10) / parseInt($image.height(), 10) * newHeight; 
      }
      
      if (isSeriesMode && i != 0)  
        $image.parent().css({display: 'none'});  
      
      jQuery("<img />").attr({
          'class': 'advGallery_scroller_image',
          src: $image.attr('src'),
          width: newWidth,
          height: newHeight,
          rel: 'image-' + i
      }).css({
        top: (50 - newHeight) / 2,
        left: (50 - newWidth) / 2
      }).bind('click', function() {
        var jumpTo = jQuery(this).attr('rel').replace(/image-/, '');
        _scroller_pos(jumpTo);
        _pos(jumpTo);
      }).appendTo(div);
    }
    
    _scroller_show();
  };
  
  function _scroller_show() {
    var scrollerWidth = selectedArray.length * 62,
        scrollerLeft = 0;
        
    if (scrollerIndex > 1 && scrollerIndex < (selectedArray.length - 2)) {
      scrollerLeft = (scrollerIndex - 1) * -62;
    } else if (scrollerIndex >= (selectedArray.length - 2)) {
      scrollerLeft = (selectedArray.length - 3) * -62;
    }
        
    $scrollerContent.css({ 
      width: scrollerWidth
    });
    
    $scrollerContent.stop().animate({
      left: scrollerLeft
    }, 200, _scroller_finish);
    
    _scroller_finish();
  };
  
  function _scroller_finish() {
    $scrollerLeft.hide();
    $scrollerRight.hide();
    
    _set_scroller();
  };
  
  function _set_scroller() {
    if ((selectedArray.length - 3) >= 1) {
      if (scrollerIndex > 1) {
          $scrollerLeft.show();
      }
      
      if (scrollerIndex <= (selectedArray.length - 3)) {
          $scrollerRight.show();
      }
    }
  };
  
  function _set_navigation() {
    jQuery(document).unbind('keydown.zo').bind('keydown.zo', function(e) {
        if (e.keyCode == 27) {
            e.preventDefault();
            _close();
        } else if (e.keyCode == 37) {
            e.preventDefault();
            _prev();
        } else if (e.keyCode == 39) {
            e.preventDefault();
            _next();
        }
    });
            
    if (currentIndex !== 0) {
        jQuery("#advGallery_prev").show();
    }
    if (selectedArray.length > 1 && currentIndex != (selectedArray.length - 1)) {
        jQuery("#advGallery_next").show();
    }
  };
  
  function _draw(pos) {
    var width    = Math.round(startPos.width    + (finalPos.width    - startPos.width)    * pos),
        height    = Math.round(startPos.height    + (finalPos.height    - startPos.height)    * pos) + titleh,
        top        = Math.round(startPos.top    + (finalPos.top    - startPos.top)    * pos),
        left    = Math.round(startPos.left    + (finalPos.left    - startPos.left)    * pos);
        
    $gallery.css({
        'width' : width        + 'px',
        'height' : height    + 'px',
        'top' : top        + 'px',
        'left' : left        + 'px'
    });
  };
  
  function _zoom_to() {
    var view = _get_viewport(),
        to = {};
    to.width = options.width;
    to.height = options.height + 54;
        
    to.top = (view[3] + (view[1] - to.height) * 0.5) ;
    to.left = (view[2] + (view[0] - to.width) * 0.5);
    return to;
  };
  
  function _get_viewport() {
      return [ jQuery(window).width(), jQuery(window).height(), jQuery(document).scrollLeft(), jQuery(document).scrollTop() ];
  };
  
  function _abort() {
    imagePreloader.onerror = imagePreloader.onload = null;
    $tmp.empty();
    $scrollerContent.empty();
    $title.empty();
  };
  
  function _close() {
    if ($wrap.is(':hidden')) {
        return;
    }
    
    _abort();
    
    function _cleanup() {
        $overlay.fadeOut('fast');
        $gallery.hide();
        
        $content.empty();
        
        currentIndex = 0;
        scrollerIndex = 0;
        options = {};
    }
    $gallery.fadeOut(200, _cleanup);
  };
  
  function _scroller_next() {
    return _scroller_pos(scrollerIndex + 1);
  };
  
  function _scroller_prev() {
    return _scroller_pos(scrollerIndex - 1);    
  };
  
  function _scroller_pos(pos) {
    pos = parseInt(pos, 10);
    if (pos > -1 && selectedArray.length > pos) {
        scrollerIndex = pos;
        _scroller_start();
    }
    
    return;
  };
  
  function _next() {
    return _pos(currentIndex + 1);
  };
  
  function _prev() {
    return _pos(currentIndex - 1);
  };
  
  function _pos(pos) {
    pos = parseInt(pos, 10);
    if (pos > -1 && selectedArray.length > pos) {
        currentIndex = pos;
        if (currentIndex >= (selectedArray.length - 2)) {
          scrollerIndex = (selectedArray.length - 2);
        } else if (currentIndex <= 1) {
          scrollerIndex = 1;
        } else {
          scrollerIndex = currentIndex;
        }
        _start();
    }
    
    return;
  };
  
  jQuery.fn.advgallery = function(options) {
      jQuery(this)
        .data('advgallery', jQuery.extend({}, options, (jQuery.metadata ? jQuery(this).metadata() : {})))
        .unbind('click.ag').bind('click.ag', function(e) {
          
          e.preventDefault();
          jQuery(this).blur();
          selectedArray    = [];
          currentIndex    = 0;
          scrollerIndex = currentIndex;
          isSeriesMode = jQuery(this).closest('.fbgalleryAdv').hasClass('fbgalleryAdvSlideshow');
          
          var rel = jQuery(this).closest('.fbgalleryAdv').attr('id') || ''; // Edit MA, 15-03-2010, Reddot-compatibility
          if (!rel || rel == '' || rel === 'nofollow') {
            selectedArray.push(this);
          } else {
            selectedArray    = jQuery(".fbgalleryAdv#" + rel + " a.fbimgAdv"); // Edit MA, 15-03-2010, Reddot-compatibility
            currentIndex    = selectedArray.index( this );
            
            if (currentIndex >= (selectedArray.length - 2)) {
              scrollerIndex = (selectedArray.length - 2);
            } else if (currentIndex <= 1) {
              scrollerIndex = 1;
            } else {
              scrollerIndex = currentIndex;
            }
          }
          _start();
          return false;
        });
      
      return this;
  };
  
  jQuery.advgallery = function(obj) {
    var opts = typeof arguments[1] !== 'undefined' ? arguments[1] : {};
    selectedArray = [];
    currentIndex = opts.index || 1;
    scrollerIndex = currentIndex;
    
    if (jQuery.isArray(obj)) {
      for (var i = 0, j = obj.length; i < j; i++) {
        if (typeof obj[i] == 'object') {
          jQuery(obj[i]).data('advgallery', jQuery.extend({}, opts, obj[i]));
        } else {
          obj[i] = jQuery({}).data('advgallery', jQuery.extend({content : obj[i]}, opts));
        }
      }
      selectedArray = jQuery.merge(selectedArray, obj);
    } else {
      if (typeof obj == 'object') {
        jQuery(obj).data('advgallery', jQuery.extend({}, opts, obj));
      } else {
        obj = jQuery({}).data('advgallery', jQuery.extend({content : obj}, opts));
      }
      selectedArray.push(obj);
    }
    if (selectedIndex > selectedArray.length || selectedIndex < 0) {
      currentIndex = 1;
      scrollerIndex = currentIndex;
    }
    _start();
  };
  
  jQuery(document).ready(function() {
    _init();
    jQuery('a.fbimgAdv').advgallery();   
    
    var $parentGalleries = jQuery('.fbgalleryAdv');
    var imgLoaders = [];
    for (var i = 0; i < $parentGalleries.length; ++i) {
      var $parentGallery = jQuery($parentGalleries.get(i));
      
      if ($parentGallery.hasClass('fbgalleryAdvSlideshow')) {
        var $firstImageInSeries = $parentGallery.find("a.fbimgAdv:first");
        
        $parentGallery.find("a.fbimgAdv:not(:first)").addClass("zo-gallery_belongs-to-series").css('display', 'none');
        $firstImageInSeries.css({
          position: 'relative',
          display: 'block'
        });
                 
        imgLoaders[i] = new Image();         
        imgLoaders[i].onload = function() {
           var height = this.height;
           var desc = jQuery('<a>').addClass('fbgalleryAdvDescription').css({ width: this.width - 32 }).text('SLIDESHOW - ' + $parentGallery.find("a.fbimgAdv").length + ' Pictures').appendTo($firstImageInSeries); 
                  
                  $firstImageInSeries.height(height); 
                  if (isIE6) {
                    desc.addClass('fbgalleryAdvDescription-ie6');
                  }
        }
                
        imgLoaders[i].src = $firstImageInSeries.find('img').attr('src');
      }  
    }       
  });
})(jQuery);

/* define namespace */
var zo; // declares a global symbol
if (!zo) zo = {};
    else if (typeof zo != 'object')
        throw new Error('zo exists, but is not an object!');


// Cookie handling
function createCookie(name,value,hours)
{
 if (hours)
 {
  var date = new Date();
  date.setTime(date.getTime()+(hours*60*60*1000));
  var expires = "; expires="+date.toGMTString();
 }
 else var expires = "";
 document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name)
{
 var nameEQ = name + "=";
 var ca = document.cookie.split(';');
 for(var i=0;i < ca.length;i++)
 {
  var c = ca[i];
  while (c.charAt(0)==' ') c = c.substring(1,c.length);
  if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
 }
 return null;
}
function eraseCookie(name)
{
 createCookie(name,"",-1);
}

function showNote(posId,msg) {
    if (jQuery('.cnt2click').length!=0) return; 
    toolDisplayObj = document.getElementById(posId);
    if (toolDisplayObj) {
        toolDisplayObj.innerHTML = msg;
    }
}  
function clearInput(obj) {
    obj.value="";
    obj.onclick="";
}

function openPopup(anch,opt) {

    opt ? myOpt= opt : myOpt = 'width=612, height=612, resizable=yes, scrollbars=yes';
    ppup=window.open(anch.href,anch.target,myOpt); ppup.focus();
    ppup.focus();


}

function openLightbox(anch,opt) {

    loadToolBoxIFrame(anch.href,612,612,"off");


}

function lightboxx(objID,mode,obj) {
    if(!document.getElementById("lightbox")) {
        jQuery("#layoutPositioner").css({position:"relative"})
        lightboxOuter=document.createElement("span");
        lightboxOuter.id="lightboxOuter";
        lightbox=document.createElement("a");
        lightbox.href= "javascript:lightboxx('"+objID+"','self')";
        lightbox.title="close window";
        lightbox.innerHTML='<span class="nvsbl"></span>';
        lightbox.className="lightbox";
        lightbox.id="lightbox";
        resizeLightBox();
        window.onresize= function() {
            resizeLightBox();
        };
        for(i=0; i<document.getElementsByTagName("select").length; i++) {
            document.getElementsByTagName("select")[i].style.visibility="hidden";
        }
        if (obj) {
            jQuery("#layoutPositioner")
                .prepend(obj)
        }
        jQuery("#layoutPositioner")
            .prepend(lightboxOuter)
        jQuery(lightboxOuter)
            .append(lightbox);
//        lightboxOuter.appendChild(lightbox);

        jQuery(document)
            .bind('keydown', function(ev) {
                if (ev.keyCode === 27) {
                    lightboxx(objID,'self');        
                    jQuery(this).unbind('keydown');
                }
            })
        ;

    } else {
        window.onresize= "";
        for(i=0; i<document.getElementsByTagName("select").length; i++) {
            document.getElementsByTagName("select")[i].style.visibility="visible";
        }
        jQuery("#layoutPositioner").css({position:"static"})
        jQuery("#lightbox").remove();        
//        document.body.removeChild(document.getElementById('lightboxOuter'));
        if (mode=="self" && flashVars[objID]) { // ONLY FOR MOVIE PLAYER
            closeMovie(objID,"internal");
        } else if (obj) {
            jQuery(obj).remove();        
//            document.body.removeChild(obj);
        } else if (mode=="self" && document.getElementById(objID)) {
            jQuery("#"+objID).remove();        
//            document.body.removeChild(document.getElementById(objID));
        }
    }
}
function resizeLightBox() {
    lightbox.style.height="0px";
    if (document.documentElement.scrollHeight>document.body.scrollHeight) {
        lightbox.style.height=document.documentElement.scrollHeight+"px"
    } else {
        lightbox.style.height=(document.body.scrollHeight)+"px";
    }
}

try {if(flashVars){}}catch (e){flashVars= new Array();}

flashBuilderSRC="/italia/it/data/js/flashbuilder.js"

generateFlashScript = function() {
    if (!document.getElementById("generatedFlashScript")) {
        var generatedFlashScript=document.createElement('script');
        generatedFlashScript.src="/italia/it/data/js/flashbuilder.js";
        generatedFlashScript.id="generatedFlashScript";
        generatedFlashScript.type="text/javascript";
        document.getElementsByTagName('head')[0].appendChild(generatedFlashScript);
    }
};


/********* ZO Lazy Loading *********/
zo.loader = {
    config:{
        "flashbuilder":{"src":"/italia/it/data/js/flashbuilder.js","registered":false,"loaded":false}
        
    },

    loadSRCAndExecute:function(scriptSRC, callback, failback) {
        var scriptID = zo.loader.registerScriptSrc(scriptSRC);
        zo.loader.loadAndExecute(scriptID, callback, failback);
    },
    
    registerScriptSrc: function(scriptSRC) {
        var scriptID = '_'+scriptSRC.replace(/[^\w^\d]/g ,'');
        if (typeof zo.loader.config[scriptID] == 'undefined') {
            zo.loader.config[scriptID] = {"src":scriptSRC,"registered":false,"loaded":false};
        };
        return scriptID;
    },
    
    loadAndExecute:function(requiredScript, callback, failback) {
        if (!zo.loader.config[requiredScript]) {
            if (typeof failback == 'function') {
                failback();
            }
            return false;
        }

        if (typeof callback == 'function') {
            if (zo.loader.config[requiredScript].loaded) {
                callback();
                return true;
            }
            jQuery(document).bind(requiredScript+'_loaded',callback);
        }
        if (zo.loader.config[requiredScript].registered) {
            return true;
        }
        // Register Script
        zo.loader.config[requiredScript].registered=true;
        jQuery.getScript(zo.loader.config[requiredScript].src,function(ev) {
            zo.loader.config[requiredScript].loaded=true;
            jQuery(document).trigger(requiredScript+'_loaded');
        });
        return true;
    }
}
/********* ZO Lazy Loading *********/

// the following function will strip the local project domain from published external navigation urls if they match (=relative urls)
// function will only work if Js_new references to ASP Include 
stripLocalDomainFromExternalURL = function(URLToCheck) {
  var localDomain1="";
  var localDomain2="";
  previewOrPublish="publish";
  rgxp= new RegExp(localDomain1);
  if (previewOrPublish=="publish"  && localDomain1!="" && URLToCheck.search(rgxp)==0) { // published and url to check starts with localdomain 1
      URLToCheck=URLToCheck.replace(rgxp,"")
  }
  rgxp= new RegExp(localDomain2);
  if (previewOrPublish=="publish"  && localDomain2!="" && URLToCheck.search(rgxp)==0) { // published and url to check starts with localdomain 1
      URLToCheck=URLToCheck.replace(rgxp,"")
  }
  return URLToCheck;
}


function buildToolBox() {}
function buildFontSizeButtons() {}


//right column box display toggling
lastBoxToggleState = new Object();
tglFct = new Object();
animSpeed = new Object();
toggleBox = function(id,defaultState,cookieMode,animSpeedRatio) {
    var thisBox=document.getElementById("box"+id);
    var cookieName="toggleBox_"+id+"_53250C92360A413E89C41984BE1DE203_ITA"
// Check if a cookie has been set already for the display mode
    if (lastBoxToggleState[id]) {
        var toggleState =  lastBoxToggleState[id];
    }  
    else if (readCookie(cookieName) && cookieMode=="ON") {
        var toggleState =  readCookie(cookieName);
    } else {
        var toggleState =  defaultState;
    };   
// create object with values 
    var values = {
        ToggleOpened: {
            reverseValue:"ToggleClosed",
            title:"hide box content"
        },
        ToggleClosed: {
            reverseValue:"ToggleOpened",
            title:"show box content"
        }
    };
    if (!animSpeed[id]) {animSpeed[id]=(jQuery(thisBox).find(".content:first").height()*0.7*animSpeedRatio)+1;}
    if (toggleState=="ToggleClosed") {
        jQuery(thisBox).addClass("multiBoxToggleClosed");
        jQuery(thisBox).find(".content:first").css({display:"none"})
    };
// check if the anchor for toggling exists, if not, add to DOM
    if (!document.getElementById("box"+id+"toggle")) {
        if (!jQuery(thisBox).find("h6.multiBoxHd").length) {
            jQuery(thisBox).prepend("<h6 class='multiBoxHd'>&nbsp;</h6>");
        }
        var toggleSwitch=document.createElement("A");
        toggleSwitch.id="box"+id+"toggle";
        toggleSwitch.onclick = function() {
            toggleBox(id,'',cookieMode); 
        };
        toggleSwitch.href="javascript:void(0)";
        toggleSwitch.className="multiBoxDisplayToggle";
        jQuery(thisBox).find("h6:first").append(toggleSwitch);
        var toggleValue= toggleState;
    } else {
        replaceClass = new RegExp("multiBoxDisplay"+toggleState);
        tglFct[id] = function() {
            jQuery(thisBox).toggleClass("multiBoxToggleClosed");
            if(cookieMode=="ON") {createCookie(cookieName,values[toggleState].reverseValue,1000)}
        }
        jQuery(thisBox).find(".content:first").slideToggle(animSpeed[id]-1,tglFct[id]());
       var toggleValue= values[toggleState].reverseValue;
    }
    lastBoxToggleState[id]= toggleValue;
    document.getElementById("box"+id+"toggle").title=values[toggleValue].title;
};

/* empty function to prevent errors, function is overwritten in module*/
zo.bpnv=function(id){};
/**/



(function(){

jQuery(document).ready(function() {

 // check cookie
            var dbcl = jQuery.cookie("dbcl")
            if (dbcl == null) {
                dbclBuild();
            }
});



function dbclBuild() {

                       
                            var $cookieLayer = jQuery('<div id="cookieLayer" class="cookie-banner"></div>');
                        
                            var $button = jQuery('<a class="layer-button"></a>')
                                .attr('href','#')
                                .text('OK')
                                .bind('click', function(e) {
                                    /* set cookie , close layer */
                                    $cookieLayer.hide();                                 
                                    jQuery.cookie('dbcl', 'yes' , {expires: 1, path: '/'});   
                                    e.preventDefault();
                                })
                            ;
                        
                            var $cookieButton = jQuery('<div class="lastUnit"></div>')
                                .append($button) 
                            ;

                            var $wrapper = jQuery('<div class="cookie-wrapper"></div>')
                                .append('<div class="cookie-unit"><P>Questo sito utilizza sia cookie tecnici che di profilazione, anche di terze parti, per inviarti pubblicit&agrave; e servizi in linea con le tue preferenze. Se vuoi saperne di pi&ugrave; o negare il consenso a tutti o ad alcuni cookie <A href="/pbc/informativacookies.html" target=_blank>clicca qui</A>. Cliccando su ok o su qualunque elemento della pagina acconsenti all\'uso dei cookie.</P></div>')    
                                .append($cookieButton)
                                .appendTo($cookieLayer)
                            ;
                                               
                            $cookieLayer.appendTo(jQuery('#layoutPositioner')).show("slow");

}

    
 
})();
 /* */

jQuery(document).ready(function(){
    if(navigator.appName.indexOf('Internet Explorer')!=-1){
        jQuery('body').addClass('ie');
    }
});

(function($, global) {
    var Stage = function(selector) {
        this.options = {
            fadeTimeout: 2000,
            slideTimeout: 7000
        };
        this.$element = $(selector);
        this.$entries = this.$element.find('.stage-element');
        this.$wrapper = this.$element.find('.stage-wrapper');
        this.$gallery = this.$element.find('.stage-gallery');
        this.$navigation = $('<div class="stage-overlay-navigation" />');
        this.$mainNavigation = $('<div class="stage-navigation" />');
        this.entries = [];
        this.count = this.$entries.length;
        this.imagesAreVisible = false;
        this.index = 0;
        this.width = this.getWidth();
        this.direction = 'right';
        this.fadeTimer = setTimeout($.proxy(this.fadeOut, this), this.options.fadeTimeout);
        this.slideTimer = setTimeout($.proxy(this.slide, this), this.options.slideTimeout);
        this.isSmall = false;
        this.factor = 0.450901804;
    };
    Stage.prototype.init = function() {
        if (this.count > 0) {
            var index = 0,
                entry;
            this.$element.addClass('enabled');
            this.$entries.find('img').bind('load', $.proxy(this.reflow, this));
            this.position = {
                left: 0
            };
            for (; index < this.count; index++) {
                entry = new StageEntry(this.$entries.eq(index), this);
                this.entries.push(entry);
            }
            this.buildNavigation();
            this.register();
            this.reflow();
        }
    };
    Stage.prototype.buildNavigation = function() {
        var $overlayNavigation = $('<ul>'),
            $navigation = $('<ul>'),
            index = 1,
            _this = this,
            entries = [];
        if (this.count > 1) {
            $overlayNavigation
                .append('<li class="prev"/>')
                .append('<li class="next"/>');
            this.$navigation.append($overlayNavigation);
            this.$element.append(this.$navigation);
            for (; index <= this.count; index++) {
                entries.push('<li><a href="#'+index+'">'+index+'</a></li>');
            }
            $navigation.append(entries.join("\n"));
            this.$mainNavigation.append($navigation);
            this.$element.append(this.$mainNavigation);
            this.$mainNavigation
                .find('a')
                .bind('click', function(ev) {
                    var $this = $(this),
                        index = _this.$mainNavigation.find('li').index($this.parent());
                    _this.jumpTo(index);
                    _this.makeImageVisible();
                    ev.preventDefault();
                });
        }
    };
    Stage.prototype.slide = function() {
            if (this.count > 1) {
                if (this.index >= (this.count - 1)) {
                    this.index = -1;
                }
                this.next();
                this.slideTimer = setTimeout($.proxy(this.slide, this), this.options.slideTimeout);
            }
       
    };
    Stage.prototype.fadeOut = function() {
        this.$navigation.fadeOut();
    };
    Stage.prototype.fadeIn = function() {
        this.$navigation.fadeIn();
    };

    Stage.prototype.register = function() {
        var _this = this,
            swiped = false;
 $(window).bind('resize', $.proxy(this.reflow, this));
        if (this.count > 1) {
            this.$element
            this.$element.mouseout($.proxy(function() {
                clearTimeout(this.fadeTimer);
                clearTimeout(this.slideTimer);
                this.fadeIn();
            }, this));
            this.$element.mouseout($.proxy(function() {
                this.fadeTimer = setTimeout($.proxy(this.fadeOut, this), this.options.fadeTimeout);
                this.slideTimer = setTimeout($.proxy(this.slide, this), this.options.slideTimeout);
            }, this));
            this.$navigation
            .bind('click', function(ev) {
                    var $element = $(ev.target);
                    if ($element.hasClass('next')) {
                        _this.direction = 'right';
                        _this.next();
                    } else if ($element.hasClass('prev')) {
                        _this.direction = 'left';
                        _this.prev();
                    }
                });
        }
        this.$entries
            .bind('click', function(ev) {
                var $this = $(this),
                    $link;
                $link = $this.eq(_this.index).find('a');
                if ($link.length > 0) {
                    if ($link.attr('target') === '_blank') {
                        window.open($link.attr('href'));
                    } else {
                        location.href = $link.attr('href');
                    }
                }
            });
    };
    Stage.prototype.next = function() {
        this.makeImageVisible();
        this.index++;
        this.jumpTo(this.index);
    };
    Stage.prototype.prev = function() {
        this.makeImageVisible();
        this.index--;
        this.jumpTo(this.index);
    };
    Stage.prototype.makeImageVisible = function() {
        if(this.imagesAreVisible) {
            return;
        }
        this.imagesAreVisible = true;
        this.$entries.find('a > img').css('visibility', 'visible');
    };
    Stage.prototype.jumpTo = function(index) {
        this.width = this.getWidth();
        this.index = index;
        if (index < 0) {
            this.index = 0;
        } else if (index >= this.count) {
            this.index = this.count - 1;
        }
        this.$navigation.find('li').show();
        if (this.index === 0) {
            this.$navigation.find('.prev').hide();
        }
        if (this.index === this.count - 1) {
            this.$navigation.find('.next').hide();
        }
        this.$mainNavigation
            .find('a')
            .removeClass('active')
            .eq(this.index)
            .addClass('active');
        this.$wrapper.stop().animate({ left: - (this.index * this.width.width)});
    };
    Stage.prototype.move = function(x) {
        this.$wrapper.css('left', this.position.left + x);
    };
    Stage.prototype.reflow = function() {
        var index = 0,
            maxHeight = 400,
            _this = this,
            height;
        this.width = this.getWidth();
        for (; index < this.count; index++) {
            this.entries[index].reflow({ width: this.width.width });
        }
        this.$wrapper.width(this.count * this.width.width);
        height = this.width.width * this.factor;
        this.$gallery.height(height);
        this.$element.height(height);
        if(height > maxHeight && $('body').hasClass('special')) {
            this.$element.height(maxHeight);
            this.$gallery.height(maxHeight);
            // check for stage-element-text-wrapper
            this.$entries.each(function() {
                var $singleEntry = $(this);
                    $textWrapper = $singleEntry.find('.stage-element-text-wrapper');
                // center image 
                var margin = ($singleEntry.find('img:first').height() - maxHeight) / 2;
                $singleEntry.css('margin-top', -margin);
                
                if($textWrapper) {
                    var wrapperMargin = (maxHeight - ((maxHeight - $textWrapper.height()) / 2)) + margin;
                    $textWrapper.css('margin-top', -wrapperMargin);
                }
            });
        } else {
            this.$wrapper.css('margin-top', 0);
            // check for stage-element-text-wrapper
            this.$entries.each(function() {
                var $singleEntry = $(this);
                    $textWrapper = $singleEntry.find('.stage-element-text-wrapper');
                    if($textWrapper) {
                        if((height - $textWrapper.height()) < 40){
                            var newHeight = ($textWrapper.height() + 20 + $singleEntry.find('img:first').height()) -50;
                            $textWrapper.css('margin-top', '-50px');
                            _this.$gallery.height(newHeight);
                            _this.$element.height(newHeight);
                        } else {
                            
                            var margin = $singleEntry.find('img:first').height() - height,
                                wrapperMargin = (height - ((height - $textWrapper.height()) / 2)) + margin;
                            $textWrapper.css('margin-top', -wrapperMargin);
                            // $textWrapper.css('margin-top', 0);
                        }
                    }
            });
        }
        this.jumpTo(this.index);
    };
    Stage.prototype.getWidth = function() {
        return { width: this.$element.width() };
    };
    var StageEntry = function($element, parent) {
        this.$element = $element;
        this.parent = parent;
        this.$text = this.$element.find('.stage-element-text');
    };
    StageEntry.prototype.reflow = function(options) {
        var textHeight = this.$text.height(),
            elementHeight;
        this.$element.width(options.width);
        elementHeight = this.parent.$element.height();
        offset = 30;
        this.$text.css({
            marginTop: 0,
            top: (elementHeight - textHeight + offset) / 2
        });
    };
    global.zo = global.zo || {};
    global.zo.rwd = global.zo.rwd || {};
    global.zo.rwd.ModuleStage = Stage;
})(jQuery, window);

/* *//*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 * 
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 *
 * Version: 1.3.1 (05/03/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(jQuery) {
    var tmp, loading, overlay, wrap, outer, inner, close, nav_left, nav_right,
        selectedIndex = 0, selectedOpts = {}, selectedArray = [], currentIndex = 0, currentOpts = {}, currentArray = [],
        ajaxLoader = null, imgPreloader = new Image(), imgRegExp = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i, swfRegExp = /[^\.]\.(swf)\s*jQuery/i,
        loadingTimer, loadingFrame = 1,
        start_pos, final_pos, busy = false, shadow = 20, fx = jQuery.extend(jQuery('<div/>')[0], { prop: 0 }), titleh = 0, 
        isIE6 = !jQuery.support.opacity && !window.XMLHttpRequest,
        /*
         * Private methods 
         */
        fancybox_abort = function() {
            loading.hide();
            imgPreloader.onerror = imgPreloader.onload = null;
            if (ajaxLoader) {
                ajaxLoader.abort();
            }
            tmp.empty();
        },
        fancybox_error = function() {
            jQuery.fancybox('<p id="fancybox_error">The requested content cannot be loaded.<br />Please try again later.</p>', {
                'scrolling'        : 'no',
                'padding'        : 20,
                'transitionIn'    : 'none',
                'transitionOut'    : 'none'
            });
        },
        fancybox_get_viewport = function() {
            return [ jQuery(window).width(), jQuery(window).height(), jQuery(document).scrollLeft(), jQuery(document).scrollTop() ];
        },
        fancybox_get_zoom_to = function () {
            var view    = fancybox_get_viewport(),
                to        = {},
                margin = currentOpts.margin,
                resize = currentOpts.autoScale,
                horizontal_space    = (shadow + margin) * 2,
                vertical_space        = (shadow + margin) * 2,
                double_padding        = (currentOpts.padding * 2),
                
                ratio;
            if (currentOpts.width.toString().indexOf('%') > -1) {
                to.width = ((view[0] * parseFloat(currentOpts.width)) / 100) - (shadow * 2) ;
                resize = false;
            } else {
                to.width = currentOpts.width + double_padding;
            }
            if (currentOpts.height.toString().indexOf('%') > -1) {
                to.height = ((view[1] * parseFloat(currentOpts.height)) / 100) - (shadow * 2);
                resize = false;
            } else {
                to.height = currentOpts.height + double_padding;
            }
            if (resize && (to.width > (view[0] - horizontal_space) || to.height > (view[1] - vertical_space))) {
                if (selectedOpts.type == 'image' || selectedOpts.type == 'swf') {
                    horizontal_space    += double_padding;
                    vertical_space        += double_padding;
                    ratio = Math.min(Math.min( view[0] - horizontal_space, currentOpts.width) / currentOpts.width, Math.min( view[1] - vertical_space, currentOpts.height) / currentOpts.height);
                    to.width    = Math.round(ratio * (to.width    - double_padding)) + double_padding;
                    to.height    = Math.round(ratio * (to.height    - double_padding)) + double_padding;
                } else {
                    to.width    = Math.min(to.width,    (view[0] - horizontal_space));
                    to.height    = Math.min(to.height,    (view[1] - vertical_space));
                }
            }
            to.top    = view[3] + ((view[1] - (to.height    + (shadow * 2 ))) * 0.5);
            to.left    = view[2] + ((view[0] - (to.width    + (shadow * 2 ))) * 0.5);
            if (currentOpts.autoScale === false) {
                to.top    = Math.max(view[3] + margin, to.top);
                to.left    = Math.max(view[2] + margin, to.left);
            }
            return to;
        },
        fancybox_format_title = function(title) {
            if (title && title.length) {
                switch (currentOpts.titlePosition) {
                    case 'inside':
                        return title;
                    case 'over':
                        return '<span id="fancybox-title-over">' + title + '</span>';
                    default:
                        return '<span id="fancybox-title-wrap"><span id="fancybox-title-left"></span><span id="fancybox-title-main">' + title + '</span><span id="fancybox-title-right"></span></span>';
                }
            }
            return false;
        },
        fancybox_process_title = function() {
            var title    = currentOpts.title,
                width    = final_pos.width - (currentOpts.padding * 2),
                titlec    = 'fancybox-title-' + currentOpts.titlePosition;
                
            jQuery('#fancybox-title').remove();
            titleh = 0;
            if (currentOpts.titleShow === false) {
                return;
            }
            title = jQuery.isFunction(currentOpts.titleFormat) ? currentOpts.titleFormat(title, currentArray, currentIndex, currentOpts) : fancybox_format_title(title);
            if (!title || title === '') {
                return;
            }
            jQuery('<div id="fancybox-title" class="' + titlec + '" />').css({
                'width'            : width,
                'paddingLeft'    : currentOpts.padding,
                'paddingRight'    : currentOpts.padding
            }).html(title).appendTo('body');
            switch (currentOpts.titlePosition) {
                case 'inside':
                    titleh = jQuery("#fancybox-title").outerHeight(true) - currentOpts.padding;
                    final_pos.height += titleh;
                break;
                case 'over':
                    jQuery('#fancybox-title').css('bottom', currentOpts.padding);
                break;
                default:
                    jQuery('#fancybox-title').css('bottom', jQuery("#fancybox-title").outerHeight(true) * -1);
                break;
            }
            jQuery('#fancybox-title').appendTo( outer ).hide();
        },
        fancybox_set_navigation = function() {
            jQuery(document).unbind('keydown.fb').bind('keydown.fb', function(e) {
                if (e.keyCode == 27 && currentOpts.enableEscapeButton) {
                    e.preventDefault();
                    jQuery.fancybox.close();
                } else if (e.keyCode == 37) {
                    e.preventDefault();
                    jQuery.fancybox.prev();
                } else if (e.keyCode == 39) {
                    e.preventDefault();
                    jQuery.fancybox.next();
                }
            });
            if (jQuery.fn.mousewheel) {
                wrap.unbind('mousewheel.fb');
                if (currentArray.length > 1) {
                    wrap.bind('mousewheel.fb', function(e, delta) {
                        e.preventDefault();
                        if (busy || delta === 0) {
                            return;
                        }
                        if (delta > 0) {
                            jQuery.fancybox.prev();
                        } else {
                            jQuery.fancybox.next();
                        }
                    });
                }
            }
            if (!currentOpts.showNavArrows) { return; }
            if ((currentOpts.cyclic && currentArray.length > 1) || currentIndex !== 0) {
                nav_left.show();
            }

            if ((currentOpts.cyclic && currentArray.length > 1) || currentIndex != (currentArray.length -1)) {
                nav_right.show();
            }
        },
        fancybox_preload_images = function() {
            var href, 
                objNext;
                
            if ((currentArray.length -1) > currentIndex) {
                href = currentArray[ currentIndex + 1 ].href;
                if (typeof href !== 'undefined' && href.match(imgRegExp)) {
                    objNext = new Image();
                    objNext.src = href;
                }
            }
            if (currentIndex > 0) {
                href = currentArray[ currentIndex - 1 ].href;
                if (typeof href !== 'undefined' && href.match(imgRegExp)) {
                    objNext = new Image();
                    objNext.src = href;
                }
            }
        },
        _finish = function () {
            inner.css('overflow', (currentOpts.scrolling == 'auto' ? (currentOpts.type == 'image' || currentOpts.type == 'iframe' || currentOpts.type == 'swf' ? 'hidden' : 'auto') : (currentOpts.scrolling == 'yes' ? 'auto' : 'visible')));
            if (!jQuery.support.opacity) {
                inner.get(0).style.removeAttribute('filter');
                wrap.get(0).style.removeAttribute('filter');
            }
            jQuery('#fancybox-title').show();
            if (currentOpts.hideOnContentClick)    {
                inner.one('click', jQuery.fancybox.close);
            }
            if (currentOpts.hideOnOverlayClick)    {
                overlay.one('click', jQuery.fancybox.close);
            }
            if (currentOpts.showCloseButton) {
                close.show();
            }
            fancybox_set_navigation();
            jQuery(window).bind("resize.fb", jQuery.fancybox.center);
            if (currentOpts.centerOnScroll) {
                jQuery(window).bind("scroll.fb", jQuery.fancybox.center);
            } else {
                jQuery(window).unbind("scroll.fb");
            }
            if (jQuery.isFunction(currentOpts.onComplete)) {
                currentOpts.onComplete(currentArray, currentIndex, currentOpts);
            }
            busy = false;
            fancybox_preload_images();
        },
        fancybox_draw = function(pos) {
            var width    = Math.round(start_pos.width    + (final_pos.width    - start_pos.width)    * pos),
                height    = Math.round(start_pos.height    + (final_pos.height    - start_pos.height)    * pos),
                top        = Math.round(start_pos.top    + (final_pos.top    - start_pos.top)    * pos),
                left    = Math.round(start_pos.left    + (final_pos.left    - start_pos.left)    * pos);
            wrap.css({
                'width'        : width        + 'px',
                'height'    : height    + 'px',
                'top'        : top        + 'px',
                'left'        : left        + 'px'
            });
            width    = Math.max(width - currentOpts.padding * 2, 0);
            height    = Math.max(height - (currentOpts.padding * 2 + (titleh * pos)), 0);
            inner.css({
                'width'        : width        + 'px',
                'height'    : height    + 'px'
            });
            if (typeof final_pos.opacity !== 'undefined') {
                wrap.css('opacity', (pos < 0.5 ? 0.5 : pos));
            }
        },
        fancybox_get_obj_pos = function(obj) {
            var pos        = obj.offset();
            pos.top        += parseFloat( obj.css('paddingTop') )    || 0;
            pos.left    += parseFloat( obj.css('paddingLeft') )    || 0;
            pos.top        += parseFloat( obj.css('border-top-width') )    || 0;
            pos.left    += parseFloat( obj.css('border-left-width') )    || 0;
            pos.width    = obj.width();
            pos.height    = obj.height();
            return pos;
        },
        fancybox_get_zoom_from = function() {
            var orig = selectedOpts.orig ? jQuery(selectedOpts.orig) : false,
                from = {},
                pos,
                view;
            if (orig && orig.length) {
                pos = fancybox_get_obj_pos(orig);
                from = {
                    width    : (pos.width    + (currentOpts.padding * 2)),
                    height    : (pos.height    + (currentOpts.padding * 2)),
                    top        : (pos.top        - currentOpts.padding - shadow),
                    left    : (pos.left        - currentOpts.padding - shadow)
                };
                
            } else {
                view = fancybox_get_viewport();
                from = {
                    width    : 1,
                    height    : 1,
                    top        : view[3] + view[1] * 0.5,
                    left    : view[2] + view[0] * 0.5
                };
            }
            return from;
        },
        fancybox_show = function() {
            loading.hide();
            if (wrap.is(":visible") && jQuery.isFunction(currentOpts.onCleanup)) {
                if (currentOpts.onCleanup(currentArray, currentIndex, currentOpts) === false) {
                    jQuery.event.trigger('fancybox-cancel');
                    busy = false;
                    return;
                }
            }
            currentArray    = selectedArray;
            currentIndex    = selectedIndex;
            currentOpts        = selectedOpts;
            inner.get(0).scrollTop    = 0;
            inner.get(0).scrollLeft    = 0;
            if (currentOpts.overlayShow) {
                if (isIE6) {
                    jQuery('select:not(#fancybox-tmp select)').filter(function() {
                        return this.style.visibility !== 'hidden';
                    }).css({'visibility':'hidden'}).one('fancybox-cleanup', function() {
                        this.style.visibility = 'inherit';
                    });
                }
                overlay.css({
                    'background-color'    : currentOpts.overlayColor,
                    'opacity'            : currentOpts.overlayOpacity
                }).unbind().show();
            }
            final_pos = fancybox_get_zoom_to();
            fancybox_process_title();
            if (wrap.is(":visible")) {
                jQuery( close.add( nav_left ).add( nav_right ) ).hide();
                var pos = wrap.position(),
                    equal;
                start_pos = {
                    top        :    pos.top ,
                    left    :    pos.left,
                    width    :    wrap.width(),
                    height    :    wrap.height()
                };
                equal = (start_pos.width == final_pos.width && start_pos.height == final_pos.height);
                inner.fadeOut(currentOpts.changeFade, function() {
                    var finish_resizing = function() {
                        inner.html( tmp.contents() ).fadeIn(currentOpts.changeFade, _finish);
                    };
                    
                    jQuery.event.trigger('fancybox-change');
                    inner.empty().css('overflow', 'hidden');
                    if (equal) {
                        inner.css({
                            top            : currentOpts.padding,
                            left        : currentOpts.padding,
                            width        : Math.max(final_pos.width    - (currentOpts.padding * 2), 1),
                            height        : Math.max(final_pos.height    - (currentOpts.padding * 2) - titleh, 1)
                        });
                        
                        finish_resizing();
                    } else {
                        inner.css({
                            top            : currentOpts.padding,
                            left        : currentOpts.padding,
                            width        : Math.max(start_pos.width    - (currentOpts.padding * 2), 1),
                            height        : Math.max(start_pos.height    - (currentOpts.padding * 2), 1)
                        });
                        
                        fx.prop = 0;
                        jQuery(fx).animate({ prop: 1 }, {
                             duration    : currentOpts.changeSpeed,
                             easing        : currentOpts.easingChange,
                             step        : fancybox_draw,
                             complete    : finish_resizing
                        });
                    }
                });
                return;
            }
            wrap.css('opacity', 1);
            if (currentOpts.transitionIn == 'elastic') {
                start_pos = fancybox_get_zoom_from();
                inner.css({
                        top            : currentOpts.padding,
                        left        : currentOpts.padding,
                        width        : Math.max(start_pos.width    - (currentOpts.padding * 2), 1),
                        height        : Math.max(start_pos.height    - (currentOpts.padding * 2), 1)
                    })
                    .html( tmp.contents() );
                wrap.css(start_pos).show();
                if (currentOpts.opacity) {
                    final_pos.opacity = 0;
                }
                fx.prop = 0;
                jQuery(fx).animate({ prop: 1 }, {
                     duration    : currentOpts.speedIn,
                     easing        : currentOpts.easingIn,
                     step        : fancybox_draw,
                     complete    : _finish
                });
            } else {
                inner.css({
                        top            : currentOpts.padding,
                        left        : currentOpts.padding,
                        width        : Math.max(final_pos.width    - (currentOpts.padding * 2), 1),
                        height        : Math.max(final_pos.height    - (currentOpts.padding * 2) - titleh, 1)
                    })
                    .html( tmp.contents() );
                wrap.css( final_pos ).fadeIn( currentOpts.transitionIn == 'none' ? 0 : currentOpts.speedIn, _finish );
            }
        },
        fancybox_process_inline = function() {
            tmp.width(    selectedOpts.width );
            tmp.height(    selectedOpts.height );
            if (selectedOpts.width    == 'auto') {
                selectedOpts.width = tmp.width();
            }
            if (selectedOpts.height    == 'auto') {
                selectedOpts.height    = tmp.height();
            }
            fancybox_show();
        },
        
        fancybox_process_image = function() {
            busy = true;
            selectedOpts.width    = imgPreloader.width;
            selectedOpts.height    = imgPreloader.height;
            jQuery("<img />").attr({
                'id'    : 'fancybox-img',
                'src'    : imgPreloader.src,
                'alt'    : selectedOpts.title
            }).appendTo( tmp );

            nav_left.css({'height':imgPreloader.height+'px'});
            nav_right.css({'height':imgPreloader.height+'px'});

            fancybox_show();
        },
        fancybox_start = function() {
            fancybox_abort();
            var obj    = selectedArray[ selectedIndex ],
                href, 
                type, 
                title,
                str,
                emb,
                selector,
                data;
            selectedOpts = jQuery.extend({}, jQuery.fn.fancybox.defaults, (typeof jQuery(obj).data('fancybox') == 'undefined' ? selectedOpts : jQuery(obj).data('fancybox')));
            title = obj.title || jQuery(obj).title || selectedOpts.title || '';
            
            if (obj.nodeName && !selectedOpts.orig) {
                selectedOpts.orig = jQuery(obj).children("img:first").length ? jQuery(obj).children("img:first") : jQuery(obj);
            }
            if (title === '' && selectedOpts.orig) {
                title = selectedOpts.orig.attr('alt');
            }
            if (obj.nodeName && (/^(?:javascript|#)/i).test(obj.href)) {
                href = selectedOpts.href || null;
            } else {
                href = selectedOpts.href || obj.href || null;
            }
            if (selectedOpts.type) {
                type = selectedOpts.type;
                if (!href) {
                    href = selectedOpts.content;
                }
                
            } else if (selectedOpts.content) {
                type    = 'html';
            } else if (href) {
                if (href.match(imgRegExp)) {
                    type = 'image';
                } else if (href.match(swfRegExp)) {
                    type = 'swf';
                } else if (jQuery(obj).hasClass("iframe")) {
                    type = 'iframe';
                } else if (href.match(/#/)) {
                    obj = href.substr(href.indexOf("#"));
                    type = jQuery(obj).length > 0 ? 'inline' : 'ajax';
                } else {
                    type = 'ajax';
                }
            } else {
                type = 'inline';
            }
            selectedOpts.type    = type;
            selectedOpts.href    = href;
            selectedOpts.title    = title;
            if (selectedOpts.autoDimensions && selectedOpts.type !== 'iframe' && selectedOpts.type !== 'swf') {
                selectedOpts.width        = 'auto';
                selectedOpts.height        = 'auto';
            }
            if (selectedOpts.modal) {
                selectedOpts.overlayShow        = true;
                selectedOpts.hideOnOverlayClick    = false;
                selectedOpts.hideOnContentClick    = false;
                selectedOpts.enableEscapeButton    = false;
                selectedOpts.showCloseButton    = false;
            }
            if (jQuery.isFunction(selectedOpts.onStart)) {
                if (selectedOpts.onStart(selectedArray, selectedIndex, selectedOpts) === false) {
                    busy = false;
                    return;
                }
            }
            tmp.css('padding', (shadow + selectedOpts.padding + selectedOpts.margin));
            jQuery('.fancybox-inline-tmp').unbind('fancybox-cancel').bind('fancybox-change', function() {
                jQuery(this).replaceWith(inner.children());
            });
            switch (type) {
                case 'html' :
                    tmp.html( selectedOpts.content );
                    fancybox_process_inline();
                break;
                case 'inline' :
                    jQuery('<div class="fancybox-inline-tmp" />').hide().insertBefore( jQuery(obj) ).bind('fancybox-cleanup', function() {
                        jQuery(this).replaceWith(inner.children());
                    }).bind('fancybox-cancel', function() {
                        jQuery(this).replaceWith(tmp.children());
                    });
                    jQuery(obj).appendTo(tmp);
                    fancybox_process_inline();
                break;
                case 'image':
                    busy = false;
                    jQuery.fancybox.showActivity();
                    imgPreloader = new Image();
                    imgPreloader.onerror = function() {
                        fancybox_error();
                    };
                    imgPreloader.onload = function() {
                        imgPreloader.onerror = null;
                        imgPreloader.onload = null;
                        fancybox_process_image();
                    };
                    imgPreloader.src = href;
        
                break;
                case 'swf':
                    str = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"><param name="movie" value="' + href + '"></param>';
                    emb = '';
                    
                    jQuery.each(selectedOpts.swf, function(name, val) {
                        str += '<param name="' + name + '" value="' + val + '"></param>';
                        emb += ' ' + name + '="' + val + '"';
                    });
                    str += '<embed src="' + href + '" type="application/x-shockwave-flash" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"' + emb + '></embed></object>';
                    tmp.html(str);
                    fancybox_process_inline();
                break;
                case 'ajax':
                    selector    = href.split('#', 2);
                    data        = selectedOpts.ajax.data || {};
                    if (selector.length > 1) {
                        href = selector[0];
                        if (typeof data == "string") {
                            data += '&selector=' + selector[1];
                        } else {
                            data.selector = selector[1];
                        }
                    }
                    busy = false;
                    jQuery.fancybox.showActivity();
                    ajaxLoader = jQuery.ajax(jQuery.extend(selectedOpts.ajax, {
                        url        : href,
                        data    : data,
                        error    : fancybox_error,
                        success : function(data, textStatus, XMLHttpRequest) {
                            if (ajaxLoader.status == 200) {
                                tmp.html( data );
                                fancybox_process_inline();
                            }
                        }
                    }));
                break;
                case 'iframe' :
                    jQuery('<iframe id="fancybox-frame" name="fancybox-frame' + new Date().getTime() + '" frameborder="0" hspace="0" scrolling="' + selectedOpts.scrolling + '" src="' + selectedOpts.href + '"></iframe>').appendTo(tmp);
                    fancybox_show();
                break;
            }
        },
        fancybox_animate_loading = function() {
            if (!loading.is(':visible')){
                clearInterval(loadingTimer);
                return;
            }
            jQuery('div', loading).css('top', (loadingFrame * -40) + 'px');
            loadingFrame = (loadingFrame + 1) % 12;
        },
        fancybox_init = function() {
            if (jQuery("#fancybox-wrap").length) {
                return;
            }
            jQuery('body').append(
                tmp            = jQuery('<div id="fancybox-tmp"></div>'),
                loading        = jQuery('<div id="fancybox-loading"><div></div></div>'),
                overlay        = jQuery('<div id="fancybox-overlay"></div>'),
                wrap        = jQuery('<div id="fancybox-wrap"></div>')
            );
            if (!jQuery.support.opacity) {
                wrap.addClass('fancybox-ie');
                loading.addClass('fancybox-ie');
            }
            outer = jQuery('<div id="fancybox-outer"></div>')
                .appendTo( wrap );
            outer.append(
                inner        = jQuery('<div id="fancybox-inner"></div>'),
                close = jQuery('<a id="fancybox-close"></a>'),
                nav_left    = jQuery('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),
                nav_right    = jQuery('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')
            );
            close.click(jQuery.fancybox.close);
            loading.click(jQuery.fancybox.cancel);
            nav_left.click(function(e) {
                e.preventDefault();
                jQuery.fancybox.prev();
            });
            nav_right.click(function(e) {
                e.preventDefault();
                jQuery.fancybox.next();
            });
            if (isIE6) {
                var my_height = jQuery("#layoutMain").height()+jQuery("#layoutFooter").height();
                overlay.get(0).style.setExpression('height',    "document.body.scrollHeight > document.body.offsetHeight ? document.body.scrollHeight : document.body.offsetHeight + 'px'");
                overlay.get(0).style.setExpression('height', my_height);
                loading.get(0).style.setExpression('top',        "(-20 + (document.documentElement.clientHeight ? document.documentElement.clientHeight/2 : document.body.clientHeight/2 ) + ( ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop )) + 'px'");
                outer.prepend('<iframe id="fancybox-hide-sel-frame" src="javascript:\'\';" scrolling="no" frameborder="0" ></iframe>');
            }
        };
    /*
     * Public methods 
     */
    jQuery.fn.fancybox = function(options) {
        jQuery(this)
            .data('fancybox', jQuery.extend({}, options, (jQuery.metadata ? jQuery(this).metadata() : {})))
            .unbind('click.fb').bind('click.fb', function(e) {
                e.preventDefault();
                if (busy) {
                    return;
                }
                busy = true;
                jQuery(this).blur();
                selectedArray    = [];
                selectedIndex    = 0;
                var rel = jQuery(this).closest('.fbgallery').attr('id') || ''; // Edit MA, 15-03-2010, Reddot-compatibility
                if (!rel || rel == '' || rel === 'nofollow') {
                    selectedArray.push(this);
                } else {
                    selectedArray    = jQuery(".fbgallery#" + rel + " a.fbimg"); // Edit MA, 15-03-2010, Reddot-compatibility
                    selectedIndex    = selectedArray.index( this );
                }
                fancybox_start();
                return false;
            });
        return this;
    };
    jQuery.fancybox = function(obj) {
        if (busy) {
            return;
        }
        busy = true;
        var opts = typeof arguments[1] !== 'undefined' ? arguments[1] : {};
        selectedArray    = [];
        selectedIndex    = opts.index || 0;
        if (jQuery.isArray(obj)) {
            for (var i = 0, j = obj.length; i < j; i++) {
                if (typeof obj[i] == 'object') {
                    jQuery(obj[i]).data('fancybox', jQuery.extend({}, opts, obj[i]));
                } else {
                    obj[i] = jQuery({}).data('fancybox', jQuery.extend({content : obj[i]}, opts));
                }
            }
            selectedArray = jQuery.merge(selectedArray, obj);
        } else {
            if (typeof obj == 'object') {
                jQuery(obj).data('fancybox', jQuery.extend({}, opts, obj));
            } else {
                obj = jQuery({}).data('fancybox', jQuery.extend({content : obj}, opts));
            }
            selectedArray.push(obj);
        }
        if (selectedIndex > selectedArray.length || selectedIndex < 0) {
            selectedIndex = 0;
        }
        fancybox_start();
    };
    jQuery.fancybox.showActivity = function() {
        clearInterval(loadingTimer);
        loading.show();
        loadingTimer = setInterval(fancybox_animate_loading, 66);
    };
    jQuery.fancybox.hideActivity = function() {
        loading.hide();
    };
    jQuery.fancybox.next = function() {
        return jQuery.fancybox.pos( currentIndex + 1);
    };
    
    jQuery.fancybox.prev = function() {
        return jQuery.fancybox.pos( currentIndex - 1);
    };
    jQuery.fancybox.pos = function(pos) {
        if (busy) {
            return;
        }
        pos = parseInt(pos, 10);
        if (pos > -1 && currentArray.length > pos) {
            selectedIndex = pos;
            fancybox_start();
        }
        if (currentOpts.cyclic && currentArray.length > 1 && pos < 0) {
            selectedIndex = currentArray.length - 1;
            fancybox_start();
        }
        if (currentOpts.cyclic && currentArray.length > 1 && pos >= currentArray.length) {
            selectedIndex = 0;
            fancybox_start();
        }
        return;
    };
    jQuery.fancybox.cancel = function() {
        if (busy) {
            return;
        }
        busy = true;
        jQuery.event.trigger('fancybox-cancel');
        fancybox_abort();
        if (selectedOpts && jQuery.isFunction(selectedOpts.onCancel)) {
            selectedOpts.onCancel(selectedArray, selectedIndex, selectedOpts);
        }
        busy = false;
    };
    // Note: within an iframe use - parent.jQuery.fancybox.close();
    jQuery.fancybox.close = function(e) {
        if (busy || wrap.is(':hidden')) {
            return;
        }
        busy = true;
        if (currentOpts && jQuery.isFunction(currentOpts.onCleanup)) {
            if (currentOpts.onCleanup(currentArray, currentIndex, currentOpts) === false) {
                busy = false;
                return;
            }
        }
        fancybox_abort();
        jQuery(close.add( nav_left ).add( nav_right )).hide();
        jQuery('#fancybox-title').remove();
        wrap.add(inner).add(overlay).unbind();
        jQuery(window).unbind("resize.fb scroll.fb");
        jQuery(document).unbind('keydown.fb');
        function _cleanup() {
            overlay.fadeOut('fast');
            wrap.hide();
            jQuery.event.trigger('fancybox-cleanup');
            inner.empty();
            if (jQuery.isFunction(currentOpts.onClosed)) {
                currentOpts.onClosed(currentArray, currentIndex, currentOpts);
            }
            currentArray    = selectedOpts    = [];
            currentIndex    = selectedIndex    = 0;
            currentOpts        = selectedOpts    = {};
            busy = false;
        }
        inner.css('overflow', 'hidden');
        if (currentOpts.transitionOut == 'elastic') {
            start_pos = fancybox_get_zoom_from();
            var pos = wrap.position();
            final_pos = {
                top        :    pos.top ,
                left    :    pos.left,
                width    :    wrap.width(),
                height    :    wrap.height()
            };
            if (currentOpts.opacity) {
                final_pos.opacity = 1;
            }
            fx.prop = 1;
            jQuery(fx).animate({ prop: 0 }, {
                 duration    : currentOpts.speedOut,
                 easing        : currentOpts.easingOut,
                 step        : fancybox_draw,
                 complete    : _cleanup
            });
        } else {
            wrap.fadeOut( currentOpts.transitionOut == 'none' ? 0 : currentOpts.speedOut, _cleanup);
        }
        return false;
    };
    jQuery.fancybox.resize = function() {
        var c, h;
        
        if (busy || wrap.is(':hidden')) {
            return;
        }
        busy = true;
        c = inner.wrapInner("<div style='overflow:auto'></div>").children();
        h = c.height();
        wrap.css({height:    h + (currentOpts.padding * 2) + titleh});
        inner.css({height:    h});
        c.replaceWith(c.children());
        jQuery.fancybox.center();
    };
    jQuery.fancybox.center = function() {
        busy = true;
        var view    = fancybox_get_viewport(),
            margin    = currentOpts.margin,
            to        = {};
        to.top    = view[3] + ((view[1] - ((wrap.height() - titleh) + (shadow * 2 ))) * 0.5);
        to.left    = view[2] + ((view[0] - (wrap.width() + (shadow * 2 ))) * 0.5);
        to.top    = Math.max(view[3] + margin, to.top);
        to.left    = Math.max(view[2] + margin, to.left);
        wrap.css(to);
        busy = false;
    };


    jQuery.fn.fancybox.defaults = {
        padding                :    0,
        margin                :    20,
        opacity                :    false,
        modal                :    false,
        cyclic                :    false,
        scrolling            :    'no',    // 'auto', 'yes' or 'no'
        width                :    560,
        height                :    340,
        autoScale            :    false,
        autoDimensions        :    true,
        centerOnScroll        :    false,
        ajax                :    {},
        swf                    :    { wmode: 'transparent' },
        hideOnOverlayClick    :    true,
        hideOnContentClick    :    false,
        overlayShow            :    true,
        overlayOpacity        :    0.7,
        overlayColor        :    '#d6e0f0',
        titleShow            :    true,
        titlePosition        :    'inside',    // 'outside', 'inside' or 'over'
        titleFormat            :    formatTitle,
        transitionIn        :    'fade',    // 'elastic', 'fade' or 'none'
        transitionOut        :    'fade',    // 'elastic', 'fade' or 'none'
        speedIn                :    300,
        speedOut            :    300,
        changeSpeed            :    300,
        changeFade            :    'fast',
        easingIn            :    'swing',
        easingOut            :    'swing',
        showCloseButton        :    false,
        showNavArrows        :    true,
        enableEscapeButton    :    true,
        onStart                :    null,
        onCancel            :    null,
        onComplete            :    null,
        onCleanup            :    null,
        onClosed            :    null
    };
    jQuery(document).ready(function() {
        fancybox_init();
        jQuery('a.fbimg').fancybox();
        jQuery('a.fbinline').fancybox({ 'titleFormat' : formatTitleIotd });
    });
})(jQuery);

/*Additional FancyBoxcode*/

function formatTitle(title, currentOpts) {
    return '<div id="galleryTitle" class="fbimgShadow"><span><a id="galleryClose" href="#" onclick="return jQuery.fancybox.close();">close</a></span>' + (title && title.length ? title : '' ) + '&nbsp;</div>';
}
function formatTitleIotd(title, currentOpts) {
    return '<div id="galleryTitle"><span><a id="galleryClose" href="#" onclick="return jQuery.fancybox.close();">close</a></span>&nbsp;</div>';
}
function formatTitleOnlyClose(title, currentOpts) {
    return '<div id="galleryTitle" class="fbimgShadow"><span><a id="galleryClose" href="#" onclick="return jQuery.fancybox.close();">close</a></span>&nbsp;</div>';
}

/* *//* */
 




/* *//* */

var zo; // declares a global symbol
if (!zo) zo = {};
    else if (typeof zo != 'object')
        throw new Error('zo exists, but is not an object!');


var to_minMultContNav;

zo.multiLevelContNav = function(mode) {

    var mode=mode;

    if(jQuery('.toCntMltNv li').length==0) {

        jQuery('.toCntMltNv').remove();

    } else {

        jQuery('.toCntMltNv').addClass('contentMultipleNav');

        jQuery('#multCntNavTrg').replaceWith("<div class='contentMultipleLyr'><div class='contentMultiple'></div></div>")
        var $contNavPrim=jQuery('.contentMultipleNav')
          , $parentItem=$contNavPrim.prev("a")
        ;
        $parentItem.addClass('active');
        var $contNav=jQuery('.contentMultiple')
          , $contNavSec=jQuery('.contentMultipleNav ul:first')
          , $contNavMore = jQuery('<li class="contNavMore"><a>... </a></li>')
        ;

        jQuery('.contentMultiple')
            .append('<h3 id="contentMultipleHead"><div>'+$parentItem.text()+'</div></h3>')
            .append(jQuery('.contentMultipleNav'));
        
        var $contNavHead=jQuery('#contentMultipleHead');
        var fixNavHeight=$contNavHead.height()-24;
        $contNavPrim
            .css({'top':(fixNavHeight-16)+'px'});
        var navHeight=$contNavPrim.height()+fixNavHeight+12;
        if ($contNavSec.length>0) {
          $contNav
            .addClass("multNavExpanded")
          if ($contNavSec.height()>navHeight)navHeight=$contNavSec.height();
        }
        navHeight+=36;
        jQuery('li.activeLi:last li').addClass('activeChild');
        // the maximimizer function          
        zo.contNavMax= function() {
          window.clearTimeout(to_minMultContNav);
          
          $contNavPrim
            .find('li.nvsbl')
              .removeClass('nvsbl')
          jQuery('.contNavMore').remove();
          
          to_minMultContNav=false;
          $contNavSec
            .css({
              'display':'block'
             ,'top':'16px'
            })
          $contNav
            .animate({
              'height':navHeight+'px'
            });
        };
        // the minimizer function          
        zo.contNavMin= function() {
          $contNav
            .animate({
              'height':(92+fixNavHeight)+'px'
            });
          //hide all secondary level items not in active tree
          $contNavSec.find('li:not(.activeLi,.parent,.activeChild)')
            .addClass('nvsbl')
          //minimize secondary tree if more than 3 deep
/*
          if ($contNavSec.find('li:not(.nvsbl)').length>3) {
            $contNavSec.find('li:not(.nvsbl)').eq(2)
              .addClass('nvsbl')
            $contNavSec.find('li.parent').eq(1)
              .append($contNavMore.clone())
          }
*/
          if($contNavSec.find('>li.parent,>li.activeLi').prevAll('li').length > 0) {
            $contNavSec.css('top','-4px');
            $contNavSec
              .prepend($contNavMore.clone())
          }
          //minimize primary tree if more than three entries
          if ($contNavPrim.find('>li').length>3) {
              $activeLiPrim=$contNavPrim.find('>li.activeLi, >li.parent');
              activeLiIndexPrim=$activeLiPrim.prevAll().length;
              var fixIndex=0;
              if (activeLiIndexPrim==0) fixIndex=1;
              //minimize entries after active entry
              if ($contNavPrim.find('>li:gt('+(activeLiIndexPrim+fixIndex)+')').length>1) {
                  $contNavPrim
                      .find('>li:gt('+(activeLiIndexPrim+fixIndex)+')')
                          .addClass('nvsbl')
                      .end()
                      .append($contNavMore.clone());
              }
              //minimize entries in front of active entry
              if (activeLiIndexPrim>1) {
                  $contNavPrim
                      .find('>li:lt('+activeLiIndexPrim+')')
                          .addClass('nvsbl')
                      .end()
                      .prepend($contNavMore.clone())
              }
          }
        };

        if (mode==3) {
            $contNav
                .addClass('bottomMode');
        } else {
            $contNav
                .hover(
                    zo.contNavMax                        ,
                    function() {if(!to_minMultContNav) to_minMultContNav=window.setTimeout('zo.contNavMin()',400)}
                )
            jQuery(document).ready(function(){
                to_minMultContNav=window.setTimeout('zo.contNavMin()',3000);
            })
        }
        //zo.contNavMax();
        $contNavSec
          .css({
            'display':'block'
           ,'top':'16px'
          })
        $contNav
          .css({
            'height':navHeight+'px'
        });

    }
}


zo.injectCSS=function(url){
  jQuery.ajax({
    url:url,
    async:false,
    cache:true,
    dataType:"text",
    error:function(xhr,textstatus){
      alert(textstatus);
    },
    success:function(data,textstatus){
        jQuery('<style media="screen" type="text/css"></style>')
            .html(data)
            .appendTo('head');
    }
  })
}
zo.reloadCSS=function(url){
    jQuery(document).ready(function(){
        if (!(/MSIE ([2-9]\.\d+);/.test(navigator.userAgent))) {
            zo.injectCSS(url);
        }; 
    });
};


function flashMovieResize(object,width,height) {
    if (object=="") return;
    if (document.getElementById("flashobject"+object) ) {
        document.getElementById("flashobject"+object).width=width;
        document.getElementById("flashobject"+object).height=height;
    }
    if (document.getElementById("flashcontent"+object) ) {
        document.getElementById("flashcontent"+object).style.width=width+"px";
        document.getElementById("flashcontent"+object).style.height=height+"px";
    }
}

zo.submitSearch = function () {
  if(typeof(searchwindow) == 'undefined' || searchwindow.closed){
    searchwindow = window.open('','db_search','toolbar=yes,location=no,directories=no,scrollbars=yes,status=yes,menubar=no,resizable=yes,width=717,height=600');
    searchwindow.focus();
  } else {
    searchwindow.close();
    searchwindow = window.open('','db_search','toolbar=yes,location=no,directories=no,scrollbars=yes,status=yes,menubar=no,resizable=yes,width=717,height=600');
    searchwindow.focus();
  }
}

zo.str_replace = function(repsearch, repreplace, repsubject) { return repsubject.split(repsearch).join(repreplace); }

zo.createTabsInTarget = function(values) {
    var boxID=values['boxID'];
    var $box=jQuery("#tabBox"+boxID);
    var myBoxEvent;
    values['boxEvent']!="" ? myBoxEvent=values['boxEvent']: myBoxEvent="mouseenter";
    var boxWidth;
    isNaN(values['boxWidthCustom']) ? boxWidth=values['boxWidthAuto'] : boxWidth=values['boxWidthCustom'];
    boxWidth=parseInt(boxWidth);
    var tabWidth=values['tabWidth'];
    var firstActiveSelector=":first";
    if (values['boxStartTab']!='' && jQuery("li.tab"+boxID+":has(.tabButton a[name='"+values['boxStartTab']+"'])").length) firstActiveSelector=":has(.tabButton a[name='"+values['boxStartTab']+"'])";
    var numTabs=parseInt($box.find(".tabs"+boxID+" li.tab"+boxID).length);
    var tabWidthLeftOver=0;
    if (tabWidth == 0) {
        tabWidth = parseInt(((boxWidth + 3) / numTabs) - 3); 
        tabWidthLeftOver=Math.round(numTabs*(((boxWidth+ 3) / numTabs - 3)-tabWidth ))
    }
    $box
        .removeClass('tabBoxNscr')
        .css({
            width: boxWidth+'px'
        })
        .find("ul.tabs"+boxID).css({
            width: boxWidth+'px'
        })
        .end()
        .find(".tabContainer"+boxID).css({
            width: (boxWidth-2)+'px'
        })
        .end()
        .addClass("tabbedDisplayBox")
        .find("li.tab"+boxID).css({
            width:tabWidth+"px"
        })
        .end()
        .find("li.tab"+boxID+firstActiveSelector).addClass("active")
        .end()
        .find("li.tab"+boxID+":last").css({
            marginRight:"0px",
            width:(tabWidth+tabWidthLeftOver)+"px"
        })
        .end()
        .find("li.tab"+boxID+" .tabButton"+boxID+" a")
            .bind(myBoxEvent, function(e) {
                e.preventDefault();
                jQuery(this).trigger('changeTab'); // event 'changeTab' is triggered, has to be implemented by external application
                jQuery(this).closest('.tabbedDisplayBox').find("li.tab.active").removeClass("active");
                jQuery(this).closest("li.tab").addClass("active");
                $box.css({
                    height:$box.find('.tabs').height()+$box.find('.tab.active .tabContainer').height()+'px'
                });
            })
            .bind("focus", function() {
                jQuery(this).trigger(myBoxEvent);
            })
        .end()
        .css({
            width: boxWidth+'px',
            height:$box.find('.tabs'+boxID).height()+$box.find('.tab'+boxID+'.active .tabContainer'+boxID).height()+1+'px'
        });
    var startTab = "";
    if (window.location.hash.length > 1) {
        startTab = $box.find("a[href='" + window.location.hash + "']");
    } else if (values['boxStartTab'] !='' ) {
        startTab = $box.find("a[href='#" + values['boxStartTab']+ "']");
    }
    if (startTab.length==1) {
        jQuery(function(){startTab.trigger(myBoxEvent)});
    }
} 

zo.createStockFeed = function(feedContent) {
    if (typeof(sharepriceObj)=='undefined') return "<span></span>";
    return "<span class='stockfeedJSON'>" + feedContent
      .replace(/%h/g, sharepriceObj.time[1].toString().split(":")[0])        // hours
      .replace(/%m/g, sharepriceObj.time[1].toString().split(":")[1])        // minutes
      .replace(/%t/g, sharepriceObj.time[0])                                 // timezone
      .replace(/%c/g, sharepriceObj.shareprice[0])                           // currency
      .replace(/%i/g, sharepriceObj.shareprice[1].toString().split(",")[0])  // value before comma
      .replace(/%d/g, sharepriceObj.shareprice[1].toString().split(",")[1])  // decimal value
      + "</span>";
}


zo.showHide = {
    init: function(pageID, closeAll) {
        var entries = jQuery('div#shBox' + pageID + '.toggleShowHide div.showHideEntry'),
            headlines = entries.find('h2'),
            content = entries.find('div.shItem'),
            self = this
        ;
        headlines
            .filter(':first')
                .addClass('closeClick')
                .css({'cursor': 'default'})
            .end()
            .not(':first')
                .addClass('openClick')
            .end()
            .hover(
                function(){
                    if (jQuery(this).hasClass('openClick') === true) {
                        jQuery(this).addClass('newBlue clickHover');
                    }
                },
                function(){
                    jQuery(this).removeClass('newBlue clickHover');
                }
            )
            .contents()
                .wrap(
                    jQuery("<a></a>")
                        .attr('href','#')
                )
            .end()
            .find("a:first")                    
                .prepend('<span class="nvsbl"></span>')
                .bind('click', function(ev) {
                    ev.preventDefault();
                    if (jQuery(ev.target).closest("h2").hasClass('openClick') === true) {
                        self.toggle(jQuery(ev.target).parent("h2").get(0));
                    }
                })
        ;
        content.not(':first').hide();
    },
    toggle: function(evTarget) {
        jQuery(evTarget)
            .removeClass('openClick')
            .removeClass('newBlue clickHover')
            .css({'cursor': 'default'})
            .addClass('closeClick')
            .next('div.shItem:hidden')
            .slideDown(500)
            .end()
            .closest('div.toggleShowHide')
            .find('h2.closeClick')
            .not(evTarget)
            .removeClass('closeClick')
            .addClass('openClick')
            .css({'cursor': 'pointer'})
            .next('div.shItem:visible')
            .slideUp(500)
        ;
    }
};

/**/
 
zo.initFAQ = function (shId) {
jQuery('#'+shId).find('h2')
    .addClass('openClick')
    .hover(
        function(e){
            jQuery(this).addClass('newBlue clickHover');
        },
        function(e){
            jQuery(this).removeClass('newBlue clickHover');
        }
    )
    .contents().wrap(
        jQuery("<a></a>")
            .attr('href','#')
    )
    .end()
    .find("a:first")                    
        .prepend('<span class="nvsbl"></span>')
        .bind('click', function(ev) {
            ev.preventDefault();
            var $myH2= jQuery(ev.target).closest("h2");
            var hideContent = $myH2.closest('.FAQEntry').find('.hideContent');
            if (hideContent.hasClass('FAQHidden')) {
                hideContent
                    .slideDown(200)
                    .removeClass('FAQHidden');
                    $myH2.addClass('closeClick').removeClass('openClick');
            } else {
                hideContent
                    .slideUp(200)
                    .addClass('FAQHidden');
                    $myH2.addClass('openClick').removeClass('closeClick');
            }
        })
    ;
}

zo.initAwards = function(awardslist,entriesToggling) {
    if (entriesToggling!='OFF') {
        awardslist 
            .find('.awardsEntry .awardsHead').each(function() {
                jQuery(this)
                    .addClass("closeClick")
                    .bind("click",function(ev){
                        if (jQuery(this).hasClass('openClick')===true) {
                            jQuery(this).closest('.awardsEntry').find('.closeMe').slideDown(300);
                        } else {
                            jQuery(this).closest('.awardsEntry').find('.closeMe').slideUp(200);
                        }
                        jQuery(this)
                            .toggleClass('openClick')
                            .toggleClass('closeClick');
                        return false;
                    })
                    .hover(function(){
                        jQuery(this).addClass('newBlue clickHover');
                    },function(){
                        jQuery(this).removeClass('newBlue clickHover');
                    })
                ;
            })
        ;
    } else {
        awardslist.find('.awardsEntry .awardsHead').addClass("noToggleEntry")
    }
    awardslist.children().each( function() {
        var monthHead = jQuery(this);
        if (monthHead.hasClass('newslistMonth')) {
            monthHead
                .wrapInner('<a></a>')
                .find("a")
                .addClass('openClick')
                .addClass('newBlue2')
                .hover(function(e){jQuery(this).addClass('clickHover newBlue').removeClass('newBlue2');},function(e){jQuery(this).removeClass('clickHover newBlue').addClass('newBlue2');})
                .click(function(e){
                    var headl = jQuery(this);
                    if (headl.hasClass('openClick')) { // Open
                        headl.removeClass('openClick').addClass('closeClick');
                        headl.parent().next().slideDown(300);
                    } else { // Close
                        headl.addClass('openClick').removeClass('closeClick');
                        headl.parent().next().slideUp(200);
                    }
                })
                    .parent()
                    .next()
                    .hide()
            ;
        }
    });
    
    awardslist.find('.newslistMonth:first a')
            .addClass('closeClick')
            .removeClass('openClick')
                .parent()
                .next()
                .show();
}


zo.collapseNews = function(newslistClassID) {
  
  var newslist = jQuery(newslistClassID);
  newslist.children().each( function() {
      var monthHead = jQuery(this);
      if (monthHead.hasClass('newslistMonth')) {
          monthHead
              .wrapInner('<a></a>')
              .find("a")
              .addClass('openClick')
              .addClass('newBlue2')
              .hover(function(e){jQuery(this).addClass('clickHover newBlue').removeClass('newBlue2');},function(e){jQuery(this).removeClass('clickHover newBlue').addClass('newBlue2');})
              .click(function(e){
                  var headl = jQuery(this);
                  if (headl.hasClass('openClick')) { // Öffnen
                      headl.removeClass('openClick').addClass('closeClick');
                      headl.parent().next().slideDown(300)
                          .closest('.dbnNewsList').find('.newsEntries:not(:animated)')
                      ;
                  } else { // Schliessen
                     headl.addClass('openClick').removeClass('closeClick');
                     headl.parent().next().slideUp(200);
                  }
              })
                  .parent()
                  .next()
                  .hide()
          ;
      }
  });
  newslist.find('.newslistMonth:first a')
          .addClass('closeClick')
          .removeClass('openClick')
              .parent()
              .next()
              .show();
}



zo.alertBox = function(ev) {
    ev.preventDefault();
    jQuery('div.alertContainer').remove(); 

    var $evTarget = jQuery(ev.target)
        , $anchor = $evTarget.closest('a')
        , isExtern = $anchor.hasClass('alertBoxExtern')
        , alertText = isExtern ? "When you access this link, you are leaving the Deutsche website. The information provided on any websites accessed through this link has been produced by independent providers and Deutsche does not endorse or accept any responsibility for information provided on any such sites. Any opinions or recommendations expressed on such other websites are solely those of the independent providers and are not the opinions or recommendations of Deutsche. The existence of a link from this Website to any other such websites does not constitute a recommendation or other approval by Deutsche of such websites or any provider thereof." : ""
        , alertAccept = "accept"
        , alertDeny = "reject"
        , target = $anchor.attr('target')
        , href = $anchor.attr('href')
        , posTop = $anchor.offset().top - 12
        , posLeft = $anchor.offset().left - jQuery('div#layoutComplete').offset().left - 12
    ;

    jQuery('<div class="alertContainer font3"></div>')
        .css({ 'top':posTop+ 'px', 'left':posLeft+ 'px' })
        .append(jQuery('<div class="alertBox colWidth3"></div>')
            .append(jQuery('<p>' +alertText+ '</p>'))
            .append(jQuery('<a href="' +href+ '" target="' +target+ '">' +alertAccept+ '</a>')
                .bind('click', function(ev) {
                    jQuery(this).closest('div.alertContainer').remove();
                })
            )
            .append(jQuery('<a href="#close">' +alertDeny+ '</a>')
                .bind('click', function(ev) {
                    ev.preventDefault();
                    jQuery(this).closest('div.alertContainer').remove();
                })
            )
        )
        .appendTo('div#layoutComplete')
    ;

    jQuery(document).bind('click', function(ev) {
        if ((!jQuery(ev.target).closest('a').hasClass('alertBoxExtern') && !jQuery(ev.target).closest('a').hasClass('alertBoxIntern')) && !jQuery(ev.target).closest('div.alertContainer').length) {
            jQuery('div.alertContainer').remove();
            jQuery(document).unbind('click');
        }
    });

    // ESC: escape key pressed quits the alert box
    jQuery(document)
        .bind('keydown', function(ev) {
            if (ev.keyCode === 27) {
                jQuery('div.alertContainer').remove();
                jQuery(this).unbind('keydown');
            }
        })
    ;
};

// Initial Parsings after DomReady
jQuery(document).ready(function() {
    jQuery('a.alertBoxIntern,a.alertBoxExtern').bind('click', function(ev) {
        zo.alertBox(ev);
    });
    jQuery('hr').wrap('<div class="hr"></div>');
});

/* TWITTER SNIPPET */





zo.twitterImport =
{
    conf: {
        // default values, do not change
        twFormat: 'JSON', // the response will use the JSONP format with a callback
        twUsername: '', // get tweets from a specified username
        twLang: '', // restricts tweets to the given language, given by an ISO 639-1 code
        twRpp: 0 // number of tweets to return per page
    },

    init: function(options)
    {
        var conf = this.conf;
        conf.twFormat = options.format;
        conf.twUsername = options.username;
        conf.twLang = options.lang;
        conf.twRpp = options.rpp;
        this.importTweets();
    },
    // import tweets using the JSONP format with an callback
    importTweets: function()
    {
        var conf = this.conf;
        if (conf.twFormat.toUpperCase() === "JSON") {
            jQuery.getJSON('https://search.twitter.com/search.json?q=from%3A' +conf.twUsername+ '&rpp=' +conf.twRpp+ '&callback=?',
                function(data) {
                    zo.twitterImport.buildTweetShow(data);
                }
            );
        }
    },
    
    buildTweetShow: function(data)
    {
        var conf = this.conf,
            url = /(\w+):\/\/([\w.]+)\/(\S*)/g;
        jQuery.each(data.results, function(i) {
            var twDate = new Date(this.created_at),
                twShowDate = strFormatDate("%B %e, %Y",twDate),
                twText = this.text,
                twUrl = twText.match(url), // parse urls
                twLink
            ;
            if (twUrl !== null) {
                for (var i=0, l=twUrl.length; i<l; i++) {
                    // build anchor with the parsed url
                    twLink = " <a href=\"" +twUrl[i]+ "\" target=\"_blank\">" +twUrl[i]+ "</a>";
                    // replace the url-string with the built anchor
                    twText = twText.replace(twUrl[i], twLink);
                }
            }
            // create tweet container with date and text
            jQuery('<div style=font-size:11px;></div>')
                .addClass('zoTweet')
                .append(jQuery('<p></p>')
                    .addClass('twDate block')
                    .text(twShowDate)
                )
                .append(jQuery('<p></p>')
                    .addClass('twText')
                    .html(twText)
                )
                .appendTo(jQuery('div#zoTweets'))
            ;
        });
    }
};



/* DateFormat Function */
var strFormatDate = function(dateFormat, date) {
  var date = date || new Date();
  var twDateMonthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var dateFormatRe = new RegExp("%[eBY]","g");  
  
  return dateFormat.replace(dateFormatRe, function(m){
    switch(m) {
      case "%B" : return twDateMonthNames[date.getMonth()];
      case "%e" : return date.getDate();
      case "%Y" : return date.getFullYear();
      default   : return "";
    }
  }); 
}

/* Decodes HTML special characters */
var htmlEntityDecode = function(undecoded) {
    return jQuery('<div>'+undecoded+'</div>').remove().html();
}



if (typeof linklistValues== "undefined") {
    linklistValues=new Object();
    linklistValues["href"]=new Object();
    linklistValues["target"]=new Object();
}
function callLinkFromList(linkId,selectBox) {
    selectBox.selectedIndex=0;
    if (linkId) {
        openLink=window.open(linklistValues["href"][linkId],linklistValues["target"][linkId]);
        openLink.focus();
    }
}
zo.initLayerLinkList = function(id,colWidthClass,colNumber) {
    if (parseInt(colNumber)<1) {colNumber=1;}
    
    var $layerDiv;
    var $headline = jQuery('#linkList' + id).find('h6:first');
    linkText = $headline.text();
    var $closeBtn = jQuery('<a></a>')
        .addClass('icon close')
        .attr('href','#close')
        .click(function(e) {e.preventDefault(); jQuery.fancybox.close();});
    var $layerContent = jQuery('<div></div>')
        .addClass('linklistlayerContent')
        .append($closeBtn, $headline)
    allLinks = jQuery('#linkList' + id).find('li').css('padding-right','24px');
    itemsPerSlice = Math.floor(allLinks.length / colNumber);
    remainingLinks = allLinks.length - itemsPerSlice * colNumber;
    colList = [];
    sliceEnd = 0;
    for (colCount=0;colCount<colNumber;colCount++) {
        sliceStart = sliceEnd;
        sliceEnd = sliceStart + itemsPerSlice;
        if (remainingLinks > 0 ) {
            remainingLinks--;
            sliceEnd++;
        }
        
        colList[colCount] = jQuery('<ul></ul>')
            .addClass('noBulls floatleft ' + colWidthClass)
            .append(
                allLinks.slice(sliceStart,sliceEnd)
            )
        ;
        $layerContent.append(colList[colCount]);
    }    

    layerWidth = parseInt(colWidthClass.substr(8)) * colNumber;
    layerWidth = (layerWidth>9) ? 9 : layerWidth;
    $layerContent.addClass('colWidth' + layerWidth);
    
    var $layerOuter = jQuery('<div></div>')
        .addClass('linklistLayerOuter')
        .css('width',layerWidth*97+38+'px')
        .append($layerContent);
    
    jQuery('#linkList' + id)
        .append(jQuery('<div></div>') 
            .css('display','none')
            .append($layerDiv = jQuery('<div></div>')
                .addClass('font3')
                .attr('id','linklistlayer' + id)
                .append($layerOuter)
            )
        )
    ;   

    jQuery('#linkList' + id).append(jQuery('<a></a>')
        .text(linkText)
        .attr('href','#')
        .fancybox({
            titleShow : false,
            showNavArrows : false,
            overlayShow : true,
            overlayOpacity : 0,
            speedIn : 150,
            speedOut : 100,
            content : $layerDiv,
            onComplete : function(){
                $layerDiv.find("a:first").focus()
            }
        })
    );
}

/******* Flash Event Trigger (e.g. for Tracking) *******/
zo.flashEvent= function(eventData) {
    if(!eventData) return;
    jQuery(document).trigger("flashevent",eventData);
} 



/******* Topstage Functions *******/

var currentStage;
var allStageURLs = [];
stageResizeMove = function(height) {
    document.getElementById("topStageFlashObject").height=height;
    document.getElementById("topStagePadding").style.height=(height-106)+"px";
}
stageResize = function(height) {
    if (height == 0) return;
    document.getElementById("topStageFlashObject").height=height;
}
var setScrollPos = function(){
  var scrollpos = 100000;
  if (document.documentElement.clientHeight) {
    scrollpos = document.documentElement.scrollTop + document.documentElement.clientHeight;
  } else 
  if (document.body.clientHeight) {
    scrollpos = document.body.scrollTop + document.body.clientHeight;
  }
//Call Flashfile
    if (navigator.appName.indexOf("Microsoft") != -1) {
        if(typeof(window["topStageFlashObject"].browserWindowHeight)!='undefined') {
            window["topStageFlashObject"].browserWindowHeight(scrollpos);
        }
    } else {
        if(typeof(document["topStageFlashObject"].browserWindowHeight)!='undefined') {
            document["topStageFlashObject"].browserWindowHeight(scrollpos);
        }
    }
}
fadeOutNavigation = function() {
    jQuery("#breadcrumbNavi,.headerProjectName,#clickLogo,#metaNavi").css({display:"none"});
    jQuery("#level1Navi").fadeOut(700);
}
fadeInNavigation = function() {
    jQuery("#level1Navi").fadeIn(700,function() {
        jQuery("#breadcrumbNavi,.headerProjectName,#clickLogo,#metaNavi").css({display:"block"});
    });
}
fadeOutContent = function() {
    setScrollPos();
    jQuery("#breadcrumbNavi,.tabContent,.headerProjectName,#clickLogo,#metaNavi").css({display:"none"});
    jQuery("#contentArea,#footerArea").animate({opacity:0},700);
    jQuery("#level1Navi").fadeOut(700);
}
fadeInContent = function() {
    jQuery("#contentArea,#footerArea").animate({opacity:1},700,'linear',function() {
        jQuery("#breadcrumbNavi,.tabContent,.headerProjectName,#clickLogo,#metaNavi").css({display:"block"});
    });
    jQuery("#level1Navi").fadeIn(700);
}
function handleURL(urlNr) {
    if (allStageURLs[currentStage][urlNr].target == "") { allStageURLs[currentStage][urlNr].target = "_self"; }
    if ((zo) && (zo.fireClickTracking)) {
        var trackMode = "link";
        if (allStageURLs[currentStage][urlNr].target == "_blank") { trackMode="click"; }
        zo.fireClickTracking('topstage','topstageflashlink ' + allStageURLs[currentStage][urlNr].tracking, trackMode);
    }
    window.open(allStageURLs[currentStage][urlNr].url,
                allStageURLs[currentStage][urlNr].target,
                allStageURLs[currentStage][urlNr].windowParameters);
}


/******* End Topstage Functions *******/

/* CMS Popup or Fancybox options */
jQuery(document).ready(function(){
    jQuery('a.fbNavItem,a.ppNavItem').bind('click',function(ev){
        ev.preventDefault();
        var getPPFBDimensions = function(classes) {
            rgx=new RegExp(/size\_(\d{1,4})\_(\d{1,4})/);
            var def=false;
            if (classes.match(rgx)) {
                dimensions = rgx.exec(classes);
            } else {
                dimensions = ['size_600_800',600,800];
                def=true;
            }
            return {'width':dimensions[1],'height':dimensions[2],'def':def} ;
        }
        var $link=jQuery(this),
            dimensions=getPPFBDimensions($link.attr('class'))
        ;

        if ($link.hasClass('fbNavItem')) {
            jQuery.fancybox({
                width:parseInt(dimensions.width),
                height:parseInt(dimensions.height),
                type:'iframe',
                titleFormat:function(){return ''},
                href:$link.attr('href')
            });
        } else {
            var win=window.open($link.attr('href'),'cmsPopup','width='+dimensions.width+',height='+dimensions.height+',menubar=no,toolbar=no,statusbar=no');
            try{ win.focus(); } catch (er) { /*IE dont't like me*/ }
        }
        
    });
});
/**/

/* content disclaimer class */
;(function(zo, $) {
    zo.contentDisclaimer = function(id,height,exp) {
        this.$context = $('#cc_apollo_disclaimer_'+id).find('.cc_apollo_disclaimerInner')
        , this.cookiename = 'ds'+id
        , this.cookieexpiration = exp||false
        this.$context.find('.rdtextfield').css({height:(~~parseInt(height)||275)+'px'})
    }
    zo.contentDisclaimer.prototype = {
        init : function() {
            if (this.isAccepted()) return;
            this.open();
        }
        , open : function() {
            var _this = this;            
            $.fancybox({
                width                   : 752
                , content               : this.$context
                , titleShow             : false
                , hideOnOverlayClick    : false
                , hideOnContentClick    : false
                , enableEscapeButton    : false
                , showCloseButton       : false
                , onComplete : function() {
                    _this.$context.find('a.accept').bind('click', function(ev) {
                        ev.preventDefault();
                        if (_this.cookieexpiration) {
                            $.cookie(_this.cookiename, 'y', {expires:_this.cookieexpiration});
                        } else {
                            $.cookie(_this.cookiename, 'y');
                        }
                        $.fancybox.close();
                    });
                }
            });
        }
        , isAccepted : function() {
            return $.cookie(this.cookiename)==='y';
        }
    }
})(zo, jQuery);
/* end content disclaimer class */

/* *//* */


// ********************* 
// Topmenu hover function (for IE - make hover available for other than a-tag)
// *********************
var closeHoverNaviDelayed={};
var openedHoverObject;
var hoverBase;
sfHover = function() {
    guidsToParse="878E4EE449E7411FB76E826F9FF70949";
    if (document.getElementById("list_main1") && document.getElementById("list_main1").hasChildNodes()){
        var sfEls = document.getElementById("list_main1").childNodes;
        for (var i=0; i<sfEls.length; i++) {

            if(typeof(mainNaviJSON)!='undefined') {
                for (var projectGuid in mainNaviJSON) {
                    if (guidsToParse.search(projectGuid)!=-1 && typeof(mainNaviJSON[projectGuid])!='undefined') {
                        var extNavJSON=mainNaviJSON[projectGuid][0];
if(typeof(extNavJSON)!='undefined') {
                        for (var j=0; j<extNavJSON.length; j++) {
                            if (htmlEntityDecode(extNavJSON[j].headline)==sfEls[i].childNodes[0].innerHTML) { 
                                var createExtHovNav=1;
                                if (sfEls[i].childNodes[1]) {


                                    sfEls[i].removeChild(sfEls[i].childNodes[1]);



                                }
                                if (createExtHovNav==1) {
                                    var renderChildNav=function(parentElement,navObj){
                                        var obj=navObj.nav;
                                        var newUl=document.createElement("ul");
                                        newUl.className="horNav "+navObj.navHoverClass;
                                        newUl.id=(navObj.headline).split(' ').join('')+"SubNav";
                                        for (var k=0; k<obj.length; k++) {
                                            if (obj[k].href) {
                                                var newLi=document.createElement("li");
                                                newLi.className=obj[k].li_class;
                                                var newA=document.createElement("a");
                                                newA.href=stripLocalDomainFromExternalURL(obj[k].href);
                                                newA.id=obj[k].id;
                                                newA.title=obj[k].title;
                                                obj[k].target? newA.target=obj[k].target : "";
                                                //newA.className=obj[k].className;
                                                obj[k].a_class? newA.className=obj[k].a_class : "";
                                                newA.innerHTML=obj[k].headline;
                                                newLi.appendChild(newA);
                                                if (obj[k].nav!="") {
                                                    renderChildNav(newLi,obj[k]);
                                                }
                                                newUl.appendChild(newLi);
                                            }
                                        }
                                        parentElement.appendChild(newUl);
                                        
                                    }

                                    sfEls[i].childNodes[0].href=stripLocalDomainFromExternalURL(extNavJSON[j].href);
                                    sfEls[i].childNodes[0].target=extNavJSON[j].target;
                                    sfEls[i].childNodes[0].title=extNavJSON[j].title;
                                    sfEls[i].childNodes[0].id=extNavJSON[j].id;
                                    if (extNavJSON[j].nav!="") {
                                        renderChildNav(sfEls[i],extNavJSON[j]);
                                    }
                                }
                            }
                        }
}
                    }
                }
            }


            if (sfEls[i].childNodes[1]) {
                jQuery(sfEls[i])
                  .find('a')
                    .bind('focus',{i:i,obj:sfEls[i]}, function(ev) {
                        obj=ev.data.obj;
                        i=ev.data.i;
                        window.clearTimeout(closeHoverNaviDelayed[i]);
                        jObj=jQuery(obj)
                        if(!jObj.hasClass("sfhover")) {
                         openHoverNavi(obj);
                        }
                      }
                    )
                    .bind('blur',{i:i,obj:sfEls[i]}, function(ev) {
                        obj=ev.data.obj;
                        i=ev.data.i;
                        openedHoverObject=obj;
                        closeHoverNaviDelayed[i] = setTimeout(function()
                          {
                            closeHoverNavi(openedHoverObject);
                          },15);
                      }
                    )
                jQuery(sfEls[i])
                    .hover(
                        function() {
                            var obj=jQuery(this)
                            openHoverNavi(this);
                        },
                        function() {
                            var obj=jQuery(this)
                            closeHoverNavi(this);
                        }
                    )
            }

        }
        try {zo.createTrackValues("#list_main1 ");} catch(e) {}
    }
}
jQuery(sfHover)
function closeHoverNavi(obj){
  obj=jQuery(obj);
  obj
      .removeClass("sfhover")
      .find("ul:first").css({visibility: "hidden"})
      .end()
      .next().css("background-position","left center")
      .end()
      .find("iframe").remove();
}
function openHoverNavi(obj){
  obj=jQuery(obj);
  if ((obj.width()+16)>obj.find("ul:first").width()) {
      obj.find("ul:first").css({width:(obj.width()+16)+"px"});
  }  
  obj
      .addClass("sfhover")
      .find("ul:first")
          .css({visibility:"visible", display:"block"})
      .end()
      .next().css("background-position","-10px top");
  var myIframeWidth=obj.find("ul:first").outerWidth()-1;
  var myIframeHeight=obj.find("ul:first").outerHeight()-2;
  if (document.all) { // if IE, create iframe 'base layer' to prevent select boxes from shining through
      obj.prepend(
          jQuery("<iframe></iframe>")
              .addClass("hoverBase")
              .attr( {src:'about:blank',frameborder:'0',border:'0' } )
              .css( {
                  border:"none",     
                  height:myIframeHeight+"px",
                  width:myIframeWidth+"px"
               } )
     )
  }
}
// ******************** END


 
/* *//* LOCAL GHP JS */
zo.initSingleShowHide = function (shId) {
jQuery('#'+shId).find('h6')
    .addClass('newslistMonth')
    .wrapInner('<a href="#"></a>')
    .find('a')
        .addClass('closeClick newBlue2')
        .hover(
            function(e){
                jQuery(this).removeClass('newBlue2').addClass('newBlue clickHover');
            },
            function(e){
                jQuery(this).addClass('newBlue2').removeClass('newBlue clickHover');
            }
        )
        .click(
            function(e){
                e.preventDefault();
                this.blur();
                var hideContent = jQuery(this).closest('.singleShowHide').find('.hideContent');
                hideContent.find('.endInner').css({display:"inline-block"});
                if (hideContent.hasClass('singleHidden')) {
                    hideContent
                        .slideDown(200)
                        .removeClass('singleHidden');
                        jQuery(this).addClass('closeClick').removeClass('openClick');
                } else {
                    hideContent
                        .slideUp(200)
                        .addClass('singleHidden');
                        jQuery(this).addClass('openClick').removeClass('closeClick');
                }
            }
        )
    ;
}

/**//* */
var selectedString="";function getSelectedHTML(){selectedString="";var a=undefined;if(window.getSelection){selobj=window.getSelection();if(!selobj.isCollapsed){if(selobj.getRangeAt){a=selobj.getRangeAt(0)}else{a=document.createRange();a.setStart(selobj.anchorNode,selobj.anchorOffset);a.setEnd(selobj.focusNode,selobj.focusOffset)}if(a){DOM=a.cloneContents();object=document.createElement("div");object.appendChild(DOM.cloneNode(true));selectedString=object.innerHTML}else{selectedString=selobj}}}else{if(document.selection){selobj=document.selection;a=selobj.createRange();if(a&&a.htmlText){selectedString=a.htmlText}else{if(a&&a.text){selectedString=a.text}}}else{if(document.getSelection){selectedString=document.getSelection()}}}selectedString=cleanSelectedString(selectedString)}function copyselected(){setTimeout("getSelectedHTML()",50);return true}document.onmouseup=copyselected;document.onkeyup=copyselected;function readspeaker(c,b){var d="";if(selectedString.length>0){c=c.replace("/cgi-bin/rsent?","/enterprise/rsent_wrapper.php?")}if(b&&b.indexOf("Expanding_Player")==-1){d=b}else{d="rs_div"}savelink=c;start_rs_table="<table style='border:1px solid #aeaeae; font-size: 10px;'><tr><td>";rs_embed="<object type='application/x-shockwave-flash' data='https://media.readspeaker.com/flash/readspeaker20.swf?mp3="+escape(c)+"&autoplay=1&rskin=bump&time_format=ms&text_play=Riproduci&text_pause=Pausa&text_stop=Stop&text_vol=Volume' style='height:20px; width:250px;'>";rs_embed+="<param name='movie' value='https://media.readspeaker.com/flash/readspeaker20.swf?mp3="+escape(c)+"&autoplay=1&rskin=bump&time_format=ms&text_play=Riproduci&text_pause=Pausa&text_stop=Stop&text_vol=Volume' />";rs_embed+="<param name='quality' value='high' />";rs_embed+="<param name='SCALE' value='exactfit' />";rs_embed+="<param name='wmode' value='transparent' />";rs_embed+="</object>";rs_downloadlink="<br />Vocalizzato da <a href='https://www.readspeaker.com/it'>ReadSpeaker</a><br /><a href='"+savelink+"'>Nessun suono?</a>";close_rs="<br /><a href='#' onclick='close_rs_div(\""+d+"\"); return false;'>Chiudi il player</a>";end_rs_table="</td></tr></table>";var a=document.getElementById(d);if(a){a.innerHTML=start_rs_table+rs_embed+rs_downloadlink+close_rs+end_rs_table}}function close_rs_div(b){var a=document.getElementById(b);if(a){a.innerHTML=""}}function cleanSelectedString(c){var g=c.match(/<!--/gi);var b="";if(g!=undefined){for(i=0;i<g.length;i++){var b=c.substring(c.search(/<!--/gi),c.search(/-->/gi)+3);c=c.replace(b,"")}}var f=/(<\/?[A-Z]+[0-9]?)\s?[^>]*>/gi;c=c.replace(f,"$1>");var a=/<\/?[A-Z]+[0-9]?\s?>/gi;c=c.replace(a,function(h){return returnTags(h)});var d=/\s+?\s*/gi;c=c.replace(d," ");var e=/(<br>)+?\s?(<br>\s*)*/gi;c=c.replace(e,"<br>");return c}function returnTags(a){var b=/<\/?(h[1-6]|a|area|ul|ol|dl|dd|dt|li|table|td|tr|th|p|hr|br)>/i;if(b.test(a)){return a}else{return""}};
 
function buildReadSpeaker()
{
    document.write('<a href="#" onclick="javascript:toggleSpeakerButton(this);" class="anchorReadSpeakPlay"  title="Listen to page" alt="Listen to page">Listen to page</a>');
    document.write('<iframe src="" style="height:0px; width:0px;" id="readspeakerIFrame" frameborder=0></iframe>');
}
 
function toggleSpeakerButton(thisObj)
{
    if (thisObj.className=="anchorReadSpeakPlay")
    {
         thisObj.className="anchorReadSpeakStop";
         document.getElementById("readspeakerIFrame").src="https://app.readspeaker.com/cgi-bin/rsent?customerid=5441&type=7&lang=it&url="+location.href;
    }
    else
    {
         thisObj.className="anchorReadSpeakPlay";
         document.getElementById("readspeakerIFrame").src="";
    }
}
 
function buildReadSpeakerBox()
{
    document.write('<div style="margin-top:-8px;">');
    document.write('<div id="readspeak_swf" style="float:left;"><a href="javascript:toggleReadSpeakerBoxButton(this,\''+location.href+'\');" class="anchorReadSpeakPlay"  title="Listen to page" alt="Listen to page">Listen to page</a></div>');
    document.write('<div id="readspeak_divider" style="width:0px; float:left; height:39px; margin-top:-2px; border-top:1px solid #FFFFFF;"></div>');
    document.write('<div style="display:block; float:left; line-height:22px;" ><a class="anchorMP3" href="https://asp.readspeaker.net/cgi-bin/dbankrsone?customerid=5441&save=1&type=podcast&lang=en&url='+encodeURIComponent(top.location.href)+'" title="This news as MP3 file" alt="This news as MP3 file">MP3 version</a></div>');
    document.write('</div><br style="clear:both">');
}
 
function toggleReadSpeakerBoxButton(thisObj,pageURL)
{
    if (typeof(SWFObject) == 'undefined')
    {
        var flashbuilderJS=document.createElement('script');
        flashbuilderJS.src=flashBuilderSRC;
        flashbuilderJS.type="text/javascript";
        document.getElementsByTagName('head')[0].appendChild(flashbuilderJS);
    }
    
    var intervalReadSpeaker = setInterval(function()
    {
        if (typeof(SWFObject) != 'undefined')
        {
            clearInterval(intervalReadSpeaker);
            
            pathvar="src="+encodeURIComponent("https://app.readspeaker.com/cgi-bin/rsent?customerid=5441&type=podcast&lang=it&url=" + encodeURIComponent(top.location.href) );
            var so1765 = new SWFObject("/italia/it/docs/readspeaker_apollo.swf?"+pathvar, "mymovie", "167", "16", "8", "#FFFFFF");
            so1765.write("readspeak_swf");
        }
 
    }, 50);
}
/**/

/*
 * PUBLISHED: Monday, March 06, 2017 5:09 PM
 *
 *//**/
zo.create2ClickToolboxModule = function(options) {
    return jQuery('<a></a>')
        .attr({ 
            'href': '#'+options.toolBoxIdentifier
            , 'title': options.linkWording
        })
        .addClass(options.toolBoxCssClass)
        .bind('click',function(ev) {
            ev.preventDefault();
            var myShareTypeObject = jQuery('.cnt2click.shareon'+options.toolBoxIdentifier);
            if (myShareTypeObject.length==0) { // Not already opened 
                jQuery('.cnt2click').remove();
                jQuery("#ToolBarNote_"+jQuery(this).parent().attr('id')).css({right:zo.getRightPos(this)+"px"});
                showNote('ToolBarNote_' +jQuery(this).parent().attr('id'),'<div class="cnt2click shareon'+options.toolBoxIdentifier+'">'+options.moduleSrc+'</div>');
                if (typeof options.initCall == 'function') {
                    try {options.initCall();}catch(err){/*silent*/}
                }
            } else {
                jQuery('.cnt2click').remove();
            }
        })
        .bind('mouseenter',function() {
            if (jQuery('.cnt2click').length==0) {
                jQuery("#ToolBarNote_"+jQuery(this).parent().attr('id')).css({right:zo.getRightPos(this)+"px"});
                showNote("ToolBarNote_"+jQuery(this).parent().attr('id'),'<div class="note2click"><div>'+options.note2clickText+'</div></div>');
            }
        })
        .bind('mouseleave', function() {
            if (jQuery('.cnt2click').length==0) {
                showNote('ToolBarNote_' +jQuery(this).parent().attr('id'),'')
            }
        })
    ;
}
zo.getRightPos = function(obj) {
    if (jQuery('.cnt2click').length!=0) return; 
    var rightPos = (jQuery(obj).parent().offset().left+jQuery(obj).parent().width())-(jQuery(obj).offset().left+jQuery(obj).width());
    return rightPos;
}
var toolBoxIdentifier = {};
var toolBarObjects = {
    top:[],
    bottom:[]
};
var langParameter="it";
var decoratorValue="dbit";

toolBarPos="top";
/**/

showMe=true;
showMe=true;
if (typeof(pageToolboxSettings)!='undefined') {
    if (pageToolboxSettings.indexOf("+print")>-1) showMe=true;
    if (pageToolboxSettings.indexOf("-print")>-1) showMe=false;
}
if (showMe) {
    nextToolbarObject=jQuery('<a></a>')
            .attr({ 
                'href': '#print', 
                'title': 'Print version'
            })
            .addClass('toolBarPrint')
    
            .click(function() {
                printPopup=window.open('/italia/it/data/js/673.html','trgpopup','width=796,height=600,scrollbars=yes,resizable=no,menubar=yes,toolbar=yes'); 
                printPopup.focus();
            })
            .hover(
                function() { 
                    jQuery("#ToolBarNote_"+jQuery(this).parent().attr('id')).css({right:zo.getRightPos(this)+"px"});
                    showNote("ToolBarNote_"+jQuery(this).parent().attr('id'),"Print");
                },
                function() { showNote('ToolBarNote_' +jQuery(this).parent().attr('id'),'') }
            );
    toolBarObjects[toolBarPos].push(nextToolbarObject)
}
/**//**/ 
showMe=true;
showMe=true;
if (typeof(pageToolboxSettings)!='undefined') {
    if (pageToolboxSettings.indexOf("+sendafriend")>-1) showMe=true;
    if (pageToolboxSettings.indexOf("-sendafriend")>-1) showMe=false;
}
if (showMe) {
    nextToolbarObject=jQuery('<a></a>')
            .attr({ 
                'href': '#sendafriend', 
                'name': 'feedback', 
                'id': 'feedback', 
                'title': 'Recommend this page'
            })
            .addClass('toolBarSendafriend')
    
            .fancybox(
                {
                    'width':540,
                    'height':490,
                    'type':'iframe',
                    'href':'https://secure.deutsche-bank.de/pbc/seiteweiterempfehlen/index.jsp?lang='+langParameter+'&decorator='+decoratorValue+'&url='+window.location.href+'&description='+encodeURIComponent(document.title),
                    'titleFormat':formatTitleOnlyClose
                }
            )
            .hover(
                function() {             
                    jQuery("#ToolBarNote_"+jQuery(this).parent().attr('id')).css({right:zo.getRightPos(this)+"px"});
                    showNote('ToolBarNote_' +jQuery(this).parent().attr('id'),'Email'); 
                },
                function() { showNote('ToolBarNote_' +jQuery(this).parent().attr('id'),'') }
            );
    toolBarObjects[toolBarPos].push(nextToolbarObject)
}
/**//**/
function setBookmark() {
    ap=navigator.appName;
    url=location.href;
    t=document.getElementsByTagName("title")[0].innerHTML;
    if (window.sidebar) {
        window.sidebar.addPanel(t,url,'');
    } else if (window.external) {
        window.external.AddFavorite(url,t);
    } else if (window.addNet) {
        addNet(url,t);
    } else {
        alert("Ihr Browser unterst&uuml;tzt diese Funktion nicht.\nBitte Legen Sie das Lesezeichen manuell an.");
    }
}

showMe=true;
showMe=true;
if (typeof(pageToolboxSettings)!='undefined') {
    if (pageToolboxSettings.indexOf("+bookmark")>-1) showMe=true;
    if (pageToolboxSettings.indexOf("-bookmark")>-1) showMe=false;
}
if (showMe) {
        nextToolbarObject=jQuery('<a></a>')
            .attr({ 
                'href': '#bookmark',
                'title': 'Add bookmark'
            })
    
            .addClass('toolBarBookmark')
            .click(function() {
                setBookmark();
            })
            .hover(
                function() { 
                    jQuery("#ToolBarNote_"+jQuery(this).parent().attr('id')).css({right:zo.getRightPos(this)+"px"});
                    showNote('ToolBarNote_' +jQuery(this).parent().attr('id'),'Bookmark'); 
                },
                function() { showNote('ToolBarNote_' +jQuery(this).parent().attr('id'),'') }
            )
        toolBarObjects[toolBarPos].push(nextToolbarObject);
}
/**//**/




showMe=true;
showMe=true;
if (typeof(pageToolboxSettings)!='undefined') {
    if (pageToolboxSettings.indexOf("+feedback")>-1) showMe=true;
    if (pageToolboxSettings.indexOf("-feedback")>-1) showMe=false;
}
if (showMe) {
    nextToolbarObject=jQuery('<a></a>')
            .attr({ 'href': '#feedback', 'name': 'feedback', 'id': 'feedback', 'title': 'Vote for this page'})
            .addClass('toolBarFeedback')
            .fancybox(
                {
                    'width':540,
                    'height':700,
                    'type':'iframe',
                    'href':'https://www.deutsche-bank.de/pfb/feedbackmanager/?id=101&lang='+langParameter+'&decorator='+decoratorValue+'&',
                    'titleFormat':formatTitleOnlyClose
                }
            )
            .hover(
                function() { 
                    jQuery("#ToolBarNote_"+jQuery(this).parent().attr('id')).css({right:zo.getRightPos(this)+"px"});
                    showNote('ToolBarNote_' +jQuery(this).parent().attr('id'),'Feedback'); 
                },
                function() { showNote('ToolBarNote_' +jQuery(this).parent().attr('id'),'') }
            );
    toolBarObjects[toolBarPos].push(nextToolbarObject)
}
 /**/

toolBarPos="bottom";
/**/

showMe=true;
showMe=true;
if (typeof(pageToolboxSettings)!='undefined') {
    if (pageToolboxSettings.indexOf("+facebook")>-1) showMe=true;
    if (pageToolboxSettings.indexOf("-facebook")>-1) showMe=false;
}
if (showMe) {
    nextToolbarObject=jQuery('<a></a>')
            .attr({ 
                'href': 'https://www.facebook.com/sharer.php?u='+ document.URL, 
                'title': 'share on Facebook',
                'target': '_blank'
            })
            .addClass('toolBarFacebook')
    
            .click(function() {
                printPopup=window.open(this.href,'fb_share','width=1000,height=600,scrollbars=yes,resizable=yes,menubar=no,status=no,location=no,toolbar=no'); 
                printPopup.focus();
                return false;
            })
            .hover(
                function() { 
                    jQuery("#ToolBarNote_"+jQuery(this).parent().attr('id')).css({right:zo.getRightPos(this)+"px"});
                    showNote("ToolBarNote_"+jQuery(this).parent().attr('id'),"Facebook");
                },
                function() { showNote('ToolBarNote_' +jQuery(this).parent().attr('id'),'') }
            );
    toolBarObjects[toolBarPos].push(nextToolbarObject)
}
/**//**/

showMe=true;
showMe=true;
if (typeof(pageToolboxSettings)!='undefined') {
    if (pageToolboxSettings.indexOf("+twitter")>-1) showMe=true;
    if (pageToolboxSettings.indexOf("-twitter")>-1) showMe=false;
}
if (showMe) {
    nextToolbarObject=jQuery('<a></a>')
            .attr({ 
                'href': 'https://twitter.com/home?status='+ document.URL, 
                'title': 'share on Twitter',
                'target': '_blank'
            })
            .addClass('toolBarTwitter')
    
            .click(function() {
                printPopup=window.open(this.href,'tw_share','width=800,height=400,scrollbars=yes,resizable=yes,menubar=no,status=no,location=no,toolbar=no'); 
                printPopup.focus();
                return false;
            })
            .hover(
                function() { 
                    jQuery("#ToolBarNote_"+jQuery(this).parent().attr('id')).css({right:zo.getRightPos(this)+"px"});
                    showNote("ToolBarNote_"+jQuery(this).parent().attr('id'),"Twitter");
                },
                function() { showNote('ToolBarNote_' +jQuery(this).parent().attr('id'),'') }
            );
    toolBarObjects[toolBarPos].push(nextToolbarObject)
}
/**//**/

showMe=true;
showMe=true;
if (typeof(pageToolboxSettings)!='undefined') {
    if (pageToolboxSettings.indexOf("+linkedin")>-1) showMe=true;
    if (pageToolboxSettings.indexOf("-linkedin")>-1) showMe=false;
}
if (showMe) {
    nextToolbarObject=jQuery('<a></a>')
            .attr({ 
                'href': 'https://www.linkedin.com/shareArticle?mini=true&url='+ document.URL, 
                'title': 'share on LinkedIn',
                'target': '_blank'
            })
            .addClass('toolBarLinkedIn')
    
            .click(function() {
                printPopup=window.open(this.href,'li_share','width=1000,height=500,scrollbars=yes,resizable=yes,menubar=no,status=no,location=no,toolbar=no'); 
                printPopup.focus();
                return false;
            })
            .hover(
                function() { 
                    jQuery("#ToolBarNote_"+jQuery(this).parent().attr('id')).css({right:zo.getRightPos(this)+"px"});
                    showNote("ToolBarNote_"+jQuery(this).parent().attr('id'),"LinkedIn");
                },
                function() { showNote('ToolBarNote_' +jQuery(this).parent().attr('id'),'') }
            );
    toolBarObjects[toolBarPos].push(nextToolbarObject)
}
/**/

function buildToolBox(boxPosition,trckPrefix) {
    clearToolbarNote =function(e) {
    showNote("ToolBarNote_"+boxPosition,"")
    };
    var toolBarOuter =  jQuery('<div></div>')
                            .attr('id', 'ToolBar_'+boxPosition)
                            .addClass('toolBarOuter')
                            .css({
                    
                            }),
        toolBarNote = jQuery('<span></span>')
                            .attr('id', 'ToolBarNote_'+boxPosition)
                            .addClass('ToolBarNote')
                            .html('&nbsp;'),
        toolBarInner = jQuery('<div></div>')
                            .attr('id', boxPosition)
                            .addClass('toolBarInner');
    
    var myToolBarObjects;
    toolBarObjects[boxPosition].length>0 ? myToolBarObjects=toolBarObjects[boxPosition] : myToolBarObjects=toolBarObjects['bottom'];
    for (var i = 0; i < myToolBarObjects.length; i++) {
        toolBarInner.append(myToolBarObjects[i].clone(true));
    }
    toolBarOuter
        .append(toolBarNote)
        .append(toolBarInner);
    return toolBarOuter;
}
/**//* */

jQuery(document).ready(function() { zo.createTrackValues(); });

var trackingDisplayActivated
    , clckTrck_lang            = "ITA"
    , clckTrck_prj             = "csItaly_"
    , trackingFiletypes        = ["pdf","doc","xls","ppt","zip"]
    , trackSwitch              = "FilesPages"
    , trackAllLinksAsPageHits  = "OFF"
    , sendTrackValueOnly       = "OFF"
    , wtVersion=''
    , trackModeValues={callPixelOnUnload:'',callPixelNow:''}
;

trackingFiletypes = trackingFiletypes.join("tolowercase").toLowerCase().split("tolowercase");

zo.chckWTVersion = function() {
    if (wtVersion=='') { 
        if (typeof(wt) != "undefined" && typeof(wt.sendinfo)  != "undefined") { //V3 Tracking
            wtVersion='3';
            trackModeValues.callPixelOnUnload='1';
            trackModeValues.callPixelNow='0';
        } else if (typeof(wt_sendInfo) != "undefined") { //V2 Tracking
            wtVersion='2';
            trackModeValues.callPixelOnUnload='link';
            trackModeValues.callPixelNow='click';
        } else {
            wtVersion='0';
        };
    };
};

if (typeof pgTrackSwitch != 'undefined' && pgTrackSwitch) {trackSwitch=pgTrackSwitch;};

zo.createTrackValues = function(filter) { 
 zo.chckWTVersion(); 
 if (trackSwitch.indexOf("Files")!=-1) {
  jQuery("#headerArea").addClass("trackMe");
  jQuery("#topStage").addClass("trackMe");
  jQuery("#metaNavi").addClass("trackMe");
  jQuery("#level1Navi").addClass("trackMe");
  jQuery("#leftNavi").addClass("trackMe");
  jQuery("#contentColumns").addClass("trackMe");
  jQuery("#footerNavigation").addClass("trackMe");
  jQuery("#footerArea").addClass("trackMe");


  var trackValues=[];
// define tracking search filter: default is 'within class trackMe', other filter may be assigned in function call
  var trackFilter;
  filter ? trackFilter=filter : trackFilter=".trackMe ";
// find all anchors within search filter area that are not class noTrack
  jQuery(trackFilter+"a[class!=noTrack][href]")
    .filter(function() {
// if tracking is activated only for files, filter only anchors where URL ends on filetype saved in trackingFiletypes array
      if (trackSwitch.indexOf("Pages")==-1){
        return jQuery.inArray(this.href.substr(this.href.lastIndexOf(".")+1).toLowerCase(),trackingFiletypes)>=0;
      }
// else do not filter
      else return true
    })
    .each(function(i) {
        var anch= jQuery(this);
        var filetypeCheck = false;
        try {filetypeCheck = jQuery.inArray(this.href.substr(this.href.lastIndexOf(".")+1).toLowerCase(),trackingFiletypes)>=0} catch(e){}
        var trackMe=anch.closest(".trackMe");
        var noTrack =anch.closest(".noTrack");
        noTrack.addClass("chckNotrack")
        var findNotrack= trackMe.find(".chckNotrack").length;
        noTrack.removeClass("chckNotrack")
    // assign tracking function only if link is not within noTrack area
    //    if (!findNotrack>findTrack) {
        if (findNotrack!=1) {
        // define tracking mode
            var trackMode=trackModeValues.callPixelOnUnload;
            if (anch.hasClass("trckClick") || !(anch.attr("target")=="" || anch.attr("target")=="_self") || anch.filter("[href^=#]").length ) 
                trackMode=trackModeValues.callPixelNow;
//          if (trackAllLinksAsPageHits =="ON" || (trackAllLinksAsPageHits =="OnlyFiles" && filetypeCheck))
//              trackMode="page";
    // define tracking region
          var trackRegion;
          trackMe.attr("id") ? trackRegion = trackMe.attr("id") : trackRegion="noRegionDefined";
          trackRegion=encodeURI(trackRegion);
    // define tracking value : 'rel' overrides 'title' overrides 'innerHTML'
          var trackVal;
          if (filetypeCheck) {

            trackVal = anch.attr('href');
          } else if (anch.attr("data-wt")) {
            trackVal = anch.attr("data-wt");
          } else if (anch.attr("rel")) {
            trackVal = anch.attr("rel");
          } else if (anch.attr("title")) {  
            trackVal = anch.attr("title");
          } else if (anch.children().is("img")) { 
            var $myIMG=anch.children();
            if ($myIMG.attr("alt")) {
                trackVal = $myIMG.attr("alt");
            } else {
                trackVal = $myIMG.attr("src");
            }           
          } else {
            trackVal = anch.html();
          }
          trackVal=encodeURI(trackVal);
    // multiple tracking values handling: check if this tracking value has been assigned before, in this case add '[count]'
          multTrack=jQuery.grep(trackValues, function (a) { return a == trackVal; }).length;
          var addTrackVal= trackValues.push(trackVal);
          if (multTrack)
            trackVal=trackVal+"["+(multTrack+1)+"]"
    // build tracking value string from parameters
          var trackString;
          if(sendTrackValueOnly=="ON" ||(sendTrackValueOnly=="OnlyFiles" && filetypeCheck)) {
              trackString = clckTrck_prj+trackVal;
          } else {
              trackString = clckTrck_prj+clckTrck_lang+"_"+clckTrck_page+"_"+trackRegion+"_" + trackVal;
          }
    
    
    // assign the tracking function
          anch
            .unbind("click.trackClicks") // make sure the tracking function is assigned only once
            .bind("click.trackClicks",function(ev){
                zo.callWTPixel(trackString,trackMode); 
            })
        }
    });    
 }
};
zo.fireClickTracking= function(trackRegion,trackVal,trackMode) {
    trackVal=encodeURI(trackVal);
    var trackString;
    if(sendTrackValueOnly=="ON") {
        trackString = clckTrck_prj+trackVal;
    } else {
        trackString = clckTrck_prj+clckTrck_lang+"_"+clckTrck_page+"_"+trackRegion+"_" + trackVal;
    }
    zo.callWTPixel(trackString,trackMode); 
};
zo.callWTPixel = function(trackString,trackMode) {
    if (wtVersion=='3') { //V3 Tracking
        wt.sendinfo ({linkId:trackString, sendOnUnload:trackMode});
        if(typeof console != "undefined") console.log(trackString+" sendOnUnload:"+trackMode); 
    } else if (wtVersion=='2') { //V2 Tracking
        wt_sendinfo (trackString, trackMode);
        if(typeof console != "undefined") console.log(trackString+" "+trackMode); 
    } else { //no webtrekk available
        if(typeof console != "undefined") console.log('tracking request available, but no webtrekk'); 
    }
};
/* */

/*
jQuery(document).ready(function(){
    jQuery(".nvsbl").each(function(){
        var x= jQuery(this).outerHTML();
alert(jQuery(this).outerHTML());
        var y= jQuery(this).parent().html();
        alert(y.split(x).length);
    })
})
*/

function initPage() {
}
/* */