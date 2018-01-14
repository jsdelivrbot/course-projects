// these come from the test_helper.js file
import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';


// Use "describe" to group together similar tests
// Testing Component App
describe('App', () => {
  let component; // undefined at this point

  // run this before each it
  beforeEach(() => {
    // outside variable is not = CommentBox
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
