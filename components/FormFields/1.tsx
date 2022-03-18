import React from 'react';

//Bag and tag
const FormExtra: React.FunctionComponent = () => {

    return (
    <div>
        <h1 className="text-xl font-bold underline"
            >Bag and Tag
        </h1>
        <br />
        <label htmlFor="contactName">Emergency contact</label>
        <input required type="tel" id='emerg' />
    </div>
    )
}

export default FormExtra;