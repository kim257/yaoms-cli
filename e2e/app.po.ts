import { browser, element, by } from 'protractor';

export class YaomsNgCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('apps-root h1')).getText();
  }
}
