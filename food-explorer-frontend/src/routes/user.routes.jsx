import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Dish } from '../pages/Dish'
import { useState } from 'react'

export function UserRoutes(){
    const [requests, setRequests] = useState(0)

    return(
        <Routes>
            <Route path="/" element={<Home requests={requests} setRequests={setRequests}/>} />
            <Route path="/dish/:id" element={<Dish requests={requests} setRequests={setRequests}/>} />
        </Routes>
    )
}