import LoginForm from "../components/LoginForm";
import {useHistory} from 'react-router-dom';

function LoginPage(){

    const history = useHistory();

    // no need to specify the method handlers or anything. as fertch by default uses the "GET" method
    function LoginUserHandler(user){
        fetch('https://demoapi-12103-default-rtdb.firebaseio.com/users.json').then(() => (
        // perform any task you want, such as verification of the password or anything which is desired   
        history.replace('./home')));
    }



    return(
        <section>
            <h1>
                Login Page
            </h1>
            <LoginForm loginUser = {LoginUserHandler}/>
        </section>
    );
}

export default LoginPage;