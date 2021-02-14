import { HYDRATE } from "next-redux-wrapper"

// user -> user의 reducer
import user from "./user"
import post from "./post"

// reducer 들을 합쳐줌 
// user, post 의 initialState 는 combineReducers 가 알아서 합쳐준다.
import { combineReducers } from "redux";

// const initialState = {
//     name: "Mia",
//     age: 27,
//     password: "babo"
// }

// action creator
// const changeName = () => {
//     return {
//         type: "CHANGE_NAME",
//     }
// }

// changeName("BBBil")


// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
    // HYDRATE 를 위해서 아래와 같은 형식을 이용.(SSR을 위해서)
    index : ( state = {}, action ) => {
        switch(action.type) {
        case HYDRATE : 
            console.log("HYDRATE", action)
            return { ...state, ...action.payload}
        
        default :
        return state
        }
    },
    user,
    post,
})
    

export default rootReducer;