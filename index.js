const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const parrafo = document.querySelector('#resultado')

form.addEventListener('click', pressBtn)


function pressBtn(){
  let resultado = Number(input1.value) + Number(input2.value)
  return parrafo.textContent = resultado
} 