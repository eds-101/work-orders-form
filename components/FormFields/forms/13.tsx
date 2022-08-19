import InputMultipleStrings from '../../InputMultipleStrings';

//Rebagging
const FormExtra: React.FunctionComponent = () => {
  return (
    <div>
      <label htmlFor="SKU">SKU(s)</label>
      <InputMultipleStrings
        inputId="SKUs"
        buttonName="Add SKU"
        placeholderText='Type an SKU and click "Add SKU"'
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
