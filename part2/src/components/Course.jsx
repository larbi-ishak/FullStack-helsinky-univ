export default function Course({ course }) {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <h1>{course.name}</h1>
      <Parts parts={course.parts} />
      <Total total={total} />
    </div>
  );
}

function Parts({ parts }) {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
}

function Part({ part }) {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}

function Total({ total }) {
  return (
    <p>
      <strong>total of {total} exercises</strong>
    </p>
  );
}
