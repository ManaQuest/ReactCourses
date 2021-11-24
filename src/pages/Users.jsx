import React, { useState } from "react";
import MyModal from "../components/MyModal/MyModal";
import UserList from "../components/UserList";

const Users = () => {
  const [showAddUser, setShowAddUser] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John",
      phone: "80233223",
    },
    {
      id: 2,
      name: "Captain",
      phone: "82828382",
    },
    {
      id: 3,
      name: "Ahmed",
      phone: "802983828",
    },
  ]);
  const [user, setUser] = useState({ name: "", phone: "" });

  const onChange = (e) => {
    if (e.target.id == "name") {
      setUser({ ...user, name: e.target.value });
    } else {
      setUser({ ...user, phone: e.target.value });
    }
  };

  const addUser = () => {
    const id = Math.random() * 1;
    setUser({ ...user, id: id });
    setUsers([...users, user]);
    setUser({ name: "", phone: "" });
  };

  const cancel = () => {
    setUser({ name: "", phone: "" });
  };

  const deleteUser = (id) => {
    const confirm = window.confirm("Реально что-ли удалить?");
    if (confirm) setUsers(users.filter((user) => user.id !== id));
  };

  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col s6">
            <a
              className="waves-effect waves-light btn m-1"
              onClick={() => setModal(true)}
            >
              Add Users
            </a>
          </div>
          <MyModal visible={modal} setVisible={setModal}>
            {
              <div className="col s6">
                <div className="input-field col s6">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    id="name"
                    onChange={onChange}
                    type="text"
                    placeholder="First Name"
                    className="validate"
                    value={user.name}
                  />
                </div>
                <div className="input-field col s6">
                  <i className="material-icons prefix">phone</i>
                  <input
                    id="phone"
                    onChange={onChange}
                    type="tel"
                    placeholder="Phone number"
                    className="validate"
                    value={user.phone}
                  />
                </div>
                <div className="col s6">
                  <a
                    className="waves-effect waves-light btn m-1"
                    onClick={() => addUser()}
                  >
                    Add
                  </a>
                </div>
                <div className="col s6">
                  <a
                    className="waves-effect waves-light btn m-1"
                    onClick={() => cancel()}
                  >
                    Cancel
                  </a>
                </div>
              </div>
            }
          </MyModal>

          <UserList search removeUser={deleteUser}>
            {users}
          </UserList>
        </div>
      </div>
    </div>
  );
};

export default Users;
