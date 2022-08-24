import InputMultipleStrings from '../../InputMultipleStrings';

//Stock Count
const FormExtra: React.FunctionComponent = () => {
  return (
    <div>
      <p>
        We aim to complete stock counts within 10 working days of
        receiving your request.
      </p>

      <label htmlFor="SKUs">SKU(s)</label>
      <InputMultipleStrings
        inputId="SKUs"
        buttonName="Add SKU"
        placeholderText='Type an SKU and click "Add SKU"'
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
