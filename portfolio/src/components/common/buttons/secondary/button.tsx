import React from 'react';
import './button.css'


type Props = {
    name: string;
};

const SecondaryButton = React.memo((value: Props) => {
    return(
        <button className="SecondaryButton">{value.name}</button>
    )
})

export default React.memo(SecondaryButton)