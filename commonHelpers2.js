import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const o=document.querySelector(".feedback-form");let a={email:"",message:""};const l=()=>{const e=JSON.parse(localStorage.getItem("data-feedback-form"));if(e!==null){a=e;for(const t in e)e.hasOwnProperty(t)&&(o.elements[t].value=e[t])}};l();const m=e=>{const t=e.target.name,r=e.target.value;a[t]=r,localStorage.setItem("data-feedback-form",JSON.stringify(a))},n=e=>{e.preventDefault(),e.target.reset(),localStorage.removeItem("data-feedback-form")};o.addEventListener("input",m);o.addEventListener("submit",n);
//# sourceMappingURL=commonHelpers2.js.map
