import React from 'react';

const Vision = ({ show }) => {
  return (
    <div className="hidden lg:block bg-yellow-400 p-4 w-[350px] md:h-[50%] text-blue-600 absolute top-[28%]">
      <h3 className="font-bold text-lg">Our Vision & Mission</h3>
      <p className="text-sm">
        Promoting a healthy lifestyle amongst the local community at affordable
        rates.
      </p>
      <h3 className="font-bold text-lg">Goals</h3>
      <ul className="text-sm list-disc pl-4">
        <li>To get as many people interested in exercing</li>
        <li>To encourage and promote an active society</li>
        <li>
          To empower local communities by creating employment opportunities for
          the youth and reducing gangster activities
        </li>
      </ul>
      <h3 className="font-bold text-lg">Our Values</h3>
      <p className="text-sm">
        Fitness HQ is about an active society, health and givig back to the
        society by assisting youth to move away from gangester activities.
      </p>
    </div>
  );
};

export default Vision;
