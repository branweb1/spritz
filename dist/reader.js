var __awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,c){function o(t){try{a(r.next(t))}catch(t){c(t)}}function s(t){try{a(r.throw(t))}catch(t){c(t)}}function a(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(o,s)}a((r=r.apply(t,e||[])).next())})};const RED_LETTER_OFFSET=6;function calcRedIdx(t){let e;const n=t.length;return e=1===n?0:n<=3?1:n<8?2:3}function splitter(t){return concatMap(t=>t.split(/(\w+\-)/),t.split(/\s+/)).filter(idFunc)}function makeWord(t){const e=calcRedIdx(t);return leftpad(t.substring(0,e)," ",RED_LETTER_OFFSET-e)+`<span style="color:#CC0033;">${t.charAt(e)}</span>`+t.substring(e+1)}function calcSleepTime(t,e){let n=6e4/e;const r=t.slice(-1);return/[\.\!\;]/.test(r)?n+=230:/[\-\,\:]/.test(r)&&(n+=100),n}function concatMap(t,e){return e.reduce((e,n)=>[...e,...t(n)],[])}function idFunc(t){return t}function leftpad(t,e,n){let r="";for(let t=0;t<n;t++)r+=e;return r+t}function sleep(t){return new Promise(e=>setTimeout(e,t))}function extractTextArea(){const t=document.querySelector("textArea");return t?t.value:""}function extractTextAreaSelection(){const t=document.querySelector("textArea"),e=t.selectionStart,n=t.selectionEnd;return t?t.value.substring(e,n):""}function extractPageSelection(){return window.getSelection().toString()}function extractText(){const t=extractPageSelection();return t||(extractTextAreaSelection()||extractTextArea())}function setBarOffset(t){t.style.visibility="hidden",t.innerHTML=makeWord("dummyword");const e=t.querySelector("span").getBoundingClientRect().width,n=e/2+e*RED_LETTER_OFFSET;[...document.querySelectorAll(".spritz-vert-bar")].forEach(t=>t.style.width=`${n}px`),t.innerHTML=" ",t.style.visibility="initial"}function showWords(t,e){return __awaiter(this,void 0,void 0,function*(){for(let n=0;n<t.length;n++){const r=makeWord(t[n]);e.innerHTML=r,yield sleep(calcSleepTime(r,300))}})}function toggleReaderVisibility(){const t=document.querySelector("#spritz-container");"none"===t.style.display?t.style.display="initial":t.style.display="none"}function readerMain(){return __awaiter(this,void 0,void 0,function*(){const t=document.createElement("div"),e=yield fetch("https://branweb1.github.io/reader/dist/reader.html").then(t=>t.text()),n=document.createElement("link");t.setAttribute("id","spritz-container"),n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href","https://branweb1.github.io/reader/dist/style.css"),document.querySelector("head").appendChild(n),t.innerHTML=e,document.body.appendChild(t);const r=document.querySelector("#spritz-display-area");setBarOffset(r),showWords(splitter(extractText()),r)})}readerMain();