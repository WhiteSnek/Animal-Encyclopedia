// src/components/KiryuCard.js
import Logo from '../resources/logo.png'
import Kiryu from '../resources/kiryu.png'
import BGImage from '../resources/cover.jpeg'

import React from "react";

const KiryuCard = () => {
  return (
      <div className="kiryu">
        <img
          src={Logo}
          alt=""
          className="logo"
        />
        <img
          src={Kiryu}
          alt=""
          className="front-image"
        />
        <img
          src={BGImage}
          alt=""
          className="bg-image"
        />
      </div>
  );
};

export default KiryuCard;
