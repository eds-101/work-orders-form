//Barcoding of Fabric Rolls
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

      <label htmlFor="rollNeedMeasuring">
        Does Roll need measuring?
      </label>
      <select
        required
        name="rollNeedMeasuring"
        id="rollNeedMeasuring"
      >
        <option hidden disabled selected>
          Choose one
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label htmlFor="prodNeedMintsoft">
        Does Product need creating in Mintsoft?
      </label>
      <select required name="prodNeedMintsoft" id="prodNeedMintsoft">
        <option hidden disabled selected>
          Choose one
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label htmlFor="initial_units_or_quantity">Total Units</label>
      <input required type="number" id="initial_units_or_quantity" />
    </div>
  );
};

export default FormExtra;
