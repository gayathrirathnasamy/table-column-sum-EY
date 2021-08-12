const rowsToCount = document.getElementsByClassName("num");

const summation = () => {
  let sum = 0;
  for (let i = 0; i < rowsToCount.length; i++) {
    sum += parseInt(rowsToCount[i].innerText);
  }
  return sum;
};

document.getElementById("sum").innerText = summation();
