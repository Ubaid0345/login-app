import React from 'react'

export default function Login(props) {
  return (
    <div className='container'>
      <div className='card bg-light'>
        <article className='card-body mx-auto' style={{ width: "500px" }}>
          <h4 className='card-title mt-3 text-center'>Login</h4>
          <p>
            <a href='' className='btn btn-block btn-twitter'>
              <i className='fa fa-twitter'></i> Login via Twitter
            </a>
            <a href='' className='btn btn-block btn-facebook'>
              <i className='fa fa-facebook'></i> Login via Facebook
            </a>
          </p>
          <p className='divider-text'>
            <span className='bg-light'>OR</span>
          </p>
          <form>
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
            <div className='form-group'>
              <button type='submit' className='btn btn-primary btn-block'>
                Login
              </button>
            </div>
            <p className='text-center'>
              <a href='#' onClick={props.switch}>Create</a> an account
            </p>
          </form>
        </article>
      </div>
    </div>
  )
}
