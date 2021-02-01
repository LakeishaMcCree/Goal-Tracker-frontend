import React from'react' 



const GoalForm = () => {
    return(
        <form>
            <h1>Goal Tracker Form:</h1><br /><br />
            <label>Goal:</label><br />
            <input type="text" name="goal" /><br /><br />
            <label>Complete By:</label><br />
            <input type="date" name="date"/><br /><br />
            <button className="goal-button" type="submit"></button>
        </form>
    )
}

export default GoalForm