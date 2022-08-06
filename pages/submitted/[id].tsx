import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { supabaseClient } from '../../lib/client';
import logoOrange from '../../public/logoOrange.png';

const FinishedPage: NextPage = (props: any) => {
  const { data } = props;

  return (
    <>
      {data && (
        <>
          <Layout title="Work Order Submitted | Work Management System | TuPack" />

          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="https://images.pexels.com/photos/5119209/pexels-photo-5119209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="text-center inline-flex items-center justify-center w-24 h-24 mb-1 mt-8">
                  <img src={logoOrange.src} alt="logo" />
                </div>
                <h3 className="text-5xl font-semibold">
                  Work Order Submitted
                </h3>
                <h3>Order Number: {data.tracking_id}</h3>
                <strong>
                  <Link href={'/'}>
                    Click here to go back to the Homepage
                  </Link>
                </strong>
                {/* // link to tracker homepage */}
                <p className="mt-4 leading-relaxed text-2xl font-semibold">
                  Thanks for submitting your order, please check your
                  email for confirmation along with your related
                  Zendesk Ticket.
                </p>
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
