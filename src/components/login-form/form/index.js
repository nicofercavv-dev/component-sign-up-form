import { useState } from "react";
import Forms from "./styled";
import Input from "../components/Input";

let registers = []; 

const FormInputs = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const getFormData = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    console.log(data)
  };

  const sendFormData = (data) => {
    if (!data.firstName || !data.lastName || !data.email || !data.password) {
      alert("Preencha o formulário!")
    }
    registers.push(data)
  };

  return (
    <Forms method="post">
      <Input
        type={"text"}
        name={"firstName"}
        onChange={(item) => {
          getFormData(item);
        }}
        data={data}
      />
      <Input
        type={"text"}
        name={"lastName"}
        onChange={(item) => {
          getFormData(item);
        }}
        data={data}
      />
      <Input
        type={"email"}
        name={"email"}
        onChange={(item) => {
          getFormData(item);
        }}
        data={data}
      />
      <Input
        type={"password"}
        name={"password"}
        onChange={(item) => {
          getFormData(item);
        }}
        data={data}
      />
      <button
        className="submit"
        onClick={() => {
          sendFormData(data)
          console.log(registers)
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
