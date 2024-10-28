import React from "react";

const Finished = (props) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
            <h1 className="text-4xl font-bold text-center text-white mb-4">
                Voting is Finished
            </h1>
            <p className="text-lg text-gray-300">
                Thank you for participating!
            </p>
        </div>
    );
};

export default Finished;
