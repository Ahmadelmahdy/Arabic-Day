var week = [
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعه",
    "السبت"
  ],
  month = [
    "يناير",
    "فبراير",
    "مارس",
    "ابريل",
    "مايو",
    "يونيو",
    "يوليو",
    "اغسطس",
    "سبتمبر",
    "اكتوبر",
    "نوفمبر",
    "ديسمبر"
  ],
  date = new Date(),
  day = document.getElementById("day"),
  monthtext = document.getElementById("month"),
  daynum = document.getElementById("daynum"),
  year = document.getElementById("year");

day.innerHTML = week[date.getDay()];
monthtext.innerHTML = month[date.getMonth()];
daynum.innerHTML = date.getDate();
year.innerHTML = date.getFullYear();
