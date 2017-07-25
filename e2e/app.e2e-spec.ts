import { AngularGitTestPage } from './app.po';

describe('angular-git-test App', () => {
  let page: AngularGitTestPage;

  beforeEach(() => {
    page = new AngularGitTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
