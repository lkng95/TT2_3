import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import firebase from "../firebase.js";

function LoginPage() {
  const auth = firebase.auth();

  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const signInWithEmailAndPassword = async (email, password) => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      const user = res.user;
      setUser(user.uid);
      console.log(user.uid);
      console.log("Successful login");
      navigate("/projects");
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  const login = () => {
    console.log(email);
    console.log(password);
    console.log("Login called");
    signInWithEmailAndPassword(email, password);
  };

  const checkUser = () => {
    var curUser = auth.currentUser;
    console.log(curUser);
  };

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        console.log("Successful logout");
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };

  return (
    <div className="LoginScreen">
      <div className="container">
        <h1>Login</h1>
        <form className="add-form">
          <div className="form-control">
            <label>Email</label>
            <input
              type="text"
              placeholder="Input email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              type="text"
              placeholder="Input password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <Button color="green" text="Login" onClick={login} />
        {/* <Button color="darkorange" text="Check User" onClick={checkUser} /> */}
        {/* <Button color="red" text="Logout" onClick={logout} /> */}
      </div>
    </div>
  );
}

export default LoginPage;
