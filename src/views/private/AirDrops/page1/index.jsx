import React from 'react'
import "./styles.scss";

const index = () => {
    return (
        <div>
            <h3 className="MainHeading">Airdrops</h3>
            <div className='content'>You have not logged in and that you have to log-in in order to visualize your<br /> previous airdrops</div>
            <div className='btns'>
                <button className='signupBtn colorBtn'>Sign Up</button>
                <button className='loginBtn simpleBtn'>Login</button>
            </div>
        </div>
    )
}

export default index