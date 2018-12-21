var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Pbgv1986",
    database: "bamazon_db"
  });

  connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
  
  });


   
    // query the database for all items being auctioned
    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
      // once you have the items, prompt the user for which they'd like to bid on
      console.log(results)
      inquirer
        .prompt([
          {
            name: "id",
            type: "number",
            message: "What is the ID of what you would like to buy?"
          },
          {
            name: "amount",
            type: "number",
            message:  "how many units of the product they would like to buy?"
          }
    ])
    .then(function(answer){
      console.log(answer)
      connection.query(`SELECT * FROM products WHERE item_id = ${answer.id}`, function(error, result){
        if(error) throw error
        console.log(result)
        var total = answer.amount * result[0].price
        var newAmount = result[0].stock_quantity - answer.amount
        if (answer.amount > result[0].stock_quantity){
            console.log("sorry there is not enough") 
            connection.end()
        }  else {
          connection.query(`UPDATE products SET stock_quantity = ${newAmount} WHERE item_id = ${answer.id}`, function(error, result){
            if(error)throw error
            console.log("We well place youre order")

            console.log("youre total is " +total )
            connection.end()
          })
         
        }
      })

    })


    })


        // .then(function(answer) {
        //   // get the information of the chosen item
        //   var chosenItem;
        //   for (var i = 0; i < results.length; i++) {
        //     if (results[i].item_name === answer.choice) {
        //       chosenItem = results[i];
        //     }
        //   }
        // });
  
// //to number 7
