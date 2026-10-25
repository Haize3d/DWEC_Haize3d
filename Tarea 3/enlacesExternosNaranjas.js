let enlaces = [];
enlaces = document.querySelectorAll("a");

for(let i=0; i<enlaces.length; i++)
{
    if(enlaces[i].getAttribute("href").includes("://"))
    {
        //enlaces[i].style.color = "orange";
        enlaces[i].classList.add("externo");
    }
}