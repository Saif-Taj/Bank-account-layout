document.getElementById('money-add').style.display = "block";
document.getElementById('cash-out').style.display ="none";

document.getElementById('money-in').addEventListener('click', function(){
    document.getElementById('cash-out').style.display ="none";
    document.getElementById('money-add').style.display = "block";
})
document.getElementById('money-out').addEventListener('click', function(){
    document.getElementById('cash-out').style.display ="block";
    document.getElementById('money-add').style.display = "none";
})