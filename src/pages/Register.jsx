import React from "react";
import Add from "../img/upload.jpg"

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Talk</span>
                <span className="title">Register</span>
                < form >
                    < input type="text" placeholder=" display_name " />
                    < input type="email" placeholder=" email " />
                    < input type="password"  placeholder = " password "/>
                    < input type="file"  id="file" style={{display:"none"}}/>
                    <label htmlFor="file">
                        <img src={Add} alt="There was supposed to be a picture here" />
                        
                    </label>
                    <button>Signup</button>
                </form>
                <p>Do you hvae an account? Login</p>
            </div>
        </div>


    )
}

export default Register