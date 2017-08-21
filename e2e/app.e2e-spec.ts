import { GbeduPage } from './app.po';

describe('gbedu App', () => {
  let page: GbeduPage;

  beforeEach(() => {
    page = new GbeduPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
