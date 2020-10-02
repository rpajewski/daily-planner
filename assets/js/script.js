// load saved tasks
function loadTasks() {

};

// save tasks
$('.saveBtn').click(function() {
    // get task value and time
    var value = $(this).siblings('#value').val();
    var time = $(this).parent().attr('id');

    // save to local storage
    localStorage.setItem(time, value);
});

// display current time on page
function displayDate() { 
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
};

// add classes based on time of day
function hourClass() {
    // pull current hour
    var currentHour = moment().hours();
    // console.log(currentHour);
    // loop over hours add classes accordling
    $('.time-block').each(function() {
        var hourBlock = parseInt($(this).attr('id'));
        // console.log(hourBlock);
        // past
        if (hourBlock < currentHour) {
            $(this).addClass('past');
        }
        // current
        else if (hourBlock === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        }
        // future
        else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });
};

// update interval
setInterval(function(){ 
    // reclass time blocks if needed
    hourClass();
    // display date if changed
    displayDate();
}, 60000);

hourClass();

displayDate();