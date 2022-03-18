import React from 'react';

//Pre Pick and Pack
const FormExtra: React.FunctionComponent = () => {
    const today = new Date().toISOString().slice(0,10)

    return (
    <div>
        <label htmlFor="SKU">SKU</label>
        <input required type="text" id='SKU' />
        <label htmlFor="productDescription">Product Description</label>
        <input required type="textarea" id='productDescription' />
        <label htmlFor="quantity">Quantity</label>
        <input required type="number" min={1} id='quantity' />
        <label htmlFor="packingRequirements">Packing Requirements</label>
        <input required type="text" id='packingRequirements' />
        <label htmlFor="deliveryAddress">Delivery Address</label>
        <input required type="text" id='deliveryAddress' />
        <label htmlFor="dateRequired">Date Required</label>
        <input required type="date" min={today} id='dateRequired' />
        <label htmlFor="totalUnits">Total Units</label>
        <input required type="number" id='totalUnits' />
    </div>
    )
}

export default FormExtra;