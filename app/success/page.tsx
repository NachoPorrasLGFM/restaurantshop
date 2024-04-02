import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Page",
};

const Success = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-white text-4xl">Success</h1>
      </div>
    </>
  );
};

export default Success;
