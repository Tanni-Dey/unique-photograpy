import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Social from '../../Shared/Social/Social';

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    const [sendPasswordResetEmail, sending, resetPassError] = useSendPasswordResetEmail(
        auth
    );

    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    })
    const handleResetPassword = async (event) => {
        const emailValue = event.target.email.value;
        if (emailValue) {
            await sendPasswordResetEmail(emailValue);
            toast.success('Sent email');
        }
        else {
            toast.error('Please Enter Your Email')
        }
    }
    return (
        <div className='w-50 mx-auto py-5'>
            <ToastContainer />
            <h1>Please Login</h1>
            <Form className='w-50 mx-auto py-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button className='d-block w-100' variant="warning" type="submit">
                    Login
                </Button>
            </Form>
            <p>Forget Password ? <Link onClick={handleResetPassword} className='text-warning' to='/signup'>Reset Password</Link></p>
            <p>Create Account ? <Link className='text-warning' to='/signup'>Please Sign Up</Link></p>
            <Social />
        </div>
    );
};

export default Login;