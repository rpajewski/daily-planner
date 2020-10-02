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
        // past
        if (hourBlock < currentHour) {
            $(this).addClass('past');
        }
        // current
        else if (hourBlock === currentHour) {
            $(this).addClass('present');
        }
        // future
        else {
            $(this).addClass('future');
        }
    });
};

hourClass();

displayDate();
