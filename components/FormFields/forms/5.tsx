//Order Personalisation
const FormExtra: React.FunctionComponent = () => {

    return (
      <div>
        <label htmlFor="orderNumber">Order Number</label>
        <input required type="text" id='orderNumber' />
        <p>If multiple separate with commas</p>
        
        <label htmlFor="message">Message</label>
        <input required type="textarea" id='message' />

        <label htmlFor="typeOfInsert">Type of Insert</label>
        <input required type="text" id='typeOfInsert' />

        <label htmlFor="handOrPC">Handwritten or Computer Generated?</label>
        <select required name="barcodeRequired" id="handOrPC">
          <option hidden disabled selected>Select One</option>
          <option value="Yes">Handwritten</option>
          <option value="No">Computer Generated</option>
        </select>

        <label htmlFor="description">Description</label>
        <input required type="textarea" id='description' />
    </div>
    )
}

export default FormExtra;