import React from "react";

const Finished = (props) => {
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
            <h1 className="text-4xl font-bold text-center text-white mb-4">
                Voting is Finished
            </h1>
            <p className="text-lg text-gray-300">
                Thank you for participating!
            </p>
            </main>
        </div>
        
        

    );
};

export default Finished;
