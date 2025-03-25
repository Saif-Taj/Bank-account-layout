
document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const acountNumber = document.getElementById('Account-number').value;
    
    const pin = document.getElementById('Pin').value;
    if(acountNumber.length===11){
        if(parseInt(pin)===1234){
            window.location.href="/main.html"
        }
        else{
            alert('Wrong Pin')
        }
    }
    else{
        alert('Need valid accout number')
    }
})