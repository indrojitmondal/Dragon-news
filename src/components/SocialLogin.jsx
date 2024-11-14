import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div className=''>
            <h2 className='font-semibold mb-3'>Login With</h2>
            <div className='flex flex-col gap-2'>
                <button className='btn'> <FaGoogle /> Login wih Google</button>
                <button className='btn'> <FaGithub /> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;