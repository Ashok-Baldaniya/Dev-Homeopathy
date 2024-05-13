// import React from "react";
// import Button from "../layouts/Button";
// import { RiMicroscopeLine } from "react-icons/ri";
// import ServicesCard from "../layouts/ServicesCard";
// import { MdHealthAndSafety } from "react-icons/md";
// import { FaHeartbeat } from "react-icons/fa";

// const Services = () => {
//   const icon1 = (
//     <RiMicroscopeLine size={35} className=" text-backgroundColor" />
//   );
//   const icon2 = (
//     <MdHealthAndSafety size={35} className=" text-backgroundColor" />
//   );
//   const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

//   return (
//     <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
//       <div className=" flex flex-col items-center lg:flex-row justify-between">
//         <div>
//           <h1 className=" text-4xl font-semibold text-center lg:text-start">
//             Our Services
//           </h1>
//           <p className=" mt-2 text-center lg:text-start">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
//             quidem.
//           </p>
//         </div>

//       </div>
//       <div className=" flex flex-col lg:flex-row gap-5 pt-14">
//         <ServicesCard icon={icon1} title="Lab Test" />
//         <ServicesCard icon={icon2} title="Health Check" />
//         <ServicesCard icon={icon3} title="Heart Health" />
//       </div>
//     </div>
//   );
// };

// export default Services;












import React, { useState } from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = <RiMicroscopeLine size={35} className="text-backgroundColor" />;
  const icon2 = <MdHealthAndSafety size={35} className="text-backgroundColor" />;
  const icon3 = <FaHeartbeat size={35} className="text-backgroundColor" />;

  const [visibleCards, setVisibleCards] = useState(6); // Initially show 6 cards

  const handleLoadMore = () => {
    setVisibleCards((prev) => prev + 6); // Increase by 6 cards on Load More
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 lg:pt-24 pt-16">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, quidem.
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-4 pt-8 lg:pt-14">
        {[...Array(visibleCards)].map((_, index) => (
          <ServicesCard
            key={index}
            icon={index % 3 === 0 ? icon1 : index % 3 === 1 ? icon2 : icon3}
            title={`Service ${index + 1}`}
          />
        ))}
      </div>
      {visibleCards < 18 && (
        <Button onClick={handleLoadMore} title={'Load More'}></Button>
      )}
    </div>
  );
};

export default Services;


