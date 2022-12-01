import React from "react";
import ArrowLeft from "../../icons/ArrowLeft";

const CarouselLeftArrow = ({ clickHandler }: { clickHandler: () => void }) => {
  return (
    <div className="absolute top-1/2 left-10" onClick={clickHandler}>
      <ArrowLeft
        size={24}
        className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
      />
    </div>
  );
};

export default CarouselLeftArrow;
