//Bespoke Quality Control
import InputMultipleStrings from "../../InputMultipleStrings"

const FormExtra: React.FunctionComponent = () => {

    const onSelect: any = (e: any) => {
        console.log(e.target.files)
        console.log(e.target)
        if (e.target.files.length > 5) {
            console.log("2 many files")
            alert("Only 5 files max accepted.");
            e.preventDefault();
            delete e.target
        }
    }
    
    return (
        <div>
        <label htmlFor="SKUs">SKU(s)</label>
        <InputMultipleStrings inputId='SKUs' buttonName='Add SKU' placeholderText='Type an SKU and click "Add SKU"'/>

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

        <label htmlFor="uploadPics">Upload any attachments</label>
        <input type="file" id="uploadPics" multiple accept="image/*" onChange={onSelect} />
    </div>
    )
}

export default FormExtra;