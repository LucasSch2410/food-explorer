import { Container, Form, Logo } from './styles'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { api } from '../../services/api'

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password){
            return alert("Preenche todos os campos!")
        }

        api.post("/users", { name, email, password})
        .then(() => {
            alert("Usuário criado com sucesso!")
            navigate("/");
        })
        .catch( error => {
            if(error.response){
                alert(error.response.data.message)
            } else {
                console.log(error)
                alert("Não foi possível cadastrar.")
            }
        })
    }
 
    return (
        <Container>
            <Logo>
                <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C"/>
                </svg>
                <h1>
                    food explorer
                </h1>
            </Logo>

            <div className='sign-div'>
                <h1>Crie sua conta</h1>
                <Form>
                    <div>
                        <label>Seu nome</label>
                        <Input
                            placeholder='Exemplo: Maria da SIlva'
                            type='text'
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Email</label>
                        <Input
                            placeholder='Exemplo: exemplo@exemplo.com.br'
                            type='text'
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Senha</label>
                        <Input
                            placeholder='No minimo 6 caracteres'
                            type='password'
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <Button title={"Criar conta"} onClick={handleSignUp}>
                    </Button>
                    
                    <Link to="/" className='redirect'>
                        <p>Já tenho uma conta</p>
                    </Link>

                </Form>
            </div>
        </Container>
    );
}
