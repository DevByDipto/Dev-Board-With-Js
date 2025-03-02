const completedBtns = document.querySelectorAll(".completed-btn");
const taskAssigned = document.getElementById("task-assigned");
const completedTask = document.getElementById("completed-task");
const activityContainer = document.getElementById("activity-container");
const weekDay = document.getElementById("weekday");
const monthDayYear = document.getElementById("month-day-year");
const clearHistoryBtn = document.getElementById("clear-history-btn");
const themeBtn = document.getElementById("theme-btn");
let totalBtn = 6;

const date = new Date();
const currenWeekDay = date.toLocaleDateString("en-US", { weekday: "short" });
const currenMonthDayYear = date
  .toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  })
  .replace(",", "");
weekDay.innerText = `${currenWeekDay},`;
monthDayYear.innerText = currenMonthDayYear;

for (const completedBtn of completedBtns) {
  completedBtn.addEventListener("click", function (e) {
    const date = new Date();
    alert("Board Updated Successfully");
    taskAssigned.innerText = parseInt(taskAssigned.innerText) - 1;
    completedTask.innerText = parseInt(completedTask.innerText) + 1;
    const taskName =
      completedBtn.parentElement.parentElement.children[1].innerText;
    completedBtn.setAttribute("disabled", true);
    activityContainer.innerHTML += `<div class=" px-6 pt-6">
    <h4 class="bg-[#F4F7FF] p-3 rounded-lg text-[#000000be]">You have Complete The Task ${taskName} at ${date.toLocaleTimeString()}</h4>
 </div>`;

    totalBtn = totalBtn - 1;
    if (totalBtn === 0) {
      alert("Congrates!!!you have completed all current task");
    }
  });
}

clearHistoryBtn.addEventListener("click", function () {
  activityContainer.innerHTML = "";
});

themeBtn.addEventListener("click", function () {
  let time = parseInt(Math.random() * 1000000);
  document.querySelector("body").classList.value = "";
  document.querySelector("body").classList.add(`bg-[#${time}]`);
});
