
// nav heart count section
const buttons = document.getElementsByClassName('btn-heart')
const heartCount = document.getElementById('heart-count')
let count = 0;

for (button of buttons) {
    button.addEventListener('click', function () {
        count++;
        heartCount.innerText = count;

    })

}

// call buttons section


let coinCount = parseInt(document.getElementById('coin-count').textContent);

const coin = document.getElementById('coin-count');

const callButtons = document.getElementsByClassName('btn-call')
for (const callButton of callButtons) {
    callButton.addEventListener('click', function () {

        alert('Calling... ' + document.getElementById('service-name').innerText + ' ' + document.getElementById('service-number').innerText);
        
        coinCount -= 20;
        
        if(coinCount !== 20 && coinCount < 0){
            alert('Not Enough Coin Please Recharge');
            return;
        }
        
        coin.textContent = coinCount;
        
    });
}