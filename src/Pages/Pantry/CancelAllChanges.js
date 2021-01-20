import { faBan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'

export default function CancelAllChanges(props) {
    return (
        <Button 
        className="mx-1" 
        style={{ height: '3rem' }} 
        variant={props.variant} 
        onClick={props.clickHandler}>
            Cancel All Changes <FontAwesomeIcon icon={faBan} />
        </Button>
    )
}
