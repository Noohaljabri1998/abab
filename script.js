var action = document.querySelectorAll(".actions .btn");
action.forEach((btn) => {
  btn.addEventListener("click",()=>{
    action.forEach((b)=>{
       b.classList.remove("active"); 
    })
    btn.classList.add("active");
  });
});

function copy() {
  var copyText = document.getElementById("list-of-musqus");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  document.execCommand("copy");
  alert("تم نسخ النص");
}
