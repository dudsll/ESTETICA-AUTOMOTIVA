import Button from "../components/button/button";
import Header from "../components/header/header";

export default function Home() {
    const onContactClick = () => {
        navigate("/contato");
    };

    return (
        <div>
            {/* FIXME: This code was only a demo to show the button component */}
            <Header isHome={true} />
            <Button label="Contato" onClick={onContactClick} />
        </div>
    );
}