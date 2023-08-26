/* open&close */
$("#bid1_open, #bid1_close").click(() => {
    $("#bid1").toggleClass("hidden")
})


/* clone&delete wastes */
$("#waste_clone").click(() => {
    let wasteClone = $(".waste").first().clone(true)
    let inputs = wasteClone.find("input")
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].value = '';        
    }    
    wasteClone.appendTo(".wastes")
})

$(".waste_delete").click((e)=> {
    if($(".waste").length>1) {
        let target = $(e.target)
        target.parent().parent().remove()
    } else {
        alert("Этот элемент последний, его нельзя удалить!")
    }
})


/* validate */
/* const validate_bid = new JustValidate('#bid1_form', {
    validateBeforeSubmitting: true,
});
validate_bid
  .addField(document.querySelector('.basic_email'), [
    {
      rule: 'required',
      errorMessage: 'Поле Имя обязательно к заполнению',
    }  
  ]); */