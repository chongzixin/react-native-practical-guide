// REACT
// is a frontend framework - runs on client side and not on server
// is a declarative approach - just define what you want the result to be.
// define components and build UI using components

// there are 2 ways to define components
// 1 - as a function - modern way
const App = () => {
    // returns JSX - wont work if it returns an object
    return <h1 title="this works">Hello from REACT</h1>
};
// 2 - as a class
class App extends React.Component {
    render() {
        return <h1 title="this works">Hello from REACT</h1>
    }
}

// parent to child communication is done using props
// child to parent communication also uses props but as a callback function
// <GoalList goals={courseGoals} /> // parent to child communication with variable as prop
// <NewGoal onAddGoal={addNewGoalHandler} /> // child to parent communication with callback function as prop

// useState() is used to manage state in FUNCTIONAL COMPONENTS (there are other ways to do so for class components but not important)
// always returns two variables
// 1. the current snapshot of the item
// 2. a callback function to update the state snapshot
// after the callback function is called, it will always call the component function again to re-render the state
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