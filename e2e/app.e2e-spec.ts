import { ParzFrontPage } from './app.po';

describe('parz-front App', () => {
  let page: ParzFrontPage;

  beforeEach(() => {
    page = new ParzFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
