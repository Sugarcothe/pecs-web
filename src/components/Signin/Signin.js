import React from 'react';
import './Signin.scss'


const Signin = () => {
    return (
        <div className='signup'>
            <div className='section'>
                <div className='left'>
                    <img src='assets/aero.png' alt='signin png'/>
                </div>
                <div className='right'>
                <form>
                    <h1>Sign in</h1>
                    <div class="form-group">
                        <label 
                            for="exampleInputEmail1">
                                Email address
                        </label>
                        <input 
                            type="email" 
                            class="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email"
                        />
                        <small 
                            id="emailHelp" 
                            class="form-text text-muted">
                                We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div class="form-group">
                        <label 
                            for="exampleInputPassword1">
                            Password
                        </label>
                        <input 
                            type="password" 
                            class="form-control" 
                            id="exampleInputPassword1" 
                            placeholder="Password"
                        />
                    </div>
                        <button 
                            type="submit" 
                            class="form-control btn btn-primary">
                                Submit
                        </button>
                        <small 
                            id="emailHelp" 
                            class="form-text text-muted">
                                Dont have an account Signup
                        </small>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin
