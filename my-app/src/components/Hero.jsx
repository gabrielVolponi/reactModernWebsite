import BtnCta from "./BtnCta";

function Hero(params) {
  return (
    <div className="my-20 w-full flex flex-col gap-8 mx-auto items-center h-11/12 bg-gradient-to-tr from-pink-500 via-purple-400 to-orange-500 py-15 justify-centers">
      <h1 className="text-6xl font-bold">Build amazing things</h1>
      <h4 className="font-bold text-xl">
        Take your JavaScript development up a notch
      </h4>
      <p className="w-8/10">
        Get started today for free, or step up to npm Pro to enjoy a premium{" "}
        <br /> JavaScript development experience, with features like private
        packages.
      </p>
      <div className="flex gap-8">
        <BtnCta texto='Sign up for free' />
        <BtnCta texto='Learn More' />
      </div>
    </div>
  );
}

export default Hero;
