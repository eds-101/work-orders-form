//Personalised Inserts
const FormExtra: React.FunctionComponent = () => {
  return (
    <div>
      <label htmlFor="orderNumbers">
        Order Number(s) Please separate each order with a space
      </label>

      <input
        required
        type="text"
        id="orderNumbers"
        placeholder="Example: Order1 Order2 Order3"
      />

      <label htmlFor="message">Message</label>
      <textarea required rows={3} id="message" />

      <label htmlFor="typeOfInsert">Type of Insert</label>
      <input required type="text" id="typeOfInsert" />

      <label htmlFor="handOrPC">
        Handwritten or Computer Generated?
      </label>
      <select required id="handOrPC">
        <option hidden disabled selected>
          Select One
        </option>
        <option value="Handwritten">Handwritten</option>
        <option value="PC">Computer Generated</option>
      </select>

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
