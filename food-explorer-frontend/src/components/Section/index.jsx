import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { Card } from '../Card'

import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'

import { Container } from './styles'
import { useSize } from '../../hooks/useSize'

export function Section({ title, card, category, setRequests }) {
    const windowsize = useSize()

    return (
        <Container>
            <h2>{title}</h2>

            <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                navigation={windowsize > 1024 ? true : false}
                modules={[Pagination, Navigation]}
                className="mySwiper">
                {card.map((item, index) => {
                    if (item.category == category) {
                        return <SwiperSlide key={index} className='SwiperCard' ><Card item={item} setRequests={setRequests}/></SwiperSlide>;
                    }
                    return null;
                })}

            </Swiper>
        </Container>
    )
}