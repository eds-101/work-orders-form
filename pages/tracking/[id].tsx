import {NextPage} from 'next';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {supabase} from '../../api';
import {Track} from '../../components/track/Track';

const Tracking: NextPage = (Props) => {
  const [trackingInfo, setTracker] = useState(null);
  console.log(Props.accepted);

  return (
    <Track
      id={Props.trackingId}
      created_at={Props.created_at}
      trackingStatus={Props.trackingStatus}
      accepted={Props.accepted}
    ></Track>
  );
};

export default Tracking;

export async function getServerSideProps(context: any) {
  const id = context.query.id;
  console.log(id);
  try {
    let {data, error, status} = await supabase
      .from('order')
      .select(`*`)
      .eq('trackingId', id)
      .single();

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      console.log(data);

      return {
        props: data,
      };
    }
    console.log(data);

    return {
      props: data,
    };
  } catch (error: any) {
    alert(error.message);
  } finally {
  }
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
