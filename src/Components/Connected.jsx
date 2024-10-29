import React from "react";

const Connected = (props) => {
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6 text-gray-200">
      <h1 className="text-3xl font-bold text-center text-gray-100 mb-4">
        You are Connected to Artemis
      </h1>
      <p className="text-lg mb-2">
        MetaMask Account:{" "}
        <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500">{props.account}</span>
      </p>
      <p className="text-lg mb-4">
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




    </div>
  );
};

export default Connected;
