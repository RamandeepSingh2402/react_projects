import {useHistory} from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

function RegisterPage(){

    const history = useHistory();

    function registerUserHandler(user){
        fetch('https://demoapi-12103-default-rtdb.firebaseio.com/users.json', {
            method:'POST',
            body: JSON.stringify(user),
            headers: {'Content-Type': 'application/json'}
        }).then(() => history.replace("/login"))
        // fetch is used for calling the api, send the data and also to work upon it
        // we want to call the api
        //then show the login payge
    }


    return(
        <>
        <h1>Registration Page</h1>
        <RegisterForm registerUser ={registerUserHandler}/>
        </>
    );
}

export default RegisterPage;