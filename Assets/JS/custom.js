/*jshint esnext: true */
/* navigation */
$("#toggler, #overlay, .link").click(()=>{
  $("#menu").toggleClass("max-lg:-translate-y-full")
  $("#menu").toggleClass("max-lg:top-0")
  $("#menu").toggleClass("max-lg:top-[calc(100%+1px)]")
  $("#overlay").toggleClass("hidden")
  $("#toggler").toggleClass("h-5")
  $("#toggler > :nth-child(1)").toggleClass("rotate-45")
  $("#toggler > :nth-child(2)").toggleClass("opacity-0")
  $("#toggler > :nth-child(3)").toggleClass("-rotate-45")
  $("#main").toggleClass("bg-[#1A1A1B]")
  $("body").toggleClass("overflow-hidden")
})

/* scroll */
$('a[href^="#"]').on('click', function() {
  $("body").removeClass("overflow-hidden")
  let href = $(this).attr('href')
    $('html, body').animate({
        scrollTop: $(href).offset().top - 40
    })
  return false
});