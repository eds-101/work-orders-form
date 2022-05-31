//Manual Shipment
const FormExtra: React.FunctionComponent = () => {
  return (
    <div>
      <label htmlFor="collectionAddress">Collection Address</label>
      <input required type="text" id="collectionAddress" />

      <label htmlFor="deliveryAddress">Delivery Address</label>
      <input required type="text" id="deliveryAddress" />

      <label htmlFor="preferredCourier">Preferred Courier</label>
      <select required name="preferredCourier" id="preferredCourier">
        <option hidden disabled selected></option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>

      <label htmlFor="deliveryType">Delivery Type</label>
      <input required type="text" id="deliveryType" />

      <label htmlFor="weight">Weight of Parcel</label>
      <input required type="text" id="weight" />

      <label htmlFor="dimensions">
        Dimensions of Parcel (Height, Length, Depth)
      </label>
      <input required type="text" id="dimensions" />

      <label htmlFor="parcelQuantity">
        Quantity of Parcel / Pallete
      </label>
      <input
        required
        type="number"
        min={1}
        id="initial_units_or_quantity"
      />

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
