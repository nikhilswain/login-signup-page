
const submit = document.getElementById('submit');
submit.addEventListener("click",submitted,false);
function submitted(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  if(name.length <= 3){
    //window.alert("name must be 4 or more than 4 charaters");
    const hidden = document.getElementById('output');
    hidden.style.display = "block";
  }
  else{
    window.alert(name);
  }
}
