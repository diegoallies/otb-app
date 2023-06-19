import React, { useState } from "react";
import styles from '../styles/loginform.module.css';
import { useRouter } from 'next/router';

const LoginForm = () => {
  const router = useRouter();
  const [passwordShown, setPasswordShown] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('../api/hello');
    const users = await response.json();

    const user = users.find(user => user.username === username && user.password === password);

    if(user){
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/Home'); // navigate to home page
      console.log('logged in')
    }else{
      // handle login failure
      alert('Invalid username or password');
    }
  };

  return (
    <div className={styles["bg-img"]}>
      <div className={styles.content}>
        <header>Login Form</header>
        <form action="#" onSubmit={handleLogin}>
          <div className={styles.field}>
            <span className="fa fa-user"></span>
            <input 
              type="text" 
              required 
              placeholder="Email or Phone" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={`${styles.field} ${styles.space}`}>
            <span className="fa fa-lock"></span>
            <input
              type={passwordShown ? "text" : "password"}
              className={styles["pass-key"]}
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className={styles.show} onClick={togglePasswordVisiblity}>
              {passwordShown ? "HIDE" : "SHOW"}
            </span>
          </div>
          <div className={styles.pass}>
            <a href="#">Forgot Password?</a>
          </div>
          <div className={styles.field}>
            <input type="submit" value="LOGIN" />
          </div>
        </form>
        <div className={styles.login}>Or login with</div>
        <div className={styles.links}>

        </div>
        <div className={styles.signup}>
          Don't have account?
          <a href="#">Signup Now</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
