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


// Ducks
const initialState = {
  isFetching; true,
  error: ''
}

function ducks (state, action) {
  switch (action.type) {
    case FETCHING_DUCK:
      return {
        ...state,
        isFetching: true,
      }
    case ADD_DUCK:
    case FETCHING_DUCK_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        [action.duck.duckId]: action.duck,
      }
    case FETCHING_DUCK_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case REMOVE_FETCHING:
      return {
        ...state,
        isFetching: false,
        error: '',
      }
    case ADD_MULTIPLE_DUCKS:
      return {
        ...state,
        ...action.ducks
      }
    default:
      return state
  }
}


// Feed
const initialState ={
    isFetching: false,
    newDucksAvailable: false,
    newDucksToAdd: [],
    error: '',
    duckIds: [],
}

function feed (state, action) {
  switch (action.type {
    case SETTING_FEED_LISTENER:
      return {
        ...state,
        isFetching: true,
      }
    case SETTING_FEED_LISTENER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case SETTING_FEED_LISTNER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',.
        duckIds: action.duckIds,
        newDucksAvailable: false,
      }
    case ADD_NEW_DUCK_ID_TO_FEED:
      return {
        ...state,
        newDucksToAdd: [action.duckId, ... state.newDucksToAdd]
      }
    case RESET_NEW_DUCKS_AVAILABLE:
      return {
        ...state,
        duckIds: [...state.newDucksToAdd, ...state.duckIds],
        newDucksToAdd: [],
        newDucksAvailable: false,
      }
    default:
      return state
  })
}



//Listeners
export default function listeners (state = {}, action) {
  switch (action.type) {
    case ADD_LISTENER :
      return {
        ...state,
        [action.listenerId]: true,
      }
    default :
      return state
  }
}


//Modal
const initialState = {
  duckText: '',
  isOpen: false,
}

export default function modal (state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL :
      return {
        ...state,
        isOpen: true,
      }
    case CLOSE_MODAL :
      return {
        duckText: '',
        isOpen: false,
      }
    case UPDATE_DUCK_TEXT :
      return {
        ...state,
        duckText: action.newDuckText,
      }
    default :
      return state
  }
}
