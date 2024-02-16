import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "../pages/sharedLayout";
import Hero from "../Components/Hero/Hero";

const RoutesMain = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                    element={<SharedLayout />}>
                    <Route index element={<Hero />} />
                    <Route element />
                    <Route element />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesMain