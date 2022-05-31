//Shipping of Fabric Rolls
const FormExtra: React.FunctionComponent = () => {
  return (
    <div>
      <label htmlFor="weight">Weight</label>
      <input required type="text" id="weight" />

      <label htmlFor="deliveryAddress">Delivery Address</label>
      <input required type="text" id="deliveryAddress" />

      <label htmlFor="rollSize">Roll Length/Meterage</label>
      <input required type="text" id="rollSize" />

      <label htmlFor="quantityOfRolls">Quantity of Rolls</label>
      <input
        required
        type="number"
        min={1}
        id="initial_units_or_quantity"
      />

      <label htmlFor="SKU">SKU</label>
      <input required type="text" id="SKUs" />

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
