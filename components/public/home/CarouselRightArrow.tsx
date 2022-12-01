import React from "react";
import ArrowRight from "../../icons/ArrowRight";

const CarouselRightArrow = ({ clickHandler }: { clickHandler: () => void }) => {
  return (
    <div className="absolute top-1/2 right-10" onClick={clickHandler}>
      <ArrowRight
        size={24}
        className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
      />
    </div>
  );
};

export default CarouselRightArrow;
