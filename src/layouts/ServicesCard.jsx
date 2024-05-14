import React, { useState, useEffect } from "react";

const ServicesCard = ({ icon, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal open/close

  useEffect(() => {
    // Update overflow-y property of body when modal is opened/closed
    document.body.style.overflowY = isModalOpen ? 'hidden' : 'auto';

    // Cleanup effect
    return () => {
      document.body.style.overflowY = 'auto'; // Reset overflow-y property on unmount
    };
  }, [isModalOpen]);

  const handleLearnMore = () => {
    setIsModalOpen(true); // Open the modal when Learn More is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="flex flex-col items-center text-center gap-2 w-full md:w-1/2 lg:w-96 mx-5 shadow-md rounded-lg transition duration-300 ease-in-out">
      <div className="p-3 rounded-full transition-colors duration-300 ease-in-out">
        <img src={icon} alt="" className="h-[250px]" />
      </div>
      <h1 className=" font-semibold text-lg">{title}</h1>
      <p className="line-clamp-1">
        {description}
      </p>

      <button onClick={handleLearnMore} className="bg-blue-200 hover:bg-blue-400 text-blue-800 font-semibold py-1 px-4 rounded-lg transition duration-300 ease-in-out mb-1">
        Read more
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center bg-gray-500 bg-opacity-75 modal-open">
          <div className="relative w-full max-w-lg mx-auto bg-white rounded-lg shadow-xl">
            <div className="p-6">
              <div className="flex justify-center">
                <img src={icon} alt={title} className="w-full h-auto max-h-72 object-cover rounded-lg" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
                {/* Wrap description in div with fixed height and overflow-y:auto */}
                <div className="max-h-48 overflow-y-auto">
                  <p className="mt-2 text-sm text-gray-700">{description}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 px-4 py-3 sm:px-6">
              <button type="button" className="inline-block w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Conditionally render overlay when modal is open */}
      {isModalOpen && (
        <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
      )}
    </div>
  );
};

export default ServicesCard;
