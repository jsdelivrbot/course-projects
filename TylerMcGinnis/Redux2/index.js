{
  type: 'ADD_TODO',
  todo: {
    id: 0,
    name: 'Learn Redux',
    complete: false,
  }
}

{
    type: 'REMOVE_TODO',
    id: 0,
}

{
  type: 'TOGGLE_TODO',
  id: 0,
}

{
  type: 'ADD_GOAL',
  goal: {
    id: 0,
    name: 'Run a Marathon',
  }
}

{
  type: 'REMOVE_GOAL',
  id: 0
}
function createStore () {
  // The store should have 4 parts
  // 1: the state
  // 2: Get the state
  // 3: Listen to changes on the state
  // 4: Update the state

  let state
  let listeners = []

  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(() => l !== listeners)
    }
  }

  return {
    getState,
    subscribe
  }
}


// const store = createStore()
// store.subscribe(() => {
//
// })
// store.subscribe(() => {
//
// })
