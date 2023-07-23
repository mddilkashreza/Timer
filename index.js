const dayElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minuteElemet = document.querySelector(".minutes");
const secondElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");


const seconds = 1000, minute = 60 * seconds,
hours = 60 * minute, day = 24 * hours;


const timerfunction = () =>{


    let now = new Date(),
     dd = String(now.getDate()).padStart(2, "0"),
    mm = String(now.getMonth() + 1).padStart(2, "0"),
    yyyy = now.getFullYear();
    
    const enteredDay = prompt("Enter Day").padStart(2, "0");
    const enteredMonth = prompt("Enter Month").padStart(2, "0");

        now = `${mm}/${dd}/${yyyy}`;

    
    console.log(`${enteredMonth}/${enteredDay}/${yyyy}`);
    let  targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`

    if (now > targetDate){
        targetDate = `${enteredMonth}/${enteredDay}/${yyyy + 1}`;
    }

    setInterval(() =>{
        const timer = new Date(targetDate).getTime();
  const today = new Date().getTime();

  const difference = timer - today;

  const leftDay = Math.floor(difference / day);

  const leftHour = Math.floor((difference % day) / hours);

  const leftMinute = Math.floor((difference % hours) / minute);
  const leftSecond = Math.floor((difference % minute) /seconds);

  dayElement.innerText = leftDay;
  hoursElement.innerText = leftHour;
  minuteElemet.innerText = leftMinute;
  secondElement.innerText = leftSecond;

        if (difference < 0) {
            counterTimer.style.display = "none";
            heading.innerText = "Times up"
        }


    },1000);
};

timerfunction();