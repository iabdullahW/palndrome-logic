let choice = prompt("enter a name");

let reversedchoice = choice.split("").reverse().join("");

if(choice == reversedchoice){
console.log("palindrome");

}else{
    console.log("not palindrome");
}
