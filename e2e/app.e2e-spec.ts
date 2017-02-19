import { MyAuthPage } from './app.po';

describe('my-auth App', function() {
  let page: MyAuthPage;

  beforeEach(() => {
    page = new MyAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
