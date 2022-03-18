import React from 'react';

//Pre Pick and Pack
const FormExtra: React.FunctionComponent = () => {

    return (
    <div>
        <h1 className="text-xl font-bold underline"
            >Pre Pick and Pack
        </h1>
        <br />
        <label htmlFor="contactName">Emergency contact</label>
        <input required type="tel" id='emerg' />
    </div>
    )
}

export default FormExtra;