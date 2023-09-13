import React from "react";

function ContactPopUp({ setDisplayModal }) {
  return (
    <div id="MessageSent" className="MessageSent">
      <button id="SentClose" onClick={() => setDisplayModal(false)}>
        <i className="fa fa-times" aria-hidden="true" />
      </button>
      <div className="Sent_inner">
        <div className="Sent-icon">
          <i className="fa fa-envelope" aria-hidden="true" />
        </div>
        <div className="Sent-title">
          <span>Your message was sent successfully!</span>
          <p>We will respond to you, as soon as possible, Thank you</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPopUp;
