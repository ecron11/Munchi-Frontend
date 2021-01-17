import React from 'react'


export default function Login(props) {
    return (
        <div>
            <a href={`${props.apiUrl}/auth/google/`}><button>Login with Google</button></a>
        </div>
    )
}
