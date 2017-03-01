import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });
});




// // Use 'describe' to group together similar tests
// // describe('App') - the component we want to test but it could be anything
// // It is just used to describe the test we get in the report
// describe('App', () => {
//   // Use 'it' to test a single attribute of a target
//   // Use to group one single test
//   // Here is exactly what I am testing about App
//   // The string is only used for the report
//   it('shows the correct text', () => {
//     // create an instance of App
//     const component = renderComponent(App);
//     // Use 'expect' to make an assertion about a target (a thing we are testing)
//     expect(component).to.contain('React simple starter');
//   });
// })
