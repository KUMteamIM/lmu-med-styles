(()=>{"use strict";window.onload=function(){const t=document.getElementById("button-colors");["grassgreen","orange","gold","sel-red","sel-light-gray","sel-gray","sel-dark-gray","sel-distinct"].forEach((n=>{const e=document.createElement("tr");e.innerHTML=`<td>${n}</td><td><button class="button-lg ${n}">${n}</button></td><td><button class="button-lg ${n}-invers">${n}-invers</button></td>`,t.appendChild(e)}))}})();