import "./User.css";

function User(props) {
  return (
    <div className="user">
      <div className="usernameHeader fieldHeader">{props.username}</div>
      <div className="userEmail">{props.email}</div>
      <button className="delBtn" onClick={() => props.handleClick({ username: props.username, email: props.email, password: props.password, confirmPassword: props.confirmPassword })}>
        Delete
      </button>
    </div>
  );
}

export default User;
