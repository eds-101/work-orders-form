//Quality Check: Accessories / Ceramics
const FormExtra: React.FunctionComponent = () => {

    return (
      <div>
        <label htmlFor="description">Description</label>
        <input required type="textarea" id="description" />

        <label htmlFor="SKUs">SKU(s)</label>
        <input required type="text" id='SKU' />
        <p>Seperate multiple SKUs with a comma</p>

        <label htmlFor="totalUnits">Total Units</label>
        <input required type="text" id='totalUnits' />

    </div>
    )
}

export default FormExtra;