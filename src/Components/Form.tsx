import React, { useState } from "react";

interface States {
  name: string;
  email: string;
  country: string;
  state: string;
}

const Form: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [country, setCountry] = useState<string>("India");
  const [state, setState] = useState<string>("Maharashtra");

  const handleSubmit = () => {
    alert(`Your information...
    Name:${name} 
    Email:${email}
     Country:${country} 
     state:${state}
     has been stored successfully`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Country:
        <select
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
      </label>
      <label>
        State:
        <select
          value={state}
          onChange={(event) => setState(event.target.value)}
        >
          {country === "India" ? (
            <>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Rajasthan">Rajasthan</option>
            </>
          ) : (
            <>
              <option value="California">California</option>
              <option value="Ohio">Ohio</option>
            </>
          )}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
