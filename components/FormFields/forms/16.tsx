//Shipping of Fabric Rolls
const FormExtra: React.FunctionComponent = () => {

    return (
        <div>
        <label htmlFor="weight">Weight</label>
        <input required type="text" id='weight' />

        <label htmlFor="deliveryAddress">Delivery Address</label>
        <input required type="text" id='deliveryAddress' />

        <label htmlFor="rollSize">Roll Length/Meterage</label>
        <input required type="text" id='rollSize' />

        <label htmlFor="quantityOfRolls">Quantity of Rolls</label>
        <input required type="number" min={1} id='quantityOfRolls' />

        <label htmlFor="SKU">SKU</label>
        <input required type="text" id='SKU' />

        <label htmlFor="description">Description</label>
        <input required type="textarea" id='description' />
    </div>
    )
}

export default FormExtra;