var item;
item = [
    { "name": "Apple", "Price": 100, "Qty": 6 },
    { "name": "Orange", "Price": 70, "Qty": 5 },
    { "name": "Grapes", "Price": 50, "Qty": 1 },
    { "name": "Banana", "Price": 80, "Qty": 10 },
    { "name": "Pineapple", "Price": 60, "Qty": 1 }
];
for (var i = 0; i < item.length; i++) {
    console.log("*****************");
    //console.log("Item Name : "+ item[i].name);
    //console.log("Item Price : "+ item[i].Price);
    //console.log("Item QTY : "+ item[i].Qty);
    console.log("Item Name : " + item[i].name + " - " + " Item Price : " + item[i].Price + " - " + " Item QTY : " + item[i].Qty + " - " + " Total Price " + item[i].Price * item[i].Qty);
    console.log("*****************");
}
