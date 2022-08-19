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
