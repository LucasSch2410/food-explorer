import { Container, Logo, Exit } from './styles';
import { SignOut, MagnifyingGlass, Receipt } from "@phosphor-icons/react"
import { Button } from '../Button';
import { Search } from '../Search';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from "react-router-dom";

export function HeaderDesktop({ requests }) {
    const { signOut, user } = useAuth()

    const navigate = useNavigate();

    function goToDish(){
        navigate("/dish/create")
    }

    return (
        <Container>
            <div> 
                <Logo onClick={() => navigate("/")}>
                    <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C"/>
                    </svg>
                    <div>
                        <h1>
                            food explorer
                        </h1>
                        {
                            user.isAdmin == 1
                            &&
                            <span className="admin">admin</span>
                        }
                    </div>
                </Logo>

                <Search
                    placeholder="Busque por pratos ou ingredientes"
                    icon={MagnifyingGlass}
                />

                <div className='button-container'>
                    {
                        user.isAdmin == 1 ? 
                            <Button title="Novo Prato" onClick={goToDish}/>
                        :
                            <Button title={`Pedidos (${requests})`} icon={Receipt}/>
                    }
                </div>

                <Exit>
                    <SignOut onClick={signOut}/>
                </Exit>
            </div>


        </Container>
    )
}
