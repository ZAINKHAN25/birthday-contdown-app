// declare area
bodyofmodal = document.getElementsByClassName('bodyofmodal')[0];
modal = document.getElementsByClassName('modal')[0];
youwillbe = document.getElementsByClassName('youwillbe')[0];
monthi = document.getElementById('monthi');
dayi = document.getElementById('dayi');
yeari = document.getElementById('yeari');
button = document.getElementById("button");
counter = document.getElementsByClassName('counter')[0];
month = counter.children[0].children[0];
hours = counter.children[2].children[0];
// seconds = counter.children[3].children[0];

// adding listener to button
button.addEventListener('click', ()=>{

    const ristrict = document.getElementById("ristrict");
    if(monthi.value == '' || dayi.value == "" || yeari.value == ""){

        setTimeout(() => { 
            ristrict.classList.remove("none") }
            , 000);
        setTimeout(() => { 
            ristrict.classList.add("none") }
            , 2000);
    }

    else{
        
        setInterval(()=>{            
            days = document.querySelector('#day')
        hours = document.querySelector('#hour')
        minutes = document.querySelector('#minutes')
        seconds = document.querySelector('#seconds')
        modal.classList.add('animation');
        setTimeout(()=>{
            bodyofmodal.classList.add('none');
        }, 10)
        var months = ["Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug","Sep", "Oct", "Nov", "Dec"];

        let cdate = new Date();
        let futurefoo = new Date(`${cdate.getFullYear()}-${monthi.value}-${dayi.value}`);


        youwillbe.innerText = `Your age will be ${(cdate.getFullYear() - yeari.value)} on ${dayi.value}/${months[(monthi.value) - 1]}/${cdate.getFullYear()}`
        
        if(futurefoo.getTime() >= cdate.getTime()){
        let diffmilescnd = futurefoo.getTime() - cdate.getTime();

        let dayss = Math.floor(diffmilescnd / 1000 / 60 / 60 / 24);
        days.innerHTML = `${dayss}`
        
        let hourssnum = (Math.floor(diffmilescnd / 1000 / 60 / 60) - (Math.floor(diffmilescnd / 1000 / 60 / 60 / 24) * 24))
        hours.innerHTML = `${hourssnum}`

        let minutessnum = Math.floor(diffmilescnd / 1000 / 60 - (Math.floor(diffmilescnd / 1000 / 60 / 60) * 60))
        minutes.innerHTML = `${minutessnum}`

        let secondssnum = Math.floor(diffmilescnd / 1000) - ((Math.floor(diffmilescnd / 1000 / 60) * 60))
        seconds.innerHTML = `${secondssnum}`}
        else{
            alert("nahi chala")
        }
    },1000)



    }

})