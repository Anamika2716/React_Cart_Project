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
        this.testing();
        //this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    testing(){
        const promise=new Promise((resolve , reject)=>{
            setTimeout(()=>{
                resolve('done');

            }, 5000);
        })
        promise.then(()=>{
            //setState acts like sychronus call
            this.setState({qty:this.state.qty+10});
            this.setState({qty:this.state.qty+10});
            this.setState({qty:this.state.qty+10});
            console.log('state', this.state);
        });
    }
    increaseQuantity=()=>{
        console.log("test",this.state);
        //this.state.qty+=1;
        //setState form 1  by giving it an object

        //use when prev state is not required
        // this.setState({
        //         //     qty:this.state.qty+1 // merge it with state , and do shallow merging and after setState it will rerender with updated data
        //         // })

        //setState form 2 by passing function
        //use this when prev state values are needed
        this.setState((prevState)=>{
            return {
                qty: prevState.qty + 1 // again shallow merging
            }
        })

    }
    decreaseQuantity=()=>{

        const {qty}=this.state;
        if(qty===0)
        {
            return;
        }
        this.setState(prevState=>{
            return {
                qty:prevState.qty-1
            }
        })
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
                             onClick={this.decreaseQuantity}
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
