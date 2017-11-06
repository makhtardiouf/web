
/*
Given the physical store's item names retailItems and their prices retailPrices, as well as 
onlineItems and onlinePrices, return the number of items that have different prices in the store 
than they do online.

Makhtar Diouf
*/

function pricesDiff(retailItems, retailPrices, onlineItems, onlinePrices) {
    var retailCnt = {};
    var onlineCnt = {};

    for(var i = 0; i < retailItems.length; i++) {
        retailCnt[retailItems[i]] = retailPrices[i];
       
    }

    var item ;
    var numDiff = 0;

    for(var i = 0; i < onlineItems.length; i++) {
        item = onlineItems[i];
        onlineCnt[item] = onlinePrices[i];      

        if( (onlineCnt[item] != retailCnt[item]) && (retailCnt[item] != undefined)) {
            numDiff++;
            console.log(item, numDiff);
        }
    }
    
    console.log("Diff", numDiff);
    return numDiff;
}


var retailItems = ["tomato" , "bread", "salt"];
var retailPrices = [15.99, 4.99, 5.99];
var onlineItems = ["tomato" , "bread", "salt", "water"];
var onlinePrices = [15.89, 4.99, 6, 1.99];
// answer =  2

pricesDiff(retailItems, retailPrices, onlineItems, onlinePrices);
