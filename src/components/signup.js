import { useState } from 'react';
import "../Styles/Login.css"
import { Link } from 'react-router-dom';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
  }

  const handleGoogleLogin = () => {
    // handle login with Google logic here
  }

  return (
    <div className='bodyy'>
        <div className='rectangle'>
        <Link to={"/"} >   <h4 >Retour</h4></Link>
      
      <form onSubmit={handleLoginFormSubmit}>
        <div>  
          
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          
          <input type="password" value={password} onChange={handlePasswordChange} />

        </div>
        <Link to={"/"} >   <h4 >Forget password</h4></Link> 
        <button type="submit">Login</button>  
        <button onClick={handleGoogleLogin}>Login with Google</button>
         <h4 >D'ont have an account ?<Link to={"/"} ><b>Sign up</b></Link></h4>
      </form>
    
    </div>
    </div>

    
  );
}

export default LoginPage;
