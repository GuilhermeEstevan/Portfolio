import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "../pages/sharedLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";

const RoutesMain = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                    element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesMain