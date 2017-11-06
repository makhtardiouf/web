/*
Reverses characters in (possibly nested) parentheses in the input string.

Sample input: 
"(bar)" =>  "rab"
"foo(bar)baz" =>  "foorabbaz";

"foo(bar)baz(blim)" =>  "foorabbazmilb";
"foo(bar(baz))blim" =>  "foobazrabblim".

Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

string inputStr  0 ≤ inputStr.length ≤ 50.
Return inputStr, with all the characters that were in parentheses reversed.
*/

function reverseInParentheses(inputStr) {
  var str = inputStr;
  var chs = [];
  var inS = false;

  var outp, tmp, c;
  outp = tmp = c = "";

  var pCnt = 0;
  var sp = str.split(")");
  console.log(sp, sp.length);
  console.log(sp[0].split("("));

  // Count the number of inner parentheses first
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "(")
      pCnt++;
  }
  console.log("PCnt", pCnt);

  for (var i = 0; i < str.length; i++) {
    c = str[i];

    if (!inS && (c != "(") && (c != ")")) {
      outp += c;
      continue;
      //  console.log(outp);
    }

    if (c == "(") {
      inS = true;
      i++;
    }

    if (c != ")") {
      c = str[i];
      tmp += c;
      console.log(outp, tmp, chs);
      continue;
    }


    // Closing parenthese
    inS = false;
    chs.push(tmp);
    chs.reverse();
    //tmp = chs.join();

    // Reverse and append 
    for (var j = tmp.length - 1; j >= 0; j--) {
      outp += tmp[j];
    }

    // Reset to target inner reversals
    pCnt--;
    if (pCnt > 0) {
      i = -1;
      outp = "";
    }

    tmp = "";
    // chs = [];        
    console.log(pCnt, outp, tmp, chs);

  }

  return outp;
}
console.log(reverseInParentheses("(bar)"), "\n\n");
console.log(reverseInParentheses("foo(bar)baz"), "\n\n");
console.log(reverseInParentheses("foo(bar)baz(blim)"), "\n\n");
console.log(reverseInParentheses("foo(bar(baz))blim"), "\n\n");
