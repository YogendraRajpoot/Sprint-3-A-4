import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Product</h1>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>More Details...</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <th>{user.title}</th>
              <th>{user.price}</th>
              <th>
                  <Link to={`/products/${user.id}`}>more details...</Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
