import { CommonTpl } from './common.html.mjs';
import data from '../../json/index.json.js';

CommonTpl.setData(data);
CommonTpl.detectLanguage();
/* eslint-disable-next-line */
const LANG = CommonTpl.LANG;
const DATA = data[LANG];
// eslint-disable-next-line no-console
console.info(`LANG: ${LANG}`);

export const HTMLbody = /* html */ `
    <main role="main" class="homepage">
        <h1>${DATA.title}</h1>
        <p>${DATA.description}</p>
    </main>
`;

document.body.innerHTML = `${HTMLbody}`;
