import { Routes, Route } from "react-router-dom";
import HomePage from "./home_page/index";
import NotFound from "./not_found/index";

export const RouteApp = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
export default RouteApp;