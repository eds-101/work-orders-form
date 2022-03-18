//Stock Count
const FormExtra: React.FunctionComponent = () => {

    return (
        <div>
            <label htmlFor="SKU">SKU</label>
            <input required type="text" id='SKU' />

            <label htmlFor="timeFrame">Time Frame</label>
            <input required type="text" id='timeFrame' />

            <label htmlFor="reasonForCount">Reason For Count</label>
            <input required type="textarea" id='reasonForCount' />

            <label htmlFor="reasonForCount">Reason For Count</label>
            <input required type="textarea" id='reasonForCount' />

            <label htmlFor="description">Description</label>
            <input required type="textarea" id='description' />
        </div>
    )
}

export default FormExtra;