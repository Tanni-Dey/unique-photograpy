
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Social from '../../Shared/Social/Social';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const emailValue = event.target.email.value;
        const passwordValue = event.target.password.value;
        const cPasswordValue = event.target.cpassword.value;
        if (passwordValue !== cPasswordValue) {
            return toast.error("Don't match Confirm Password")
        }
        createUserWithEmailAndPassword(emailValue, passwordValue);
    }
    return (
        <div className='w-50 mx-auto py-5'>
            <ToastContainer />
            <h1>Please Sign Up</h1>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto py-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name='name' placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='cpassword' placeholder="Confirm Password" />
                </Form.Group>
                <Button className='d-block w-100' variant="warning" type="submit">
                    Sign Up
                </Button>
            </Form>
            <p>Already Have An Account ? <Link className='text-warning' to='/login'>Please Login</Link></p>
            <Social />
        </div>
    );
};

export default Signup;