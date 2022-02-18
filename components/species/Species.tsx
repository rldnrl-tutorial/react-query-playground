type SpeciesProps = {
  name: string
  language: string
  averageLifespan: string
}

const Species = ({ name, language, averageLifespan }: SpeciesProps) => {
  return (
    <li>
      {name}
      <ul>
        <li>language: {language}</li>
        <li>average lifespan: {averageLifespan}</li>
      </ul>
    </li>
  )
}

export default Species
