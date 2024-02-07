import React, { useState } from 'react';
import './Newsletter.css'

function Newsletter() {

    const [email, setEmail] = useState('');

    const handleSubmit =async (e) => {
        e.preventDefault();
        // Handle submission (e.g., send email to server for subscription)

        const response = await fetch("http://localhost:3000/subscribe/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json', // Set the content type to JSON
                },
                body: JSON.stringify({email}),
            });

        console.log('Submitted email:', email);
        // Reset email state after submission
        setEmail('');
    };

  return (
    <div>
         <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
            />
            <button type="submit">Subscribe</button>
        </form>
    </div>
   
  )
}

export default Newsletter