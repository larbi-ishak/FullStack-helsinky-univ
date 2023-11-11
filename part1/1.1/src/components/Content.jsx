export default function Content({ parts, exercices }) {
  return (
    <>
      <p>
        {parts[0]} {exercices[0]}
      </p>
      <p>
        {parts[1]} {exercices[1]}
      </p>
      <p>
        {parts[2]} {exercices[2]}
      </p>
    </>
  );
}
