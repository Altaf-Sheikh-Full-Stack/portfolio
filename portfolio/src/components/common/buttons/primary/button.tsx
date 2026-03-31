import './button.css'

type Props = {
    name: string;
};

const PrimaryButton = (value:Props) => {
    return(
        <button className="PrimaryButton">{value.name}</button>
    )
}

export default PrimaryButton