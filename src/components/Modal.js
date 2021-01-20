import '../style/Modal.css';

const Modal = () => {
  return (
    <div className="reset-password-modal">
      <form action="/reset-password" className="reset-form">
        <p>Enter your email address and we'll send you a link to reset your password.</p>

        <label for="email"><b>EMAIL</b></label><br/>
        <input id="email" type="email" name="email"/><br/>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Modal;
