import Image from "next/image";

const Loading = () => {
  return (
    <>
      <main className="">
        <div className="flex justify-center items-center h-screen">
          <Image
            className="animate-ping rounded-md"
            priority
            // add any svg or image inside here
            src={`/`}
            alt="loading..."
            height={250}
            width={190}
          />
        </div>
      </main>
    </>
  );
};

export default Loading;
