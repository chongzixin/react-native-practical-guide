import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

function App() {
  // useState() always returns two variables
  // 1. the current snapshot of the item
  // 2. a callback function to update the state snapshot
  const [courseGoals, setCourseGoals] = useState([
    {id: "cg1", text:"Eat"},
    {id: "cg2", text:"Sleep"},
    {id: "cg3", text:"Code"},
  ]);

  const addNewGoalHandler = newGoal => {
    // use concat() so that copy of the array is returned. push() modifies the underlying array
    // this is a callback function defined by useState() above. so it returns a new array and updates courseGoals

    // setCourseGoals(courseGoals.concat(newGoal)); // not the best way because it's scheduled and not done immediately
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal)); // this is a better approach because it works off the previous state of the data
  }

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
