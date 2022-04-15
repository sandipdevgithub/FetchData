import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [userdata, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const userEmail = userdata.map((item, index) => {
    return (
      <li key={"user" + index}>
        <strong>Name</strong>: {item.username} / <strong>Email</strong>:{" "}
        {item.email} / <strong>City</strong>: {item.address.city}{" "}
      </li>
    );
  });
  return <div>{loading ? <ul>{userEmail}</ul> : <div>Loading</div>}</div>;
};

export default Users;
