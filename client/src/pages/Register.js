import { useState } from "react";
import {useHistory} from 'react-router-dom';


function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function registerUser(event) {
      event.preventDefault()
        const response = await fetch("http://localhost:1337/api/register", {
          method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        const data = await response.json();
        console.log(data)
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
                <input
                    value={name}
                    onChange={({target}) => setName(target.value)}
                    type="text"
                    placeholder="Name"
                />
                <br />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                />
                <br />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="passowrd"
                    placeholder="Password"
                />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
}

export default App;
