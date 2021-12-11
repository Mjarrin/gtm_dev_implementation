import React, {useEffect, useState, useContext} from "react";

import "./CartSlider.styles.scss";
import { CartContext } from '../../Contexts/Cart';
import { ListingProductsContext } from '../../Contexts/ListingProducts';

import CartSliderProduct from "../CartSliderProduct/CartSliderProduct.component";
import Button from "../Button/Button.component";
import { apiGetProduct, getQueryParam, addToCart, getCartInfo, removeProduct, updateProductQuantity} from '../../utility/Utility.component';

const CartSlider = ({ activeStatus }) => {

    const { cart, setCart } = useContext(CartContext);
    const {products, setProducts} = useContext(ListingProductsContext);

    useEffect(() => {

        const cartInfo = getCartInfo()

        setCart(cartInfo)

        console.log("cart " , cart)

    },[activeStatus])

   const removeProductNative = (productId) => {

    removeProduct(productId,cart, (updatedCart) => {


        setCart(...updatedCart)

        console.log("product removed " , updatedCart)

        })
    }


    const updateQuantityNative = (productId, action) => {

        console.log("increase quantity " , productId)

        updateProductQuantity(productId,cart,action, (updatedCart) => {

            console.log("increase quantity",updatedCart)

            setCart(...updatedCart)

        })
    }

    // const decreaseQuantityNative = (productId) => {

    //     console.log("decrease quantity " , productId)

    //     decreaseProductQuantity(productId,cart, (updatedCart) => {

    //         console.log("decrease quantity",updatedCart)

    //         setCart(...updatedCart)

    //     })
    // }

    return (
        <div className={`addToCartSlider_container addToCartSlider_container--${activeStatus}`} >
            <div className="addToCartSlider_content">
                {cart.cartProducts && cart.cartProducts.length > 0 ? cart.cartProducts.map(product => {
                        return (<CartSliderProduct 
                        updateQuantity={updateQuantityNative}
                        removeProduct={removeProductNative} 
                        {...product}/>)
                }) : null}
                <Button link="/cart">Checkout</Button>
            </div>
        </div>
    )
}
    
export default CartSlider;