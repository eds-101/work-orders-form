//Bespoke Quality Control

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

      <label htmlFor="description">
        Description of Quality Control Check
      </label>
      <textarea
        required
        placeholder="Tell Us More..."
        rows={3}
        id="description"
      />

      <label htmlFor="itemNeedMeasuring">
        Do Items Need Measuring?
      </label>
      <select
        required
        name="itemNeedMeasuring"
        id="itemNeedMeasuring"
      >
        <option hidden disabled selected>
          Choose one
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label htmlFor="dimensions">What are the dimensions?</label>
      <input
        required
        type="text"
        placeholder="Tell Us More..."
        id="dimensions"
      />

      <label htmlFor="upload">Upload any Images</label>
      <input type="file" id="upload" multiple accept="image/*" />
    </div>
  );
};

export default FormExtra;
