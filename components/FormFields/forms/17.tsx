//Bespoke Quality Control
const FormExtra: React.FunctionComponent = () => {

    return (
        <div>
        <label htmlFor="SKUs">SKU(s)</label>
        <input required type="text" id='SKUs' />
        <p>If multiple separate with commas</p>

        <label htmlFor="description">Description of Quality Control Check</label>
        <input required type="textarea" id='description' />

        <label htmlFor="barcodeRequired">Do Items Need Measuring?</label>
        <input required type="radio" id="yes" name="barcodeRequired" value="yes" />
        <label htmlFor="yes">Yes</label><br />
        <input type="radio" id="no" name="barcodeRequired" value="no" />
        <label htmlFor="no">No</label><br />

        <label htmlFor="dimensions">What are the dimensions?</label>
        <input required type="textarea" id='dimensions' />
    </div>
    )
}

export default FormExtra;