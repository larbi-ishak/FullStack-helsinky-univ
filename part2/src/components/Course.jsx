export default function Course({ course }) {
  return (
    <div>
      <h1>{course.name}</h1>
      <Parts parts={course.parts} />
    </div>
  )
}

function Parts({ parts }) {
  return (
    <>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </>
  )
}

function Part({ part }) {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

