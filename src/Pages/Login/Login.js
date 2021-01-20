import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Container } from 'react-bootstrap'
import React from 'react'


export default function Login(props) {
    return (
        <Container className="my-3">
            <Button variant="info" href={`${props.apiUrl}/auth/google/`}>
                Login with Google <FontAwesomeIcon icon={faGoogle} />
            </Button>
        </Container>
    )
}
