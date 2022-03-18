//Quality Check (Visual Checks)
const FormExtra: React.FunctionComponent = () => {

    return (
      <div>
        <label htmlFor="productType">Product Type</label>
        <select required name="productType" id="productType">
          <option hidden disabled selected></option>
          <option value="Ceramics">Ceramics</option>
          <option value="Accessories">Accessories</option>
          <option value="Garments">Garments</option>
        </select>

    </div>
    )
}

export default FormExtra;