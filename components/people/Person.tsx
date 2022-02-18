import React from 'react'

type PersonProps = {
  name: string
  hairColor: string
  eyeColor: string
}

const Person = ({ name, hairColor, eyeColor }: PersonProps) => {
  return (
    <li>
      {name}
      <ul>
        <li>hair: {hairColor}</li>
        <li>eyes: {eyeColor}</li>
      </ul>
    </li>
  )
}

export default Person
