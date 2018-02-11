
$(document).ready(function () {
 $('#html').popover({
        trigger:'hover',
        content:"HTML 5",
        placement:'bottom'
    });
$('#css').popover({
        trigger:'hover',
        content:"CSS 3",
        placement:'bottom'
    });
$('#js').popover({
        trigger:'hover',
        content:"JavaScript",
        placement:'bottom'
    });
$('#jquery').popover({
        trigger:'hover',
        content:"JQUERY",
        placement:'bottom'
    });
$('#ruby').popover({
        trigger:'hover',
        content:"Ruby",
        placement:'bottom'
    });
$('#rails').popover({
        trigger:'hover',
        content:"Rails",
        placement:'bottom'
    });
$('#sql').popover({
        trigger:'hover',
        content:"SQL",
        placement:'bottom'
    });
$('#postgresql').popover({
        trigger:'hover',
        content:"Postgresql",
        placement:'bottom'
    });
$('#git').popover({
        trigger:'hover',
        content:"Git5",
        placement:'bottom'
    });
$('#bootstrap').popover({
        trigger:'hover',
        content:"Bootstrap",
        placement:'bottom'
    });
$('#photoshop').popover({
        trigger:'hover',
        content:"Photoshop",
        placement:'bottom'
    });


 $aboutMeTab = $("#about-me-tab");
 $aboutMe = $("#about-me");
 $resumeTab = $("#resume-tab");
 $resume = $("#resume");
 $portfolioTab = $("#portfolio-tab");
 $portfolio = $("#portfolio");
 $testimonialsTab = $("#testimonials-tab");
 $testimonials = $("#testimonials");

    $aboutMe.hide();
    $resume.hide();
    $portfolio.hide();
    $testimonials.hide();


    $aboutMeTab.on("click", function(){
        $aboutMe.show();
        $resume.hide();
        $portfolio.hide();
        $testimonials.hide();

        $('html,body').animate({
        scrollTop: $aboutMe.offset().top},
        'slow');

    });


    $resumeTab.on("click", function(){
        $resume.show();
        $aboutMe.hide();
        $portfolio.hide();
        $testimonials.hide();

        $('html,body').animate({
        scrollTop: $resume.offset().top},
        'slow');

    });

    $portfolioTab.on("click", function(){
        $portfolio.show();
        $resume.hide();
        $aboutMe.hide();
        $testimonials.hide();

        $('html,body').animate({
        scrollTop: $portfolio.offset().top},
        'slow');

    });

    $testimonialsTab.on("click", function(){
        $testimonials.show();
        $resume.hide();
        $aboutMe.hide();
        $portfolio.hide();

        $('html,body').animate({
        scrollTop: $testimonials.offset().top},
        'slow');

    });

 });