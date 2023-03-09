import Header from "./Header"
import Content from "./Content";
import Total from './Total'

const Course = ({ course }) => {
  // console.log(course.parts.exercises);
  // console.log(course);
  // console.log("name: ", course.name);
  // console.log("parts: ", course.parts);
  return ( 
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} /> 
      <Total exercises={course.parts} />
    </div>
  )
}

export default Course;