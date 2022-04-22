import React from "react";
import Button from "../atoms/Buttons/Button";
import * as styles from "../atoms/Buttons/buttonStyles";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { purchaseProduct } from "../../actions/product";

//Card de los productos. EN PROCESO.
const CardProduct = (props) => {
  const { name, _id, image, highestBid, duration, bidUser } = props;

  const dispatch = useDispatch();

  const [winner] = bidUser;

  const { id, username, email } = useSelector((state) => state.auth);

  const endAt = new Date(duration).toLocaleDateString();

  const finishPurchase = () => {
    console.log("entrando")
    dispatch(purchaseProduct(highestBid, username, email))
  }

  return (
    <div className="items-center h-fit flex flex-col w-72 rounded-xl shadow-[3px_3px_2px_3px_rgba(0,0,0,0.25)] bg-white">
      <div className="flex flex-col items-center content-center w-full">
        <img
          src={image}
          className="rounded-[12px_12px_30px_30px] mb-3 w-full h-44 object-fit"
          alt={name}
        />
        <h3 className="text-xl font-bold text-text-primary">{name}</h3>
        <div className="flex flex-row mt-2 space-x-2 text-text-secondary">
          <AiOutlineFieldTime />
          <span className="text-sm">Termina el: {endAt}</span>
        </div>
      </div>

      <div className="flex flex-col items-center content-center w-full mb-4">
        <div className="flex items-center justify-center my-2 space-x-4 text-center">
          <p className="p-1 text-lg font-bold">Puja actual</p>
          <p className="p-1 text-lg font-bold text-danger">
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
              currencyDisplay: "code",
            }).format(highestBid)}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          {new Date() > new Date(duration) ? (
            <Button
              styles={`${styles.SUCCESS_BUTTON} w-5/6 p-1 ${
                winner === id ? "" : "cursor-not-allowed opacity-50"
              }`}
              content="Finalizar Compra"
              setFunction={() => finishPurchase()}
            />
          ) : (
            <Link
              className="w-5/6 text-lg text-right text-indigo-900 item-end hover:underline underline-offset-1"
              to={`/producto/${_id}`}
            >
              <Button
                styles={`${styles.SUCCESS_BUTTON} w-full p-1`}
                content="Pujar"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
