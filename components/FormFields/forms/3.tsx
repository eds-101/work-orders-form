//Sewing
const FormExtra: React.FunctionComponent = () => {

    return (
      <div>
        <label htmlFor="SKU">SKU</label>
        <input required type="text" id='SKU' />

        <label htmlFor="quantity">Quantity</label>
        <input required type="number" min={1} id='quantity' />
        
        <label htmlFor="threadColour">Thread Colour</label>
        <input required type="text" id='threadColour' />

        <label htmlFor="totalUnits">Total Units</label>
        <input required type="textarea" id='totalUnits' />

        <label htmlFor="description">Description</label>
        <input required type="textarea" id='description' />
    </div>
    )
}

export default FormExtra;