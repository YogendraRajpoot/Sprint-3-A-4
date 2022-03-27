import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "styled-components";

const Image=style.img`
height:400px;
width:500px;
border:2px solid black;
border-radius:2%;
`

export const ProductDetails = () => {
  const [user, setUser] = useState([]);
  const { userid } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/products/${userid}`)
      .then((res) => res.json())
      .then((res) => setUser(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>{user.title}</div>
      <Image src={user.image} alt="" ></Image>
      <div>{user.price}</div>
      <div>{user.description}</div>
      <div>{user.category}</div>
      <div>{user.price}</div>
    </>
  );
};
