//Arranging a courier collection and delivery
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

      <label htmlFor="collectionAddress">Collection Address</label>
      <input required type="text" id="collectionAddress" />

      <label htmlFor="deliveryAddress">Delivery Address</label>
      <input required type="text" id="deliveryAddress" />

      <label htmlFor="dateTimePreference">
        Preferred Date and Time of Collection
      </label>
      <input required type="datetime-local" id="dateTimePreference" />

      <label htmlFor="courierId">Preferred Courier</label>
      <input required type="text" id="courierId" />

      <label htmlFor="deliveryType">Delivery Type</label>
      <select required name="deliveryType" id="deliveryType">
        <option hidden disabled selected>
          Parcel / Pallet / Container
        </option>
        <option value="Parcel">Parcel</option>
        <option value="Pallet">Pallet</option>
        <option value="Container">Container</option>
      </select>

      <label htmlFor="approxWeight">Approximate Weight</label>
      <input required type="text" id="approxWeight" />

      <label htmlFor="parcelDimensions">Parcel Dimensions</label>
      <input required type="text" id="parcelDimensions" />

      <label htmlFor="quantity">Quantity</label>
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
