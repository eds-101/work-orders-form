import { useState } from "react";

type Props = {
    inputId?: string,
  buttonName?: string
}

const InputMultipleStrings: React.FunctionComponent<Props> = (
{ inputId = 'SKUs', buttonName = 'Add SKU'}) => {
    const [SKUfield, setSKUfield] = useState<String>("")
    const [SKUs, setSKUs] = useState<String[]>([])

    // to finish check the adding and removing of the SKUS

    const handleChange = (e: any) => {
        setSKUfield(e.target.value)
    }

    const addSKU = (e: String) => {
      console.log(e)
      type State = String[]
      const assignedValues: State = [e]
      setSKUs(SKUs.concat(assignedValues))
    }

    // (() => {
    //     type State = { foo: string };
    //     const state: State = { foo: 'bar' };
    //     const assignedValues: State = { foo: 1 }; //complain expected
    //     const newState: State = Object.assign({}, state, assignedValues) 
    // })();

    const deleteSKU = (e: any) => {
      console.log(e.target.value)
      // setSKUs(prevSKUs => {
      //   [...prevSKUs, e.target.value]
      // })
    }

    return (
        <div className="max-w-lg mt-2">
            <div className="relative">
            <input type="text" id={inputId} placeholder="Enter SKUs here"
            onChange={handleChange} 
            />
            <button id={inputId} 
            className="w-1/4 bg-black hover:bg-amber-500 rounded-full font-bold text-white hover:text-black border border-gray-700 cursor-pointer"
            type="button" onClick={() => addSKU(SKUfield)}>
                {buttonName}
                </button>
                <br />
            <div className="bg-blue-100 inline-flex flex-wrap items-center text-sm rounded mt-2 overflow-hidden">
                {SKUs.map(sku => {
                    return <div>
                                <span className=" leading-relaxed truncate max-w-xs px-1" x-text="tag">{sku}</span>
                                <button className="w-6 h-8 inline-block align-middle text-gray-500 bg-blue-200 focus:outline-none">
                                    <svg className="w-6 h-6 fill-current mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/></svg>
                                </button>
                            </div>
                })
                }
            </div>
            </div>
        </div>
    )
}

export default InputMultipleStrings

