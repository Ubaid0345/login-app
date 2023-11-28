import React from 'react';
import "./Register.css";

export default function Register(props) {
function createaccount(){
    console.log("Registration");
}


    let messageClass = ["text-center"];
    if(props.type){
        messageClass.push = ("text-success");
    }
    else{
        messageClass.push = ("text-danger");
    }
    return (
        <div className='container'>
            <div className='card bg-light'>
                <article className='card-body mx-auto' style={{ width: "500px" }}>
                    <h4 className='card-title mt-3 text-center'>Create Account</h4>
                    <p className='text-center'>Get started with your free account</p>
                    <p className={messageClass.join(" ")}>{props.message} </p>
                    <p>
                        <a className='btn btn-block btn-twitter'>
                            <i className='fa fa-twitter'></i> Login via Twitter
                        </a>
                        <a className='btn btn-block btn-facebook'>
                            <i className='fa fa-facebook'></i> Login via Facebook
                        </a>
                        <a className='btn btn-block btn-google'>
                            <i className='fa fa-google'></i> Login via Google
                        </a>
                    </p>
                    <p className='divider-text'>
                        <span className='bg-light'>OR</span>
                    </p>
                    <form onSubmit={props.register}>
                        <div className='form-group input-group'>
                            <div className='input-group-prepend'>
                                <span className='input-group-text'>
                                    <i className='fa fa-envelope'></i>
                                </span>
                            </div>
                            <input name='email' className='form-control' placeholder='Email Address' type='email' />
                        </div>
                        <div className='form-group input-group'>
                            <div className='input-group-prepend'>
                                <span className='input-group-text'>
                                    <i className='fa fa-lock'></i>
                                </span>
                            </div>
                            <input name='password' className='form-control' placeholder='password' type='password' />
                        </div>
                        <div className='form-group input-group'>
                            <div className='input-group-prepend'>
                                <span className='input-group-text'>
                                    <i className='fa fa-lock'></i>
                                </span>
                            </div>
                            <input name='confirmPassword' className='form-control' placeholder='Repeat password' type='password' />
                        </div>
                        <div className='form-group'>
                            <button onClick={createaccount} type='submit' className='btn btn-primary btn-block'>
                                Create Account
                            </button>
                        </div>
                        <p className='text-center'>
                            Have an account <a href='#' onClick={props.switch}>Log in</a>
                        </p>
                    </form>
                </article>
            </div>
        </div>
    )
}
