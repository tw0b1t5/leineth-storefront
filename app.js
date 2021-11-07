import {MDCList} from "./node_modules/@material/list";
import {MDCTooltip} from './node_modules/@material/tooltip';
import {MDCRipple} from './node_modules/@material/ripple';

// const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
// new MDCRipple(document.querySelector('.mdc-list-item__ripple'));
MDCRipple.attachTo(document.querySelector('.mdc-list-item__ripple'));
new MDCTooltip(document.querySelector('.mdc-tooltip'));
const list = MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;
/*
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON






import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';

new MDCTextField(document.querySelector('.username'));
new MDCTextField(document.querySelector('.password'));
new MDCRipple(document.querySelector('.cancel'));
new MDCRipple(document.querySelector('.next'));
*/