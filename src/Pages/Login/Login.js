import React from 'react'

export default function Login() {
    return (
        <div>
            <a href={`${process.env}/auth/google/`}><button>Login with Google</button></a>
        </div>
    )
}
