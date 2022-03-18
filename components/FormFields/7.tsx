//Manual Shipment
const FormExtra: React.FunctionComponent = () => {

    return (
      <div>
        <label htmlFor="collectionAddress">Collection Address</label>
        <input required type="text" id='collectionAddress' />

        <label htmlFor="deliveryAddress">Delivery Address</label>
        <input required type="text" id='deliveryAddress' />

        <label htmlFor="preferredCourier">Preferred Courier</label>
        <select required name="preferredCourier" id="preferredCourier">
          <option hidden disabled selected></option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>

        <label htmlFor="deliveryType">Delivery Type</label>
        <input required type="text" id='deliveryType' />

        <label htmlFor="parcelWeight">Weight of Parcel</label>
        <input required type="text" id='parcelWeight' />

        <label htmlFor="parcelDimensions">Dimensions of Parcel (H, L, D)</label>
        <input required type="text" id='parcelDimensions' />

        <label htmlFor="parcelQuantity">Quantity of Parcel or Pallete</label>
        <input required type="text" id='parcelQuantity' />

        <label htmlFor="description">Description</label>
        <input required type="textarea" id='description' />
    </div>
    )
}

export default FormExtra;