(this["webpackJsonpgtm-dev-setup"]=this["webpackJsonpgtm-dev-setup"]||[]).push([[0],{131:function(e,t,c){},132:function(e,t,c){},133:function(e,t,c){},135:function(e,t,c){},141:function(e,t,c){},142:function(e,t,c){},143:function(e,t,c){},144:function(e,t,c){},145:function(e,t,c){},146:function(e,t,c){},148:function(e,t,c){},149:function(e,t,c){},150:function(e,t,c){},151:function(e,t,c){},152:function(e,t,c){},155:function(e,t,c){},156:function(e,t,c){},157:function(e,t,c){},158:function(e,t,c){},159:function(e,t,c){},160:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(36),r=c.n(i),s=(c(131),c(9)),o=c(19),l=Object(n.createContext)({}),d=Object(n.createContext)([]),j=Object(n.createContext)([]),u=Object(n.createContext)(!1),b=Object(n.createContext)(!1),h=(c(132),c(133),c(2)),O=function(e){var t=e.bannerImage;return Object(h.jsx)("div",{className:"creative_container",children:Object(h.jsx)("img",{src:t,alt:"banner_image"})})},x=c.p+"static/media/tamanna-rumee-mIqyYpSNq3o-unsplash_main_banner.8ee615f6.jpg",m=c.p+"static/media/promotion_athletic_shoes.4897bfea.jpg",p=c.p+"static/media/promotion_backpacks.a3f0fbfd.jpg",f=c.p+"static/media/promotion_vaccums.c689e567.jpg",g=c.p+"static/media/promotion_pans.bd721bc9.jpg",v=c.p+"static/media/promotion_watches.3c35980e.jpg",_=c.p+"static/media/promotion_couches.f62d58b3.jpg",C=c.p+"static/media/promotion_dinner_sets.628ee9be.jpg",N=(c(135),c(37)),y=function(e){return Object(h.jsx)(N.b,{to:e.link,className:"button_container",children:Object(h.jsx)("button",{disabled:e.disabled,onClick:e.clickAction,className:"cta_button",children:e.children})})},S=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"page_section homepage_container",children:[Object(h.jsx)("div",{className:"banner_container",children:Object(h.jsx)(O,{bannerImage:x})}),Object(h.jsxs)("div",{className:"promotions_container",children:[Object(h.jsxs)("div",{className:"promotion_slot",children:[Object(h.jsx)(O,{bannerImage:m}),Object(h.jsx)("div",{className:"promotion_title",children:Object(h.jsx)("h1",{children:"Shoes"})}),Object(h.jsx)(y,{link:"/catalogue",children:"Shop Now"})]}),Object(h.jsxs)("div",{className:"promotion_slot",children:[Object(h.jsx)(O,{bannerImage:p}),Object(h.jsx)("div",{className:"promotion_title",children:Object(h.jsx)("h1",{children:"Backpacks"})}),Object(h.jsx)(y,{link:"/catalogue",children:"Shop Now"})]}),Object(h.jsxs)("div",{className:"promotion_slot",children:[Object(h.jsx)(O,{bannerImage:_}),Object(h.jsx)("div",{className:"promotion_title",children:Object(h.jsx)("h1",{children:"Couches"})}),Object(h.jsx)(y,{link:"/catalogue",children:"Shop Now"})]}),Object(h.jsxs)("div",{className:"promotion_slot",children:[Object(h.jsx)(O,{bannerImage:C}),Object(h.jsx)("div",{className:"promotion_title",children:Object(h.jsx)("h1",{children:"Dinner Sets"})}),Object(h.jsx)(y,{link:"/catalogue",children:"Shop Now"})]}),Object(h.jsxs)("div",{className:"promotion_slot",children:[Object(h.jsx)(O,{bannerImage:v}),Object(h.jsx)("div",{className:"promotion_title",children:Object(h.jsx)("h1",{children:"Watches"})}),Object(h.jsx)(y,{link:"/catalogue",children:"Shop Now"})]})]}),Object(h.jsxs)("div",{className:"media_video_container",children:[Object(h.jsx)("h1",{children:"Checkout Our New Camera Addition!"}),Object(h.jsx)("iframe",{src:"https://www.youtube.com/embed/3bCpnTD3Tt8?start=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]}),Object(h.jsxs)("section",{class:"section_about_product",children:[Object(h.jsxs)("div",{class:"product_description_container",children:[Object(h.jsx)("div",{class:"product_description_image_container",children:Object(h.jsx)("img",{src:f})}),Object(h.jsxs)("div",{class:"product_description",children:[Object(h.jsx)("h2",{class:"heading-secondary",children:"2 x 1 Robot Vaccums!"}),Object(h.jsx)("p",{class:"paragraph",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab doloribus quidem quo omnis fugit similique amet adipisci repellat quasi itaque nulla fuga, esse hic qui maxime unde quibusdam doloremque?"})]})]}),Object(h.jsxs)("div",{class:"product_description_container",children:[Object(h.jsxs)("div",{class:"product_description",children:[Object(h.jsx)("h2",{class:"heading-secondary",children:"50% Off Pans This Week!"}),Object(h.jsx)("p",{class:"paragraph",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eos? Ipsam soluta, natus neque cumque nesciunt quia esse delectus tempore officiis assumenda atque culpa dolorum facilis omnis labore nam quae."})]}),Object(h.jsx)("div",{class:"product_description_image_container",children:Object(h.jsx)("img",{src:g,alt:"mini mendiants"})})]})]})]})})},P=c(17),k=c(18),w="undefined"!=typeof sessionStorage.cart?JSON.parse(sessionStorage.getItem("cart")):{cartProducts:[],cartInfo:{totalItems:0,totalPrice:0}},q=function(){var e=Object(n.useState)(window.innerWidth),t=Object(s.a)(e,2),c=t[0],a=t[1],i=function(){a(window.innerWidth)};return Object(n.useEffect)((function(){return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),[]),c<=1200},I=function(e){fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then((function(t){return e(t)}))},T=function(e,t){return new Promise((function(c,n){setTimeout((function(){try{console.log("add to cart hit ",t),console.log("add to cart ",e);var a=null;e&&e.cartProducts&&e.cartProducts.length>0&&(a=e.cartProducts.find((function(e){return e.id===t.id&&(e.quantity=+e.quantity+ +t.quantity,e)}))),a||(console.log("test ",e),e.cartProducts.push(t));var i=F(e,"total quantity"),r=F(e,"total price");console.log("cartQuantity",i),console.log("cart total price",r),L({cartProducts:e.cartProducts,cartInfo:{totalItems:i,totalPrice:r}}),c({cartProducts:e.cartProducts,cartInfo:{totalItems:i,totalPrice:r}})}catch(s){console.log("Add to cart error "+s),n(s)}}),1e3)}))},L=function(e){sessionStorage.setItem("cart",JSON.stringify(e))},F=function(e,t){if(console.log("calculating cart ",e),e&&e.cartProducts&&e.cartProducts.length>0){if(console.log("through"),"total quantity"===t)return e.cartProducts.reduce((function(e,t){return e+ +t.quantity}),0);if("total price"===t){var c=e.cartProducts.reduce((function(e,t){return e+ +t.quantity*+t.price}),0);return console.log("calculating total price ",c),c.toFixed(2)}}},A=(c(141),c(241)),W=c(232);function E(e){var t=e.rate,c=n.useState(2),a=Object(s.a)(c,2);a[0],a[1];return Object(h.jsx)(A.a,{sx:{"& > legend":{mt:2}},children:Object(h.jsx)(W.a,{name:"read-only",value:t,readOnly:!0})})}var B=function(e){var t=e.id,c=e.image,n=e.title,a=(e.description,e.price),i=e.addToCart,r=e.quantity,s=e.ommit,o=e.rating.rate;return Object(h.jsxs)("div",{className:"product_container",children:[Object(h.jsxs)("div",{className:"product_content",children:[Object(h.jsx)("div",{className:"product_image",children:Object(h.jsx)(N.b,{to:"/product?pCode=".concat(t),children:Object(h.jsx)("img",{src:c,alt:"product image"})})}),Object(h.jsx)("h2",{className:"product_title",children:n}),Object(h.jsx)("div",{className:"product_price",children:"addToCart"!==s?"$ "+a:"$"+a+" X "+r}),Object(h.jsx)("div",{className:"product_rating",children:Object(h.jsx)(E,{rate:o})})]}),"addToCart"!==s?Object(h.jsx)(y,{link:window.location.pathname+window.location.search,clickAction:function(){return i(t)},children:" Add To Cart"}):null]})},J=(c(142),function(){return Object(h.jsx)("div",{id:"cool-loader",children:Object(h.jsxs)("div",{class:"react-spinner-loader-svg",children:[Object(h.jsx)("svg",{id:"triangle",width:"128",height:"128",viewBox:"-3 -4 39 39",children:Object(h.jsx)("polygon",{fill:"transparent",stroke:"cyan",strokeWidth:"1",points:"16,0 32,32 0,32"})})," LOADING Products"]})})}),D=function(){Object(o.f)();var e=Object(n.useContext)(j),t=e.searchProducts,c=e.setSearchProducts,a=Object(n.useContext)(l),i=a.cart,r=a.setCart,s=Object(n.useContext)(b),d=s.LoadingSpinner;s.setLoadingSpinner;function u(e){var c=Object(k.a)(t);if(c.length>0){var n=c.find((function(t){if(t.id===e)return t.quantity=1,t}));T(i,n).then((function(e){console.log("product has been added to cart",e),r(Object(P.a)({},e))}))}setTimeout((function(){}),3500)}return Object(n.useEffect)((function(){c(t)}),[t]),Object(h.jsx)("div",{className:"page_section listing_page_container",children:Object(h.jsx)("div",{className:"listing_products_container",children:t.length>0||d?t.map((function(e){return Object(h.jsx)(B,Object(P.a)({addToCart:u},e))})):Object(h.jsx)(J,{})})})},U=(c(143),function(){var e=Object(n.useContext)(d),t=e.listingProducts,c=e.setListingProducts,a=Object(n.useContext)(l),i=a.cart,r=a.setCart,s=Object(n.useContext)(b),o=s.LoadingSpinner;s.setLoadingSpinner;function j(e){var c=Object(k.a)(t);if(c.length>0){var n=c.find((function(t){if(t.id===e)return t.quantity=1,t}));console.log("listing add to cart ",e,"added product to cart",n),T(i,n).then((function(e){console.log("product has been added to cart",e),r(Object(P.a)({},e))}))}setTimeout((function(){}),3500)}return Object(n.useEffect)((function(){t&&!t.length&&I((function(e){console.log("listing products, products",e),c(Object(k.a)(e)),sessionStorage.setItem("listingProducts",JSON.stringify(e))}))}),[]),Object(h.jsx)("div",{className:"page_section listing_page_container",children:Object(h.jsx)("div",{className:"listing_products_container",children:t.length>0||o?t.map((function(e){return Object(h.jsxs)("div",{children:[" ",Object(h.jsx)(B,Object(P.a)({addToCart:j},e))," "]},e.id)})):Object(h.jsx)(J,{})})})}),Q=(c(144),c(226)),R=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!1),r=Object(s.a)(i,2),o=r[0],d=r[1],j=Object(n.useContext)(l),u=j.cart,b=j.setCart;return Object(n.useEffect)((function(){!function(e,t){fetch("https://fakestoreapi.com/products/".concat(e)).then((function(e){return e.json()})).then((function(e){return t(e)}))}(function(e){var t=new URLSearchParams(window.location.search);console.log("params",t);var c=t.get(e);if(c)return c}("pCode"),(function(e){console.log(e),a(Object(P.a)(Object(P.a)({},e),{},{quantity:1}))}))}),[]),Object(h.jsx)("div",{className:"page_section productPage_container",children:Object(h.jsxs)("div",{className:"productPage_container_product_container",children:[Object(h.jsxs)("div",{className:"product_image_container",children:[Object(h.jsx)("img",{src:c.image,alt:"",className:"product_image"}),Object(h.jsxs)("div",{className:"product_reviews",children:[Object(h.jsx)("h3",{children:Object(h.jsx)(E,{rate:c&&c.rating&&c.rating.rate?c.rating.rate:null})}),Object(h.jsxs)("h3",{children:["Count: ",c&&c.rating&&c.rating.count?c.rating.count:null]})]})]}),Object(h.jsxs)("div",{className:"product_information",children:[Object(h.jsx)("div",{className:"product_name",children:Object(h.jsxs)("h1",{children:[" ",c.title," "]})}),Object(h.jsx)("div",{className:"product_description",children:Object(h.jsxs)("p",{children:[" ",c.description]})}),Object(h.jsxs)("div",{className:"product_quantity",children:[Object(h.jsx)("div",{className:"quantity_label",children:Object(h.jsx)("h2",{children:"QTY"})}),Object(h.jsx)("div",{className:"quantity_container",children:Object(h.jsx)("input",{onChange:function(e){return function(e){var t=Object(P.a)(Object(P.a)({},c),{},{quantity:+e.target.value});console.log("updated quantity",t),a(t)}(e)},type:"number",defaultValue:"1",name:"quantity",min:"1"})})]}),Object(h.jsx)("div",{className:"addTocartButton",children:Object(h.jsx)(y,{link:window.location.pathname+window.location.search,clickAction:function(){return function(){var e=Object(P.a)({},c);console.log("product at addToCart ",e),T(u,e).then((function(e){console.log("product has been added to cart",e),d(!0),b(Object(P.a)({},e)),console.log("cartInfo ",e.cartInfo)})),setTimeout((function(){d(!1)}),3500)}()},children:"Add To Cart"})}),Object(h.jsx)("br",{}),o?Object(h.jsx)(Q.a,{variant:"filled",severity:"success",children:"Success You Have Added To Cart!"}):null]})]})})},$=(c(145),c(146),c(234)),M=c(244),Y=c(245),V=c(227),z=c(233),K=c(221),X=c(239),G=c(246),H=c(228),Z=c(240),ee=function(){var e=n.useState(""),t=Object(s.a)(e,2),c=t[0],a=t[1],i=n.useState(""),r=Object(s.a)(i,2),o=r[0],l=r[1],d=function(e,t){t(e.target.value)};return Object(h.jsxs)("div",{className:"contactForm_container",children:[Object(h.jsx)("h1",{children:"Contact Us"}),Object(h.jsxs)("form",{onSubmit:function(){return console.log("submit"),void e.preventDefault();var e},children:[Object(h.jsx)($.a,{id:"filled-basic",label:"name",variant:"filled"}),Object(h.jsx)($.a,{id:"filled-basic",label:"email",variant:"filled"}),Object(h.jsx)("br",{}),Object(h.jsx)(A.a,{sx:{minWidth:120},children:Object(h.jsxs)(M.a,{fullWidth:!0,children:[Object(h.jsx)(Y.a,{id:"demo-simple-select-label",children:"Subject"}),Object(h.jsxs)(V.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:c,label:"Age",onChange:function(e){return d(e,a)},children:[Object(h.jsx)(z.a,{value:10,children:"Ten"}),Object(h.jsx)(z.a,{value:20,children:"Twenty"}),Object(h.jsx)(z.a,{value:30,children:"Thirty"})]})]})}),Object(h.jsx)($.a,{id:"filled-multiline-flexible",label:"Message",multiline:!0,maxRows:4,value:o,onChange:function(e){return d(e,l)},variant:"filled"}),Object(h.jsxs)("div",{style:{width:"35%",marginTop:"2rem"},children:[Object(h.jsx)(K.a,{component:"legend",children:"Department"}),Object(h.jsxs)(X.a,{"aria-label":"gender",defaultValue:"customer service",name:"radio-buttons-group",children:[Object(h.jsx)(G.a,{value:"customer service",control:Object(h.jsx)(H.a,{}),label:"Order"}),Object(h.jsx)(G.a,{value:"male",control:Object(h.jsx)(H.a,{}),label:"Technical"}),Object(h.jsx)(G.a,{value:"other",control:Object(h.jsx)(H.a,{}),label:"Other"})]})]}),Object(h.jsx)(Z.a,{type:"submit",variant:"contained",children:"Send"})]})]})},te=function(){return Object(h.jsx)("div",{className:"page_section contact_page_container",children:Object(h.jsx)(ee,{})})},ce=(c(148),c(149),c(235)),ne=c(248),ae=c(230),ie=c(247),re=(c(150),function(e){var t=e.cart,c=e.orderId,n=e.address,a=e.city,i=(e.creditCard,e.postalCode,t.cartInfo.totalPrice),r=(.13*t.cartInfo.totalPrice).toFixed(2),s=(+i+ +r).toFixed(2);return Object(h.jsx)("div",{className:"orderConfirmation_container",children:Object(h.jsxs)("div",{className:"orderConfirmation_content",children:[Object(h.jsx)("div",{className:"orderConfirmation_products",children:Object(h.jsx)("table",{children:Object(h.jsxs)("tb",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Quantity"}),Object(h.jsx)("th",{children:"Price"}),t.cartProducts.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.title}),Object(h.jsx)("td",{children:e.quantity}),Object(h.jsxs)("td",{children:["$ ",e.price]})]})}))]})})}),Object(h.jsxs)("div",{className:"orderConfirmation_user_details",children:[Object(h.jsx)("h2",{children:"Name: John"}),Object(h.jsxs)("h2",{children:["Shipping Address : ",n]}),Object(h.jsxs)("h2",{children:["City : ",a]})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"orderConfirmation_price_details",children:[Object(h.jsxs)("h2",{children:["Order Number : ",c]}),Object(h.jsxs)("h2",{children:["Subtotal : ",i]}),Object(h.jsxs)("h2",{children:["Tax: ",r]}),Object(h.jsxs)("h2",{children:["Total: ",s]})]})]})})}),se=["Billing","Payment","Order Confirmation"];function oe(e){var t=e.cart,c=n.useState(0),a=Object(s.a)(c,2),i=a[0],r=a[1],o=n.useState({}),l=Object(s.a)(o,2),d=l[0],j=l[1],u=n.useState(0),b=Object(s.a)(u,2),O=b[0],x=b[1],m=n.useState(""),p=Object(s.a)(m,2),f=p[0],g=p[1],v=n.useState(""),_=Object(s.a)(v,2),C=_[0],N=_[1],y=n.useState(0),S=Object(s.a)(y,2),k=S[0],w=S[1],q=n.useState(0),I=Object(s.a)(q,2),T=I[0],L=I[1],F=n.useState(0),W=Object(s.a)(F,2),E=W[0],J=W[1],D=n.useState(""),U=Object(s.a)(D,2),Q=U[0],R=U[1],Y=n.useState(""),V=Object(s.a)(Y,2),z=V[0],K=V[1],X=function(){return se.length},G=function(){return Object.keys(d).length},H=function(){return G()===X()},ee=function(){var e=i!==X()-1||H()?i+1:se.findIndex((function(e,t){return!(t in d)}));r(e)},te=function(e,t){console.log("value",e.target.value),t(e.target.value)},oe=function(){K(function(){for(var e=[],t=0;t<9;t++){var c=Math.floor(9*Math.random())+1;e.push(c)}return e.join("")}())};return Object(h.jsx)("div",{className:"checkoutstep_container",children:Object(h.jsxs)(A.a,{sx:{width:"100%"},children:[Object(h.jsx)(ce.a,{nonLinear:!0,activeStep:i,children:se.map((function(e,t){return Object(h.jsx)(ne.a,{completed:d[t],children:Object(h.jsx)(ae.a,{color:"inherit",onClick:(c=t,function(){r(c)}),children:e})},e);var c}))}),Object(h.jsx)("div",{children:H()?Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)(ie.a,{sx:{mt:2,mb:1},children:Object(h.jsx)("h2",{children:" All steps are completed, thank you for your order! "})}),Object(h.jsxs)(A.a,{sx:{display:"flex",flexDirection:"row",pt:2},children:[Object(h.jsx)(A.a,{sx:{flex:"1 1 auto"}}),Object(h.jsx)(re,{cart:t,orderId:z,address:f,creditCard:O,postalCode:C,city:Q})]})]}):Object(h.jsxs)(n.Fragment,{children:[Object(h.jsxs)(ie.a,{sx:{mt:2,mb:1},children:["Step ",i+1]}),i+1===1?Object(h.jsxs)(M.a,{style:{width:"100%"},children:[Object(h.jsx)("inputLabel",{component:"legend",children:"Billing Address"}),Object(h.jsx)($.a,{fullWidth:!0,value:f,onChange:function(e){return te(e,g)}}),Object(h.jsx)("inputLabel",{component:"legend",children:"City"}),Object(h.jsx)($.a,{fullWidth:!0,value:Q,onChange:function(e){return te(e,R)}}),Object(h.jsx)("inputLabel",{component:"legend",children:"Postal Code"}),Object(h.jsx)($.a,{fullWidth:!0,value:C,onChange:function(e){return te(e,N)}})]}):i+1===2?Object(h.jsxs)(M.a,{style:{width:"100%"},children:[Object(h.jsx)("inputLabel",{component:"legend",children:"Credit Card"}),Object(h.jsx)($.a,{name:"creditCard",value:O,onChange:function(e){return te(e,x)},fullWidth:!0}),Object(h.jsx)("inputLabel",{component:"legend",children:"Expiry"}),Object(h.jsx)($.a,{fullWidth:!0,value:k,onChange:function(e){return te(e,w)}}),Object(h.jsx)("inputLabel",{component:"legend",children:"Code"}),Object(h.jsx)($.a,{fullWidth:!0,value:T,onChange:function(e){return te(e,L)}}),Object(h.jsx)("inputLabel",{component:"legend",children:"Coupon"}),Object(h.jsx)($.a,{fullWidth:!0,value:E,onChange:function(e){return te(e,J)}})]}):i+1===3?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Order Confirmation"}),Object(h.jsx)("div",{className:"order_confirmation_container",children:t&&t.cartProducts.length>0?t.cartProducts.map((function(e){return Object(h.jsx)(B,Object(P.a)({ommit:"addToCart"},e))})):null}),Object(h.jsxs)("h2",{children:["Tax: ",(.13*t.cartInfo.totalPrice).toFixed(2)]}),Object(h.jsxs)("h2",{children:["Total Price: ",t.cartInfo.totalPrice]})]}):null,Object(h.jsxs)(A.a,{sx:{display:"flex",flexDirection:"row",pt:2},children:[Object(h.jsx)(Z.a,{color:"inherit",disabled:0===i,onClick:function(){r((function(e){return e-1}))},sx:{mr:1},children:"Back"}),Object(h.jsx)(A.a,{sx:{flex:"1 1 auto"}}),Object(h.jsx)(Z.a,{onClick:ee,sx:{mr:1},children:"Next"}),i!==se.length&&(d[i]?Object(h.jsxs)(ie.a,{variant:"caption",sx:{display:"inline-block"},children:["Step ",i+1," already completed"]}):Object(h.jsx)(Z.a,{onClick:function(){var e=d;e[i]=!0,j(e),ee(),oe()},children:G()===X()-1?"Process Order":"Complete Step"}))]})]})})]})})}var le=function(){var e=a.a.useState(""),t=Object(s.a)(e,2),c=(t[0],t[1],a.a.useState("")),i=Object(s.a)(c,2),r=(i[0],i[1],Object(n.useContext)(l)),o=r.cart;r.setCart;return Object(n.useEffect)((function(){console.log("cart ",o)})),Object(h.jsx)("div",{className:"page_section checkout_page_container",children:Object(h.jsx)(oe,{cart:o})})},de=(c(151),c(152),function(e){return Object(h.jsx)("li",{className:"navLink",children:Object(h.jsx)(N.b,{className:"navLink_link",to:e.link,children:e.children})})}),je=c(84),ue=c(85),be=c(66),he=(c(153),c(155),c(156),function(e){var t=e.image,c=e.title,n=e.price,a=e.quantity,i=e.id,r=e.removeProduct,s=e.updateQuantity;return Object(h.jsx)("div",{className:"cartSliderProduct_container",children:Object(h.jsxs)("div",{className:"cartSliderProduct_content",children:[Object(h.jsx)("div",{className:"cartSliderProduct_image",children:Object(h.jsx)("img",{src:t,alt:""})}),Object(h.jsx)("div",{className:"product_name_container",children:Object(h.jsx)("h2",{className:"product_name",children:c})}),Object(h.jsxs)("div",{className:"product_price",children:[Object(h.jsx)("div",{onClick:function(){return s(i,"decrease")},className:"product_btn_quantity_decrease",children:Object(h.jsx)(be.a,{})}),n," X ",a,Object(h.jsx)("div",{onClick:function(){return s(i,"increase")},className:"product_btn_quantity_increase",children:Object(h.jsx)(be.b,{})})]}),Object(h.jsx)("div",{onClick:function(){return r(i)},className:"product_btn_remove",children:Object(h.jsx)("p",{children:"remove"})})]})})}),Oe=function(e){var t=e.activeStatus,c=Object(n.useContext)(l),a=c.cart,i=c.setCart,r=Object(n.useContext)(d);r.products,r.setProducts;Object(n.useEffect)((function(){}),[t]);var s=function(e){!function(e,t,c){console.log("remove cart ",t,e);var n=t.cartProducts.filter((function(t){return t.id!==e}));console.log("filtered cart ",n);var a=F({cartProducts:n},"total quantity"),i=F({cartProducts:n},"total price");console.log("cart quantity ",a,"cart total price ",i),L(t={cartProducts:n,cartInfo:{totalItems:a,totalPrice:i}}),c(t)}(e,a,(function(e){console.log("product removed ",e),i(Object(P.a)({},e)),console.log("product removed ",e)}))},o=function(e,t){console.log("increase quantity ",e),console.log("cart",a),function(e,t,c,n){var a=t.cartProducts.reduce((function(t,n){return console.log(n),n.id===e&&n.quantity&&"increase"===c?t.push(Object(P.a)(Object(P.a)({},n),{},{quantity:+n.quantity+1})):n.id===e&&1===n.quantity&&"decrease"===c||(n.id===e&&n.quantity>=1&&"decrease"===c?t.push(Object(P.a)(Object(P.a)({},n),{},{quantity:+n.quantity-1})):t.push(n)),t}),[]);console.log("filtered cart",a);var i=F({cartProducts:a},"total quantity"),r=F({cartProducts:a},"total price");L(t={cartProducts:a,cartInfo:{totalItems:i,totalPrice:r}}),n(t)}(e,a,t,(function(e){console.log("increase quantity",e),i(Object(P.a)({},e))}))};return Object(h.jsx)("div",{className:"addToCartSlider_container addToCartSlider_container--".concat(t),children:Object(h.jsxs)("div",{className:"addToCartSlider_content",children:[a.cartProducts&&a.cartProducts.length>0?a.cartProducts.map((function(e){return Object(h.jsx)(he,Object(P.a)({updateQuantity:o,removeProduct:s},e))})):Object(h.jsx)("h1",{style:{textAlign:"center"},children:"There are no items on cart"}),Object(h.jsx)("div",{className:"cart_total_amount",children:a.cartInfo&&a.cartInfo.totalPrice?Object(h.jsxs)("h1",{style:{textAlign:"center"},children:["Total Price: $",a.cartInfo.totalPrice]}):null}),Object(h.jsx)(y,{disabled:!(a.cartProducts&&a.cartProducts.length>0),link:"/checkout",children:"Checkout"})]})})},xe=c(238),me=c(229),pe=c(222);c(157);function fe(e){var t=e.name,c=e.login,i=a.a.useState(!1),r=Object(s.a)(i,2),o=r[0],d=r[1],j=a.a.useState(""),u=Object(s.a)(j,2),b=(u[0],u[1],a.a.useState("")),O=Object(s.a)(b,2),x=O[0],m=O[1],p=Object(n.useContext)(l),f=(p.cart,p.setCart,Object(n.useState)({})),g=Object(s.a)(f,2);g[0],g[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Z.a,{onClick:function(){return d(!0)},children:t}),Object(h.jsx)(me.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:o,onClose:function(){return d(!1)},closeAfterTransition:!0,BackdropComponent:xe.a,BackdropProps:{timeout:500},children:Object(h.jsx)(pe.a,{in:o,children:Object(h.jsx)(A.a,{className:"modal_box_override",children:Object(h.jsxs)("div",{className:"login_modal_content",children:[Object(h.jsx)(ie.a,{id:"transition-modal-title",variant:"h3",component:"h2",children:"Welcome Back!"}),Object(h.jsx)($.a,{id:"outlined-basic",value:"John",label:"name",variant:"outlined"}),Object(h.jsx)($.a,{id:"outlined-basic",value:x,onChange:function(e){return function(e,t){t(e.target.value)}(e,m)},label:"email",variant:"outlined"}),Object(h.jsx)($.a,{id:"outlined-basic",value:"mor_2314",label:"Username",variant:"outlined"}),Object(h.jsx)($.a,{id:"outlined-basic",value:"83r5^_",label:"password",variant:"outlined"}),Object(h.jsx)(Z.a,{onClick:function(){return c()},children:"Login"})]})})})})]})}var ge=Object(o.g)((function(e){var t=q(),c=Object(n.useState)(!1),a=Object(s.a)(c,2),i=a[0],r=a[1],o=Object(n.useContext)(l),d=o.cart,O=(o.setCart,Object(n.useContext)(u)),x=O.login,m=O.setLogin,p=Object(n.useContext)(j),f=(p.searchProducts,p.setSearchProducts),g=Object(n.useContext)(b),v=(g.LoadingSpinner,g.setLoadingSpinner),_=Object(n.useState)(!1),C=Object(s.a)(_,2),N=C[0],y=C[1];Object(n.useEffect)((function(){}),[q]);var S=function(){var e;e=function(e){console.log("login",e),m(!0)},console.log("user login being called"),fetch("https://fakestoreapi.com/auth/login",{method:"POST",body:JSON.stringify({username:"johnd",password:"m38rmF$"}),headers:{"content-type":"application/json",accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){sessionStorage.setItem("userLogin",JSON.stringify({name:"John",username:"johnd",userId:t.token})),e(t)}))},P=function(){localStorage.removeItem("userLogin"),m(!1)};return Object(h.jsxs)("div",{className:"navbar",children:[Object(h.jsx)("div",{className:"navbar_logo_container",children:Object(h.jsx)("a",{href:"/gtm_dev_implementation",children:Object(h.jsx)(je.a,{})})}),Object(h.jsx)("div",{className:"navbar_search_bar_container",children:Object(h.jsx)("input",{type:"text",className:"search_input",placeholder:"search",onKeyDown:function(t){if("Enter"===t.key){console.log("hitting"),v(!0);var c=t.target.value;I((function(e){var t=e.filter((function(e){if(e.title.toLowerCase().indexOf(c)>-1)return e}));f(t),v(!1)})),e.history.push({pathname:"/search_results",search:"?q=".concat(c),state:{searchKeyword:c}})}}})}),i?Object(h.jsx)("div",{className:"navbar_links_toggle_container",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)(de,{link:"/contact",children:"Contact Us"}),Object(h.jsx)(de,{link:"/catalogue",children:"Catalogue"}),x?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("br",{}),Object(h.jsx)("button",{className:"logout_btn",onClick:function(){return P()},children:"Logout"})," "]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("br",{}),Object(h.jsx)("button",{className:"login_btn",children:Object(h.jsx)(fe,{login:S,name:"Login"})})]})]})}):null,Object(h.jsx)("div",{className:"navbar_links_container",children:Object(h.jsx)("ul",{children:t?Object(h.jsx)(ue.a,{onClick:function(){return r(!i)}}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(de,{link:"/contact",children:"Contact Us"}),Object(h.jsx)(de,{link:"/catalogue",children:"Catalogue"}),x?Object(h.jsx)("button",{onClick:function(){return P()},className:"logout_btn",children:"Logout"}):Object(h.jsx)("button",{className:"login_btn",children:Object(h.jsx)(fe,{login:S,name:"Login"})})]})})}),Object(h.jsx)(be.c,{onClick:function(){return y(!N)}}),Object(h.jsx)("div",{className:"cart_quantity",children:Object(h.jsx)("h5",{children:d.cartInfo&&d.cartInfo.totalItems||0})}),Object(h.jsx)(Oe,{activeStatus:N})]})})),ve=(c(158),function(){return Object(h.jsx)("div",{className:"footer_container",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",children:"Facebook"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://www.google.com/search?q=blogs",children:"Blog"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",children:"Instagram"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#",children:"Newsfeed"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#",children:"Upcoming Products"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#",children:"Affiliates"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#",children:"Careers"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#",children:"Refund"})})]})})});c(159);var _e=Object(o.g)((function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)([]),r=Object(s.a)(i,2),O=r[0],x=r[1],m=Object(n.useState)([]),p=Object(s.a)(m,2),f=p[0],g=p[1],v=Object(n.useState)(!1),_=Object(s.a)(v,2),C=_[0],N=_[1],y=Object(n.useState)(!1),P=Object(s.a)(y,2),k=P[0],q=P[1];return Object(n.useEffect)((function(){var e=(F(w,"total quantity"),F(w,"total price"),w&&w.cartProducts&&w.cartProducts.length>0?JSON.parse(sessionStorage.cart):w);a(e)}),[]),Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(b.Provider,{value:{loadingSpinner:k,setLoadingSpinner:q},children:Object(h.jsx)(u.Provider,{value:{login:C,setLogin:N},children:Object(h.jsx)(j.Provider,{value:{searchProducts:f,setSearchProducts:g},children:Object(h.jsx)(d.Provider,{value:{listingProducts:O,setListingProducts:x},children:Object(h.jsxs)(l.Provider,{value:{cart:c,setCart:a},children:[Object(h.jsx)(ge,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/search_results",component:D}),Object(h.jsx)(o.a,{path:"/catalogue",component:U}),Object(h.jsx)(o.a,{path:"/contact",component:te}),Object(h.jsx)(o.a,{path:"/product",component:R}),Object(h.jsx)(o.a,{path:"/checkout",component:le}),Object(h.jsx)(o.a,{exact:!0,path:"/gtm_dev_implementation",component:S})]}),Object(h.jsx)(ve,{})]})})})})})})})),Ce=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,250)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(N.a,{children:Object(h.jsx)(_e,{})})}),document.getElementById("root")),Ce()}},[[160,1,2]]]);
//# sourceMappingURL=main.f90516b0.chunk.js.map