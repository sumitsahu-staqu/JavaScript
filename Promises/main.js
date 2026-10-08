// const cart = ["shoes", "shirts", "pants"];
// CreateOrder(cart).then(function(orderID) {
//     proceedPayment(orderID).then(function(PaymentInfo) {
//         showorderSummary(PaymentInfo).then(function(){
//             updateWalletBalance();
//         }).catch(function(error) {
//             console.log("Error in showing order summary: " + error);
//         });
//     });
//     });


    //Now the advanced way of writing the above code
//     const cart = ["shoes", "shirts", "pants"];
//     CreateOrder(cart)
//     .then(orderID=>{console.log(orderID); return proceedPayment(orderID);})
//     .then(PaymentInfo=>showorderSummary(PaymentInfo))
//     .then(()=>updateWalletBalance())
//     .catch(error=>console.log(error.message));

//     //Now call the function to create order

//     function CreateOrder(cart){
//     const pr=new Promise(function(resolve,reject){
//         if(!ValidateCart(cart)){
//             const err=new Error("Cart is not valid");
//             reject(err);
//         }
//         const orderID="1234";
//         if(orderID){
//         resolve(orderID);
//         }
//     });
//      return pr;
// }
//     function ValidateCart(cart){
//         return false;
//     }


// <<--Using async await-->>
// CreateOrder(cart)
//     ↓
// orderID
//     ↓
// proceedPayment(orderID)
//     ↓
// PaymentInfo
//     ↓
// showorderSummary(PaymentInfo)
//     ↓
// updateWalletBalance()
//     ↓
// catch error

 const cart = ["shoes", "shirts", "pants"];

async function placeOrder() {
    try {
        const orderID = await CreateOrder(cart);
        console.log(orderID);

        const PaymentInfo = await proceedPayment(orderID);

        showorderSummary(PaymentInfo);

        await updateWalletBalance();

    } catch (error) {
        console.log(error.message);
    }
}

placeOrder();


function CreateOrder(cart) {
    const pr = new Promise(function(resolve, reject) {

        if (!ValidateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
            return;
        }

        const orderID = "1234";

        if (orderID) {
            resolve(orderID);
        }
    });

    return pr;
}


function ValidateCart(cart) {
    return false;
}