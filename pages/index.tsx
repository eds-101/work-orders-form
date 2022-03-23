import { NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import logoOrange from '../public/logoOrange.png'
import Layout from '../components/Layout'
import Extra from '../components/FormFields/module'
import workOrders from '../components/FormFields/workOrders'
import brands from '../components/data/brands'

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
  // 10: <Extra.Fields10 />,
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
        <body class="bg-black">
            <div class="flex min-h-screen items-center justify-center">

                <div class="bg-white border border-none p-6 rounded-2xl">

                    <div class="mx-4 sm:mx-24 md:mx-34 lg:mx-56 mx-auto  flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col">
                            <div class="w-4/5">
                                <Image src={logoOrange} layout="responsive"  alt="pic" />
                                <h1 class="text-black text-center text-2xl">Submit Your Work Order</h1>
                            </div>

                        <form className="orderAuth flex flex-col  space-y-5 pt-4 pb-10" >  
                            <h1 class="text-black text-2xl">Enter Your Details</h1>

                        <select required class="w-full p-2 bg-black rounded-md  border border-gray-700 "
                        name="brand" id="brand" onChange={set('brand')}>
                            <option hidden disabled selected>Brand Name</option>
                            {brands.sort(function(a,b){
                              if(a.brandName < b.brandName) { return -1; }
                              if(a.brandName > b.brandName) { return 1; }
                              return 0;
                              }).map( 
                                    ({brandName})  =>  <option value={brandName}>{brandName}</option>
                                )
                            }
                        </select>
                               
                        <input required class="w-full p-2 bg-gray-900 rounded-md  border border-gray-700"
                         id='name' onChange={set('name')}  placeholder="Your Name" type="text" />
                        
                        <input required class="w-full p-2 bg-gray-900 rounded-md  border border-gray-700"
                         id='number' placeholder="Contact Number" type="tel" />

                        <label htmlFor="description">Choose a Work Order</label>
                        <select required class="w-full bg-black rounded-md  border border-gray-700"
                         name="order" id="orderMenu" onChange={(e) => handleWorkOrder(e.target.value)}>
                          <option hidden disabled selected>Select One, Enter Details and Submit</option>
                          {workOrders.map( ({order})  =>  <option value={order}>{order}</option>
                          )}
                        </select>

                        {extraFields}
                        
                        <input class="w-full p-2 bg-black hover:bg-amber-500 rounded-full font-bold text-white hover:text-black border border-gray-700 cursor-pointer"
                            type="submit" />

                        </form>
                    </div>


                </div>

            </div>
    </body>

    </Layout>
  )
}

export default IndexPage


