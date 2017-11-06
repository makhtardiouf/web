/*
You are helping out with your school's "Queen of School" contest. You have the list of votes, 
where v is the name of the girl the ith person voted for. 

Your task is to find out who the winner is. If there are several girls 
who got the maximal number of votes, choose the winner by sorting the list of 
potential winners lexicographically and then choosing the last one.
*/


function selectQueen(votes) {
    if(votes.length <= 1)
        return votes[0];

    var nVotes = {};
    for (var i = 0; i < votes.length; i++) {
        var v = votes[i];
          
        if (!nVotes[v])
            nVotes[v] = 1;
        else
            nVotes[v] += 1;
    }

    var max = -1;
    var girls = {};
    for (var v in nVotes) {
        console.log(v, nVotes[v]);
        if (nVotes[v] >= max) {
            // update max and keep only girls in that range
            max = nVotes[v];
            if(!girls[max])
                girls[max] = [];
            girls[max].push(v);
        }
    }
    var finalists = girls[max];
    finalists.sort();
    var res = finalists[finalists.length - 1];
    console.log("Res", finalists, res);

    return res;
}


var votes = ["Laura", "Emily", "Louise", "Natasha", "Emily", "Lilly", "Louise", "Laura", "Mary", "Mary"];

votes = ["Jaquelinea", 
"Alice", 
"Mya", 
"Molly", 
"Mariah", 
"Martha", 
"Lucia"];
// answer = Mya

selectQueen(votes) ;
