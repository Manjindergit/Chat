import React from "react";
import Add from "../img/upload.jpg"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const Register = () => {
    cosnt[err, setErr] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];


        try {
            const res = createUserWithEmailAndPassword(auth, email, password);
        }

        catch {
            setErr(true);
        }

    };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Talk</span>
                <span className="title">Register</span>
                < form onSubmit={handleSubmit}>
                    < input type="text" placeholder=" display_name " />
                    < input type="email" placeholder=" email " />
                    < input type="password" placeholder=" password " />
                    < input type="file" id="file" style={{ display: "none" }} />
                    <label htmlFor="file">
                        <img src={Add} alt="There was supposed to be a picture here" />

                    </label>
                    <button>Signup</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>Do you hvae an account? Login</p>
            </div>
        </div>


    )
}

export default Register