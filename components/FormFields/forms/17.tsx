//Stock Count
const FormExtra: React.FunctionComponent = () => {

    return (
        <div>
            <label htmlFor="SKU">SKU</label>
            <input required type="text" id='SKUs' />

            <label htmlFor="timeFrame">Time Frame</label>
            <input required type="text" id='timeFrame' />

            <label htmlFor="reasonForCount">Reason For Count</label>
            <textarea required rows={3} id='reasonForCount' />

            <label htmlFor="description">Description</label>
            <textarea required placeholder="Tell Us More..." rows={3} id='description' />
        </div>
    )
}

export default FormExtra;