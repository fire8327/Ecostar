/* open&close */
$("#coupons_open, #coupons_close").click(() => {
    $("#coupons").toggleClass("hidden")
    $("body").toggleClass("overflow-hidden")
})


/* clone&delete coupons */
$("#coupons_clone").click(() => {
    let couponClone = $(".coupon").first().clone(true)
    couponClone.find("#coupons_waste1").attr('id', 'coupons_waste' + ($(".coupon").length+1))
    couponClone.find("#coupons_fkko1").attr('id', 'coupons_fkko' + ($(".coupon").length+1))
    couponClone.find("#coupons_V1").attr('id', 'coupons_V' + ($(".coupon").length+1))
    couponClone.find("#error_coupons_V1").attr('id', 'error_coupons_V' + ($(".coupon").length+1))
    couponClone.find("#coupons_nominal1").attr('id', 'coupons_nominal' + ($(".coupon").length+1))
    couponClone.find("#error_coupons_nominal1").attr('id', 'error_coupons_nominal' + ($(".coupon").length+1))
    couponClone.find("input[name='coupons_change_V1']").attr('name', 'coupons_change_V' + ($(".coupon").length+1))
    couponClone.find("input[name='coupons_change_nominal_V1']").attr('name', 'coupons_change_nominal_V' + ($(".coupon").length+1))
    couponClone.find(".just-validate-error-label").remove()
    let inputs = couponClone.find("input:text")
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].value = '';        
    }    
    couponClone.appendTo(".coupons")
    ValidateCoupons()
    updInput2()
})

$(".coupons_delete").click((e)=> {
    if($(".coupon").length>1) {
        let target = $(e.target)
        target.parent().parent().remove()
    } else {
        alert("Этот элемент последний, его нельзя удалить!")
    }
    ValidateCoupons()
    updInput2()
})


/* validate */
const validate_coupons = new JustValidate('#coupons_form', {
    validateBeforeSubmitting: true,
});
function ValidateCoupons() {    
    for (let index = 1; index < $(".waste").length+1; index++) {    
        validate_coupons
        .addField(`#coupons_waste${index}`, [
            {
                rule: 'required',
                errorMessage: 'Поле Наименование отхода обязательно к заполнению',
            }  
        ])
        .addField(`#coupons_fkko${index}`, [
            {
                rule: 'required',
                errorMessage: 'Поле ФККО обязательно к заполнению',
            },  
            {
                rule: 'customRegexp',
                value: /[0-9]/,      
                errorMessage: 'Поле ФККО должно содержать только цифры',
            },
        ])
        .addField(`#coupons_V${index}`, [
            {
                rule: 'required',
                errorMessage: 'Поле  обязательно к заполнению',
            },
            {
                rule: 'customRegexp',
                value: /^[0-9.,]+$/,      
                errorMessage: 'Поле Общий объем (м³/тн) должно содержать только цифры и разделительные знаки ("." , ",")',
            }  
        ], {
                errorsContainer: `#error_coupons_V${index}`,
        })
        .addField(`#coupons_nominal${index}`, [
            {
                rule: 'required',
                errorMessage: 'Поле Номинал талона (м³/тн) обязательно к заполнению',
            },
            {
                rule: 'customRegexp',
                value: /^[0-9.,]+$/,      
                errorMessage: 'Поле Номинал талона (м³/тн) должно содержать только цифры и разделительные знаки ("." , ",")',
            }  
        ], {
                errorsContainer: `#error_coupons_nominal${index}`,
        })
    }
    validate_coupons
    .addField('#coupons_date', [
        {
            rule: 'required',
            errorMessage: 'Поле Дата подачи заявки обязательно к заполнению',
        }  
    ])
    .addField('#coupons_orgname', [
        {
            rule: 'required',
            errorMessage: 'Поле Наименование организации обязательно к заполнению',
        }  
    ])
    .addField('#coupons_inn', [
        {
            rule: 'required',
            errorMessage: 'Поле ИНН обязательно к заполнению',
        },  
        {
            rule: 'customRegexp',
            value: /[0-9]/,      
            errorMessage: 'Поле ИНН должно содержать только цифры',
        },
        {
          rule: 'minLength',
          value: 10,      
          errorMessage: 'Поле ИНН должно иметь минимум 10 символов',
        } 
    ])
    .addField('#coupons_contract', [
        {
            rule: 'required',
            errorMessage: 'Поле Номер договора обязательно к заполнению',
        }  
    ])
    .addField('#coupons_fio', [
        {
            rule: 'required',
            errorMessage: 'Поле ФИО обязательно к заполнению',
        }  
    ])
    .addField('#coupons_number', [
        {
            rule: 'required',
            errorMessage: 'Поле Номер телефона обязательно к заполнению',
        },  
        {
            rule: 'customRegexp',
            value: /[0-9]/,      
            errorMessage: 'Поле Номер телефона должно содержать только цифры',
        },
        {
          rule: 'minLength',
          value: 11,      
          errorMessage: 'Поле Номер телефона должно иметь минимум 11 символов',
        }  
    ])
    .addRequiredGroup(
        '#coupons_expense_group',
        'Необходимо выбрать один из вариантов'
    );    
}
ValidateCoupons()
$("input[name='coupons_expense']").on("change", ()=> {
    if($("input[name='coupons_expense']:checked").val() == "Нет") {
        $("#account").removeClass("hidden");
        validate_coupons
        .addField('#coupons_account', [
            {
                rule: 'required',
                errorMessage: 'Поле Номер счёта (при наличии) обязательно к заполнению',
            },  
            {
                rule: 'customRegexp',
                value: /[0-9]/,      
                errorMessage: 'Поле Номер счёта должно содержать только цифры',
            }
        ]);
    } else {
        $("#account").addClass("hidden")
    }
})


function updInput2() {    
    $(".coupon").each((index, el) => {
        let waste = $(el).find(".coupons_waste")
        let fkko = $(el).find(".coupons_fkko")
        $(waste).on("input", function() {
            setFKKO($(waste).val(), $(fkko).attr("id"))
        })
        $(fkko).on("input", function() {
            setWaste($(fkko).val(), $(waste).attr("id"))
        })
    })
}
updInput2()


/* submit */
document.getElementById("coupons_form").addEventListener("submit", function (e) {
    e.preventDefault()
    if(validate_coupons.isValid) {
    let v1, v2    
    let date = new Date(this.coupons_date.value)
    let message = `<b>Заявка на изготовление талонов</b>\n`;
    message += `<b>Дата подачи заявки:</b> ${date.toLocaleDateString()}\n`;
    message += `<b>Наименование организации:</b> ${this.coupons_orgname.value}\n`;
    message += `<b>ИНН:</b> ${this.coupons_inn.value}\n`;
    message += `<b>Номер договора:</b> ${this.coupons_contract.value}\n`;
    message += `<b>-----------------------------------</b>\n`;
    $(".coupon").each((index, el) => {
        message += `<b>Наименование отходов (как в договоре):</b> ${$(el).find("input[name='coupons_waste']").val()}\n`;
        message += `<b>ФККО:</b> ${$(el).find("input[name='coupons_fkko']").val()}\n`;
        v1 = $(el).find(`input[name='coupons_change_V${index+1}']:checked`).val()
        v2 = $(el).find(`input[name='coupons_change_nominal_V${index+1}']:checked`).val()
        message += `<b>Общий объем (м³/тн):</b> ${$(el).find("input[name='coupons_V']").val()}${v1}\n`;
        message += `<b>Номинал талона (м³/тн):</b> ${$(el).find("input[name='coupons_nominal']").val()}${v2}\n`;
        message += `<b>-----------------------------------</b>\n`;
    })
    message += `\n\n<b>Контактное лицо</b>\n`;
    message += `<b>ФИО:</b> ${this.coupons_fio.value}\n`;
    message += `<b>Номер телефона:</b> ${this.coupons_number.value}\n\n\n`;
    message += `<b>Необходимо выставить счёт:</b> ${this.coupons_expense.value}\n`;
    message += `<b>Номер счёта:</b> ${this.coupons_account.value}\n`;
    if(this.coupons_desired.value) {
        let date2 = new Date(this.coupons_desired.value)
        message += `<b>Желаемые сроки получения талонов:</b> ${date2}\n`;
    } else {
        message += `<b>Желаемые сроки получения талонов:</b> \n`;

    }
    message += `<b>Примечания/дополнения по заявке:</b> ${this.coupons_optional.value}\n`;

    console.log(message);

    axios.post(url, {
        chat_id: chat_id,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.reset()
        $("#coupons_success").show(500)
        setTimeout(() => {
            $("#coupons_success").hide(500)
        }, 3000);
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() => {
        console.log('Конец');
    })       
}     
})
