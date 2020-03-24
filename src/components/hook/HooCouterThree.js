import React, { useState } from "react";

const HooCouterThree = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={e =>
          setName({
          ...name,  firstName: e.target.value
          })
        }
      />
      <input
        type="text"
        value={name.lastName}
        onChange={e =>
          setName({
          ...name,  lastName: e.target.value
          })
        }
      />
      <h2>first Name: {name.firstName} </h2>
      <h2>last Name: {name.lastName} </h2>
      <h1>{JSON.stringify(name)}</h1>
    </form>
  );
};

export default HooCouterThree;
