import React from 'react';

const FAQ = () => {
  return (
    <div className="hidden lg:block bg-yellow-400 p-4 w-[350px] text-blue-600 absolute -top-[250%] -right-[300%] z-80">
      <h3 className="font-bold text-lg">How do I join FitnessHQ?</h3>
      <p className="text-sm italic">
        You can visit the club or register online get a membership
      </p>
      <h3 className="font-bold text-lg">Do I have to be fit to join?</h3>
      <p className="text-sm italic">
        Anyone can join you do not need to be fit we start training at your
        fitness or endurance levels. We work with equipment but start one week
        using our bodyweight and we adapt and progress from there depending on
        your goals we have a progress report we are we write everything down and
        revisit our goals every month
      </p>

      <h3 className="font-bold text-lg">Is the club in a safe environment?</h3>
      <p className="text-sm italic">The club is located in a safe area.</p>
      <h3 className="font-bold text-lg">
        Is there qualified fitness instructors?
      </h3>
      <p className="text-sm italic">
        You will be training with a qualified professional personal trainer with
        great experience , registered with REPSSA.
      </p>
    </div>
  );
};

export default FAQ;
