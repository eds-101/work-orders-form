//Pre Pick and Pack
const FormExtra: React.FunctionComponent = () => {
    const today = new Date().toISOString().slice(0,10)

    return (
    <div>
        <label htmlFor="SKU">SKU</label>
        <input required type="text" id='SKUs' />
        <label htmlFor="description">Product Description</label>
        <textarea required placeholder="Enter Details..." id='description' rows={3} />
        <label htmlFor="packingRequirements">Packing Requirements</label>
        <input required type="text" id='packingRequirements' />
        <label htmlFor="deliveryAddress">Delivery Address</label>
        <input required type="text" id='deliveryAddress' />
        <label htmlFor="dateRequired">Date Required</label>
        <input required type="date" min={today} id='dateRequired' />
        <label htmlFor="totalUnits">Total Units</label>
        <input required type="number" min={1} id='totalUnits' />
    </div>
    )
}

export default FormExtra;