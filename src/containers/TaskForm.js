import React from'react' 



const TaskForm = () => {
    return(
        <form>
            <input type="text" class="goal-input" />
            <input type="date" class="complete-date"/>
            <div className="select">
                <select name="tasks" class="filter-task">
                    <option value="completed">Completed</option>
                    <option value="incomplete"> Not Completed</option>
                </select>
            </div>
            <button class="goal-button" type="submit"></button>
        </form>
    )
}

export default TaskForm