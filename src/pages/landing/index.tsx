import { Header } from "./ui/header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./ui/footer/Footer";

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
