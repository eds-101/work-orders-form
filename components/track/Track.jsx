import Layout from '../Layout';
import logoOrange from '../../public/logoOrange.png';
import Image from 'next/image';

export function Track() {
  return (
    <div className="Zontainer">
      <section className="root">
        <figure>
          <figcaption>
            <h4>Tracking Details</h4>
            <h6>Order Number</h6>
            <h2># A61452B</h2>
          </figcaption>
        </figure>

        <div className="orderTrack">
          {' '}
          <div className="order-track-step">
            <div className="order-track-status">
              <span className="order-track-status-dot"></span>
              <span className="order-track-status-line"></span>
            </div>
            <div className="order-track-text">
              <p className="order-track-text-stat">Work Order Submitted</p>
              <span className="order-track-text-sub">1st November, 2019</span>
            </div>
          </div>
          <div className="order-track-step">
            <div className="order-track-status">
              <span className="order-track-status-dot"></span>
              <span className="order-track-status-line"></span>
            </div>
            <div className="order-track-text">
              <p className="order-track-text-stat"> Work Order Accepted</p>
              <span className="order-track-text-sub">3rd November, 2019</span>
            </div>
          </div>
          <div className="order-track-step">
            <div className="order-track-status">
              <span className="order-track-status-dot"></span>
              <span className="order-track-status-line"></span>
            </div>
            <div className="order-track-text">
              <p className="order-track-text-stat"> Work Order Started </p>
              <span className="order-track-text-sub">1st November, 2019</span>
            </div>
          </div>
          <div className="order-track-step">
            <div className="order-track-status">
              <span className="order-track-status-dot"></span>
              <span className="order-track-status-line"></span>
            </div>
            <div className="order-track-text">
              <p className="order-track-text-stat"> Work Order Finished </p>
              <span className="order-track-text-sub">1st November, 2019</span>
            </div>
          </div>
          <div className="order-track-step">
            <div className="order-track-status">
              <span className="order-track-status-dot"></span>
              <span className="order-track-status-line"></span>
            </div>
            <div className="order-track-text">
              <p className="order-track-text-stat"> Final Time </p>
              <p className="order-track-text-stat"> Final Price </p>{' '}
            </div>
          </div>
          <div className="order-track-step">
            <div className="order-track-status">
              <span className="order-track-status-dot"></span>
              <span className="order-track-status-line"></span>
            </div>
            <div className="order-track-text">
              <p className="order-track-text-stat"> Reciept of Work Order</p>
              <span className="order-track-text-sub">1st November, 2019</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
