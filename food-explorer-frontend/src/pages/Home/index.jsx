import { Container, Main, MainContainer } from "./styles";
import { HeaderMobile } from "../../components/HeaderMobile";
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { useEffect, useState } from "react";
import { useSize } from '../../hooks/useSize'
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { api } from "../../services/api";
import { SideMenu } from "../../components/SideMenu";
import { useAuth } from "../../hooks/auth";

export function Home() {
    const windowsize = useSize()
    const [Dishes, setDishes] = useState([])
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const { cart, setCart } = useAuth()

    useEffect(() => {
        async function getDishes() {
            try {
                await api.get("dishes", {
                    params: {
                        category: "ref"
                    }
                })
                .then(res => {setDishes(res.data)})
            } catch (error) {
                console.error("Erro ao buscar pratos:", error);
            }
        }
        getDishes();
    }, []);
    
    return (        
        <MainContainer data-set-scroll={menuIsOpen}>
        <SideMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

        <Container>
            {windowsize > 1024 ? <HeaderDesktop requests={cart}/> : <HeaderMobile requests={cart} setMenu={setMenuIsOpen}/>}
            <Main>
                <div className="container-flavor">
                    <div className="flavor-image">
                        {windowsize > 1024 ?
                        <img src="../../src/assets/home-image.png" alt="" /> 
                        :
                        <img src="../../src/assets/home-image-mobile.png" alt="" />}
                    </div>
                    <div className="flavor-text">
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </div>
            </Main>

            <Section title="Refeições" card={Dishes} category={"ref"} setRequests={setCart}>
            </Section>

            <Section title="Sobremesas" card={Dishes} category={"sob"} setRequests={setCart}>
            </Section>

            <Section title="Bebidas" card={Dishes} category={"beb"} setRequests={setCart}>
            </Section>

            <Footer />
        </Container>
        </MainContainer>
    )
}