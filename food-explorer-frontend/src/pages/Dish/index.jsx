import { useParams } from "react-router-dom"
import { DishItem } from "../../components/DishItem"
import { Footer } from "../../components/Footer"
import { HeaderDesktop } from "../../components/HeaderDesktop"
import { HeaderMobile } from "../../components/HeaderMobile"
import { useSize } from "../../hooks/useSize"
import { Container, MainContainer } from "./styles"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { SideMenu } from "../../components/SideMenu"

export function Dish({ requests, setRequests }) {
    const windowsize = useSize()
    const [data, setData] = useState(null)
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        async function fetchDish(){
            const response = await api.get(`/dishes/${id}`)
            setData(response.data)
        }

        fetchDish()
    }, [])

    return (
        <MainContainer data-set-scroll={menuIsOpen}>
            <SideMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

            <Container>
                {windowsize > 1024 ? <HeaderDesktop requests={requests}/> : <HeaderMobile requests={requests} setMenu={setMenuIsOpen}/>}
                {data &&
                    <DishItem item={data} setRequests={setRequests}/>
                }
                <Footer/>
            </Container>
        </MainContainer>

    )
}