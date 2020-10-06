import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { Card, Col } from 'reactstrap';
import img from '../image/bloco.jpg';
import api from '../../api';
import * as loginActions from '../../store/login/actions';

export default (props) => {
    const [cards, setCards] = useState([]);
    const dispatch = useDispatch();


    async function handleGetCard(){
        await api.get('/cards')
        .then((response) => setCards(response.data.card))
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        handleGetCard();
    },[]);

    return (
        <div className="container-fluid" style={{backgroundColor:"#00FA9A",height:"100vh"}}>
            <div className="row" style={{
            padding:"50px 30px",
            textAlign:"center",
            fontSize:"1.2em",
            fontWeight:"700",
            color:"#008B8B"}}>
                <h1 style={{width:"55%",margin:"auto",boxShadow:"-10px 10px 5px #00FFFF"}}>Bem vindo aos seus 
                <span style={{background:"#00FFFF",padding:"5px", borderRadius:"20px"}}>
                    CARDS</span> 
                <button
                type="button"
                onClick={() => dispatch(loginActions.logout())}
                style={{float:"right", border:"4px solid #00FFFF", padding:"2px 20px",
                fontSize:"0.8em", borderRadius:"15px", background:"#00FFFF",color:"#008B8B",fontWeight:"600"}}>
                Logout
                </button></h1>
                <Col className="col-sm-12 col-md-3" style={{ display:"flex", maxWidth:"100%",marginTop:"5em",}}>
                {cards.map((card) => (
                    <Card body key={card.uid} 
                        style={{backgroundImage: `url(${img})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        width:"15em",
                        height:"10em",
                        boxShadow:"-7px -8px 2px",
                        margin:"1em",
                        paddingTop:"3.25em"}}>
                        {card.title}<br />
                        {card.content}<br />
                        {card.date}<br />
                        {card.hour}
                    </Card>
                    ))}
                </Col>
            </div>
        </div>
    );
};