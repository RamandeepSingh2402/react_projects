import {Route, Switch} from "react-router-dom";
import RegisterPage from "./pages/Register"
import LoginPage from "./pages/Login"
import HomePage from "./pages/Home"

function App() {
  return (
    <Switch>

      <Route path="/register">
        <RegisterPage/>
      </Route>

      <Route path="/login">
        <LoginPage/>
      </Route>

      <Route path={["/","/home"]}exact>
        <HomePage/>
      </Route>

    </Switch>
  );
}

export default App;
// package.json is a configuration file and contains the name of the project and all the other stuff
// helps us manage the dependencies as well.