import Image from "next/image";
import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Image src="/loading.svg" alt="loading" width={50} height={50} />
    </div>
  );
};

export default LoadingSkeleton;
