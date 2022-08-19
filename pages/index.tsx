import { NextPage } from 'next';
import { useState } from 'react';
import Image from 'next/image';
import logoOrange from '../public/logoOrange.png';
import Layout from '../components/Layout';
import Extra from '../components/FormFields/module';
import s3uploadFile from '../components/s3UploadFile';
import { dataUpload } from '../api/dataUpload';
import { submitZendeskTicket } from '../api/submitZendeskTicket';
import workOrders from '../data/workOrders';
import Router from 'next/router';

interface Element {
  id?: string | undefined;
  value?: any;
  files?: [] | undefined;
}
interface File {
  name: string;
}

let extraFieldsLookup: any;
extraFieldsLookup = {
  0: <Extra.Fields0 />,
  1: <Extra.Fields1 />,
  2: <Extra.Fields2 />,
  3: <Extra.Fields3 />,
  4: <Extra.Fields4 />,
  5: <Extra.Fields5 />,
  6: <Extra.Fields6 />,
  8: <Extra.Fields8 />,
  10: <Extra.Fields10 />,
  11: <Extra.Fields11 />,
  12: <Extra.Fields12 />,
  13: <Extra.Fields13 />,
  14: <Extra.Fields14 />,
  15: <Extra.Fields15 />,
  16: <Extra.Fields16 />,
  17: <Extra.Fields17 />,
};

const IndexPage: NextPage = () => {
  const [extraFields, setExtraFields] = useState<String>('');

  const handleWorkOrder = (value: String) => {
    const component = extraFieldsLookup[String(value)];
    setExtraFields(component);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let insertData: any;
    let specificFields: any;
    let pics: string[] = [];
    let skus: string[] = [];
    let emailAd: string | undefined;
    // check if id already in db
    const trackingId =
      'TPWO' +
      String(Date.now() * Math.floor(Math.random() * 100)).slice(-7);
    console.log('id: ', trackingId);
    let trackingIdEntry = { tracking_id: trackingId };
    insertData = { ...insertData, ...trackingIdEntry };
    Array.prototype.forEach.call(
      e.target.elements,
      (element: Element) => {
        // console.log(element.id, ' ', element.value);
        if (element.id && element.id === 'SKUs') {
          skus.push(String(element.value));
        } else if (element.id && element.id.includes('SKU:')) {
          skus = skus.filter((sku) => sku.includes('SKU:'));
          skus.push(element.id);
        } else if (element.id === 'work_task_id') {
          insertData['work_task_id'] = element.value;
        } else if (element.id === 'initial_units_or_quantity') {
          insertData['initial_units_or_quantity'] = element.value;
        } else if (
          element.id === 'brand_entry' ||
          element.id === 'description'
        ) {
          insertData[element.id] = element.value;
        }
        //contact data
        else if (element.id == 'email') {
          insertData[element.id] = element.value;
          emailAd = String(element.value);
        } else if (element.id == 'name' || element.id == 'number') {
          insertData[element.id] = element.value;
        } else if (element.id === 'upload') {
          //
          if (element.files) {
            [...element.files].forEach((file: File) => {
              try {
                s3uploadFile(file, emailAd);
                pics.push(
                  `https://custs.s3.eu-west-2.amazonaws.com/${emailAd}/${file.name}`
                );
              } catch (error) {
                console.log(error);
                throw new Error('Error uploading Image');
              }
            });
          }
        } else {
          if (element.id) {
            // console.log(
            //   'specific field: ',
            //   element.value,
            //   ' ',
            //   element.id
            // );
            // console.log(element.value);
            let entryObj = { [element.id]: element.value };
            specificFields = { ...specificFields, ...entryObj };
          }
        }
      }
    );
    pics.length > 0 ? (specificFields['pics'] = pics) : null;

    try {
      // Submit Zendesk Ticket and get the zendesk ticket id and save it in order table
      const zendeskData = await submitZendeskTicket(
        insertData,
        specificFields,
        workOrders
      );
      console.log(zendeskData);
      insertData = {
        ...insertData,
        zendesk_id: zendeskData.request.id,
      };

      let primaryData: any;
      primaryData = await dataUpload(insertData, 'order');
      const orderId = primaryData[0].id;
      console.log(primaryData);
      const idSpecificFields = {
        order_id: orderId,
        skus: skus,
      };
      specificFields = { ...specificFields, ...idSpecificFields };
      const extraData = await dataUpload(
        specificFields,
        'specific_fields'
      );
      console.log(extraData);

      Router.push({
        pathname: `/submitted/${orderId}`,
      });
    } catch (error) {
      alert('Problem submitting form - please try again.');
      console.log(error);
    }
  };

  return (
    <Layout title="Submit Your Work Order | Tu Pack">
      <body className="bg-white">
        <div className="flex min-h-screen min-w-full items-center justify-center">
          <div className="bg-yellow-100 border border-none p-6 rounded-2xl">
            <div className="mx-4 sm:mx-14 md:mx-14 lg:mx-20  flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col">
              <div className="w-4/5">
                <Image
                  src={logoOrange}
                  layout="responsive"
                  alt="pic"
                />
                <h1 className="text-black text-center text-2xl">
                  Submit Your Work Order
                </h1>
              </div>

              <form
                encType="multipart/form-data"
                className="orderAuth flex flex-col  space-y-5 pt-4 pb-10"
                onSubmit={handleSubmit}
              >
                <h1 className="text-black text-2xl">
                  Enter Your Details
                </h1>

                <input
                  required
                  className="w-full p-2 rounded-md placeholder-black border"
                  id="brand_entry"
                  placeholder="Enter Brand Name"
                  type="text"
                />

                <input
                  required
                  className="w-full p-2 rounded-md placeholder-black border"
                  id="name"
                  placeholder="Your Name"
                  type="text"
                />

                <input
                  className="w-full p-2 text-black placeholder-black rounded-md  border"
                  id="email"
                  placeholder="Email Address"
                  type="email"
                />

                <input
                  className="w-full p-2 text-black placeholder-black rounded-md  border"
                  id="number"
                  placeholder="Contact Number"
                  type="tel"
                />

                <label htmlFor="description">
                  Choose a Work Order
                </label>
                <select
                  required
                  className="w-full rounded-md  border"
                  name="order"
                  id="work_task_id"
                  onChange={(e) => handleWorkOrder(e.target.value)}
                >
                  <option hidden disabled selected>
                    Select One, Enter Details and Submit
                  </option>
                  {workOrders
                    .sort(function (a, b) {
                      if (a.name < b.name) {
                        return -1;
                      }
                      if (a.name > b.name) {
                        return 1;
                      }
                      return 0;
                    })
                    .map(({ name, id }) => (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    ))}
                </select>
                {extraFields}
                <input
                  className="w-full p-2 bg-black hover:bg-amber-500 rounded-full font-bold text-white border border-gray-700 cursor-pointer"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </body>
    </Layout>
  );
};

export default IndexPage;
