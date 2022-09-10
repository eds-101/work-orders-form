//Rebagging
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

      <label htmlFor="quantity">Quantity</label>
      <input
        required
        type="number"
        min={1}
        id="initial_units_or_quantity"
      />

      <label htmlFor="flatOrHanging">Flat or Hanging item?</label>
      <select required name="flatOrHanging" id="flatOrHanging">
        <option hidden disabled selected>
          Select
        </option>
        <option value="Flat">Flat</option>
        <option value="Hanging">Hanging</option>
      </select>

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
