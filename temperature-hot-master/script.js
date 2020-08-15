
let btn=document.getElementById('btn');
btn.addEventListener('click', ()=>{
    const inputVal=document.getElementById('inp');
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputVal.value+"&units=metric&appid=8bb477a013acaa1df17d3d65208b2880")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const getCityName=data['name'];
        const tempValue=data['main']['temp'];
        const cloudData=data['weather'][0]['description'];
        const iconUrl="https://openweathermap.org/img/wn/"+data.weather[0].icon +"@2x.png";
      
        document.getElementById('cityName').innerHTML=getCityName;
        document.getElementById('deg').innerHTML=tempValue;
        document.getElementById('icon').setAttribute('src', iconUrl);
        document.getElementById('lead').innerHTML=cloudData;
    
    }).catch(error =>console.log("Worng"));
})

const showDate= document.getElementById('show-time');
const currentTime=new Date();
const options={
    weekday:'long',
    day:'numeric',
    month:'long'
}
const myDate=currentTime.toDateString(options);

showDate.innerHTML=myDate;
