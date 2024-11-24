const modeToggle=document.querySelector(".mode-toggle"),
      modeText=document.querySelector("#mode-text"),
      nav=document.querySelector("nav"),
      toggle=document.querySelector(".toggle"),
      search=document.querySelector(".search"),
      modeIcon=document.querySelector(".mode-icon"),
      headerText=document.querySelector(".header-text"),
      container=document.querySelector(".container"),
      header=document.querySelector("header")

modeToggle.addEventListener("click",()=>{   
    document.body.classList.toggle("dark-mode")   
    modeText.textContent=modeText.textContent=="Dark Mode"
                        ?"Light Mode"
                        :"Dark Mode"   
})

modeIcon.addEventListener("click",()=>{   
    document.body.classList.toggle("dark-mode")   
})

toggle.onclick=()=>{
   nav.classList.toggle("nav-left")
   headerText.classList.toggle("hide")
   search.classList.toggle("hide")
   modeText.classList.toggle("hide")
   modeToggle.classList.toggle("hide")
   header.style.gap="0"
   container.style.width="calc(100% - 60px)";
}
