export default (state = [], action) => {
    switch(action.type){
        case "LIST_GOALS":
            return [...action.payload]

        default:
            return state
    }
}