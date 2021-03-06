import '../style/Login.css';

const Login = ({onResetPasswordClick}) => {
  return (
    <form action="/login" className="login">
      <label for="username">USERNAME</label><br/>
      <input id="username" type="text" name="username"/><br/>

      <label for="password">PASSWORD</label><br/>
      <input id="password" type="password" name="password"/><br/>

      <button type="submit">LOGIN</button>

      <a onClick={onResetPasswordClick}>Reset Password</a>
    </form>
  );
};

export default Login;
