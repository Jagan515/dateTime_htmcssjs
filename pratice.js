const updateclock=()=>{
    const now = new Date();
    const year=now.getFullYear();
    const month=now.getMonth().toString().padStart(2,0);
    const day=now.getDate().toString().padStart(2,0);
    const hours=now.getHours().toString().padStart(2,0);
    const minutes=now.getMinutes().toString().padStart(2,0);
    const seconds=now.getSeconds().toString().padStart(2,0);
    const meridian=hours>=12?"PM":"AM";
    const displaydate=`${year}-${month}-${day}`;
    const timeString=`${hours}:${minutes}:${seconds}:${meridian}`;
    const displayTime=document.getElementById('clock');
    const dateString=document.getElementById('date');
    displayTime.textContent=timeString;
    dateString.textContent=displaydate;
}
updateclock();
setInterval(updateclock,1000);