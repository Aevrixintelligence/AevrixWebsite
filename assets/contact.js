/* Aevrix shared contact modal — used on sub-pages */
(function(){
  "use strict";
  var ov=document.getElementById("cm-ov");
  if(!ov)return;
  var closeBtn=document.getElementById("cm-close");
  var form=document.getElementById("cm-form");
  var submitBtn=document.getElementById("cm-submit");
  var statusEl=document.getElementById("cm-status");
  var interestInput=document.getElementById("cm-interest");

  // Auto-fill "Interested in" from page meta or first <h1>
  var pageInterest=document.documentElement.getAttribute("data-page-name")||"";
  if(interestInput&&pageInterest)interestInput.value=pageInterest;

  window.openContact=function(){
    ov.classList.add("on");
    ov.setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden";
    setTimeout(function(){var n=form.querySelector('input[name="name"]');if(n)n.focus();},250);
  };
  window.closeContact=function(){
    ov.classList.remove("on");
    ov.setAttribute("aria-hidden","true");
    document.body.style.overflow="";
  };

  closeBtn.addEventListener("click",closeContact);
  ov.addEventListener("click",function(e){if(e.target===ov)closeContact();});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&ov.classList.contains("on"))closeContact();});

  function setStatus(msg,kind){
    statusEl.textContent=msg||"";
    statusEl.classList.remove("ok","err");
    if(kind)statusEl.classList.add(kind);
  }

  form.addEventListener("submit",function(e){
    e.preventDefault();
    if(!form.reportValidity())return;
    setStatus("","");
    submitBtn.classList.add("loading");
    submitBtn.disabled=true;
    var lbl=submitBtn.querySelector(".cm-submit-lbl");
    lbl.textContent="Sending…";
    var data=new FormData(form);
    fetch("https://api.web3forms.com/submit",{method:"POST",body:data})
      .then(function(r){return r.json();})
      .then(function(res){
        if(res&&res.success){
          setStatus("Thanks! Your message has been sent. We'll reply within one business day.","ok");
          form.reset();
          if(interestInput&&pageInterest)interestInput.value=pageInterest;
          lbl.textContent="Sent ✓";
          setTimeout(function(){
            closeContact();
            setTimeout(function(){lbl.textContent="Send message";setStatus("","");},400);
          },2200);
        }else{throw new Error((res&&res.message)||"Submission failed");}
      })
      .catch(function(){
        setStatus("Sorry, something went wrong. Please email info@aevrixintelligence.com directly.","err");
        lbl.textContent="Send message";
      })
      .then(function(){
        submitBtn.classList.remove("loading");
        submitBtn.disabled=false;
      });
  });
})();
