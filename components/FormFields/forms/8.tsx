//Making Up A Gift Pack
import InputMultipleStrings from "../../InputMultipleStrings"
import S3UploadwNativeSdk from "../../S3UploadwNativeSdk"

const FormExtra: React.FunctionComponent = () => {
  const onSelect: any = (e: any) => {
    console.log(e.target.files)
    console.log(e.target)
    if (e.target.files.length > 5) {
        alert("Only 5 files accepted.");
        e.preventDefault();
    }
}
    return (
      <div>
        <label htmlFor="SKUs">SKU(s) To Go In</label>
        <InputMultipleStrings inputId='SKUs' buttonName='Add SKU' placeholderText='Type an SKU and click "Add SKU"'/>

        <label htmlFor="packagingInstructions">Packaging Instructions</label>
        <textarea required placeholder="Please include which boxes to use" rows={3} id='packagingInstructions' />

        <label htmlFor="quantityOfItems">Quantity Of Items</label>
        <input required type="number" min={1} id='quantityOfItems' />

        <label htmlFor="quantityOfGiftSets">Quantity Of Gift Sets</label>
        <input required type="number" min={1} id='quantity' />

        <label htmlFor="finalSKUs">Final Products SKU</label>
        <input required type="text" id='finalSKUs' />

        <label htmlFor="description">Description</label>
        <textarea required placeholder="Tell Us More..." rows={3} id='description' />

        <S3UploadwNativeSdk />

        <label htmlFor="uploadPics">Upload Any Attachments</label>
        <input className="w-4/5" type="file" id="uploadPics" multiple accept="image/*" onChange={onSelect} />
    </div>
    )
}

export default FormExtra;