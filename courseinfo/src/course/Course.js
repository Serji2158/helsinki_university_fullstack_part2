import React from 'react'
import Header from "./Header"
import Content from "./Content";
import Total from './Total'

const Course = ({ courses }) => {
  // console.log(course.parts.exercises);
  console.log(courses);
  // console.log("name: ", course.name);
  // console.log("parts: ", course.parts);
  return ( 
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course => (
          <React.Fragment key={course.id} >            
            <Header name={course.name} />
            <Content parts={course.parts} /> 
            <Total exercises={course.parts} />
          </React.Fragment>
        ))
      }      
    </div>
  )
}

export default Course;