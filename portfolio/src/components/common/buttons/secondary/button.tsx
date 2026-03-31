import './button.css'


type Props = {
    name: string;
};

const SecondaryButton = (value: Props) => {
    return(
        <button className="SecondaryButton">{value.name}</button>
    )
}

export default SecondaryButton