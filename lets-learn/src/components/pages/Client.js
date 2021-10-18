import React from 'react';
import { Button, ButtonClients } from '../Button';
import '../../App.css';
import './Client.css';

function Client() {
    return(
        <div className='client-container'>
            <h1>Welcome</h1>
            <div className='client-btns' >
                <ButtonClients className='client'>
                    Client
                </ButtonClients>
                <Button className='add' variant='secondary'>
                    Add Client
                </Button>
            </div>
        </div>
    )
}

export default Client;