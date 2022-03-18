import { NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import Extra from '../components/FormFields/module'
import workOrders from '../components/FormFields/workOrders'

let extraFieldsLookup: object
extraFieldsLookup = {
  0: <Extra.Fields0 />,
  1: <Extra.Fields1 />,
  2: <Extra.Fields2 />,
  3: <Extra.Fields3 />,
  4: <Extra.Fields4 />,
  5: <Extra.Fields5 />,
  6: <Extra.Fields6 />,
  7: <Extra.Fields7 />,
  8: <Extra.Fields8 />,
  9: <Extra.Fields9 />,
  10: <Extra.Fields10 />,
  11: <Extra.Fields11 />,
  12: <Extra.Fields12 />,
  13: <Extra.Fields13 />,
  14: <Extra.Fields14 />,
  15: <Extra.Fields15 />,
  16: <Extra.Fields16 />,
  17: <Extra.Fields17 />,
  18: <Extra.Fields18 />,
}

const IndexPage: NextPage = () => {
  const [custDetails, setCustDetails] = useState({
    brand: '', name: ''
  })
  const [extraFields, setExtraFields] = useState("")
  
  const handleWorkOrder = (value: String) => {
    const index = workOrders.filter(x => x.order === value)[0].index
    const component = extraFieldsLookup[index]
    setExtraFields(component)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault() 
    Array.prototype.forEach.call(e.target.elements, (element) => {
      console.log(element.id, "  ", element.value);
    })
  }

  const set = (name: string) => {
    return ({ target: { value } }: {target: any, value: any} ) => {
      setCustDetails(oldValues => ({...oldValues, [name]: value}))
    }
  }

  return (
    <Layout title="Submit Your Work Order | Tu Pack">
      <Image src='/logoBlack.png' height='100rem' width='200rem' alt='logo' />
      <h1 className="text-xl font-bold underline"
      >Submit Your Work Order
      </h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="brand">Brand Name</label>
        <select required name="brand" id="brand" onChange={set('brand')}>
          <option hidden disabled selected>Select</option>
          <option value="Arc Minute">Arc Minute</option>
          <option value="Bettina Ceramica">Bettina Ceramica</option>
        </select>

        <br />
        <label htmlFor="name">Contact Name</label>
        <input required type="text" id='name' onChange={set('name')}/>
        <br />

        <label htmlFor="number">Contact Number</label>
        <input required type="tel" id='number'/>
        <br />

        <label htmlFor="orderMenu">Work Order</label>
        <select required name="order" id="orderMenu" onChange={(e) => handleWorkOrder(e.target.value)}>
          <option hidden disabled selected>Choose here</option>
          {workOrders.map( ({order})  =>  <option value={order}>{order}</option>
          )}
        </select>
        {extraFields}
        <br />
        <br />
        <button type="submit">Submit Work Order</button>
      </form>
      {Object.values(custDetails)}
    </Layout>
  )
}

export default IndexPage


