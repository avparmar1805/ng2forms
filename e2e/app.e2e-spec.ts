import { Ng2formsPage } from './app.po';

describe('ng2forms App', () => {
  let page: Ng2formsPage;

  beforeEach(() => {
    page = new Ng2formsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
