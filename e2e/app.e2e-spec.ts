import { YaomsNgCliPage } from './app.po';

describe('yaoms-ng-cli App', () => {
  let page: YaomsNgCliPage;

  beforeEach(() => {
    page = new YaomsNgCliPage();
  });

  it('should display message saying apps works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('apps works!');
  });
});
