import { Container, Form, Logo } from './styles'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

export function SignIn() {
    const { signIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function handleSignIn(){
        signIn({ email, password });
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
                <h1>Faça login</h1>
                <Form>
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

                    <Button title={"Entrar"} onClick={handleSignIn}>
                    </Button>
                    
                    <Link to="/register" className='redirect'>
                        <p>Criar uma conta</p>
                    </Link>

                </Form>
            </div>
        </Container>
    );
}
