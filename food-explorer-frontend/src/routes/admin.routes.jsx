import { Routes, Route } from 'react-router-dom'
import { CreateDish } from "../pages/CreateDish";
import { Dish } from "../pages/Dish";
import { EditDish } from "../pages/EditDish";
import { Home } from "../pages/Home";

export function AdminRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dish/:id" element={<Dish/>} />
            <Route path="/dish/edit/:id" element={<EditDish/>} />
            <Route path="/dish/create" element={<CreateDish/>} />
        </Routes>
    )
}