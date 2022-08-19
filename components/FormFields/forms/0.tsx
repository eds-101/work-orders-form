//Pre Pick and Pack
const FormExtra: React.FunctionComponent = () => {
  const today = new Date().toISOString().slice(0, 10);

  return (
    <div>
      <label htmlFor="SKU">SKU</label>
      <input required type="text" id="SKUs" />
      <label htmlFor="description">Product Description</label>
      <textarea
        required
        placeholder="Enter Details..."
        id="description"
        rows={3}
      />
      <label htmlFor="packingRequirements">
        Packing Requirements
      </label>
      <input required type="text" id="packingRequirements" />
      <label htmlFor="deliveryAddress">Delivery Address</label>
      <input required type="text" id="deliveryAddress" />
      <label htmlFor="dateRequired">
        Date to be Picked and Packed By
      </label>
      <input required type="date" min={today} id="dateRequired" />
      <label htmlFor="dispatchDate">Dispatch Date</label>
      <input required type="date" min={today} id="dispatchDate" />
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
