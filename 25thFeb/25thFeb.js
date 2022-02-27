/* function to reverse String of s*/
function reverse_String(a)
{
  a = a +"";
  rev_str = a.split("").reverse().join("");
  return rev_str;
}
function Palindrome(string)
{
    // reverse of string
    var rev_string = reverse_String(string);

     // Check if rev_string and string are same or not.
    if (rev_string == string) {
        return 1;
    }else{
        return 0;
    }
}
var str = prompt("Enter a string") 
if (Palindrome(str) == 1) {
    document.write( str + " a palindrome? -> True")
}else if (Palindrome(str) == 0){
    document.write( str + " a  palindrome? -> False")
}