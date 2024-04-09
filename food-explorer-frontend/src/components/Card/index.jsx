import { Heart, Minus, Plus, CaretRight, Pencil } from "@phosphor-icons/react";
import { useSize } from '../../hooks/useSize'
import { Button } from "../../components/Button";
import { Container } from './styles';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom"

export function Card({ item, setRequests }) {
    const windowsize = useSize()

    const { user } = useAuth()
    const { photo, name, description, price, id } = item
    const [quantity, setQuantity] = useState(1)
    const navigate = useNavigate()

    function handleQuantity(increases) {
        if (increases == "minus" && quantity > 1){
            setQuantity(quantity - 1)
        } else if (increases == "plus"){
            setQuantity(quantity + 1)
        }
    }

    function submitRequest() {
        setRequests(prev => prev + quantity)
    }    

    return (
        <Container>
            <div className="icon">
                {
                    user.isAdmin == 0 ?
                    <Heart size={30} />
                    :
                    <Pencil size={30} onClick={() => navigate(`/dish/edit/${id}`)}/>
                }
            </div>

            <div className="item-image" onClick={() => navigate(`/dish/${id}`)}> 
                <img src={"http://localhost:3333/files/" + photo} alt="" />

            </div>

            <div className="about-item" onClick={() => navigate(`/dish/${id}`)}>
                <div>
                    <h3>{name}</h3>
                    <CaretRight />
                </div>
                {windowsize > 1024 &&
                    <p>{description}</p>}
            </div>

            <div className="price-meal">
                R$ {price}
            </div>

            {
                user.isAdmin == 0 && 

                <div className="item-footer">
                    <div className="quantity-container">
                        <button onClick={() => handleQuantity("minus")}><Minus size={24} /></button>
                        <div className="quantity">{quantity}</div>
                        <button onClick={() => handleQuantity("plus")}><Plus size={24} /></button>
                    </div>

                    <Button className="buy-button" title={"Incluir"} onClick={submitRequest}>
                    </Button>
                </div>
            }

        </Container>

    )
}

