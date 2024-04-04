/* Date diff calculation */
document.addEventListener('DOMContentLoaded', function () {
  var dateSpans = document.querySelectorAll('.date-diff');
  dateSpans.forEach(function (dateSpan) {
    let fromDate = new Date(dateSpan.getAttribute('date-from'));
    let toDateAttr = dateSpan.getAttribute('date-to');
    let toDate = toDateAttr ? new Date(toDateAttr) : new Date();

    let diffYears = toDate.getFullYear() - fromDate.getFullYear();
    let diffMonths = toDate.getMonth() - fromDate.getMonth();

    if (diffMonths < 0) {
      diffYears--;
      diffMonths += 12;
    }

    let humanizedDiff = '';
    if (diffYears > 0) {
      humanizedDiff += diffYears + (diffYears === 1 ? 'yr ' : 'yrs ');
    }
    if (diffMonths > 0) {
      humanizedDiff += diffMonths + (diffMonths === 1 ? 'mo' : 'mos');
    }

    dateSpan.textContent = humanizedDiff;
  });
});


/* Safari specific code */

