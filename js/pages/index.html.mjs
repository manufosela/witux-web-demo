import data from '../../json/index.json.js'; /* FUENTE DE DATOS JSON */
import {CommonTpl} from './common.html.mjs';

const lang = CommonTpl.LANG;

const pageData = data.index[lang];
window.WituxDATA.pageData = data.index[lang];


const HTMLbody = /* html */`
    ${CommonTpl.titleTpl(pageData.header)}
    <main role="main" class="homepage">
      <h1>CAMBIAR POR EL CONTENIDO HTML DE LA PÁGINA</h1>
      <mi-componente1></mi-componente1>
    </main>
    <footer>
      witux - ${new Date().getFullYear()}
    </footer>
`;

document.body.innerHTML = `
<div id="loading" class="loading">CARGANDO....</div>  
<div id="main">
  ${HTMLbody}
</div>`;