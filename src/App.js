import { signInWithGoogle } from './Firebase'
import './App.css';

function App() {
  return (
    <div className="App">
      <button type="button" class="login-with-google-btn" onClick={signInWithGoogle} >
        Sign in with Google
      </button>


      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")} />
    </div>
  );
}

export default App;
