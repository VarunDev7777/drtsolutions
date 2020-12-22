let word_container = document.querySelectorAll('.wordanimate span')
function class_changer(){
    for(let i=0; i<word_container.length; i++){
        let ele = word_container[i];

        if(ele.classList.contains('running') && ele.nextElementSibling){
            ele.classList.replace('running','paused')
            ele.nextElementSibling.classList.replace('paused','running')
            return false;
        } else if(ele.classList.contains('running')){
            ele.classList.replace('running','paused')
            word_container[0].classList.replace('paused','running')
            return false;
        }
    }
}

setInterval(function(){
    class_changer();
},2000)

// GET Json
const JSON_PROBS = `${window.location.origin}/assets/json/front-data.json`
let data_array;
const xhr = new XMLHttpRequest()
xhr.open('GET',JSON_PROBS, true)
xhr.getResponseHeader("content-type", "application/json")
xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest")
xhr.onload = async function() {
    if(this.status == 200) {
        data_array = await JSON.parse(this.response);
        writehtml(data_array)
    }
}
xhr.send()

function writehtml(data){
    data.probs.forEach(ele => {
        let newdiv = document.createElement('div')
        newdiv.classList.add('probs')
        newdiv.innerHTML = `<span class="span-index">${ele.index}</span>\
        <div class="in__probs">\
            <span>${ele.title}</span>\
            <p>${ele.explaination}</p>\
        </div>`
        document.querySelector('.act__probs').append(newdiv)
    });
}

let serviceCardControl = document.querySelectorAll(".service-show")
let servCardcontainer = document.querySelector(".service__cardcon")

function changeservice(funini,index) {
    serviceCardControl.forEach(ele => {
        ele.classList.remove('active')
    })
    funini.classList.add('active')
    if(index==1){
        servCardcontainer.animate([
            {opacity: 0},
            {opacity: 1}
        ],{
            easing: 'ease',
            duration: 1000,
            fill: 'forwards'
        })
        servCardcontainer.scrollBy(2500,0)
    } else {
        servCardcontainer.animate([
            {opacity: 0},
            {opacity: 1}
        ],{
            easing: 'ease',
            duration: 1000,
            fill: 'forwards'
        })
        servCardcontainer.scrollBy(-2500,0)
    }
}

for(let i=0; i<serviceCardControl.length; i++){
    serviceCardControl[i].addEventListener("click",function(){changeservice(serviceCardControl[i],i)})
}