import { useState } from "react";

//Bag and tag
const FormExtra: React.FunctionComponent = () => {

  const [SKUs, setSKUs] = useState<String[]>([])


  const addSKU = (e: any) => {
    console.log(e.target.value)
    // setSKUs(prevSKUs => {
    //   [...prevSKUs, e.target.value]
    // })
  }


    return (
    <div>
        <label htmlFor="SKU">SKU(s)</label>

        <p>If multiple separate with commas</p>
        <label htmlFor="flatOrHanging">Flat or Hanging item?</label>
        <select required name="flatOrHanging" id="flatOrHanging">
          <option hidden disabled selected>Choose One...</option>
          <option value="Flat">Flat Item</option>
          <option value="Hanging">Hanging Item</option>
        </select>
        <label htmlFor="description">Description</label>
        <textarea required placeholder="Tell Us More..." rows={3} id='description' />
        <label htmlFor="totalUnits">Total Units</label>
        <input required type="number" min={1} id='totalUnits' />
    </div>
    )
}

export default FormExtra;