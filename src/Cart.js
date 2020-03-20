import React from 'react';
import CartItem from './CartItem';
const Cart=(props)=>{
    // constructor(){
    //     super();
    //     this.state={
    //        products:[
    //            {
    //                price:999,
    //                title:"Mobile Phone",
    //                qty:1,
    //                img:"",
    //                id:1
    //            },
    //            {
    //                price:56999,
    //                title:"Laptop",
    //                qty:1,
    //                img:"",
    //                id:2
    //            },
    //            {
    //                price:994569,
    //                title:" Phone",
    //                qty:1,
    //                img:"",
    //                id:3
    //            },
    //            {
    //                price:567,
    //                title:"Book",
    //                qty:1,
    //                img:"",
    //                id:4
    //            },
    //        ]
    //     }
    //    //this.increaseQuantity=this.increaseQuantity.bind(this);
    // }
    // handleIncreaseQuantity=(product)=>{
    //    console.log("Increase Quantity", product);
    //    const {products}=this.state;
    //    const index=products.indexOf(product);
    //    products[index].qty+=1;
    //    this.setState({
    //        products
    //    })
    // }
    // handleDecreaseQuantity=(product)=>{
    //     console.log("Increase Quantity", product);
    //     const {products}=this.state;
    //     const index=products.indexOf(product);
    //     if(products[index].qty===0)
    //     {
    //         return;
    //     }
    //     products[index].qty-=1;
    //     this.setState({
    //         products
    //     })
    // }
    // handleDeleteProduct=(id)=>{
    //     const {products}=this.state;
    //     const items=products.filter((item)=>item.id!==id);
    //     this.setState({
    //         products:items
    //     })
    // }

        const {products}=props;
      return(
          <div className="cart">
              {products.map(product=>{
                return <CartItem
                                 product={product}
                                 key={product.id}
                                 onIncreaseQuantity={props.onIncreaseQuantity}
                                 onDecreaseQuantity={props.onDecreaseQuantity}
                                 onDelete={props.onDelete}
                />
              })}

          </div>

      )

};

export default Cart;
