import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as loginActions from '../../store/login/actions';
import api from '../../api';
import img from '../image/login.jpg';
import { Div, Article, Section, Img, Button } from './styles';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    async function handleLogin(){
        try {
            const response = await api.post('/login',{
                email,
                password,
            })
            if (response.data.token) {
                dispatch(loginActions.login(response.data.token));
              }
        } catch (error) {
            alert('erro ao tentar logar');
        }
    }
    return (
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '100vh',
          }}
        >
          <br />
          <div className="container" style={{marginTop:"10em"}}>
            <div className="row">
              <section className="col-12">
                <Article style={{ width: '450px', margin: 'auto' }}>
                  <FormGroup>
                    <Label for="examplePassword">Email</Label>
                    <Input
                      type="text"
                      value={email}
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Password</Label>
                    <Input
                      type="text"
                      value={password}
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <Button onClick={handleLogin}>Login</Button>
                  {/* <Link
                    to="/cadastro"
                    onClick={handleLogin}
                    style={{ paddingLeft: '10px' }}
                  >
                    <Button>Cadastrar usuário</Button>
                  </Link> */}
                </Article>
              </section>
            </div>
          </div>
        </div>
      );
}