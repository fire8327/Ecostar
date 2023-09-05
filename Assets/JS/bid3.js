/* open&close */
$("#bid3_open, #bid3_close").click(() => {
    $("#bid3").toggleClass("hidden")
    $("body").toggleClass("overflow-hidden")
})


/* clone&delete wastes */
$("#equipment_clone").click(() => {
    let equipmentClone = $(".equipment").first().clone(true)
    equipmentClone.find("#bid3_equipment1").attr('id', 'bid3_equipment' + ($(".equipment").length+1))
    equipmentClone.find("#bid3_shift1").attr('id', 'bid3_shift' + ($(".equipment").length+1))
    equipmentClone.find("#bid3_object1").attr('id', 'bid3_object' + ($(".equipment").length+1))   
    equipmentClone.find(".just-validate-error-label").remove()
    let inputs = equipmentClone.find("input:text")
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].value = '';        
    }    
    equipmentClone.appendTo(".equipments")    
    Validate3()
})

$(".equipment_delete").click((e)=> {
    if($(".equipment").length>1) {
        let target = $(e.target)
        target.parent().parent().remove()
    } else {
        alert("Этот элемент последний, его нельзя удалить!")
    }
    Validate3()
})


/* validate */
const validate_bid3 = new JustValidate('#bid3_form', {
    validateBeforeSubmitting: true,
});
function Validate3() {    
    for (let index = 1; index < $(".material").length+1; index++) {    
        validate_bid3
        .addField(`#bid3_equipment${index}`, [
            {
                rule: 'required',
                errorMessage: 'Поле Название спецтехники/оборудования обязательно к заполнению',
            }  
        ])
        .addField(`#bid3_object${index}`, [
            {
                rule: 'required',
                errorMessage: 'Поле Объект заказчика, адрес, координаты обязательно к заполнению',
            }  
        ])
        .addField(`#bid3_shift${index}`, [
            {
                rule: 'required',
                errorMessage: 'Поле Количество смен обязательно к заполнению',
            },  
            {
                rule: 'customRegexp',
                value: /[0-9]/,      
                errorMessage: 'Поле Количество смен должно содержать только цифры',
            },
        ])
    }
    validate_bid3
    .addField('#bid3_date', [
        {
            rule: 'required',
            errorMessage: 'Поле Дата заключения договора обязательно к заполнению',
        }  
    ])
    .addField('#bid3_fio', [
        {
            rule: 'required',
            errorMessage: 'Поле ФИО обязательно к заполнению',
        }  
    ])
    .addField('#bid3_number', [
        {
            rule: 'required',
            errorMessage: 'Поле Номер телефона обязательно к заполнению',
        }  ,    
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
    .addField('#bid3_orgname', [
        {
            rule: 'required',
            errorMessage: 'Поле Наименование организации обязательно к заполнению',
        }
    ])
    .addField('#bid3_inn', [
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
    .addField('#bid3_kpp', [
        {
            rule: 'required',
            errorMessage: 'Поле КПП обязательно к заполнению',
        },    
        {
            rule: 'customRegexp',
            value: /[0-9]/,      
            errorMessage: 'Поле КПП должно содержать только цифры',
        },
        {
          rule: 'minLength',
          value: 9,      
          errorMessage: 'Поле КПП должно иметь минимум 9 символов',
        }
    ])
    .addField('#bid3_ogrn', [
        {
            rule: 'required',
            errorMessage: 'Поле ОГРН обязательно к заполнению',
        },    
        {
            rule: 'customRegexp',
            value: /[0-9]/,      
            errorMessage: 'Поле ОГРН должно содержать только цифры',
        },
        {
          rule: 'minLength',
          value: 13,      
          errorMessage: 'Поле ОГРН должно иметь минимум 13 символов',
        }
    ])
    .addField('#bid3_badress', [
        {
            rule: 'required',
            errorMessage: 'Поле Юридический адрес обязательно к заполнению',
        }  
    ])
    .addField('#bid3_padress', [
        {
            rule: 'required',
            errorMessage: 'Поле Фактический адрес обязательно к заполнению',
        }  
    ])
    .addField('#bid3_bank', [
        {
            rule: 'required',
            errorMessage: 'Поле Название банка обязательно к заполнению',
        }  
    ])
    .addField('#bid3_rs', [
        {
            rule: 'required',
            errorMessage: 'Поле Рассчетный счет обязательно к заполнению',
        },    
        {
            rule: 'customRegexp',
            value: /[0-9]/,      
            errorMessage: 'Поле Рассчетный счет должно содержать только цифры',
        },
        {
          rule: 'minLength',
          value: 20,      
          errorMessage: 'Поле Рассчетный счет должно иметь минимум 20 символов',
        }
    ])
    .addField('#bid3_bik', [
        {
            rule: 'required',
            errorMessage: 'Поле БИК обязательно к заполнению',
        },    
        {
            rule: 'customRegexp',
            value: /[0-9]/,      
            errorMessage: 'Поле БИК должно содержать только цифры',
        },
        {
          rule: 'minLength',
          value: 9,      
          errorMessage: 'Поле БИК должно иметь минимум 9 символов',
        }
    ])
    .addField('#bid3_ks', [
        {
            rule: 'required',
            errorMessage: 'Поле Корреспондентский счет обязательно к заполнению',
        },    
        {
            rule: 'customRegexp',
            value: /[0-9]/,      
            errorMessage: 'Поле Корреспондентский счет должно содержать только цифры',
        },
        {
          rule: 'minLength',
          value: 20,      
          errorMessage: 'Поле Корреспондентский счет должно иметь минимум 20 символов',
        }
    ])
    .addField('#bid3_orgemail', [
        {
            rule: 'required',
            errorMessage: 'Поле E-mail обязательно к заполнению',
        },  
        {
            rule: 'email',
            errorMessage: 'Поле E-mail заполнено неверно',
        }  
    ])
    .addField('#bid3_orgnumber', [
        {
            rule: 'required',
            errorMessage: 'Поле Номер телефона организации обязательно к заполнению',
        },    
        {
            rule: 'customRegexp',
            value: /[0-9]/,      
            errorMessage: 'Поле Номер телефона организации должно содержать только цифры',
        },
        {
          rule: 'minLength',
          value: 11,      
          errorMessage: 'Поле Номер телефона организации должно иметь минимум 11 символов',
        }
    ]);
}
Validate3()


/* equipments */
let equipments = []
$.getJSON( "Assets/Json/equipments.json", function( data ) {
    $.each( data, function( key, val ) {
        equipments.push(val)            
        $("<option value='" + val.name + "'>" + "</option>").appendTo($("#equipments_list"))
    })    
})


/* submit */
document.getElementById("bid3_form").addEventListener("submit", function (e) {
    e.preventDefault()
    if(validate_bid3.isValid) {
    let date = new Date(this.bid3_date.value)
    let message = `<b>Заявка на аренду спецтехники и оборудования</b>\n`;
    message += `<b>Дата заключения договора:</b> ${date.toLocaleDateString()}\n`;
    message += `<b>-----------------------------------</b>\n`;
    $(".material").each((index, el) => {
        message += `<b>Название спецтехники/оборудования:</b> ${$(el).find("input[name='bid3_equipment']").val()}\n`;
        message += `<b>Количество смен:</b> ${$(el).find("input[name='bid3_shift']").val()}\n`;
        message += `<b>Объект заказчика, адрес, координаты:</b> ${$(el).find("input[name='bid3_object']").val()}\n`;
        message += `<b>-----------------------------------</b>\n`;
    })
    message += `<b>\n\nКонтактное лицо</b>\n`;
    message += `<b>ФИО:</b> ${this.bid3_fio.value}\n`;
    message += `<b>Номер телефона:</b> ${this.bid3_number.value}\n\n\n`;
    message += `<b>Реквизиты организации</b>\n`;
    message += `<b>Наименование организации:</b> ${this.bid3_orgname.value}\n`;
    message += `<b>Генеральный директор:</b> ${this.bid3_director.value}\n`;
    message += `<b>Юридический адрес:</b> ${this.bid3_badress.value}\n`;
    message += `<b>Фактический адрес:</b> ${this.bid3_padress.value}\n`;
    message += `<b>Почтовый адрес:</b> ${this.bid3_postadress.value}\n`;
    message += `<b>ИНН:</b> ${this.bid3_inn.value}\n`;
    message += `<b>КПП:</b> ${this.bid3_kpp.value}\n`;
    message += `<b>ОГРН:</b> ${this.bid3_ogrn.value}\n`;
    message += `<b>Название банка:</b> ${this.bid3_bank.value}\n`;
    message += `<b>Расчетный счет:</b> ${this.bid3_rs.value}\n`;
    message += `<b>БИК:</b> ${this.bid3_bik.value}\n`;
    message += `<b>Корреспондентский счет:</b> ${this.bid3_ks.value}\n`;
    message += `<b>Номер телефона организации:</b> ${this.bid3_orgnumber.value}\n`;
    message += `<b>E-mail:</b> ${this.bid3_orgemail.value}\n`;

    console.log(message);

    axios.post(url, {
        chat_id: chat_id,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.reset()
        $("#bid3_success").show(500)
        setTimeout(() => {
            $("#bid3_success").hide(500)
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