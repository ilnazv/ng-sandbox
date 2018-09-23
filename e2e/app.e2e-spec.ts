import { NgSandboxPage } from './app.po';

describe('ng-sandbox App', () => {
  let page: NgSandboxPage;

  beforeEach(() => {
    page = new NgSandboxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
