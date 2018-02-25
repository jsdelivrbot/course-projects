// Users

const initialUserState = {
  info: {
    name: '',
    uid: '',
    avatar: '',
  }
}

// function to create reducer composition
// this is getting a slice of the state to handle
function user (state = initialState, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp,
      }
    default:
      return
  }
}

const initialUserState = {
    isFetching: false,
    error: '',
    isAuthed: false,
    authedId: ''
}

function users (state = initialState, action) {
  switch (action.type) {
      case AUTH_USER:
        return {
          ...state,
          isAuth: true,
          authedId: action.uid,
        }
      case UNAUTH_USER:
        return {
          ...state,
          isAuth: false,
          authdId: '',
        }
      case FETCHIN_USERS:
        return {
          ...state,
          isFetching: true
        }
      case FETCHING_USER_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.error,
        }
      case FETCHING_USER_SUCCESS:
        return action.user === null
         ? {
           ...state,
           error: '',
           isFetching: false,
         }
         : {
           ...state,
           isFetching: false,
           error,
           [action.uid]: user(state[action.uid], action)
         }
      default:
        return state
  }
}
