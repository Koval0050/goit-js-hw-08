function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var r,o,a,i,f,u,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,a=o;return r=o=void 0,l=t,i=e.apply(a,n)}function S(e){return l=e,f=setTimeout(h,t),c?y(e):i}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=a}function h(){var e=g();if(O(e))return j(e);f=setTimeout(h,function(e){var n=t-(e-u);return s?d(n,a-(e-l)):n}(e))}function j(e){return f=void 0,v&&r?y(e):(r=o=void 0,i)}function w(){var e=g(),n=O(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),i}return t=b(t)||0,p(n)&&(c=!!n.leading,a=(s="maxWait"in n)?m(b(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=o=f=void 0},w.flush=function(){return void 0===f?i:j(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||i.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const y={email:document.querySelector('input[name="email"]'),message:document.querySelector('textarea[name="message"]'),form:document.querySelector(".feedback-form")},S={email:"",message:""};y.email.addEventListener("input",e(t)((e=>{S.email=String(e.target.value.trim()),localStorage.setItem("feedback-form-state",JSON.stringify(S)),console.log(JSON.parse(localStorage.getItem("feedback-form-state")))}),500)),y.message.addEventListener("input",e(t)((e=>{S.message=String(e.target.value.trim()),localStorage.setItem("feedback-form-state",JSON.stringify(S)),console.log(JSON.parse(localStorage.getItem("feedback-form-state")))}),500));let O=null;try{O=JSON.parse(localStorage.getItem("feedback-form-state"))}catch(e){console.error("Error parsing feedback-form-state:",e)}O&&(y.email.value=O.email,y.message.value=O.message),y.form.addEventListener("submit",(e=>{e.preventDefault(),console.log(O),y.email.value="",y.message.value="",localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.aaa20c62.js.map
