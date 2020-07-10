import React from 'react'

const H1 = (props) => {

  return (
    <div>
        <h1>{props.h1}</h1>
        <style jsx>{`
        h1 {
          margin-left: calc(15px + (230 - 15) * ((100vw - 300px) / (1600 - 300)));
          margin-right: calc(15px + (230 - 15) * ((100vw - 300px) / (1600 - 300)));
          font-size: calc(18pt + (24 - 18) * ((100vw - 300px) / (1600 - 300)));
          padding: 15px;
        }
      `}</style>
    </div>
  )
}

export default H1