function checkPalindrome()
{
    var input = document.getElementById("inputWindow").value;
    var element = document.getElementById("result");

    var testString = input.toLowerCase().split('').reverse().join('');
    

    if (input.toLowerCase() == testString)
    {
        element.classList.remove("text-danger");
        document.getElementById("result").innerHTML = input + " is a Palindrome!!!";
        document.getElementById("inputWindow").value = null;
        element.classList.add("text-success");
    }

    else 
    {
        element.classList.remove("text-success");
        document.getElementById("result").innerHTML = input + ' is not a Palindrome.';
        document.getElementById("inputWindow").value = null;
        element.classList.add("text-danger");
    }
}


function check() 
{
    if(event.keyCode === 13){
       return checkPalindrome();
     }
}