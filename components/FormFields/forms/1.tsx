//Bag and tag
import InputMultipleStrings from '../../../components/InputMultipleStrings';

const FormExtra: React.FunctionComponent = () => {
  return (
    <div>
      <label htmlFor="SKU">SKU(s)</label>
      <InputMultipleStrings
        inputId="SKUs"
        buttonName="Add SKU"
        placeholderText='Type an SKU and click "Add SKU"'
      />
      <label htmlFor="flatOrHanging">Flat or Hanging item?</label>
      <select required name="flatOrHanging" id="flatOrHanging">
        <option hidden disabled selected>
          Choose One...
        </option>
        <option value="Flat">Flat Item</option>
        <option value="Hanging">Hanging Item</option>
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
    </div>
  );
};

export default FormExtra;
