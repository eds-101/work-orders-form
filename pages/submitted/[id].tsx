import { NextPage } from 'next';
import Layout from '../../components/Layout';
import { supabaseClient } from '../../lib/client';
import logoOrange from '../../public/logoOrange.png';

const FinishedPage: NextPage = (props) => {
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
                <strong>Click here for link to tracker</strong>
                {/* // link to tracker homepage */}
                <p className="mt-4 leading-relaxed text-2xl font-semibold">
                  Thanks for submitting your order, email confirmation
                  has been sent.
                </p>
                <p className="mt-4 leading-relaxed text-2xl font-semibold">
                  Please note your Order Number below which you use to
                  login into the tracker. It's also been emailed to
                  you.
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
