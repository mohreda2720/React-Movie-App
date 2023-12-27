const Initial_state={
    movies:[],
    color:"black",

}
export default function favReducer(state=Initial_state,action){
    switch(action.type){
        case "SET_FAV":
            return{...state,movies:[...state.movies,action.payload]}
        case "SET_HEART":
            return{...state,color:action.payload}
        case "SET_DEL":
            return{...state,movies:[...action.payload]}
            default:
                return state
    }
}