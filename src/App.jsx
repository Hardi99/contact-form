import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import StepTwo from "./components/StepTwo";

const App = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [register, setRegister] = useState(false);

  return (
    <div className="contact-form">
      <Form register={register} setRegister={setRegister} name={name} setName={setName} email={email} setEmail ={setEmail} password={password} setPassword={setPassword} checkPassword={checkPassword} setCheckPassword={setCheckPassword} />
      <StepTwo register={register} setRegister={setRegister} name={name} setName={setName} email={email} setEmail ={setEmail} password={password} setPassword={setPassword} checkPassword={checkPassword} setCheckPassword={setCheckPassword} />
    </div>
  );
};

export default App;