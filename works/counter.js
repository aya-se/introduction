let count=0
let validSW=0
const countUp = () => {
    count ++
    const countElement = document.querySelector('#count')
    countElement.innerText = '回数: ' + count
}
const resetCount = () => {
    count =0
    const countElement = document.querySelector('#count')
    countElement.innerText = '回数: ' + count
}
const startSW = () => {
    validSW=1
    stopWatch()
}
const stopSW = () => {
    validSW=0
}
const stopWatch = () => {
    if(validSW==1){
        setTimeout(function() {
            countUp()
            stopWatch()
        },10)
    }
}