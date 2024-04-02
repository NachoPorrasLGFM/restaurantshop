import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error Page",
};

const Error = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-white text-4xl">Error</h1>
      </div>
    </>
  );
};

export default Error;
