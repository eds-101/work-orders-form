//Quality Check: Garments
import InputMultipleStrings from '../../InputMultipleStrings';
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

      <label htmlFor="SKUs">SKU(s)</label>
      <InputMultipleStrings
        inputId="SKUs"
        buttonName="Add SKU"
        placeholderText='Type an SKU and click "Add SKU"'
      />

      <label htmlFor="garmentSpecifics">Garment Specifics</label>
      <input required type="text" id="garmentSpecifics" />

      <label htmlFor="initial_units_or_quantity">Total Units</label>
      <input required type="number" id="initial_units_or_quantity" />

      <label htmlFor="upload">Upload Any Attachments</label>
      <input type="file" id="upload" multiple accept="image/*" />
    </div>
  );
};

export default FormExtra;
