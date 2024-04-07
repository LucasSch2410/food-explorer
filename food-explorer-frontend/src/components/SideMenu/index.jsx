import { Container, Header, Exit } from './styles';
import { X, MagnifyingGlass } from '@phosphor-icons/react';
import { Search } from '../Search';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom'

export function SideMenu({ menuIsOpen, setMenuIsOpen }) {
    const { signOut, user } = useAuth()
    const navigate = useNavigate()

    return (
        <Container data-menu-is-open={menuIsOpen}>
            <Header>
                <div>
                    <X size={30} onClick={() => setMenuIsOpen(false)}/>
                    <h1>Menu</h1>
                </div>
            </Header>


            <div className='info-menu'>
                <Search icon={MagnifyingGlass} size={25} placeholder="Busque por pratos ou ingredientes"/>

                {
                    user.isAdmin == 1
                    &&
                    <Exit onClick={() => navigate("/dish/create")}>
                        <h1>Novo Prato</h1>
                        <div className='end-line'></div>
                    </Exit>
                    }



                <Exit onClick={signOut}>
                    <h1>Sair</h1>
                    <div className='end-line'></div>
                </Exit>
            </div>

        </Container>
    )
}