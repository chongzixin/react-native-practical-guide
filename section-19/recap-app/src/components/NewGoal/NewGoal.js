import React, {useState} from 'react';

import './NewGoal.css';

function NewGoal(props) {
    const [enteredText, setEnteredText] = useState("");

    const addGoalHandler = event => {
        // the default behaviour is to send this to the server. we don't want that to happen here so we call preventDefault()
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        };

        setEnteredText("");

        props.onAddGoal(newGoal);
    }

    const captureTextHandler = event => {
        setEnteredText(event.target.value);
    }

    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type="text" value={enteredText} onChange={captureTextHandler}/>
            <button type="submit">Add Goal</button>
        </form>
    );
}

export default NewGoal;