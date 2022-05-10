import Layout from '../Layout';
import logoOrange from '../../public/logoOrange.png';
import Image from 'next/image';

interface Props {
  id: String;
  created_at: Date;
  order_finish_time: String;
  trackingStatus: Number;
  accepted: Boolean;
}

export function Track(props: Props) {
  var date = new Date(props.created_at);
  console.log(props.accepted);

  return (
    <div className="Zontainer">
      <section className="root">
        <figure>
          <figcaption>
            <h4>Tracking Details</h4>
            <h6>Order Number</h6>
            <h2># {props.id}</h2>
          </figcaption>
        </figure>

        <div className="orderTrack">
          {' '}
          <div className="order-track-step">
            {props.trackingStatus >= 1 ? (
              <>
                <div className="order-track-status">
                  <span
                    className="order-track-status-dot"
                    style={{background: 'orange'}}
                  ></span>
                  {props.trackingStatus == 1 ? (
                    <span
                      className="order-track-status-line"
                      style={{background: 'grey'}}
                    ></span>
                  ) : (
                    <span
                      className="order-track-status-line"
                      style={{background: '#f05a00'}}
                    ></span>
                  )}
                </div>
                <div className="order-track-text">
                  <p className="order-track-text-stat"> Work Order Submited </p>
                  <span className="order-track-text-sub">
                    {date.toDateString()}
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="order-track-status">
                  <span className="order-track-status-dot"></span>
                  <span className="order-track-status-line"></span>
                </div>
                <div className="order-track-text">
                  <p className="order-track-text-stat">
                    {' '}
                    Work Order Unavailable{' '}
                  </p>
                  <span className="order-track-text-sub">Unavailable</span>
                </div>
              </>
            )}
          </div>
          <div className="order-track-step">
            {props.trackingStatus >= 2 && props.accepted ? (
              <>
                <div className="order-track-status">
                  <span
                    className="order-track-status-dot"
                    style={{background: 'orange'}}
                  ></span>
                  {props.trackingStatus == 2 ? (
                    <span
                      className="order-track-status-line"
                      style={{background: 'grey'}}
                    ></span>
                  ) : (
                    <span
                      className="order-track-status-line"
                      style={{background: '#f05a00'}}
                    ></span>
                  )}
                </div>
                <div className="order-track-text">
                  {props.accepted == true ? (
                    <>
                      <p className="order-track-text-stat">
                        Work Order Accepted
                      </p>
                      <span className="order-track-text-sub">todoTime</span>
                    </>
                  ) : (
                    <>
                      <p className="order-track-text-stat">
                        {' '}
                        Work Order on Reviw ....{' '}
                      </p>
                      <span className="order-track-text-sub">Review....</span>
                    </>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="order-track-status">
                  <span
                    className="order-track-status-dot"
                    style={{background: 'grey'}}
                  ></span>
                  <span
                    className="order-track-status-line"
                    style={{background: 'grey'}}
                  ></span>
                </div>
                <div className="order-track-text">
                  <p className="order-track-text-stat">
                    {' '}
                    Work Order on Progress....
                  </p>
                  <span className="order-track-text-sub">Waiting....</span>
                </div>
              </>
            )}
          </div>
          <div className="order-track-step">
            {props.trackingStatus >= 3 && props.accepted ? (
              <>
                <div className="order-track-status">
                  <span
                    className="order-track-status-dot"
                    style={{background: 'orange'}}
                  ></span>
                  {props.trackingStatus == 3 ? (
                    <span
                      className="order-track-status-line"
                      style={{background: 'grey'}}
                    ></span>
                  ) : (
                    <span
                      className="order-track-status-line"
                      style={{background: '#f05a00'}}
                    ></span>
                  )}
                </div>
                <div className="order-track-text">
                  <p className="order-track-text-stat"> Work Has Started </p>
                  <span className="order-track-text-sub">Todo</span>
                </div>
              </>
            ) : (
              <>
                <div className="order-track-status">
                  <span
                    className="order-track-status-dot"
                    style={{background: 'grey'}}
                  ></span>
                  <span
                    className="order-track-status-line"
                    style={{background: 'grey'}}
                  ></span>
                </div>
                <div className="order-track-text">
                  <p className="order-track-text-stat">Work On Progress... </p>
                  <span className="order-track-text-sub">Waiting....</span>
                </div>
              </>
            )}
          </div>
          <div className="order-track-step">
            {props.trackingStatus >= 4 && props.accepted ? (
              <>
                <div className="order-track-status">
                  <span
                    className="order-track-status-dot"
                    style={{background: 'orange'}}
                  ></span>
                  {props.trackingStatus == 4 ? (
                    <span
                      className="order-track-status-line"
                      style={{background: 'grey'}}
                    ></span>
                  ) : (
                    <span
                      className="order-track-status-line"
                      style={{background: '#f05a00'}}
                    ></span>
                  )}
                </div>
                <div className="order-track-text">
                  <p className="order-track-text-stat">
                    {' '}
                    Work Oreeeeder Started{' '}
                  </p>
                  <span className="order-track-text-sub">
                    1st Noveeeeesmber, 2019
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="order-track-status">
                  <span
                    className="order-track-status-dot"
                    style={{background: 'grey'}}
                  ></span>
                  <span
                    className="order-track-status-line"
                    style={{background: 'grey'}}
                  ></span>
                </div>
                <div className="order-track-text">
                  <p className="order-track-text-stat"> Work On Progress... </p>
                  <span className="order-track-text-sub">Waiting....</span>
                </div>
              </>
            )}
          </div>
          <div className="order-track-step">
            {props.trackingStatus == 5 && props.accepted == true ? (
              <>
                <div className="order-track-status">
                  <span
                    className="order-track-status-dot"
                    style={{background: 'orange'}}
                  ></span>
                  {props.trackingStatus == 5 ? (
                    <span
                      className="order-track-status-line"
                      style={{background: 'grey'}}
                    ></span>
                  ) : (
                    <span
                      className="order-track-status-line"
                      style={{background: '#f05a00'}}
                    ></span>
                  )}
                </div>
                <div className="order-track-text">
                  <p className="order-track-text-stat">
                    {' '}
                    Work Oreeeeder Started{' '}
                  </p>
                  <span className="order-track-text-sub">
                    1st November, 2019
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="order-track-status">
                  <span
                    className="order-track-status-dot"
                    style={{background: 'grey'}}
                  ></span>
                  <span
                    className="order-track-status-line"
                    style={{background: 'grey'}}
                  ></span>
                </div>
                <div className="order-track-text">
                  <p className="order-track-text-stat"> On Progress... </p>
                  <span className="order-track-text-sub">Waiting....</span>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
