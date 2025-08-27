callHistoryData = [];


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

//copy button count 
const btns = document.getElementsByClassName('btn-copy')
const copyCount = document.getElementById('copy-count')
let countt = 0;

for (btn of btns) {
    btn.addEventListener('click', function () {
        alert('Hotline number copied');
        countt++;
        copyCount.innerText = countt;

    })

}

// by copy button: copy text in clipboard
document.querySelectorAll('.btn-copy').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        const text = card.querySelector('.copy-text').textContent.trim();

        navigator.clipboard.writeText(text);
    });
});




// call buttons section


let coinCount = parseInt(document.getElementById('coin-count').textContent);

const coin = document.getElementById('coin-count');

const callButtons = document.querySelectorAll('.btn-call')
callButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {

        //reducing coin from this part
        coinCount -= 20;

        if (coinCount !== 20 && coinCount < 0) {
            alert('Not Enough Coin Please Recharge');
            return;
        }
        coin.textContent = coinCount;

        //making call history info dynamic

        const card = btn.closest('.card');
        const serviceName = card.querySelector('.service-name').innerText;
        const serviceNumber = card.querySelector('#service-number').innerText;
        console.log(serviceName, serviceNumber)
        const data = {
            name: serviceName,
            number: serviceNumber,
            time: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data);

        alert('Calling..' + serviceName + ' ' + serviceNumber);

        // history cards adding from this part
        const callHistoryContainer = document.getElementById('history-card-container')
        callHistoryContainer.innerText = ''

        for (const data of callHistoryData) {
            const div = document.createElement('div')
            div.innerHTML = `
                <div class="history-card flex justify-between items-center bg-[#fafafa] p-3 rounded-xl shadow-md mt-3">
                                    <div>
                                        <h3 class="text-xl font-semibold">
                                            ${data.name}
                                        </h3>
                                        <p class="text-lg">
                                            ${data.number}
                                        </p>
                                    </div>
                                    <p class="text-lg">${data.time}</p>
                                </div>
            `
            callHistoryContainer.appendChild(div);

        }

    });

});

// Clear button
const clearBtn = document.getElementById('btn-clear');

const cardContainer = document.getElementById('history-card-container');

clearBtn.addEventListener('click', () => {

    cardContainer.innerHTML = '';

    callHistoryData = [];
});




