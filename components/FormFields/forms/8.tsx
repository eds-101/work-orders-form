//Making Up A Gift Pack
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
        <input required type="text" id='SKUs' />
        <p>If multiple separate with commas</p>

        <label htmlFor="packagingInstructions">Packaging Instructions</label>
        <textarea required placeholder="Please include which boxes to use" rows={3} id='packagingInstructions' />

        <label htmlFor="quantityOfItems">Quantity Of Items</label>
        <input required type="number" min={1} id='quantityOfItems' />

        <label htmlFor="quantityOfGiftSets">Quantity Of Gift Sets</label>
        <input required type="number" min={1} id='quantityOfGiftSets' />

        <label htmlFor="finalSKUs">Final Products SKU</label>
        <input required type="text" id='finalSKUs' />

        <label htmlFor="uploadPics">Upload Any Attachments</label>
        <input className="w-4/5" type="file" id="uploadPics" multiple accept="image/*" onChange={onSelect} />
    </div>
    )
}

export default FormExtra;