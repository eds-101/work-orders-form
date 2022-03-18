//Manual Book In
const FormExtra: React.FunctionComponent = () => {

    return (
      <div>
        <label htmlFor="SKUs">SKU</label>
        <input required type="text" id='SKUs' />

        <label htmlFor="quantity">Quantity</label>
        <input required type="text" id='quantity' />

        <label htmlFor="barcodeRequired">Barcode Required</label>
        <input type="radio" id="yes" name="barcodeRequired" value="yes" />
        <label htmlFor="yes">Yes</label><br />
        <input type="radio" id="no" name="barcodeRequired" value="no" />
        <label htmlFor="no">No</label><br />

        <label htmlFor="description">Description</label>
        <input required type="textarea" id='description' />
    </div>
    )
}

export default FormExtra;