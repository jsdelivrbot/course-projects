import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
    let component;

    beforeEach(() => {
      const props = { comments: ['New Comment', 'Other new comment']};
      // how do we get comments here
      // need a method to push props in here
      // the third agrument is the props
      component = renderComponent(CommentList, null, props);
    });


    it('shows an LI for each comment', () => {
      // just get the number of comments provided above
      expect(component.find('li').length).to.equal(2);
    });

    it('shows each comment that is provided', () => {
      expect(component).to.contain('New Comment');
      expect(component).to.contain('Other new comment');
    });
});
