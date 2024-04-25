/** @format */

import React, { useState } from "react";

const AddPlayer = ({ isOpen, onClose }) => {
  const [rsn, setRsn] = useState("");
  const [accountType, setAccountType] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Enter Details</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(`RSN: ${rsn}, Account Type: ${accountType}`);
            onClose(); // Close modal after submission
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              RSN
            </label>
            <input
              type="text"
              value={rsn}
              onChange={(e) => setRsn(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Runescape Name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Account Type
            </label>
            <select
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select an Account Type</option>
              <option value="main">Main</option>
              <option value="ironman">Ironman</option>
              <option value="hardcore ironman">Hardcore Ironman</option>
              <option value="ultimate ironman">Ultimate Ironman</option>
              <option value="group ironman">Group Ironman</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
            <button
              className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlayer;
