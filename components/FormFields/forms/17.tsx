//Bespoke Quality Control
const FormExtra: React.FunctionComponent = () => {

    return (
        <div>
        <label htmlFor="SKUs">SKU(s)</label>
        <input required type="text" id='SKUs' />
        <p>If multiple separate with commas</p>

        <label htmlFor="description">Description of Quality Control Check</label>
        <textarea required placeholder="Tell Us More..." rows={3} id='description' />

        <label htmlFor="barcodeRequired">Do Items Need Measuring?</label>
        <select required name="barcodeRequired" id="barcodeRequired">
            <option hidden disabled selected>Choose one</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>

        <label htmlFor="dimensions">What are the dimensions?</label>
        <textarea required placeholder="Tell Us More..." rows={3} id='dimensions' />
    </div>
    )
}

export default FormExtra;