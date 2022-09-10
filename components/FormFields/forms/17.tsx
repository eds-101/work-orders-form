//Stock Count
const FormExtra: React.FunctionComponent = () => {
  return (
    <div>
      <p>
        We aim to complete stock counts within 10 working days of
        receiving your request.
      </p>

      <label htmlFor="SKUs">
        Add SKUs - Please separate each SKU id with a space
      </label>
      <input
        required
        type="text"
        id="SKUs_array"
        placeholder="Example: SKU1 SKU2 SKU3"
      />

      <label htmlFor="reasonForCount">Reason For Count</label>
      <textarea required rows={2} id="reasonForCount" />

      <label htmlFor="description">Description</label>
      <textarea
        required
        placeholder="Tell Us More..."
        rows={3}
        id="description"
      />
    </div>
  );
};

export default FormExtra;
