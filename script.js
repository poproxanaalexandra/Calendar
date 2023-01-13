const date = new Date();

console.log(date.getDate());

const renderCalendar = () => {

  
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

 const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const USHolidays = [
    "1.1",
    "16.4",
    "17.4",
    "29.5",
    "4.7",
    "4.9",
    "23.11",
    "24.11",
    "24.12",
    "25.12",
    "26.12",
  ];

  

    
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class = "prev-date"> ${prevLastDay - x + 1} </div>`;
  }

 

  for (let i = 1; i <= lastDay; i++) {    
    if (i===1 && (date.getMonth()+1)===1) {
      days += `<div class="holiday">      
      ${i}
      <span class="tooltiptext"> New Year </span>
      </div>`;} else 

    if (i===16 && (date.getMonth()+1)===4) {
        days += `<div class="holiday">      
        ${i}
        <span class="tooltiptext"> Orthodox Easter </span>
        </div>`;} else
    
    if (i===17 && (date.getMonth()+1)===4) {
      days += `<div class="holiday">      
      ${i}
      <span class="tooltiptext"> Orthodox Easter </span>
      </div>`;} else
    
    if (i===29 && (date.getMonth()+1)===5) {
      days += `<div class="holiday">      
      ${i}
      <span class="tooltiptext"> Memorial Day </span>
      </div>`;
    }else
    if  (i===4 && (date.getMonth()+1)===7) {
      days += `<div class="holiday">      
      ${i}
      <span class="tooltiptext"> Independence Day </span>
      </div>`;
    }else
    if  (i===4 && (date.getMonth()+1)===9) {
      days += `<div class="holiday">      
      ${i}
      <span class="tooltiptext"> Labor Day </span>
      </div>`;
    } else
    
    if (i===23 && (date.getMonth()+1)===11) {
      days += `<div class="holiday">      
      ${i}
      <span class="tooltiptext"> Thanksgiving </span>
      </div>`;
    }else 
    
    if (i===24 && (date.getMonth()+1)===11) {
      
        days += `<div class="holiday">      
        ${i}
        <span class="tooltiptext"> Thankgiving </span>
        </div>`;
      
    }else
    if  (i===24 && (date.getMonth()+1)===12){
      days += `<div class="holiday">      
      ${i}
      <span class="tooltiptext"> Christmas Eve </span>
      </div>`;
    } else
    if (i===25 && (date.getMonth()+1)===12) {
      days += `<div class="holiday">      
      ${i}
      <span class="tooltiptext"> Christmas Day </span>
      </div>`;
    }else
    if (i===26 && (date.getMonth()+1)===12){
      days += `<div class="holiday">      
      ${i}
      <span class="tooltiptext"> Christmas 2nd Day </span>
      </div>`;
    }else
      
      if (i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }}
  

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date"> ${j}</div>`;
  }
  monthDays.innerHTML = days;
};

   

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});
document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});


var parties = {};
    async function populatePartiesList() {
      let url = "https://calendar-78bbb-default-rtdb.europe-west1.firebasedatabase.app/"
      var response = await fetch(url + ".json");
      parties = await response.json();
     
      let party = document.getElementById('select');
    for (let i in parties.parties) {
       party.innerHTML +=
      `<a class="dropdown-item" href="../party.html?id=${i}" style="font-size: 1.5rem"> ${parties.parties[i].name} </a>`
          }
      //* de pus aici in # linkul pentru fiecare party in parte
      //* de modificat culori 
  }
 function depopulatePartiesList() {
  let party = document.getElementById('select');
    for (let i in parties.parties) {
       party.innerHTML ="";
  }
}


renderCalendar();
