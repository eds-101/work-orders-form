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
     <body class="font-mono bg-black">
        <div class="container mx-auto">
          <div class="flex justify-center px-6 my-12">
            <div class="w-full xl:w-3/4 lg:w-11/12 flex">

							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./index.html"
								>
                    Already have an account? Login!
                  </a>
                </div>
            </div>
          </div>
        </div>
    </body>

    </Layout>
  )
}

export default IndexPage


