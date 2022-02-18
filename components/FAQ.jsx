import React from 'react';

const FAQ = () => {
  return (
    <div className="hidden lg:block bg-yellow-400 p-4 w-[350px] text-blue-600 absolute -top-[250%] -right-[300%] z-80">
      <h3 className="font-bold text-lg">How do I join FitnessHQ?</h3>
      <p className="text-sm italic">
        You can send us a message and we can sign you up.
      </p>
      <h3 className="font-bold text-lg">Do I have to be fit to join?</h3>
      <p className="text-sm italic">
 Anyone can join you do not need to be fit. We start training at your fitness or endurance levels. We work with equipment but start one week using bodyweight and we adapt depending on your goals.
      </p>

      <h3 className="font-bold text-lg">Is the club in a safe environment?</h3>
      <p className="text-sm italic">The club is located in a safe area.</p>
      <h3 className="font-bold text-lg">
        Is there qualified fitness instructors?
      </h3>
      <p className="text-sm italic">
        You will be training with a qualified professional personal trainer with
        great experience , registered with Register OF Excercise Professionals South Africa.
      </p>
    <h3 className="font-bold text-lg">we do not want to be the best but bring out the best in others.</h3>
    </div>
  );
};

export default FAQ;
