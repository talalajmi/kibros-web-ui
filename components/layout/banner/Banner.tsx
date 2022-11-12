import Image from "next/image";
import React from "react";

import banner from "../../../public/assets/images/pages/banner.png";

const Banner = ({ pageName }: { pageName: string }) => {
  return (
    <div className="relative">
      <Image
        src={banner}
        alt="kibros-logo"
        objectFit="contain"
        className="w-screen"
        layout="fill"
      />
      <p>{pageName}</p>
    </div>
  );
};

export default Banner;
