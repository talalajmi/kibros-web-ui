import React from "react";

const NoData = ({ listName, item }: { listName: string; item: string }) => {
  return (
    <div className="flex h-[20rem] w-full items-center justify-center bg-primary-light text-white">
      It seems you have no {listName}. Please a {item} to view the list.
    </div>
  );
};

export default NoData;
