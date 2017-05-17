import { MyHousePage } from './app.po';

describe('my-house App', () => {
  let page: MyHousePage;

  beforeEach(() => {
    page = new MyHousePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
