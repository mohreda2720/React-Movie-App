import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './login.css'
import { useState} from 'react';

function Login() {
    const [user, setUser] = useState({
        userEmail:"",
        userPass: ""
    })
    const [error, setError] = useState({
        errEmail: "",
        errPass: ""
    })
    const handelinput = (e) => {
        var reqEmail = /^[a-zA-Z]{3,}(@)(gmail|yahoo|outlook)(.com)$/
        switch (e.target.name) {
            case "email":
                setUser({ ...user, userEmail: e.target.value })
                setError({
                    ...error, errEmail: (e.target.value === 0) ?
                        "Email is Required" : (!reqEmail.test(e.target.value)) ? "Enter Vaild Email" : ""
                })
                break;
            case "password":
                setUser({ ...user, userPass: e.target.value })
                setError({
                    ...error, errPass: (e.target.value.length < 8) ?
                        "Enter Vaild Password" : ""
                })
                break;
            default:
                break;
        }
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        const data = { user }
        console.log(data);
    }


    return (
        <div className='container con'>
            <Form onSubmit={(ev) => { handelSubmit(ev) }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" value={user.userEmail}
                        onChange={(event) => { handelinput(event) }} />
                    <p className="text-danger">{error.errEmail}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" value={user.userPass}
                        onChange={(event) => { handelinput(event) }}
                    />
                    <p className="text-danger">{error.errPass}</p>
                </Form.Group>

                <Button variant="warning" type="submit" className="btnWidth">
                    Login
                </Button>
            </Form>
        </div>

    );
}

export default Login;
