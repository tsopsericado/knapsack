const itemList = document.querySelector('#item_list')
const form = document.querySelector('form')
const totalWeight = document.querySelector('#total_weigth')
const totalValue = document.querySelector('#total_value')
const MaxWeigh = document.querySelector('#max_weight')
const delele = document.querySelector('.delete')
const Add = document.querySelector('#add')
const itemInput = document.querySelector('#item')
const weightInput =document.querySelector('#weight')
const valueInput = document.querySelector('#value')
const MaximumWeight = document.querySelector("#maxi_weight");
const items = []
form.addEvenListener('submit', sumItem)

function sumItem (e) {
    e.preventDefault()

    const item = {
       name: itemInput.value,
       weight: parseInt(weightInput.value),
       value: parseInt(valueInput.value),
       maxW: parseInt(MaximumWeight.value)
    }
    
    items.push(item)

    calculateResult()

    itemInput.value = ''
    weightInput.value = ''
    valueInput.value = ''
    MaximumWeight.disabled = true
}

function calculateResult () {
   let totalWeightValue = 0
   let totalValueValue = 0
   let MaxWeigh = 0
   let itemName
   let weightInput
   let valueInput

   items.forEach((item) =>{
    totalWeightValue += item.weight
    totalValueValue += item.value
    MaxWeigh = item.maxW
    itemName = item.name
    weightInput = item.weight
    valueInput = item.value
   })

   if (totalWeightValue > MaxWeigh) {
    window.alert(`the max weight allowed is ${MaxWeigh}`)
    console.log(`The max weight allowed is ${MaxWeigh} and its full`)
    Add.style.backgroundColor = 'orange'
    Add.disabled = true
   } else {
    const li = document.createElement('li')
    li.style.backgroundColor -'#afe1af'
    li.innerHTML = ` <span>${itemName}</span> <span>${weightInput}Kg</span> 
    <span>${valueInput}XAF</span> `

    itemList.appendChild(li)
    totalWeight.textContent = totalWeightValue
    totalValue.textContent = totalValueValue
    MaxWeight.textContent = MaxWeigh
   }
}

clearAllBtn.addEvenListener('click', () =>{
  window.location.reload(true)
})