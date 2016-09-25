import { NydaltechPage } from './app.po';

describe('nydaltech App', function() {
  let page: NydaltechPage;

  beforeEach(() => {
    page = new NydaltechPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
