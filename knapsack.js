function sumItem (e) {
    e.preventDefault()

    const item = {
       name: itemInput.value,
       weight: parseInt(weightInput.value),
       value: parseInt(valueInput.value),
       maxW: parseInt(MaximumWeight.value)
    }
    
    items.push(item)

    calculatedResult()

    itemInput.value = ''
    weightInput.value = ''
    valueInput.value = ''
    MaximumWeight.value = ''
    MaximumWeight.disabled = true
}