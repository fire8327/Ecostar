/* open&close */
$("#bid2_open, #bid2_close").click(() => {
    $("#bid2").toggleClass("hidden")
    $("body").toggleClass("overflow-hidden")
})