
$(document).ready(function () {


// badges effects

 $('#html').popover({
        trigger:'hover',
        content:"HTML 5",
        placement:'top'
    });
$('#css').popover({
        trigger:'hover',
        content:"CSS 3",
        placement:'top'
    });
$('#js').popover({
        trigger:'hover',
        content:"JavaScript",
        placement:'top'
    });
$('#jquery').popover({
        trigger:'hover',
        content:"JQUERY",
        placement:'top'
    });
$('#ruby').popover({
        trigger:'hover',
        content:"Ruby",
        placement:'top'
    });
$('#rails').popover({
        trigger:'hover',
        content:"Rails",
        placement:'top'
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
        content:"Git",
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

$('#pmp').popover({
        trigger:'hover',
        content:"Project Management Professional",
        placement:'bottom'
    });

// tabs effects


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