import { useState } from 'react';
import { NextPage } from 'next';
import Layout from '../../components/Layout';
import { supabaseClient } from '../../lib/client';

const FinishedPage: NextPage = (props) => {
  // useEffect(() => {
  //   setTable('newOrders')
  //   return () => {
  //     setTable('newOrders')
  //   };
  // }, []);
  return (
    <>
      <Layout title="Work Order Submitted | Work Management System | TuPack" />
      <div className="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
        <h1>Work Order Submitted</h1>

        <main
          role="main"
          className="w-full lg:w-5/6 flex-grow pt-1 px-3"
        >
          <p>
            Thanks for submitting your order, email confirmation has
            been sent.
          </p>
          <p>
            Please note your Order Number below which you use to login
            into the tracker. It's also been emailed to you.
          </p>

          <h3>Order Number: {props.data.tracking_id}</h3>
          <strong>Click here for link to tracker</strong>
          {/* // link to tracker homepage */}
        </main>
        <div className="w-fixed w-full flex-shrink flex-grow-0 px-2"></div>
      </div>
    </>
  );
};

export default FinishedPage;

export async function getServerSideProps(context: any) {
  const id = context.query.id;

  const { data } = await supabaseClient
    .from('order')
    .select('*')
    .eq('id', id)
    .single();

  return {
    props: {
      data,
    },
  };
}
