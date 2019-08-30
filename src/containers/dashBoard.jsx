import React, { useEffect} from 'react';


const Dashboard = props => {

  useEffect(() => {
    if(!props['user']){
      props.history.push('/')
    }
  })
  return (
    <h1>Hello world</h1>
  )
}


  export default Dashboard
