function checkAnagram(a, b) {
  
    // If not same length than can't be Anagram
    if (a.length !== b.length) {
        return false;
    }

    // Inbuilt functions to rearrange the string
    var str1 = a.split('').sort().join(''); 
    var str2 = b.split('').sort().join('');

    var result = (str1 === str2);
    return result;
}

// Checking the output
var a= prompt("Enter a String");
var b= prompt("Enter a Strring");
document.write(checkAnagram(a,b));