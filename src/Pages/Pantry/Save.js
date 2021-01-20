import { faSave } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'

export default function Save(props) {
    return (
        <Button 
        className="mx-1" 
        style={{ height: '3rem' }} 
        variant={props.variant} 
        onClick={props.clickHandler}>
            Save <FontAwesomeIcon icon={faSave} />
        </Button>
    )
}
