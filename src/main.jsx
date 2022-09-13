import { useState } from "react";
import "./style.css";

const Main = () => {
  const [form, setForm] = useState([{ name: "", lastname: "", email: "" }]);
  let formInit = { name: "", lastname: "", email: "" };
  const handleSub = (e) => {
    e.preventDefault();
    if (
      formInit.email !== "" &&
      formInit.lastname !== "" &&
      formInit.name !== ""
    )
      setForm([...form, formInit]);
  };

  return form.map((item) => {
    return (
      <form action="">
        {console.log(form)}
        <input
          type="text"
          onChange={(e) => {
            formInit.name = e.target.value;
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            formInit.lastname = e.target.value;
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            formInit.email = e.target.value;
          }}
        />
        <button onClick={handleSub}>+</button>
      </form>
    );
  });
};

export default Main;
