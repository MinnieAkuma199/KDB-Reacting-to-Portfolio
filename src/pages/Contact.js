import React, { useState } from "react";
import View from "../components/Layout/View";
import ContactForm from "../components/form/ContactForm";
import MsgModal from "../components/modal/MsgModal";

//taking out contact form for now
export default function Contact() {
  const [open, setOpen] = useState(false);
  const [isError, setError] = useState(false);

  const openMsgMadolFunc = (open) => {
    setOpen(open);
  };

  const checkIsErrorFunc = (isError) => {
    setError(isError);
  };
  return (
    <>
      <View>
        <div className="title">
          <h1>Get In Touch</h1>
          <p>Looking forward to hearing from you!</p>
          <p></p>
        </div>
        <div className="contact-frame">
          <div className="left">
            <h2>Based In</h2>
            <p>Denver, CO (US)</p>
            <h2>Email</h2>
            <p>kristyndcb@gmail.com</p>
          </div>
          {/* <div className="right">
            <h1>Your Information</h1>
            <ContactForm
              openMsgMadolFunc={openMsgMadolFunc}
              checkIsErrorFunc={checkIsErrorFunc}
            />
          </div> */}
        </div>
      </View>
      <MsgModal
        open={open}
        isError={isError}
        openMsgMadolFunc={openMsgMadolFunc}
      />
    </>
  );
}
