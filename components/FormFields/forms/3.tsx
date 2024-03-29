//Sewing
const FormExtra: React.FunctionComponent = () => {
  return (
    <div>
      <label htmlFor="SKU">SKU</label>
      <input required type="text" id="SKUs" />

      <label htmlFor="quantity">Quantity</label>
      <input
        required
        type="number"
        min={1}
        id="initial_units_or_quantity"
      />

      <label htmlFor="threadColour">Thread Colour</label>
      <input required type="text" id="threadColour" />

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
