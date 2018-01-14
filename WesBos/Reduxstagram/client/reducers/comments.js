function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      // return the new state with the new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      // return the new state without the deleted comment
      // ...state.slice()
      // 0 is the beginning
      // action.id is the point of the selected comment to be deleted
      return [
        // from start to the one we want to delete
        ...state.slice(0, action.i),
        // after the deleted one to the end
        ...state.slice(action.i + 10)
      ]
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  // Reducer composition to update single piece of state
  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}


export default comments;
