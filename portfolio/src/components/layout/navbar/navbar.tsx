import "./navbar.css";
import { useModalStore } from "../../../context/modal";
import SecondaryButton from "../../common/buttons/secondary/button";

const Navbar = () => {
    const setComponent = useModalStore((state) => state.setComponent);

    return (
        <section className="Navbar">
            <h3 className="Navbar-H3">
                Altaf <br /> Sheikh
            </h3>
            <div onClick={() => setComponent({ type: "Navbar" })}>
                {/* <SecondaryButton name={"Menu"} /> */}
            </div>

        </section>
    );
};

export default Navbar;
