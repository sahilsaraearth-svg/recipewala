import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="h-screen bg-[url(./assets/bg-image.jpg)] bg-cover pt-4 ">
      <Navbar />
      <div className="h-4/5 w-full flex items-center justify-center">
        <div className=" h-full w-full rounded-md flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02]     ">
          <div className=" p-4 max-w-7xl  mx-auto   w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50 -z-10">
              AI Chef <br /> which is not overused.
            </h1>

            <p className="mt-4  font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              A subtle yet effective spotlight effect, because the previous
              version is used a bit too much these days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
