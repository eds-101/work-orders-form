//Barcoding of Fabric Rolls
const FormExtra: React.FunctionComponent = () => {

    return (
        <div>
            <label htmlFor="description">Description</label>
            <input required type="textarea" id='description' />

            <label htmlFor="rollNeedMeasuring">Does Roll need measuring?</label>
            <input required type="radio" id="yes" name="rollNeedMeasuring" value="yes" />
            <label htmlFor="yes">Yes</label><br />
            <input type="radio" id="no" name="rollNeedMeasuring" value="no" />
            <label htmlFor="no">No</label><br />

            <label htmlFor="rollNeedMeasuring">Does Product need creating in Mintsoft?</label>
            <input required type="radio" id="yes" name="rollNeedMeasuring" value="yes" />
            <label htmlFor="yes">Yes</label><br />
            <input type="radio" id="no" name="rollNeedMeasuring" value="no" />
            <label htmlFor="no">No</label><br />

            <label htmlFor="totalUnits">Total Units</label>
            <input required type="number" id='totalUnits' />
        </div>
    )
}

export default FormExtra;