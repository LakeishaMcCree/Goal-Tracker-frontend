export const fetchGoals = () => {
    return(dispatch) => {
        return fetch('http://localhost:3000/goals')
        .then(resp => resp.json())
        .then(goals => {
            dispatch({ type: "FETCH_GOALS", payload: goals})
        })
    }
}