function analog_clock(){
    let sec_strick = document.getElementById("sec");
    let min_strick = document.getElementById("min");
    let hr_strick = document.getElementById("hr");

    let day = new Date();
    let hr = day.getHours();
    let min = day.getMinutes();
    let sec = day.getSeconds();
    console.log(hr)

    let rotation_hr_strick = 30 * hr + min/2;
    let rotation_min_strick = 6 * min;
    let rotation_sec_strick = 6 * sec;

    hr_strick.style.transform = `rotate(${rotation_hr_strick}deg)`;
    min_strick.style.transform = `rotate(${rotation_min_strick}deg)`;
    sec_strick.style.transform = `rotate(${rotation_sec_strick}deg)`;

}

setInterval(()=>{
    analog_clock()
}, 1000)