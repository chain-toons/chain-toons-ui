const SplashScreen = () => {
  return (
    <div className='flex items-center justify-center flex-col py-12'>
      <h1 className='text-4xl md:text-6xl lg:text-8xl uppercase font-bold mb-60'>
        chaintoons
      </h1>

      <button className='whitespace-nowrap bg-zinc-400 py-4 px-8 tracking-wide text-gray-50  focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 rounded-3xl font-bold'>
        connect wallet
      </button>
    </div>
  );
};

export { SplashScreen };
