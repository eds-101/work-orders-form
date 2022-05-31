//Steam, fold and repack
const FormExtra: React.FunctionComponent = () => {
  return (
    <div>
      <label htmlFor="SKU">SKU</label>
      <input required type="text" id="SKUs" />

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
