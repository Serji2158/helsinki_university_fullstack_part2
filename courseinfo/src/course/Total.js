
const Total = ({ exercises }) => {
  console.log(exercises);
  return (
    <>
      <h2>
        Total of { exercises.reduce((total, exercise) => total + exercise.exercises, 0) } exercises
      </h2>
    </>
    
  )
}

export default Total