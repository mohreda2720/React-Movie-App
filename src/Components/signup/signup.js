import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './signup.css'

function Signup() {

    const [user, setUser] = useState(
        {
            name: "",
            userEmail: "",
            userName: "",
            userPassword: "",
            confirmPassword: ""
        }
    );
    const [errors, setErrors] = useState(
        {
            nameError: "",
            userEmailErrors: "",
            userNameError: "",
            userPasswordErrors: "",
            confirmPasswordError: ""
        }
    );
    const emailRegex = /^[a-zA-Z]{3,}(@)(gmail|yahoo|outlook)(.com)$/;
    const userNameRegex = /^\S*$/
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    const handleForm = (e) => {

        switch (e.target.name) {
            case "name":
                setUser({ ...user, name: e.target.value });
                setErrors({ ...errors, nameError: (e.target.value.length === 0) ? "Name is Required" : "" })
                break;

            case "userEmail":
                setUser({ ...user, userEmail: e.target.value });
                setErrors({
                    ...errors, userEmailErrors: (e.target.value.length === 0) ? "Email is Required" :
                        (emailRegex.test(e.target.value)) ? "" : "Invalid Email Format"
                })
                break;

            case "userName":
                setUser({ ...user, userName: e.target.value });
                setErrors({ ...errors, userNameError: (e.target.value.length === 0) ? "Name is Required" : (userNameRegex.test(e.target.value)) ? "" : "User Name should not include Spaces" })
                break;

            case "userPassword":
                setUser({ ...user, userPassword: e.target.value });
                setErrors({
                    ...errors, userPasswordErrors: (e.target.value.length === 0) ? "Password is Required" :
                      (passwordRegex.test(e.target.value)? "": "Invalid Password")
                })
                break;

            case "confirmPassword":
                setUser({ ...user, confirmPassword: e.target.value });
                setErrors({
                    ...errors, confirmPasswordError: (e.target.value.length === 0) ? "Password is Required" :
                        (e.target.value === user.userPassword) ?"" : "Not Match" 
                })
                break;
            default:
                return;
        }
    };

    const handleSubmit = (e) => {
        if ((errors.userEmailErrors || errors.userPasswordErrors)) {
            e.preventDefault();
        }
    };

    return (
        <>
       
        <div className='container sign'>
                <Form onSubmit={(evt) => { handleSubmit(evt); }} autoComplete='off'>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control className={`${errors.nameError ? 'border-danger shadow-none' : 'border-success'}`} name="name" type="text" placeholder="Enter your Name"
                            value={user.name} onChange={(evt) => { handleForm(evt); }} />
                        <small className='text-danger'>{errors.nameError}</small>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control className={`${errors.userEmailErrors ? 'border-danger shadow-none' : 'border-success'}`} name="userEmail" type="text" placeholder="Enter email"
                            value={user.userEmail} onChange={(evt) => { handleForm(evt); }} />
                        <small className='text-danger'>{errors.userEmailErrors}</small>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUserName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control className={`${errors.userNameError ? 'border-danger shadow-none' : 'border-success'}`} name="userName" type="text" placeholder="Enter User Name"
                            value={user.userName} onChange={(evt) => { handleForm(evt); }} />
                        <small className='text-danger'>{errors.userNameError}</small>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className={`${errors.userPasswordErrors ? 'border-danger  shadow-none' : 'border-success'}`} name="userPassword" type="text" placeholder="Password"
                            value={user.userPassword} onChange={(evt) => { handleForm(evt); }} />
                        <small className='text-danger'>{errors.userPasswordErrors}</small>
                        {/* <Form.Check type="checkbox" label="Show Password"/> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control className={`${errors.confirmPasswordError ? 'border-danger  shadow-none' : 'border-success'}`} name="confirmPassword" type="text" placeholder="Retype your Password"
                            value={user.confirmPassword} onChange={(evt) => { handleForm(evt); }} />
                        <small className='text-danger'>{errors.confirmPasswordError}</small>
                        {/* <Form.Check type="checkbox" label="Show Password"/> */}
                    </Form.Group>

                    <Button variant="warning" type="submit" className="btnWidth">
                        Sign Up
                    </Button>

                </Form>
            </div>
        

            
        </>
    );

}

export default Signup;