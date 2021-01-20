import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import './inventory.css'

export default function Inventory(props) {
    let InventoryCards = props.inventoryItems.map((item, index) => 
        <tr key={index} className={item.changed ? "table-warning" : ""}>
            <th scope="row">{item.name}</th>
            <td><Button block onClick={() => props.decrementHandler(index)}>
                <FontAwesomeIcon icon={faMinus} />
                </Button></td>
            <td><Form.Control 
                onChange={(event) => props.qtyChangeHandler(index, Number(event.target.value))} 
                value={item.qty}
                /></td>
            <td><Button block onClick={() => props.incrementHandler(index)}>
                <FontAwesomeIcon icon={faPlus} />
                </Button></td>
            <td> {item.qtyUnit} </td>
            <td>
                <Button 
                variant="danger" 
                block
                onClick={() => props.deleteHandler(index)}>
                    Delete Item <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
                </td>
        </tr>
        )

    return (
        <Table bordered hover size="sm">
            <thead>
                <tr><th colSpan="6">Currently working on inventory : {props.inventoryName}</th></tr>
            </thead>
            <tbody>
                {InventoryCards}
            </tbody>
        </Table>
    )
}

// className={item.changed ? "changed-item" : "unchanged-item"}