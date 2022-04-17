import React from 'react';
import googleLogo from '../../imges/social/google-logo.png'
import facebookLogo from '../../imges/social/facebookLogo.png'
import githubLogo from '../../imges/social/github-logo.png'
import auth from '../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const Social = () => {
    const [signInWithGoogle, googleUser, googleLoading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || gitError) {
        errorElement = <p>{error?.message} {gitError?.message}</p>
    }
    if (googleLoading || gitLoading) {
        <Spinner animation="grow" variant="warning" />
    }
    if (googleUser || gitUser) {
        navigate('/')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-warning'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-warning'></div>
            </div>
            {errorElement}
            <div className=''>
                <button onClick={() => signInWithGoogle()}
                    className='btn btn-danger d-block mx-auto my-3 w-50'><img src={googleLogo} width='30px' alt="" /><span className='px-3'>Google Sign Up</span></button>
                <button onClick={() => signInWithGithub()}
                    className='btn btn-dark d-block mx-auto my-3 w-50'><img src={githubLogo} width='30px' alt="" /><span className='px-3'>Github Sign Up</span></button>
            </div>
        </div>
    );
};

export default Social;