import { JinPage } from './app.po';

describe('jin App', () => {
  let page: JinPage;

  beforeEach(() => {
    page = new JinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
