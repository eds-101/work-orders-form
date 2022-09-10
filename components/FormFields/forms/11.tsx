//Quality Check: Garments
const FormExtra: React.FunctionComponent = () => {
  return (
    <div>
      <label htmlFor="description">Description</label>
      <textarea
        required
        placeholder="Tell Us More..."
        rows={3}
        id="description"
      />

      <label htmlFor="SKUs">
        Add SKUs - Please separate each SKU id with a space
      </label>
      <input
        required
        type="text"
        id="SKUs_array"
        placeholder="Example: SKU1 SKU2 SKU3"
      />

      <label htmlFor="garmentSpecifics">
        Garment Details (e.g. measurements)
      </label>
      <input required type="text" id="garmentSpecifics" />

      <label htmlFor="initial_units_or_quantity">Total Units</label>
      <input
        required
        type="number"
        min={1}
        id="initial_units_or_quantity"
      />

      <label htmlFor="upload">Upload Any Attachments</label>
      <input
        type="file"
        id="upload"
        multiple
        accept="image/*, application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf"
      />
    </div>
  );
};

export default FormExtra;
