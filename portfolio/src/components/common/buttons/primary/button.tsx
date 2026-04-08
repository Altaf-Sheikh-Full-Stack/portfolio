import React from 'react';
import './button.css'

type Props = {
    name: string;
};

const PrimaryButton = React.memo((value:Props) => {
    return(
        <button className="PrimaryButton">{value.name}</button>
    )
})

export default React.memo(PrimaryButton)