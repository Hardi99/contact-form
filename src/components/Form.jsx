import "../App.css";

const Form = (props) => {

    const handleNameChange = event => {
        const value = event.target.value;
        props.setName(value);
    };

    const handleEmailChange = event => {
        const value = event.target.value;
        props.setEmail(value);
    };

    const handlePasswordChange = event => {
        const value = event.target.value;
        props.setPassword(value);
    };

    const handleCheckPasswordChange = event => {
        const value = event.target.value;
        props.setCheckPassword(value);
    };

  const handleSubmit = event => {
     // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
    event.preventDefault();
    // Vérifier que les 2 password sont identiques
    if (props.password === props.checkPassword) {
      // J'affiche une alerte
      alert("Vous avez crée un compte !!!")
      props.setRegister(!props.register);
      console.log(!props.register)
    } else {
        alert("Vos 2 mots de passe ne sont pas identiques")
    }
  };

  return (
      <form onSubmit={handleSubmit} style={props.register === true ? {display: 'none'} : {display: 'flex'}}>
        <h1>Form</h1>
        <input
          placeholder="Name"
          type="text"
          name="email"
          value={props.name}
          onChange={handleNameChange}
        />

        <input
          placeholder="Email"
          type="text"
          name="email"
          value={props.email}
          onChange={handleEmailChange}
        />

        <input
          placeholder="Password"
          type="password"
          name="password"
          value={props.password}
          onChange={handlePasswordChange}
        />
        
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={props.checkPassword}
          onChange={handleCheckPasswordChange}
        />
        <input type="submit" value="Register" className="confirm" />
      </form>
  );
};

export default Form;