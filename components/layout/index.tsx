import Header from "../header";
import Footer from "../footer";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Index(props: LayoutProps) {
    const { children } = props;
    return (
        <div>
            <Header></Header>
            <div>{children}</div>
            <Footer></Footer>
        </div>
    );
}
