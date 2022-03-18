import React from 'react';

//Bag and tag
const FormExtra: React.FunctionComponent = () => {

    return (
    <div>
        <label htmlFor="SKU">SKU(s)</label>
        <input required type="text" id='SKU' />
        <p>Seperate multiple SKUs with a comma</p>
        <label htmlFor="flatOrHanging">Flat or Hanging item?</label>
        <select required name="flatOrHanging" id="flatOrHanging">
          <option hidden disabled selected>Select</option>
          <option value="Flat">Flat</option>
          <option value="Hanging">Hanging</option>
        </select>
        <label htmlFor="description">Description</label>
        <input required type="textarea" id='description' />

        <label htmlFor="totalUnits">Total Units</label>
        <input required type="number" min={1} id='totalUnits' />
    </div>
    )
}

export default FormExtra;