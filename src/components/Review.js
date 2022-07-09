import { useState, useEffect } from "react";
import Buttons from "./Buttons";
import { FaQuoteRight } from "../../node_modules/react-icons/fa";

function Review({ users, setActive, active }) {
  return users.map((user) => {
    const { id, name, avatar, designation, message } = user;

    return (
      <div
        id={id}
        key={id}
        className="flex flex-col justify-center items-center mx-auto max-w-2xl max-h-2xl min-h-[580px] w-full bg-white px-16 hide review shadow-xl rounded-lg gap-2 relative "
      >
        <div className="relative -mt-24 ">
          <FaQuoteRight className="w-10 h-10 p-3 rounded-full text-white bg-blue-400 absolute z-50"></FaQuoteRight>

          <img
            src={avatar}
            alt={name}
            width={150}
            height={150}
            className=" relative z-40 rounded-full "
          />

          <div className="w-[150px] h-[150px] rounded-full absolute -top-1 left-2  bg-blue-500  z-20"></div>
        </div>

        <h3 className="font-bold text-lg text-gray-500 mt-3">{name}</h3>
        <h4 className="text-sky-600 -mt-2 font-light uppercase text-sm">
          {designation}
        </h4>
        <p className="max-w-xl text-center text-xl text-gray-500 mt-3 leading-7">
          {message}
        </p>

        <Buttons users={users} setActive={setActive} active={active} />
      </div>
    );
  });
}

export default Review;
