






import React from 'react'

function Heading({text}) {
    console.log("Heading",text)
  return (
    <div>
        <h2>{text}</h2>
    </div>
  )
}

export default React.memo(Heading)