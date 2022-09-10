import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { supabaseClient } from '../../lib/client';
import logoOrange from '../../public/logoOrange.png';
import warehouse from '../../public/warehouse.jpeg';

const FinishedPage: NextPage = (props: any) => {
  const { data } = props;

  return (
    <>
      {data && (
        <>
          <Layout title="Work Order Submitted | Work Management System | TuPack" />

          <div className="items-center flex flex-wrap">
            <div className="w-full h-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full max-h-full rounded-lg shadow-lg"
                src={warehouse.src}
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="text-center inline-flex items-center justify-center w-24 h-24 mb-1 mt-8">
                  <img src={logoOrange.src} alt="logo" />
                </div>
                <h3 className="text-5xl font-semibold">
                  Thank you, your request has been successfully
                  submitted.
                </h3>
                <h3>Work Order ID: {data.tracking_id}</h3>
                {/* // link to tracker homepage */}
                <p className="mt-4 leading-relaxed text-2xl font-semibold">
                  Please check your email for confirmation of receipt
                  and for any further updates, we’ll be in touch soon!
                </p>
                <strong>
                  <Link href={'/'}>
                    <a className="text-blue-700 no-underline hover:underline">
                      Please click here to submit another Work Order.
                    </a>
                  </Link>
                </strong>
              </div>
            </div>
          </div>
        </>
      )}
      ;
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
