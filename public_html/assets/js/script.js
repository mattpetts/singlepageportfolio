function getRating(name, number){
    var elem = document.getElementById(name);
    elem.style.width = number + '%';
}

function resetRating(name, number){
    var elem = document.getElementById(name);
    elem.style.width = number + '%';
}

var names = ['html', 'css', 'js', 'php', 'sass', 'react', 'laravel', 'grunt', 'gulp', 'git', 'npm'];
var skillLevels = ['80' , '90' , '60', '60', '50', '30', '40', '30', '40', '80', '50'];


$(window).scroll(function() {
    var top_of_element = $("#skills").offset().top;
    var bottom_of_element = $("#skills").offset().top + $("#skills").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        setTimeout(function() { 
            for (var i = 0; i < names.length; i++){
                getRating(names[i], skillLevels[i]);
            }
        }, 500);
    } else {
        setTimeout(function() { 
            for (var i = 0; i < names.length; i++){
                resetRating(names[i], 0);
            }
        }, 500);
    }
});