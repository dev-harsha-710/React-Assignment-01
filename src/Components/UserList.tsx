import React from "react";
import { json } from "../assets/users";

const UserList: React.FC = () => {
  return (
    <div>
      {json.map((user) => (
        <div key={user.email}>
          <p>
            Hello my name is {user.name}, you can contact me with my email
            {user.email} and if you want to meet me come to {user.address.city}.
          </p>
        </div>
      ))}
    </div>
  );
};
export default UserList;
