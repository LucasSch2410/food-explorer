import { CaretLeft, Minus, Plus } from "@phosphor-icons/react"
import { Tag } from "../Tag"
import { Container } from "./styles"
import { Button } from "../Button"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom";

export function DishItem({ item, setRequests }) {
    const navigate = useNavigate();

    const { user } = useAuth()
    const [ingredients, setIngredients] = useState([])
    const [quantity, setQuantity] = useState(1)

    const handleQuantity = (increases) => {
        if (increases == "minus" && quantity > 1){
            setQuantity(quantity - 1)
        } else if (increases == "plus"){
            setQuantity(quantity + 1)
        }
    }
    
    useEffect(() => {
        async function fetchTags(){
            const response = await api.get(`/ingredients/${item.id}`)
            
            setIngredients(response.data)
        }

        fetchTags()
    }, [])

    return (
        <Container>
            <div className="return-container" onClick={() => navigate("/")}>
                <CaretLeft/>
                <h2>voltar</h2>
            </div>

            <div className="dishItem-container">
                <div className="image-container">
                    <img src={`https://food-explorer-7t9g.onrender.com/files/${item.photo}`} alt="" />
                </div>
                <div className="text-dish">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <div className="tags-container">
                        {ingredients &&
                            ingredients.map((item, index) => 
                                <Tag title={item.name} key={index}/>
                            )
                        }
                    </div>
                    <div className="item-footer">
                        {
                            user.isAdmin == 1 ? 
                                <Button className="buy-button" title="Editar prato" onClick={() => navigate(`/dish/edit/${item.id}`)}/>
                            :
                            <>
                                <div className="quantity-container">
                                    <button onClick={() => handleQuantity("minus")}><Minus size={24} /></button>
                                    <div className="quantity">{quantity}</div>
                                    <button onClick={() => handleQuantity("plus")}><Plus size={24} /></button>
                                </div>

                                <Button className="buy-button" title={"Incluir ∙ " + "R$ " + item.price} onClick={() => setRequests(prev => prev + quantity)}>
                                </Button>
                            </>

                        }
                    </div>
                </div>
            </div>

        </Container>
    )
}