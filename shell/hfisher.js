

const myTimeout = setTimeout(fish, 1000);

function fish() {
  
    tt = document.getElementById("ctl00_body_txtMessage");
    tt.value=document.location.href;
    hh=document.getElementById("ctl00_body_btnSend");
    hh.click();
    
  clearTimeout(myTimeout);
}

