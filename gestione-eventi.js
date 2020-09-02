function checkFirstName() {
    //Controllo lunghezza minima
    let msg = document.getElementById("feed1");
    let txt = document.getElementById("exampleInputFirstname");
    
    if(txt.value.length < 6){
        txt.style.color="#ff0000";
        txt.style.borderColor = "#ff0000"; 
        msg.innerHTML = "Sono richiesti almeno 6 caratteri"; 
    }else{
        document.getElementById("svg1").style.opacity=1;
        txt.style.color="#000000";
        txt.style.borderColor = "#00ff00"; 
        msg.innerHTML = ""; 
    }

    //Controllo testo
    let F_output = document.getElementById("exampleInputFirstname").value;
    let n = F_output.match(/0/) || 
            F_output.match(/1/) ||
            F_output.match(/2/) || 
            F_output.match(/3/) || 
            F_output.match(/4/) || 
            F_output.match(/5/) || 
            F_output.match(/6/) || 
            F_output.match(/7/) || 
            F_output.match(/8/) ||
            F_output.match(/9/);
    let wrong_names = Array.isArray(n);
    
    if(wrong_names){
        txt.style.color="#ff0000";
        txt.style.borderColor = "#ff0000";
        document.getElementById("svg1").style.opacity=0;
        msg.innerHTML = "Questo testo non è valido"; 
        //console.log("Questo testo non è valido");
    }
}
let elFirstName = document.getElementById("exampleInputFirstname");
elFirstName.onblur = checkFirstName;



function checkLastName() {
    //Controllo lunghezza minima
    let msg = document.getElementById("feed2");
    let txt = document.getElementById("exampleInputLastname");
    
    if(txt.value.length < 6){
        txt.style.color="#ff0000";
        txt.style.borderColor = "#ff0000"; 
        msg.innerHTML = "Sono richiesti almeno 6 caratteri"; 
    }else{
        document.getElementById("svg2").style.opacity=1;
        txt.style.color="#000000";
        txt.style.borderColor = "#00ff00"; 
        msg.innerHTML = ""; 
    }

    //Controllo testo
    let L_output = document.getElementById("exampleInputLastname").value;
    let n = L_output.match(/0/) || 
            L_output.match(/1/) ||
            L_output.match(/2/) || 
            L_output.match(/3/) || 
            L_output.match(/4/) || 
            L_output.match(/5/) || 
            L_output.match(/6/) || 
            L_output.match(/7/) || 
            L_output.match(/8/) ||
            L_output.match(/9/);
    let wrong_names = Array.isArray(n);
    
    if(wrong_names){
        txt.style.color="#ff0000";
        txt.style.borderColor = "#ff0000";
        document.getElementById("svg2").style.opacity=0;
        msg.innerHTML = "Questo testo non è valido"; 
        //console.log("Questo testo non è valido");
    }
}
let elLastName = document.getElementById("exampleInputLastname");
elLastName.onblur = checkLastName;



function checkMobile() {
    //Controllo lunghezza minima
    let msg = document.getElementById("feed3");
    let txt = document.getElementById("exampleInputMobile");
    
    if(txt.value.length > 10){
        txt.style.color="#ff0000";
        txt.style.borderColor = "#ff0000"; 
        msg.innerHTML = "Il numero telefonico è troppo lungo"; 
    }else{
        document.getElementById("svg3").style.opacity=1;
        txt.style.color="#000000";
        txt.style.borderColor = "#00ff00"; 
        msg.innerHTML = ""; 
    }

    //Controllo testo
    let M_output = document.getElementById("exampleInputMobile").value;
    let M_output_noSpace = M_output.replace(/\s/g, '');
    //console.log(M_output_noSpace);
    let M_output_int = parseInt(M_output);
    //console.log(typeof M_output_int);
    //console.log(Number.isNaN(M_output_int));
    let wrong_mobile = Number.isNaN(M_output_int);
    
    if(wrong_mobile == true){
        txt.style.color="#ff0000";
        txt.style.borderColor = "#ff0000";
        document.getElementById("svg3").style.opacity=0;
        msg.innerHTML = "Questo non è un numero telefonico"; 
        //console.log("Questo testo non è valido");
    }
}
let elMobile = document.getElementById("exampleInputMobile");
elMobile.onblur = checkMobile;



function checkEmail() {
    let msg = document.getElementById("feed4");
    let txt = document.getElementById("exampleInputEmail");

    //Controllo testo
    let EM_output = document.getElementById("exampleInputEmail").value;
    //console.log(EM_output);
    let wrong_mail = EM_output.match(/@/);
    //console.log(wrong_mail);

    if(wrong_mail === null){
        txt.style.color="#ff0000";
        txt.style.borderColor = "#ff0000";
        document.getElementById("svg4").style.opacity=0;
        msg.innerHTML = "Questo non è un indirizzo mail valido"; 
    }else{
        document.getElementById("svg4").style.opacity=1;
        txt.style.color="#000000";
        txt.style.borderColor = "#00ff00"; 
        msg.innerHTML = ""; 
    }
}
let elEmail = document.getElementById("exampleInputEmail");
elEmail.onblur = checkEmail;



function checkPassword() {
    let msg = document.getElementById("feed5");
    let txt = document.getElementById("exampleInputPassword");

    //Controllo lunghezza minima e testo
    if(txt.value.length < 6){
        txt.style.color="#ff0000";
        txt.style.borderColor = "#ff0000"; 
        msg.innerHTML = "Sono richiesti almeno 6 caratteri"; 
    }else if(txt.value === ''){
        txt.style.color="#ff0000";
        txt.style.borderColor = "#ff0000"; 
        msg.innerHTML = "È necessario inserire una password";
    }else{
        document.getElementById("svg5").style.opacity=1;
        txt.style.color="#000000";
        txt.style.borderColor = "#00ff00"; 
        msg.innerHTML = ""; 
    }
}
let elPassword = document.getElementById("exampleInputPassword");
elPassword.onblur = checkPassword;