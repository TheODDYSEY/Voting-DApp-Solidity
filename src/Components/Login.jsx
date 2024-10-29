import React from "react";

const Login = (props) => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <main className="relative isolate px-6 pt-14 lg:px-8 flex-grow flex flex-col items-center justify-center">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-500 to-blue-600 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>

        <div className="text-center max-w-md">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-4">
            Artemis 
          </h1>
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-white ring-1 ring-from-blue-500 ring-to-purple-500 hover:ring-gray-900/20">
  <span className="font-semibold">Artemis Unleashed</span>
  <span className="text-indigo-600 ml-2">Web3 Goddess Rising</span>
</div>
          <p className="mt-4 text-lg leading-7 text-gray-400">
            Empower Your Voice. Shape the Future.
          </p>
          <button
            className="mt-10 w-full max-w-xs px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md font-semibold text-lg shadow-sm hover:from-blue-500 hover:to-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={props.connectWallet}
          >
            Login with MetaMask
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
