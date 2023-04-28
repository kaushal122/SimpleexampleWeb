function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

let mail = document.getElementById("email");
let pass = document.getElementById("password");
let subtn = document.getElementById("btn");
console.log(mail.value)
subtn.addEventListener("click", function() {
  let m = mail.value;
  let p=pass.value;
  let ans=m+" "+p;
  document.getElementById("more").innerHTML = ans;
});
