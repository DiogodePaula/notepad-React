import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import api from '../../api';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    async function handleUser(){
        await api.post('/users', {email, password})
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }

    return(
        <div style={{ paddingTop:'200px'}}>
            <Form style={{ width: '350px', padding:'30px', margin: 'auto', textAlign:'center',
            border:'1px solid black', borderRadius:'20px' }}>
            <FormGroup>
                <Label for="exampleName">Nome</Label>
                <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </FormGroup>
            <Button onClick={handleUser}>Cadastrar</Button>
            </Form>
        </div>
    );

};