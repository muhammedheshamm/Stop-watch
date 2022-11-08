let minutes= 0
let seconds = 0
let mSeconds = 0
let start = document.querySelector('.start')
let stop = document.querySelector('.stop')
let reset = document.querySelector('.reset')
let time = document.querySelector('span')
let interval

reset.addEventListener('click' , () => {
    seconds=0
    mSeconds=0
    minutes=0
    update()
    clearInterval(interval);

})

stop.addEventListener("click" , ()=>{clearInterval(interval)})

start.addEventListener('click' , () => {
    clearInterval(interval)
    interval = setInterval(()=>{
                mSeconds++
                if(mSeconds===100){
                    mSeconds=0
                    seconds++
                }
                if(seconds===60){
                    seconds=0
                    minutes++
                }
                update()

    },10)

})



function update(){
    let s=seconds,ms=mSeconds,m=minutes
    if(mSeconds<10){
        ms="0" + mSeconds
    }
    if(seconds<10){
        s="0" + seconds
    }
    if(minutes<10){
        m="0" + minutes
    }
    time.innerText=`${m}:${s}:${ms}`
}
