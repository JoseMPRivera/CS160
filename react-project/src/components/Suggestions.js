import React from 'react'

const Suggestions = (props) => {
  return <ul>
    {props.results.map(r => (
      <li key={r.id}>
        <a href='#'>
        {r.name}
        </a>
      </li>
    ))}
  </ul>
}

export default Suggestions