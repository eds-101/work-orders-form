//Swing Tags
const FormExtra: React.FunctionComponent = () => {
  return (
    <div>
      <label htmlFor="SKUs">
        Add SKUs - Please separate each SKU id with a space
      </label>
      <input
        required
        type="text"
        id="SKUs_array"
        placeholder="Example: SKU1 SKU2 SKU3"
      />

      <label htmlFor="barcodeRequired">Barcode Required</label>
      <select required name="barcodeRequired" id="barcodeRequired">
        <option hidden disabled selected></option>
        <option value={'true'}>Yes</option>
        <option value={'false'}>No</option>
      </select>

      <label htmlFor="description">Description</label>
      <textarea
        required
        placeholder="Tell Us More..."
        rows={3}
        id="description"
      />

      <label htmlFor="initial_units_or_quantity">Total Units</label>
      <input
        required
        type="number"
        min={1}
        id="initial_units_or_quantity"
      />

      <label>Upload Your Barcode(s) Here</label>
      <input id="upload" type="file" accept="image/*" multiple />
    </div>
  );
};

export default FormExtra;
