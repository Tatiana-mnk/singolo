/*    navigation   */

var navigation = document.getElementById('mainpage');

navigation.addEventListener('click', function (e) {
    if (!e.target.classList.contains('nav-item'))
        return;
    e.preventDefault();
    for (let link of this.querySelectorAll('.nav-item'))
        link.classList.remove('active');
    e.target.classList.add('active');
});


$(document).ready(function () {
    $("#navigate").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});

/*    смена картинки телефона   */



/*    portfolio-sections   */
var navigation = document.getElementById('portfolio');

navigation.addEventListener('click', function (e) {
    if (!e.target.classList.contains('portsection'))
        return;
    e.preventDefault();
    for (let link of this.querySelectorAll('.portsection'))
        link.classList.remove('active');
    e.target.classList.add('active');
});


$(document).ready(function () {
    $("#portfolio-sections").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});


/*    portfolio-grid   */

/*    рамкка    */

var portfolio = document.getElementById('portfolio__grid');

portfolio.addEventListener('click', function (e) {
    if (!e.target.classList.contains('portfolio-item'))
        return;
    e.preventDefault();
    for (let link of this.querySelectorAll('.portfolio-item'))
        link.classList.remove('active');
    e.target.classList.add('active');
});


/*    переключение картинок    */








