import React, { useEffect, useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Social from '../../Shared/Social/Social';

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [user, loading, error] = useAuthState(auth);

    const [signInWithEmailAndPassword, loginUser, loginLoading, loginError,] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetPassError] = useSendPasswordResetEmail(auth);

    let from = location?.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    })
    if (loading || loginLoading || sending) {
        <Spinner animation="grow" variant="warning" />
    }

    const handleLogin = event => {
        event.preventDefault();
        const emailValue = event.target.email.value;
        const passwordValue = event.target.password.value;
        signInWithEmailAndPassword(emailValue, passwordValue)
    }

    const handleResetPassword = async () => {
        let emailValue = emailRef.current.value;
        if (!emailValue) {
            return toast.error('Please Enter Your Email')
        }
        await sendPasswordResetEmail(emailValue);
        toast.success('Sent email');
    }
    return (
        <div className='w-50 mx-auto py-5'>
            <ToastContainer />
            <h1>Please Login</h1>
            <Form onSubmit={handleLogin} className='w-50 mx-auto py-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" ref={emailRef} name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" ref={passwordRef} name="password" placeholder="Password" required />
                </Form.Group>
                <Button className='d-block w-100' variant="warning" type="submit">
                    Login
                </Button>
            </Form>
            <p>{resetPassError?.message}{loginError?.message}</p>
            <p>Forget Password ? <button onClick={handleResetPassword} className='btn btn-link text-warning' >Reset Password</button></p>
            <p>Create Account ? <Link className='text-warning' to='/signup'>Please Sign Up</Link></p>
            <Social />
        </div>
    );
};

export default Login;