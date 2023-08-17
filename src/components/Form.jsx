import "../App.css";
import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");

    const handleNameChange = event => {
        const value = event.target.value;
        setName(value);
    };

    const handleEmailChange = event => {
        const value = event.target.value;
        setEmail(value);
    };

    const handlePasswordChange = event => {
        const value = event.target.value;
        setPassword(value);
    };

    const handleCheckPasswordChange = event => {
        const value = event.target.value;
        setCheckPassword(value);
    };

  const handleSubmit = event => {
     // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
    event.preventDefault();
    // Vérifier que les 2 password sont identiques
    if (password === checkPassword) {
      // J'affiche une alerte
      alert("Vous avez créé un compte !");
    } else {
        alert("Vos 2 mots de passe ne sont pas identiques")
    }
    console.log(name, email, password, checkPassword);
  };

  return (
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          name="email"
          value={name}
          onChange={handleNameChange}
        />

        <input
          placeholder="Email"
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={checkPassword}
          onChange={handleCheckPasswordChange}
        />
        <input type="submit" value="Register" className="confirm" />
      </form>
  );
};

export default Form;