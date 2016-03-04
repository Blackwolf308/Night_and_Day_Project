$(document).ready(function() {
    $('#orb').click(function() {
        if ($('#orb').hasClass('sun')) {
            $('#orb').removeClass('sun').addClass('moon');
        }
        else {
            $('#orb').removeClass('moon').addClass('sun');
        }
        if ($('#sky').hasClass('day')) {
            $('#sky').removeClass('day').addClass('night');
            console.log('its Night');
        }
        else {
            $('#sky').removeClass('night').addClass('day');
            console.log('its Day');
        }
    });
});