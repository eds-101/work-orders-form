//Quality Check: Garments
import InputMultipleStrings from "../../InputMultipleStrings"
const FormExtra: React.FunctionComponent = () => {
 
  const onSelect: any = (e: any) => {
    console.log(e.target.files)
    console.log(e.target)
    if (e.target.files.length > 5) {
        console.log("2 many files")
        alert("Only 5 files max accepted.");
        e.preventDefault();
        e.target.files = null
    }
  }
    return (
      <div>
        <label htmlFor="description">Description</label>
        <textarea required placeholder="Tell Us More..." rows={3} id="description" />

        <label htmlFor="SKUs">SKU(s)</label>
        <InputMultipleStrings inputId='SKUs' buttonName='Add SKU' placeholderText='Type an SKU and click "Add SKU"'/>

        <label htmlFor="garmentSpecifics">Garment Specifics</label>
        <input required type="text" id='garmentSpecifics' />

        <label htmlFor="totalUnits">Total Units</label>
        <input required type="number" id='totalUnits' />

        <label htmlFor="uploadPics">Upload Any Attachments</label>
        <input type="file" id="uploadPics" multiple accept="image/*" onChange={onSelect} />
    </div>
    )
}

export default FormExtra;