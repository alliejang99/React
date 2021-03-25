import { createStore } from 'redux';

// 최초정보
var initState = {
  mode: 'WELCOME', // READ
  welcome_content: {
    title: 'WEB',
    desc: 'Hello, WEB'
  },
  selected_content_id: 1,
  contents: [
    {id: 1, title: 'HTML', desc: 'HTML is for Information'},
    {id: 2, title: 'CSS', desc: 'CSS is for Design'},
    {id: 3, title: 'JavaScript', desc: 'JavaScript is for Interaction'},
  ]
}
function reducer(state=initState, action){
  if(action.type === 'WELCOME'){
    return {...state, mode:'WELCOME'}; // state 복제: {... ###}
  }
  if(action.type === 'READ'){
    return {...state, mode: 'READ',
    selected_content_id:action.id}
  }
  if(action.type === 'CREATE'){
    return {...state, mode:'CREATE'}
  }
  return state;
}
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);