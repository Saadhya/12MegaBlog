import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'

function Details() {
    const {updateName} = useContext(UserContext);
    // console.log(updateName)
  return (
    <div>
        {/* <h2>Details {data.updateName}</h2> */}
      <button onClick={() => updateName("Radhe Krishna")}>Update name</button>

    </div>
  )
}

export default Details