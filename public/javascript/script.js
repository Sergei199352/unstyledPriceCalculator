function calculatePrice() {
    var s = document.getElementById("salary").value;
    var d = document.getElementById("days").value;
    console.log("Calculating price")
    console.log(s)
    console.log(d)
    let finalPrice = 0;
    dailyRate = s/365;
    finalPrice = dailyRate * d;

    document.getElementById("finalPrice").innerHTML = "£"+roundToNearest50(finalPrice );
  }
  function roundToNearest50(num) {
    return Math.round(num / 50) * 50;
}
function storeQuote() {
  var quoteName = document.getElementById('quoteName').value;
  var salary = document.getElementById('salary').value;
  var days = document.getElementById('days').value;

  // Data to be sent in the POST request
  var data = {
      quoteName: quoteName,
      salary: salary,
      days: days
  };

  // Make a POST request to the server
  $.ajax({
      type: 'POST',
      url: '/storequote',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function(response) {
          console.log('Quote Name:', response);
          alert('Quote stored successfully with name: ' + response);
      },
      error: function(xhr, status, error) {
          console.error('Error storing quote:', error);
          alert('Error storing quote. Please try again.');
      }
  });
}
