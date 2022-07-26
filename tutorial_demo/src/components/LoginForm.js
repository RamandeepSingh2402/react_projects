import {React, useRef} from 'react';

function LoginForm(props){

    const emailRef = useRef();
    const passwordRef = useRef();


    function submitHandler(event){
        event.preventDefault();
        // Step:1. Read the values
        
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const user = {email, password};
        
        
        // console.log(user);

        // call 
        props.loginUser(user);

        // in HTML, when we submit the form, the page reloads
        // Step:2. Send the values to server
        // whenever submit is pressed, the event is sent to the submitHandler automatically
        // we use event.preventDefault(); to make sure that the page doesn't reload itself
        // which will prevent losing the data entered by the user.

        
    }

    return(
        <form onSubmit={submitHandler}>
            <input type="email" required placeholder="Email" ref={emailRef}/>
            <input type="password" required placeholder="Password" ref={passwordRef}/>
            <button>Submit</button>
        </form>

    );
}

export default LoginForm;