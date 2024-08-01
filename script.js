class Calculator{
constructor(previousOperandTextElement,currentOperandTextElement)
{
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
}
clear(){
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined

}
delete (){
    this.currentOperand = this.currentOperand.toString().slice(0,-1)

}
appendNumber(number){
    if (number=== '.'&& this.currentOperand.includes('.')) return
this.currentOperand = this.currentOperand.toString() + number.toString()
}
chooseOperation(operation){
    if (this.currentOperand === '') return
    if (this.previousOperand !== '')
    {
        this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''

}
compute() {

    let computation 
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev)||isNaN(current)) return
    switch(this.operation)
    {

        case '+':
            computation = prev + current
            break
            case '-':
                computation = prev - current
                break
                case '*':
                    computation = prev * current
                    break
                    case '÷':
                        computation = prev / current
                        break
                        default :
                        return
    }
}

getDisplayNumber(number)
{
    const stringNumber = number.toString()
    const FloatNumber = parseFloat(number)
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const DecimalDigits = parseFloat(stringNumber.split('.')[1])
    let integerDisplay
    if(isNaN(integerDigits))
    {
        integerDisplay = ''
    }
    else { integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})}
    if (DecimalDigits != null)
        {
            return '${integerDisplay}.${decimalDigits}'
        }
else {
    return integerDisplay
}


}
updateDisplay(){
    this.currentOperandTextElement.innerText = this.currentOperand
    
    if (this.operation !=null)
    {
        this.previousOperandTextElement.innerText = '${this.previousOperand} ${this.operation}'
    }
    else {
        this.previousOperandTextElement.innerText = ''
    }
}
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperandButtons = document.querySelector('[data-previous-operand]')
const currentOperandButtons = document.querySelector('[data-current-operand]')

const calculator = new Calculator (previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButtons.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})
allClearButtons.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
}) 

deleteButtons.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})
