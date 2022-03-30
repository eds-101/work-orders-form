//Swing Tags
import InputMultipleStrings from "../../InputMultipleStrings";

const FormExtra: React.FunctionComponent = () => {
    return (
      <div>
        <label htmlFor="SKUs">SKU(s)</label>
        <InputMultipleStrings inputId='SKUs' buttonName='Add SKU' placeholderText='Type an SKU and click "Add SKU"'/>

        <label htmlFor="barcodeRequired">Barcode Required</label>
        <select required name="barcodeRequired" id="barcodeRequired">
          <option hidden disabled selected></option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label htmlFor="description">Description</label>
        <textarea required placeholder="Tell Us More..." rows={3} id='description' />

        <label htmlFor="totalUnits">Total Units</label>
        <input required type="number" min={1} id='totalUnits' />

    </div>
    )
}

export default FormExtra;