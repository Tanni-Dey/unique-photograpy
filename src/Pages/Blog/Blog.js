import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h1>Blogs</h1>
            <div style={{ textAlign: 'justify' }} className='row py-5'>
                <div className='col-md-4'>
                    <div>
                        <h5 className='text-warning'>Q1: What difference between `authorization` and `authentication`</h5>
                        <p>Ans : Authentication is a procces that verify who is someone with valid email and password or any social media login. On the other hand, Authorization id a process of verifying that user have access to something. Authentication done before authorization. Authentication check user valid email an password, Authorization check user security system.</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div>
                        <h5 className='text-warning'>Q2:  Why are you using `firebase`? What other options do you have to implement authentication?</h5>
                        <p>Firebase is a backend system where stored data for web or mobile application, ios ,mobile game. Its using for employment authorization system of app. It's a remote database where keep stored user data, message etc  with secure. No need extra money spent for using firebase. It's show website crashing report for any error. Firebase is easier, faster than other authentication system thats why using firebase in any application.
                            <h5>Other option for authentication:
                            </h5>
                            <li>Back4App</li>
                            <li>AWS Amplify</li>
                            <li>Kuzzle</li>
                            <li>Couchbase</li>
                            <li>Flutter</li>
                            <li>RxDB</li>
                        </p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div>
                        <h5 className='text-warning'>Q3: What other services does `firebase` provide other than authentication?</h5>
                        <p>
                            <h5>Other option of Firebase:
                            </h5>
                            <li>Cloud Firestore</li>
                            <li>Cloud Functions</li>
                            <li>Hosting</li>
                            <li>Cloud Storage</li>
                            <li>Predictions</li>
                            <li>Cloud Messaging</li>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;