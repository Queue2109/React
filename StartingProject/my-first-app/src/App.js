import React, { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';


function App() {

  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the course'},
    {id: 'cg2', text: 'Learn about the Course main topic'},
    {id: 'cg3', text: 'Help other students in the Course Q&A'}
  ]);

  const addNewGoalHandler = newGoal => {
   // setCourseGoals(courseGoals.concat(newGoal)); it's not the best 
    setCourseGoals((prevCourseGoals) => { // this approach guarantees execution in the right order. but if the order is not important, you can use the first approach
      return prevCourseGoals.concat(newGoal); 
    });
  };

  return (
    <div className='course-goals'>
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} /> 
    </div>
  );
};

export default App;
