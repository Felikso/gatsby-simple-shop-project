import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
//save data to localstorage
function saveToLocalStorage(state) {
    try {
      const serializedState = JSON.stringify(state)
      localStorage.setItem('state', serializedState)
    } catch(e){
      console.log(e)
    }
  }

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch(e){
        console.log(e)
        return undefined
    }
}

const presistedState = loadFromLocalStorage()

const store = createStore(
    rootReducer,
    presistedState,
    composeWithDevTools());

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;
