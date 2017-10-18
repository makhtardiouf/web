/*
Array where each element is a list with the first element equal to the name of the ingredient and 
all of the other elements equal to the names of dishes that contain this ingredient.

 (if there are at least 2 such dishes).

dishes = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
            ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
            ["Quesadilla", "Chicken", "Cheese", "Sauce"],
            ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]]
            
Output:

  groupingDishes(dishes) = [["Cheese", "Quesadilla", "Sandwich"],
                            ["Salad", "Salad", "Sandwich"],
                            ["Sauce", "Pizza", "Quesadilla", "Salad"],
                            ["Tomato", "Pizza", "Salad", "Sandwich"]]

*/

function groupingDishes(dishes) {
    var ingred = {};
    var dish = [];

    for (var i = 0; i < dishes.length; i++) {
        dish[i] = dishes[i][0];

        for (var j = 0; j < dishes[i].length; j++) {
            var tgt = ingred[dishes[i][j]];
            if (!tgt)
                ingred[dishes[i][j]] = [];
            ingred[dishes[i][j]].push(dish[i]);
        }
    }

    var i = 0;
    for (var e in ingred) {
        if (ingred[e].length > 1) {
           
            // Lexi order
            ingred[e].sort();
            ingred[e].unshift(e);
            dishes[i] = ingred[e];
            i++;
        }

    }

    console.log(dishes);
    return dishes.sort();
}


dishes = [
    ["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
    ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
    ["Quesadilla", "Chicken", "Cheese", "Sauce"],
    ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]
];

groupingDishes(dishes);
console.log("\n\n=========");

dishes = [["Pasta", "Tomato Sauce", "Onions", "Garlic"],
["Chicken Curry", "Chicken", "Curry Sauce"],
["Fried Rice", "Rice", "Onions", "Nuts"],
["Salad", "Spinach", "Nuts"],
["Sandwich", "Cheese", "Bread"],
["Quesadilla", "Chicken", "Cheese"]];

groupingDishes(dishes);
