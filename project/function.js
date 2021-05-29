
const to_currencyEl = document.getElementById("to_currency");
const to_amountEl = document.getElementById("to_amount");
const from_currencyEl = document.getElementById("from_currency");
const from_amountEl = document.getElementById("from_amount");

const rateEl = document.getElementById("rate");
const exchange = document.getElementById("exchange");

convert.addEventListener("dblclick", calculate  => {
  const from_currency = from_currencyEl.value;
  const to_currency = to_currencyEl.value;
  const data = fetch(`https://v6.exchangerate-api.com/v6/d160dcd7ed062510144a4093/latest/${from_currency}`)
    .then((data) => data.json())
    .then((data) => {
      const rate = data.conversion_rates[to_currency];
      rateEl.innerText = `1 ${from_currency} = ${rate} ${to_currency}`;
      to_amountEl.value = (from_amountEl.value * rate).toFixed(2);
    });
});

exchange.addEventListener("click", () => {
  const temp = from_currencyEl.value;
  from_currencyEl.value = to_currencyEl.value;
  to_currencyEl.value = temp;
  calculate();
});

from_currencyEl.addEventListener("change", calculate);
from_amountEl.addEventListener("input", calculate);
to_currencyEl.addEventListener("change", calculate);
to_amountEl.addEventListener("input", calculate);

calculate();

