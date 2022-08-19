//Making Up A Gift Pack
import InputMultipleStrings from '../../InputMultipleStrings';

const FormExtra: React.FunctionComponent = () => {
  return (
    <div>
      <label htmlFor="SKUs">SKU(s) To Go In</label>
      <InputMultipleStrings
        inputId="SKUs"
        buttonName="Add SKU"
        placeholderText='Type an SKU and click "Add SKU"'
      />

      <label htmlFor="packagingInstructions">
        Packaging Instructions
      </label>
      <textarea
        required
        placeholder="Please include which boxes to use"
        rows={3}
        id="packagingInstructions"
      />

      <label htmlFor="quantityOfItems">Quantity Of Items</label>
      <input required type="number" min={1} id="quantityOfItems" />

      <label htmlFor="quantityOfGiftSets">
        Quantity Of Gift Sets
      </label>
      <input
        required
        type="number"
        min={1}
        id="initial_units_or_quantity"
      />

      <label htmlFor="finalSKU">Final Products SKU</label>
      <input required type="text" id="finalSKU" />

      <label htmlFor="ASNandDate">
        (Optional) ASN and Date of Expected Arrival
      </label>
      <input
        type="text"
        id="ASNandDate"
        placeholder="Please fill for precaution in case of delays"
      />

      <label htmlFor="description">Description</label>
      <textarea
        required
        placeholder="Tell Us More..."
        rows={3}
        id="description"
      />

      <label>Upload Any Pictures</label>
      <input id="upload" type="file" multiple accept="image/*" />
    </div>
  );
};

export default FormExtra;
