import React from "react";
import CardProduct from "./CardProduct";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ProductListContainer from "./ProductListContainer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "../../../screens/pujas.css";

// import required modules
import { Grid, Pagination } from "swiper";

// Función para mapear el componente Card con todas las popiedades que se le pasen. EN PROCESO.
const ProductList = ({ products }) => {
    return (
        <>
            <Swiper
            slidesPerView={2}
            grid={{
            rows: 2,
            }}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
        >
                { products.length > 0 ? (
                    products.map(product => (
                        <SwiperSlide>
                            <CardProduct
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                image={product.thumbnail}
                            />
                        </SwiperSlide>
                    ))
                )
                : (<p>Cargando Productos...</p>)
                }

             </Swiper>
        </>
    );
};
export default ProductList;
