import User from "./User";
import "./UsersList.css";

function UsersList(props) {
  return (
    <div id="usersMenu">
      <div className="header">Users</div>
      <div id="usersBox">
        {props.jsonData
          ? props.jsonData.map((ele, idx) => (
              <User
                key={`User${idx}`}
                username={ele.username}
                email={ele.email}
                password={ele.password}
                confirmPassword={ele.confirmPassword}
                handleClick={props.handleClick}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default UsersList;
