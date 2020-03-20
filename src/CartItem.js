import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state={
            price:9999,
            title:"Phone",
            qty:1,
            img:''
        }
        //this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    increaseQuantity=()=>{
        console.log("test",this.state);
    }
    render() {
        const{price, title, qty}=this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{fontSize:25 , color:'#777'}}>{price}</div>
                    <div style={{fontSize:25, color:'#777'}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        {/*  Buttons */}
                        <img alt="increase"
                             className="action-icons"
                             src="https://image.flaticon.com/icons/svg/1665/1665578.svg"
                             onClick={this.increaseQuantity}
                        />
                        <img alt="decrease"
                             className="action-icons"
                             src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
                        />
                        <img alt="delete"
                             className="action-icons"
                             src="https://image.flaticon.com/icons/svg/747/747370.svg"
                        />


                    </div>
                </div>
            </div>
        );
    }
}
const styles={
        image:{
            height:110,
            width:110,
            borderRadius:4,
            background:"#777"
        }
};

export default CartItem;
