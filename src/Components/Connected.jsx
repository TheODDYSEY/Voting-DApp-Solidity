import React from "react";

const Connected = (props) => {
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
      <h1 className="text-3xl font-bold text-center text-gray-100 mb-4">
        You are Connected to Artemis
      </h1>
      <p className="text-lg text-gray-100 mb-2">
        MetaMask Account:{" "}
        <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500">{props.account}</span>
      </p>
      <p className="text-lg text-gray-100 mb-4">
        Remaining Time:{" "}
        <span className="font-semibold text-purple-500">
          {props.remainingTime}
        </span>
      </p>

      {props.showButton ? (
        <p className="text-lg text-green-500 font-semibold mb-6">
          You have already voted
        </p>
      ) : (
        <div className="flex flex-col items-center space-y-4 mb-6">
          <form className="max-w-sm mx-auto">
            <label
              htmlFor="number-input"
              className="block mb-2 text-sm font-medium text-gray-200"
            >
              Enter Candidate Index:
            </label>
            <input
              type="number"
              id="number-input"
              value={props.number}
              onChange={props.handleNumberChange}
              className="bg-gray-900 border border-purple-500 text-gray-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 placeholder-gray-500"
              placeholder="Candidate Index"
              required
            />
          </form>
          <button
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg  focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={props.voteFunction}
          >
            Vote
          </button>
        </div>
      )}

<div className="container mx-auto px-4 mt-6">
  <div className="flex justify-center">
    <table className="w-full max-w-2xl bg-gray-900 border border-gray-700 rounded-lg shadow-md overflow-hidden">
      <thead>
        <tr className="bg-gray-800 bg-gradient-to-r from-blue-500 to-purple-500">
          <th className="p-4 border-b border-gray-700 rounded-tl-lg">
            <p className="block font-sans text-sm font-semibold text-gray-300 leading-none">
              Index
            </p>
          </th>
          <th className="p-4 border-b border-gray-700">
            <p className="block font-sans text-sm font-semibold text-gray-300 leading-none">
              Candidate Name
            </p>
          </th>
          <th className="p-4 border-b border-gray-700 rounded-tr-lg">
            <p className="block font-sans text-sm font-semibold text-gray-300 leading-none">
              Candidate Votes
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.candidates.map((candidate, index) => (
          <tr key={index} className="text-center border-b border-gray-700 transition-transform duration-200 transform">
            <td className="p-4 text-gray-200 font-medium hover:bg-gray-800 rounded-lg cursor-pointer">
              {candidate.index}
            </td>
            <td className="p-4 text-gray-200 font-medium hover:bg-gray-800 rounded-lg cursor-pointer">
              {candidate.name}
            </td>
            <td className="p-4 text-gray-200 font-medium hover:bg-gray-800 rounded-lg cursor-pointer">
              {candidate.voteCount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>



</main>
    </div>
  );
};

export default Connected;
