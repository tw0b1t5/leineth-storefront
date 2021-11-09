console.log('AAAAAAAAAAAAAAAAAA');
/*
let MDCList = require('@material/list');
let MDCRipple = require('@material/ripple');
let MDCDialog = require('@material/dialog');
*/
import {MDCList} from './node_modules/@material/list';
import {MDCRipple} from './node_modules/@material/ripple';
import {MDCDialog} from './node_modules/@material/dialog';

// const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
// new MDCRipple(document.querySelector('.mdc-list-item__ripple'));
MDCRipple.attachTo(document.querySelector('.mdc-list-item__ripple, .mdc-button'));
const tooltip = new MDCTooltip(document.querySelector('.mdc-tooltip'));
const list = MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;
const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
mdc.ripple.MDCRipple.attachTo(document.querySelector('.mdc-button'));
const ripple = new MDCRipple(document.querySelector('.mdc-button'));

// Dialog config.
(function() {
  'use strict';

  const contentElement = document.querySelector('.app-body');

  dialog.listen('MDCDialog:opened', function() {
    // Assuming contentElement references a common parent element with the rest of the page's content.
    contentElement.setAttribute('aria-hidden', 'true');
  });
  dialog.listen('MDCDialog:closing', function() {
    contentElement.removeAttribute('aria-hidden');
  });

  var productElement = document.querySelectorAll('.product-list .mdc-image-list__item');

  productElement.forEach(function(element, index) {
    let showDialogBtn = element.find(document.querySelector('.showDialog'));
    let dialog = new MDCDialog(index.find(document.querySelector('.mdc-dialog')[0]));

    showDialogBtn.addEventListener('click', showDialog); 
    
    function showDialog() {
      dialog.open();
      console.log('HOLY FUCK IT WORKS');
    };
  });
});
/*
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON






import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';

new MDCTextField(document.querySelector('.username'));
new MDCTextField(document.querySelector('.password'));
new MDCRipple(document.querySelector('.cancel'));
new MDCRipple(document.querySelector('.next'));
*/