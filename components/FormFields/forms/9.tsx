//Manual Book In
const FormExtra: React.FunctionComponent = () => {

    return (
      <div>
        <label htmlFor="SKUs">SKU</label>
        <input required type="text" id='SKUs' />

        <label htmlFor="quantity">Quantity</label>
        <input required type="number" min={1} id='quantity' />

        <label htmlFor="barcodeRequired">Barcode Required</label>
        <select required name="barcodeRequired" id="barcodeRequired">
        <option hidden disabled selected>Choose one</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

        <label htmlFor="description">Description</label>
        <textarea required placeholder="Tell Us More..." rows={3} id='description' />
    </div>
    )
}

export default FormExtra;