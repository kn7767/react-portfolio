import React from 'react';

function Contact() {
    return (
        <div className='container2'>
            <h1>Contact me!</h1>
            <ul>
                <li className='contact-info'>
                    <a href = "mailto: knguy219@ucr.edu">Send Email</a>
                </li>
                <li className='contact-info'>
                    <a href = "https://github.com/kn7767">GitHub</a>
                </li>
            </ul>
        </div>
    );
}

// make this new component avail for other files
export default Contact;