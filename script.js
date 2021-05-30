//Creating References
const input_1 = document.getElementById('input-1');
const option_1 = document.getElementById('option-1');
const input_2 = document.getElementById('input-2');
const option_2 = document.getElementById('option-2');
const swapBtn = document.getElementById('swap');
const swapText = document.getElementById('swapText');

//Function Convert
function convert(){
    const currency_1 = option_1.value;
    const currency_2 = option_2.value;

    const setHeader = {
        headers: {
            Accept : "application/json"
        }
    }

    //fetch API
    fetch(`https://v6.exchangerate-api.com/v6/66c18d9d8436b067f20a2586/latest/${currency_1}`,setHeader)
        .then(response => response.json())
        .then(data => {
            const rate = data.conversion_rates[currency_2];
            swapText.textContent = `1 ${currency_1} = ${rate} ${currency_2}`;
            input_2.value = (input_1.value * rate).toFixed(2);
        });
};

//Adding EventListeners
input_1.addEventListener('input',convert);
input_2.addEventListener('input',convert);
option_1.addEventListener('change',convert);
option_2.addEventListener('change',convert);

//Adding Eventlistener to SWAP button
swap.addEventListener('click', () => {
    const temp = option_1.value;
    option_1.value = option_2.value;
    option_2.value = temp;
    convert();
  });

convert();

