import React, { useContext, useEffect } from 'react';
import "./checkout_page.styles.scss";
import React, { useEffect, useContext, useState } from "react";
import { CartContext } from '../../Contexts/Cart';
import CheckoutStepper from "../../components/CheckoutStepper/CheckoutStepper.component";
import { BsTypeH1 } from "react-icons/bs";

import TagManager from "react-gtm-module";


const CheckoutPage = () => {
    
    const { cart, setCart } = useContext(CartContext);
    const [cartProductsExist , setCartProductsExist] = useState(false);


    useEffect(() => {
        if (cart && cart.cartProducts && cart.cartProducts.length > 0) {

            setCartProductsExist(true)
        } else {
            
            setCartProductsExist(false)
        }

    }, [cart])


    const checkoutStepListener = (activeStep) => {

    const checkoutStepName =  activeStep === 0 ? "billing" : activeStep === 1 ? "payment" : activeStep === 2 ? "confirmation" : "";
    

        TagManager.dataLayer({
            dataLayer: {
                event: "pageview",
                page: {
                    path:"/checkout_" + checkoutStepName,
                    pageType: "checkout"
                },  
            }
        })

    }

    return (
        <div className="page_section checkout_page_container">
            { cartProductsExist ? 
            <CheckoutStepper checkoutStepListener={checkoutStepListener} cart={cart} setCart={setCart}/>
                : <h1>Your cart is empty! add products to cart before checking out</h1>}
         </div>
    )
}

export default CheckoutPage;