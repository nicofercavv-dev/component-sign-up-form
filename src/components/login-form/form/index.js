import { useState } from "react";
import Forms from "./styled";

const FormInputs = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const getFormData = (e) => {
    const { name, value } = e.target;
    const regx = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    try {
      if (name === "email" && regx.test(value) === true) {
        setData({
          ...data,
          [name]: value,
        });
      }
    } catch (e) {
      console.log('arruma isso ai');
    }
    setData({
      ...data,
      [name]: value,
    });
  };

  const sendFormData = (data) => {
    if (!data.firstName || !data.lastName || !data.email || !data.password) {
    }
  };

  return (
    <Forms method="post">
      <input
        type={"text"}
        name={"firstName"}
        placeholder={"First Name"}
        onChange={(item) => {
          getFormData(item);
        }}
      />
      <input
        type={"text"}
        name={"lastName"}
        placeholder={"Last Name"}
        onChange={(item) => {
          getFormData(item);
        }}
      />
      <input
        type={"email"}
        name={"email"}
        placeholder={"Email Address"}
        onChange={(item) => {
          getFormData(item);
        }}
      />
      <input
        type={"password"}
        name={"password"}
        placeholder={"Password"}
        onChange={(item) => {
          getFormData(item);
        }}
      />
      <button
        className="submit"
        onClick={() => {
          sendFormData(data);
        }}
      >
        <b>CLAIM YOUR FREE TRIAL</b>
      </button>
      <p>
        By clicking the button, you are agreeing to our
        <a href="https://www.github.com/nicofercavv-dev">
          {" "}
          <b>Terms and Services</b>
        </a>
      </p>
    </Forms>
  );
};

export default FormInputs;
