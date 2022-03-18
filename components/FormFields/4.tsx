//Swing Tags
const FormExtra: React.FunctionComponent = () => {

    return (
      <div>
        <label htmlFor="SKUs">SKU(s)</label>
        <input required type="text" id='SKUs' />
        <p>If multiple separate with commas</p>

        <label htmlFor="barcodeRequired">Barcode Required</label>
        <select required name="barcodeRequired" id="barcodeRequired">
          <option hidden disabled selected></option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label htmlFor="description">Description</label>
        <input required type="textarea" id='description' />

        <label htmlFor="totalUnits">Total Units</label>
        <input required type="number" min={1} id='totalUnits' />

    </div>
    )
}

export default FormExtra;