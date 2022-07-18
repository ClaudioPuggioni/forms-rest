import { useState, useEffect } from "react";
import UserForm from "./UserForm";
import UsersList from "./UsersList";

function UserInterface() {
  let [data, setData] = useState(null);
  let [toggle, setToggle] = useState(0);

  useEffect(() => {
    async function getData() {
      let response = await fetch("https://60795d16460a6600174fb9bc.mockapi.io/mclarenfetch/users");
      let data = await response.json();
      let userArr = await JSON.parse(JSON.stringify(data));
      setData(userArr);
    }
    getData();
  }, [toggle]);

  function remove(usrdata) {
    let tempData = JSON.parse(JSON.stringify(data));
    for (let index = 0; index < tempData.length; index++) {
      if (tempData[index].username === usrdata.username && tempData[index].email === usrdata.email && tempData[index].password === usrdata.password && tempData[index].confirmPassword === usrdata.confirmPassword) {
        let removed = tempData.splice(index, 1);
        async function getData() {
          await fetch(`https://60795d16460a6600174fb9bc.mockapi.io/mclarenfetch/users/${removed[0].id}`, {
            method: "DELETE",
          });
          setData(tempData);
        }
        getData();
        break;
      }
    }
    setToggle((toggle) => toggle + 1);
  }

  return (
    <div className="container">
      <UserForm />
      <UsersList jsonData={data} handleClick={remove} />
    </div>
  );
}

export default UserInterface;
