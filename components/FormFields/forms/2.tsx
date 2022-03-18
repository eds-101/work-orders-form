//Arranging a courier collection and delivery
const FormExtra: React.FunctionComponent = () => {

    return (
      <div>
      <label htmlFor="description">Description</label>
      <input required type="textarea" id='description' />

        <label htmlFor="collectionAddress">Collection Address</label>
        <input required type="text" id='collectionAddress' />

        <label htmlFor="deliveryAddress">Delivery Address</label>
        <input required type="text" id='deliveryAddress' />

        <label htmlFor="preferredCourier">Preferred Courier</label>
        <input required type="text" id='preferredCourier' />

        <label htmlFor="deliveryType">Delivery Type</label>
        <select required name="deliveryType" id="deliveryType">
          <option hidden disabled selected>Parcel / Packet / Container</option>
          <option value="Parcel">Parcel</option>
          <option value="Packet">Packet</option>
          <option value="Container">Container</option>
        </select>

        <label htmlFor="approxWeight">Approximate Weight</label>
        <input required type="text" id='approxWeight' />
        
        <label htmlFor="parcelDimensions">Parcel Dimensions</label>
        <input required type="text" id='parcelDimensions' />
        
        <label htmlFor="quantity">Quantity</label>
        <input required type="number" min={1} id='quantity' />

    </div>
    )
}

export default FormExtra;