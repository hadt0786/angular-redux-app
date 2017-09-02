import { browser, by, element } from 'protractor';

export class AngularReduxAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getPersonalDetailsTable() {
    return element(by.css('#personal-details'));
  }

   getContactDetailsTable() {
    return element(by.css('#contact-details'));
  }
}
