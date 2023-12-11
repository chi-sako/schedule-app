const dateFormat = (today, format) => {
   format = format.replace("YYYY", today.getFullYear());
   format = format.replace("MM", ("0"+(today.getMonth() + 1)).slice(-2));
   format = format.replace("DD", ("0"+ today.getDate()).slice(-2));
   return format;
}

const today = new Date();
console.log(today)
const day = dateFormat(today,'YYYY-MM-DD');
const field = document.getElementById(addDate);
field.value = day;
field.setAttribute("min", day);
