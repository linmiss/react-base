import React, { Component } from 'react'
import './index.css'
import { withRouter } from 'react-router-dom'

// const Login = () => {
//   return <div className="login">login</div>
// }
@withRouter
class Login extends Component {
  render() {
      console.log(this.props,1111)
    return <div />
  }
}

export default Login
