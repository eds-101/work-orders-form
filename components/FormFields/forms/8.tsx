//Making Up A Gift Pack
const FormExtra: React.FunctionComponent = () => {

    return (
      <div>
        <label htmlFor="SKUs">SKU(s) To Go In</label>
        <input required type="text" id='SKUs' />
        <p>If multiple separate with commas</p>

        <label htmlFor="packagingInstructions">Packaging Instructions</label>
        <textarea required placeholder="Please include which boxes to use" rows={3} id='packagingInstructions' />

        <label htmlFor="quantityOfItems">Quantity Of Items</label>
        <input required type="number" min={1} id='quantityOfItems' />

        <label htmlFor="quantityOfGiftSets">Quantity Of Gift Sets</label>
        <input required type="number" min={1} id='quantityOfGiftSets' />

        <p>Any photos</p>

        <label htmlFor="finalSKUs">Final Products SKU</label>
        <input required type="text" id='finalSKUs' />
    </div>
    )
}

export default FormExtra;