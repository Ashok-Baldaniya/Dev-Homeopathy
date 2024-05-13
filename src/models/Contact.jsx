// import React from "react";
// import Button from "../layouts/Button";

// const Contact = ({ closeForm }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="popup-form absolute mt-12 text-black">
//         <form className=" w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
//           <h1 className="text-4xl font-semibold text-center text-backgroundColor">
//             Book Now
//           </h1>
//           {/* <div className=" flex flex-col">
//             <input
//               className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
//               type="text"
//               name="userFirstName"
//               id="userFirstName"
//               placeholder="First Name"
//             />
//           </div> */}
//           <div className=" flex flex-col">
//             <input
//               className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
//               type="text"
//               name="userName"
//               id="userName"
//               placeholder="Your Name"
//             />
//           </div>
//           {/* <div className=" flex flex-col">
//             <input
//               className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
//               type="email"
//               name="userEmail"
//               id="userEmail"
//               placeholder="Your Email"
//             />
//           </div> */}
//           <div className=" flex flex-col">
//             <input
//               className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
//               type="number"
//               name="userNumber"
//               id="userNumber"
//               placeholder="Phone No."
//             />
//           </div>
//           <div className=" flex flex-col">
//             <textarea
//               className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
//               type="textarea"
//               name="message"
//               id="message"
//               placeholder="Your Message"
//               rows={3}
//             />
//           </div>
//           <div className=" flex gap-5">
//             <Button title="Book Appointment" />
//             <button
//               className=" bg-backgroundColor text-white px-10 rounded-md active:bg-red-500"
//               onClick={closeForm}
//             >
//               Close
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;












import React, { useState } from "react";
import Button from "../layouts/Button";

const Contact = ({ closeForm }) => {
  const init = {
    userName: "",
    userNumber: "",
    message: ""
  };

  const [formData, setFormData] = useState(init);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error message when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const newErrors = {};
    if (!formData.userName.trim()) {
      newErrors.userName = "Name is required";
    }
    if (!formData.userNumber.trim()) {
      newErrors.userNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.userNumber.trim())) {
      newErrors.userNumber = "Phone number must be 10 digits";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop form submission if there are errors
    }

    // // Construct message
    // const message = `Name: ${formData.userName}%0APhone: ${formData.userNumber}%0AMessage: ${formData.message}`;

    // // Construct WhatsApp API URL
    // const apiUrl = `https://api.whatsapp.com/send?phone=8140314173&text=${message}`;

    // // Open WhatsApp API URL
    // window.location.href = apiUrl;

    // Handle form submission here, for example, send data to WhatsApp API
    console.log(formData); // You can replace this with your API call
    setFormData(init);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form className=" w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl" onSubmit={handleSubmit}>
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            Book Now
          </h1>
          <div className="flex flex-col">
            <input
              className={`py-3 px-2 bg-[#d5f2ec] rounded-lg ${errors.userName && "border border-red-500"}`}
              type="text"
              name="userName"
              id="userName"
              placeholder="Your Name"
              value={formData.userName}
              onChange={handleChange}
            />
            {errors.userName && <span className="text-red-500">{errors.userName}</span>}
          </div>
          <div className="flex flex-col">
            <input
              className={`py-3 px-2 bg-[#d5f2ec] rounded-lg ${errors.userNumber && "border border-red-500"}`}
              type="tel"
              name="userNumber"
              id="userNumber"
              placeholder="Phone No."
              value={formData.userNumber}
              onChange={handleChange}
            />
            {errors.userNumber && <span className="text-red-500">{errors.userNumber}</span>}
          </div>
          <div className="flex flex-col">
            <textarea
              className={`py-3 px-2 bg-[#d5f2ec] rounded-lg ${errors.message && "border border-red-500"}`}
              name="message"
              id="message"
              placeholder="Your Message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span className="text-red-500">{errors.message}</span>}
          </div>
          <div className="flex gap-5">
            <Button title="Book Appointment" type="submit" />
            <button
              className="bg-backgroundColor text-white px-10 rounded-md active:bg-red-500"
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
