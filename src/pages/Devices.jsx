import React, { useState, useEffect } from "react";
import { devices } from "./DevicesItem";

const Devises = () => {
  const [phones, setPhones] = useState(null);
  const values = ["Apple", "Samsung", "Xiaomi"];
  useEffect(() => {
    setPhones(devices);
  }, []);
  const onChange = (e) => {
    if (e.target.value == "") {
      setPhones(devices);
      return;
    }
    setPhones(devices.filter((device) => device.brand === e.target.value));
  };
  return (
    <div className="container">
      <h3>All devices</h3>
      <select className="browser-default" onChange={onChange}>
        <option value="">Choose brand</option>
        {values.map((val, key) => (
          <option key={key} value={val}>
            {val}
          </option>
        ))}
      </select>
      <table>
        <thead>
          {Object.keys(devices[0]).map((field, key) => (
            <th key={key}>{field}</th>
          ))}
        </thead>

        <tbody>
          {phones && phones.map((value, key) => (
              <tr key={key}>
                <td>{value.id}</td>
                <td>{value.brand}</td>
                <td>{value.name}</td>
                <td>{value.description}</td>
                <td>{value.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Devises;
