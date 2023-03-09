import Header from "./Header"
import Content from "./Content";

const Course = ({ course }) => {
  // console.log(course);
  // console.log("name: ", course.name);
  // console.log("parts: ", course.parts);
  return ( 
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />      
    </div>
  )
}

export default Course;