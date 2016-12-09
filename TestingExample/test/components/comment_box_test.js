import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  let component; // undefined at this point

  // run this before each it
  beforeEach(() => {
    // outside variable is not = CommentBox
    component = renderComponent(CommentBox);
  });
  it('has the class comment-box', () => {
    expect(component).to.have.class('comment-box');
  })

  it('has a textarea', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      // fetch the textarea    simulate a change event with text entered
      component.find('textarea').simulate('change', 'new comment');
    });
    it('shows that text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment')
    });

    it('when submitted, clears the input', () => {
      // triger behavior to clear out the input
      component.simulate('submit');

      expect(component.find('textarea')).to.have.value('');
    });
  });


});
