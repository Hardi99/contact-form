const StepTwo = props => {

    return (
        <div>
            <h1>Resultats</h1>
                {console.log(props.name)}
            <div>
                <p>Name : {props.name}</p>
                <p>Email : {props.email}</p>
                <p>Password : {props.password}</p>
            </div>
        </div>
    )

}

export default StepTwo