!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i,u,r=o("h6c0i"),c=0,l=[],a={inputFirstDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]'),submitForm:document.querySelector(".form"),submitButton:document.querySelector(".form button")};a.submitForm.addEventListener("submit",(function(e){e.preventDefault(),i=Number(a.inputFirstDelay.value),Number(a.inputStep.value),u=Number(a.inputAmount.value),a.submitButton.setAttribute("disabled",""),function(e,t){for(var n=1;n<=t;n+=1)c=1===n?e:c+=e,l.push(c)}(i,u),l.map((function(e,t){(function(e,t){return new Promise((function(n,o){var i=Math.random()>.3;console.log(i),setTimeout((function(){i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))})(t+1,e).then((function(e){var t=e.position,n=e.delay;r.Notify.success("Fulfilled promise ".concat(t," in ").concat(n,"ms")),console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms")),r.Notify.failure("Rejected promise ".concat(t," in ").concat(n,"ms"))}))})),i=0,0,u=0,c=0,l=[],a.submitButton.removeAttribute("disabled","")}))}();
//# sourceMappingURL=03-promises.5ffdf24c.js.map
