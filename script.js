//considering whole transactions
var transaction=[]


document.querySelector(".btn").addEventListener("click",function(){
    //getting the text entered in the input field
    var text=document.querySelector("#text").value;

    //getting the amount entered in the input field
    var amount=parseInt(document.querySelector("#amount").value)

    //pushing all into the transaction array
    transaction.push({
        "amount":amount,
        "text":text
    })
    
    //setting local storage with the key as text and value as amount
    localStorage.setItem(text,amount);

    var listTag=document.createElement('li');
    listTag.innerHTML=text+" "+amount
    if(amount>0){
        listTag.className="plus"

        //updating the income division
        document.querySelector("#money-plus").innerHTML="$"+amount
    }
    else{
        listTag.className="minus"

        //updating the expense division
        document.querySelector("#money-minus").innerHTML="$"+amount
    }
    
    //appending the transaction to the list of transactions for making transaction history
    document.querySelector("#list").appendChild(listTag)

    //updating the total balance
    document.querySelector("#balance").innerHTML="$"+(transaction.reduce((t1,t2)=>({amount: t1.amount + t2.amount}))).amount
})
