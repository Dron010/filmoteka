import { refs } from '../refs/refs.js';
import { openModalWindow } from './modal.js';
import contactsArr from '../../contacts.json';
import contactsTmpl from '../../partial/templates/contacts-list.hbs';

refs.contactsLink.addEventListener('click', onContactsClick);

function onContactsClick() {
  openModalWindow();
  refs.modal.innerHTML = contactsTmpl(contactsArr.students);
}
