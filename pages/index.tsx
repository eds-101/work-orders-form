import { NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import Extra from '../components/FormFields/module'
import workOrders from '../data/workOrders'
import app from '../components/FormFields/forms'

let extraFieldsLookup: object
extraFieldsLookup = {
  0: <Extra.Fields0 />,
  1: <Extra.Fields1 />,
}

const IndexPage: NextPage = () => {
  const [custDetails, setCustDetails] = useState({
    brand: '', name: '', number: '', order: ''
  })
  const [orderDetails, setOrderDetails] = useState({})
  const [extraFields, setExtraFields] = useState("")
  
  const handleWorkOrder = (value: String) => {
    setCustDetails(oldValues => ({...oldValues, ["order"]: value}))
    setOrderDetails({})
    const index = workOrders.filter(x => x.order === value)[0].index
    const component = extraFieldsLookup[index]
    setExtraFields(component)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault() 
    let formElements = e.target.elements
    Array.prototype.forEach.call(e.target.elements, (element) => {
      console.log(element.id, "  ", element.value);
    })
  }

  const set = (name: string) => {
    return ({ target: { value } }: {target: any, value: any} ) => {
      setCustDetails(oldValues => ({...oldValues, [name]: value}))
    }
  }

  const add = (name: string) => {
    return ({ target: { value } }: {target: any, value: any} ) => {
      setOrderDetails(oldValues => ({...oldValues, [name]: value}))
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
        <label htmlFor="brandMenu">Brand Name</label>
        <select required name="brand" id="brandMenu" onChange={set('brand')}>
          <option hidden disabled selected>Select</option>
          <option value="Arc Minute">Arc Minute</option>
          <option value="Bettina Ceramica">Bettina Ceramica</option>
        </select>

        <br />
        <label htmlFor="name">Contact Name</label>
        <input required type="text" id='name' onChange={set('name')}/>
        <br />

        <label htmlFor="number">Contact Number</label>
        <input required type="tel" id='number' onChange={set('number')}/>
        <br />
        <button type="submit">Submit Work Order</button>

        <label htmlFor="orderMenu">Work Order</label>
        <select required name="order" id="orderMenu" onChange={(e) => handleWorkOrder(e.target.value)}>
          <option hidden disabled selected>Choose here</option>
          {workOrders.map( ({order})  =>  <option value={order}>{order}</option>
          )}
        </select>
        {extraFields}
      </form>
      {Object.values(custDetails)}
      <br />
      {Object.values(orderDetails)}
    </Layout>
  )
}

export default IndexPage


