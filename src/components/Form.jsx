import "../App.css";

const Form = ({name, password, email, checkPassword, setName, setEmail, setPassword, setCheckPassword, register, setRegister}) => {

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
      // J'affiche une alerte et je change la valeur du state de Register
      alert("Vous avez crée un compte !!!")
      setRegister(!register);
      console.log(!register)
    } else {
        alert("Vos 2 mots de passe ne sont pas identiques")
    }
  };

  return (
      <form onSubmit={handleSubmit} style={register === true ? {display: 'none'} : {display: 'flex'}}>
        <h1>Form</h1>
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