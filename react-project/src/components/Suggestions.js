import React from 'react'
import { Link } from 'react-router-dom'

const Suggestions = (props) => {
  return <ul>
    {props.results.map(r => (
      <li key={r.id}>
        <Link to={'/SearchResults/?query=' + r.name}>
          {r.name}
        </Link>
      </li>
    ))}
  </ul>
}

// const Suggestions = (props) => {
//   return <ul>
//     {props.results.map(r => (
//       <li key={r.id}>
//         <Link to={'/SearchResults/' + r.name}>
//           {r.name}
//         </Link>
//       </li>
//     ))}
//   </ul>
// }

export default Suggestions