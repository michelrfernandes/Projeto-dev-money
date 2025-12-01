// Select Data
const currencyFrom = document.getElementById("currency-from");

const currencyTo = document.getElementById("currency-to");

// In value input
const currencyValue = document.getElementById("currency-value");

// action button submit
const btnConvert = document.querySelector(".btn-convert");

// value converted
const convertedCurrency = document.querySelector(".converted-currency");
const logoCountryTo = document.querySelector(".logo-country");
const logoCountryFrom = document.querySelector(".logo-country-from");
const convertedcurrencyCountry = document.getElementById("converted-currency-country");
const currencyOfOrigin = document.getElementById("currency-of-origin");
const currencyValueIn = document.querySelector(".currency-value-in");


function activeConvert(){

const bitcoinCurrency = 524.60113 
const libraCurrency = 6.97 
const dolarCurrency =  5.30
const ieneCurrency = 29.17
const realCurrency = 1.00
const euroCurrency = 6.37

  const currencyFromValue = currencyFrom.value
  const currencyToValue = currencyTo.value
  const currencyValueNumber = currencyValue.value

  const selectedOption = currencyFrom.options[currencyFrom.selectedIndex]; 
  const selectedOptionReg = currencyFrom.options[currencyFrom.selectedIndex]; 
  const selectedOptionSig = currencyFrom.options[currencyFrom.selectedIndex]; 

  const selectedOptionTo = currencyTo.options[currencyTo.selectedIndex]; 
  const selectedOptionToReg = currencyTo.options[currencyTo.selectedIndex]; 
  const selectedOptionToSig = currencyTo.options[currencyTo.selectedIndex]; 

  const dataValorTo = selectedOptionTo.dataset.valor;
  const dataValorToReg = selectedOptionToReg.dataset.reg;
  const dataValorToSig = selectedOptionToSig.dataset.sig;

  const dataValor = selectedOption.dataset.valor;
  const dataValorReg = selectedOptionReg.dataset.reg;
  const dataValorSig = selectedOptionSig.dataset.sig;


  function novaFnc(from, to, numberData, dataValor, dataValorReg, dataValorSig, dataValorTo, dataValorToReg, dataValorToSig, currencyOfOrigin, currencyValueIn){

      const valueConvertTo = new Intl.NumberFormat(dataValorToReg, {
          style: 'currency',
          currency: dataValorToSig
      }).format(numberData / dataValorTo)


        const numberDataIn = new Intl.NumberFormat(dataValorReg, {
          style: 'currency',
          currency: dataValorSig
      }).format(numberData)


      console.log(numberDataIn, valueConvertTo);
      

      switch (to) {
          case 'real':
              logoCountryTo.src = "assets/images/brasil.png"
              convertedcurrencyCountry.innerHTML = 'Real';
              break;
          case 'dolar':
              logoCountryTo.src = "assets/images/estados-unidos.png"
              convertedcurrencyCountry.innerHTML = 'Dólar';
               break;
          case 'euro':
              logoCountryTo.src = "assets/images/euro.png" 
              convertedcurrencyCountry.innerHTML = 'Euro';
              break;
          case 'libra':
              logoCountryTo.src = "assets/images/libra.png"
              convertedcurrencyCountry.innerHTML = 'Libra';
              break;
          case 'iene':
              logoCountryTo.src = "assets/images/iene.png"
              convertedcurrencyCountry.innerHTML = 'Iene Japonês';
              break;
          case 'bitcoin':
              logoCountryTo.src = "assets/images/bitcoin.png"
              convertedcurrencyCountry.innerHTML = 'Bitcoin';
              break;
          default:
              convertedcurrencyCountry.innerHTML = '';  
      }

      switch (from) {
          case 'real':
              logoCountryFrom.src = "assets/images/brasil.png"
              currencyOfOrigin.innerHTML = 'Real';
              currencyValueIn.innerHTML = numberDataIn
              break;
          case 'dolar':
              logoCountryFrom.src = "assets/images/estados-unidos.png"
              currencyOfOrigin.innerHTML = 'Dólar';
              currencyValueIn.innerHTML = numberDataIn
               break;
          case 'euro':
              logoCountryFrom.src = "assets/images/euro.png" 
              currencyOfOrigin.innerHTML = 'Euro';  
              currencyValueIn.innerHTML = numberDataIn
              break;
          case 'libra':
              logoCountryFrom.src = "assets/images/libra.png"
              currencyOfOrigin.innerHTML = 'Libra';
              currencyValueIn.innerHTML = numberDataIn
              break;
          case 'iene':
              logoCountryFrom.src = "assets/images/iene.png"
              currencyOfOrigin.innerHTML = 'Iene Japonês';
              currencyValueIn.innerHTML = numberDataIn
              break;
          case 'bitcoin':
              logoCountryFrom.src = "assets/images/bitcoin.png"
              currencyOfOrigin.innerHTML = 'Bitcoin';
              currencyValueIn.innerHTML = numberDataIn
              break;
          default:
              currencyValueIn.innerHTML = ""
              logoCountryFrom.src = "";
              currencyOfOrigin.innerHTML = '';  
      }      

      convertedCurrency.innerHTML = valueConvertTo
      
      
  }

  novaFnc(currencyFromValue, currencyToValue, currencyValueNumber, dataValor, dataValorReg, dataValorSig, dataValorTo, dataValorToReg, dataValorToSig, currencyOfOrigin, currencyValueIn)

}



btnConvert.addEventListener("click", activeConvert);
// currencyValue.addEventListener("keydown", activeLiberateButton);
