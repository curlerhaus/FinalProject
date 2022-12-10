import './register.css'

export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Username</label>
            <input type="text" className='registerInput' placeholder='Enter Your username' autoFocus={true} />
            <label>Email</label>
            <input type="text" className='registerInput' placeholder='Enter Your email' />
            <label>Password</label>
            <input type="text" className='registerInput' placeholder='Enter Your Password' />
            <button className='registerButton'>Register</button>
        </form>
        <button className="registerLoginButton">Login</button>
    </div>
  )
}
