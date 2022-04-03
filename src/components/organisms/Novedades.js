import React from "react";
import ProductListContainer from "./ProductListContainer";
import { Link } from "react-router-dom";

const Novedades = () => {

    return(
        <div className="mt-20">
            <div className="grid grid-rows-3 grid-flow-col">
                <div className="col-span-2">
                    <Link to={'AllProductListContainer'} className="text-6xl text-start font-bold">Novedades</Link>
                </div>
                <div className="col-span-2">
                    <p className="item-end text-lg  text-right text-indigo-900">Ver más.</p>
                </div>
                <div className="col-span-2 mt-4">
                    <p className="text-start text-slate-400">Subastas recién creadas</p>
                </div>
            </div>
            <ProductListContainer />
        </div>
    );
}

export default Novedades;