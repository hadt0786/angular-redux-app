import { AngularReduxAppPage } from './app.po';

describe('angular-redux-app App', () => {
  let page: AngularReduxAppPage;

  beforeEach(() => {
    page = new AngularReduxAppPage();
  });

  it('should contain the personal details table', () => {
    page.navigateTo();
    expect(page.getPersonalDetailsTable()).toBeTruthy();
  });

   it('should contain the contact details table', () => {
    page.navigateTo();
    expect(page.getContactDetailsTable()).toBeTruthy();
  });
});
