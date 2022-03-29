import React from "react";

import Button from "../Buttons/Button";
import * as styles from "../Buttons/buttonStyles";
import { AiOutlineFieldTime } from "react-icons/ai";

const Card = () => {
  return (
    <div className=" items-center flex flex-col w-96 h-[480px] rounded-xl shadow-[3px_3px_2px_3px_rgba(0,0,0,0.25)]">
      <img
        src="https://i.blogs.es/326a59/ferrari/1366_2000.jpeg"
        className="rounded-[12px_12px_30px_30px] mb-3"
        alt=""
      />

      <p className="text-text-primary text-2xl font-bold">Ferrari 488</p>
      <p className="text-text-secondary text-md w-full text-center"> <AiOutlineFieldTime />Quedan 20hs 59min 30seg</p>

      <div className="flex flex-row justify-evenly w-full">
        <p className="font-bold text-xl">Puja Actual</p>
        <p className="font-bold text-danger text-xl">U$D 100.000</p>
      </div>

      <div className="flex flex-col w-full items-center">
        <input
          name="bid"
          autoComplete="off"
          placeholder="tu apuesta"
          className="rounded-[43px] border text-text-primary border-text-secondary"
        />
        <Button styles={`${styles.SUCCESS_BUTTON} w-3/4`} name="Pujar" />
      </div>
    </div>
  );
};

export default Card;
