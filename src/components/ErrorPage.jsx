import React from 'react'

const ErrorPage = (props) => {


  return (
    <div>
      <h2>Error</h2>
      {!props.location.state ? <div><p>Invalid URL</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk4T1nJ0ePULGjc4gRPKL2tNSMF-TAYkHCsSBaBMSWFiZpMpMV" alt="thumbs down"></img>
      </div>
        :
        <div>
          <p>{props.location.state.message}</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk4T1nJ0ePULGjc4gRPKL2tNSMF-TAYkHCsSBaBMSWFiZpMpMV" alt="thumbs down"></img>
        </div>
      }
    </div>
  )
}

export default ErrorPage
