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
days = counter.children[1].children[0];
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
        
        let tempDate = new Date();

        const inputdate = new Date(`${yeari.value}-${monthi.value}-${dayi.value}`);

        // var msToday = tempDate.getTime();
        // var msDoomsday = inputdate.getTime();

        var msDiff =  tempDate.getTime() - inputdate.getTime();
        console.log(msDiff);

    
        var months = ["Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug","Sep", "Oct", "Nov", "Dec"]

        modal.classList.add('animation');
        setTimeout(()=>{
            bodyofmodal.classList.add('none');
        }, 10)
        youwillbe.innerText = `Your age will be ${(tempDate.getFullYear() - yeari.value) + (1)} on ${dayi.value}/${months[(monthi.value) - 1]}/${tempDate.getFullYear()}`

        month.innerText = `${(msDiff / (1000 * 60 * 60 * 24 * 30))}`
        
        days.innerText = `${msDiff/ (1000 * 60 * 60 * 24)}`
        console.log(dayi.value + " -> it is day")
        console.log(monthi.value + " -> it is month")
        console.log(yeari.value + " -> it is year")

    }

})