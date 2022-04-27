import React from 'react'
import ReactStars from "react-rating-stars-component";


const Card = ({ product }) => {


    return (
        <div className="py-6 px-2">
            <div className="flex max-w-full bg-white shadow-2xl rounded-lg overflow-hidden h-72">

                <div className="w-1/3 bg-cover" style={{ backgroundImage: `url(${product.image})` }}></div>

                <div className="w-2/3 flex flex-col p-4">
                    <h4 className="text-gray-900 font-bold text-lg max-h-44 ">{product.title}</h4>
                    <p className="mt-2 text-gray-600 text-sm max-h-20 overflow-hidden">{product.description}</p>

                    <div className="flex item-center mt-2">
                        <ReactStars
                            count={5}
                            value={product.rating && product.rating.rate}
                            edit={false}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </div>

                    <div className="flex item-center mt-2">
                        <p className="text-gray-700 font-bold text-xl">${product.price}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card;
