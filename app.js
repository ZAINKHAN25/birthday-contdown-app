bodyofmodal = document.getElementsByClassName('bodyofmodal')[0];
modal = document.getElementsByClassName('modal')[0];
monthi = document.getElementById('monthi');
dayi = document.getElementById('dayi');
yeari = document.getElementById('yeari');
button = document.getElementById("button");

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
        modal.classList.add('animation');
        setTimeout(()=>{
            bodyofmodal.classList.add('none');
        }, 1000)
    }

})