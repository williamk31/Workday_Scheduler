
$(function () {
  
  var saveBtn = $('.saveBtn');
  //event listener for the save button, saves text to local storage
  saveBtn.on('click', function (event){
    event.stopPropagation();
    var parentId = $(this).closest(".time-block").attr('id');
    var userInput = $(this).siblings('textarea').val();
    localStorage.setItem(parentId, userInput);
  })

  //updates the class of each time-block based on the current hour
  var currentHour = dayjs().format('H');
  var targetId = "hour-" + currentHour;
  var timeBlock = $('.time-block')
  for (i=0; i<timeBlock.length; i++){
    var currentId = timeBlock[i].id;
    if (currentId === targetId) {
      timeBlock.eq(i).attr('class','row time-block present')
      timeBlock.slice(0, i).attr('class', 'row time-block past')
    } 
  }

 //gets saved text from local storage
  for (var i=9; i<18; i++){
    $('#hour-' + i + ' .description').val(localStorage.getItem('hour-' + i))
  }

  //displays the current date in the header of the page.
  function displayTime() {
    var currentDayEl = $('#currentDay')

    function updateTime() {
      var today = dayjs()
      currentDayEl.text(today.format("dddd, MMMM D YYYY, h:mm a"))
    }
    updateTime();
    setInterval(updateTime, 1000);
  }
  displayTime();
});
