import "../App.css";

const StepTwo = ({register, name, email, password, setRegister}) => {

  const handleClick = () => {
     setRegister(!register);
     console.log(!register)
   }

    return (
        <div style={register === true ? {display: 'block'} : {display: 'none'}}>
            <h1>Resultats</h1>
                {console.log(name)}
            <div>
                <p>Name : {name}</p>
                <p>Email : {email}</p>
                <p>Password : {password}</p>
            </div>
            <button onClick={handleClick}>Edit informations</button>
        </div>
    )

}

export default StepTwo