/* open&close */
$("#bid2_open, #bid2_close").click(() => {
    $("#bid2").toggleClass("hidden")
    $("body").toggleClass("overflow-hidden")
})


/* clone&delete wastes */
$("#material_clone").click(() => {
    let materialClone = $(".material").first().clone(true)
    materialClone.find("#bid2_material1").attr('id', 'bid2_material' + ($(".material").length+1))
    materialClone.find("#bid2_fraction1").attr('id', 'bid2_fraction' + ($(".material").length+1))
    materialClone.find("#bid2_V1").attr('id', 'bid2_V' + ($(".material").length+1))   
    materialClone.find(".just-validate-error-label").remove()
    let inputs = materialClone.find("input:text")
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].value = '';        
    }    
    materialClone.appendTo(".materials")    
    Validate2()
})

$(".material_delete").click((e)=> {
    if($(".material").length>1) {
        let target = $(e.target)
        target.parent().parent().remove()
    } else {
        alert("Этот элемент последний, его нельзя удалить!")
    }
    Validate2()
})


/* validate */
const validate_bid2 = new JustValidate('#bid2_form', {
    validateBeforeSubmitting: true,
});
function Validate2() {    
    for (let index = 1; index < $(".material").length+1; index++) {    
        validate_bid2
        .addField(`#bid2_material${index}`, [
            {
                rule: 'required',
                errorMessage: 'Поле Название материала обязательно к заполнению',
            }  
        ])
        .addField(`#bid2_V${index}`, [
            {
                rule: 'required',
                errorMessage: 'Поле Объем (м³) обязательно к заполнению',
            },  
            {
                rule: 'customRegexp',
                value: /[0-9]/,      
                errorMessage: 'Поле Объем (м³) должно содержать только цифры',
            },
        ])
        .addField(`#bid2_fraction${index}`, [
            {
                rule: 'customRegexp',
                value: /^[0-9-]+$/,      
                errorMessage: 'Поле Фракция должно содержать только цифры и разделительные знаки ("-")',
            }  
        ])
    }
    validate_bid2
    .addField('#bid2_date', [
        {
            rule: 'required',
            errorMessage: 'Поле Дата заключения договора обязательно к заполнению',
        }  
    ])
    .addField('#bid2_delivery', [
        {
            rule: 'required',
            errorMessage: 'Поле Адрес доставки обязательно к заполнению',
        }  
    ])
    .addField('#bid2_fio', [
        {
            rule: 'required',
            errorMessage: 'Поле ФИО обязательно к заполнению',
        }  
    ])
    .addField('#bid2_number', [
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
    .addField('#bid2_orgname', [
        {
            rule: 'required',
            errorMessage: 'Поле Наименование организации обязательно к заполнению',
        }
    ])
    .addField('#bid2_inn', [
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
    .addField('#bid2_kpp', [
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
    .addField('#bid2_ogrn', [
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
    .addField('#bid2_badress', [
        {
            rule: 'required',
            errorMessage: 'Поле Юридический адрес обязательно к заполнению',
        }  
    ])
    .addField('#bid2_padress', [
        {
            rule: 'required',
            errorMessage: 'Поле Фактический адрес обязательно к заполнению',
        }  
    ])
    .addField('#bid2_bank', [
        {
            rule: 'required',
            errorMessage: 'Поле Название банка обязательно к заполнению',
        }  
    ])
    .addField('#bid2_rs', [
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
    .addField('#bid2_bik', [
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
    .addField('#bid2_ks', [
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
    .addField('#bid2_orgemail', [
        {
            rule: 'required',
            errorMessage: 'Поле E-mail обязательно к заполнению',
        },  
        {
            rule: 'email',
            errorMessage: 'Поле E-mail заполнено неверно',
        }  
    ])
    .addField('#bid2_orgnumber', [
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
Validate2()


/* materials */
let materials = []
$.getJSON( "Assets/Json/materials.json", function( data ) {
    $.each( data, function( key, val ) {
        materials.push(val)            
        $("<option value='" + val.name + "'>" + "</option>").appendTo($("#materials_list"))
    })    
})


/* submit */
document.getElementById("bid2_form").addEventListener("submit", function (e) {
        e.preventDefault()

        let date = new Date(this.bid2_date.value)
        let message = `<b>Заявка на поставку нерудных материалов</b>\n`;
        message += `<b>Дата заключения договора:</b> ${date.toLocaleDateString()}\n`;
        message += `<b>Адрес доставки:</b> ${this.bid2_delivery.value}\n`;
        message += `<b>-----------------------------------</b>\n`;
        $(".material").each((index, el) => {
            message += `<b>Название материала:</b> ${$(el).find("input[name='bid2_material']").val()}\n`;
            message += `<b>Фракция:</b> ${$(el).find("input[name='bid2_fraction']").val()}\n`;
            message += `<b>Объем (м³):</b> ${$(el).find("input[name='bid2_V']").val()}\n`;
            message += `<b>-----------------------------------</b>\n`;
        })
        message += `<b>\n\nКонтактное лицо</b>\n`;
        message += `<b>ФИО:</b> ${this.bid2_fio.value}\n`;
        message += `<b>Номер телефона:</b> ${this.bid2_number.value}\n\n\n`;
        message += `<b>Реквизиты организации</b>\n`;
        message += `<b>Наименование организации:</b> ${this.bid2_orgname.value}\n`;
        message += `<b>Генеральный директор:</b> ${this.bid2_director.value}\n`;
        message += `<b>Юридический адрес:</b> ${this.bid2_badress.value}\n`;
        message += `<b>Фактический адрес:</b> ${this.bid2_padress.value}\n`;
        message += `<b>Почтовый адрес:</b> ${this.bid2_postadress.value}\n`;
        message += `<b>ИНН:</b> ${this.bid2_inn.value}\n`;
        message += `<b>КПП:</b> ${this.bid2_kpp.value}\n`;
        message += `<b>ОГРН:</b> ${this.bid2_ogrn.value}\n`;
        message += `<b>Название банка:</b> ${this.bid2_bank.value}\n`;
        message += `<b>Расчетный счет:</b> ${this.bid2_rs.value}\n`;
        message += `<b>БИК:</b> ${this.bid2_bik.value}\n`;
        message += `<b>Корреспондентский счет:</b> ${this.bid2_ks.value}\n`;
        message += `<b>Номер телефона организации:</b> ${this.bid2_orgnumber.value}\n`;
        message += `<b>E-mail:</b> ${this.bid2_orgemail.value}\n`;

        console.log(message);

        axios.post(url, {
            chat_id: chat_id,
            parse_mode: 'html',
            text: message
        })
        .then((res) => {
            this.reset()
            $("#bid2_success").show(500)
            setTimeout(() => {
                $("#bid2_success").hide(500)
            }, 3000);
        })
        .catch((err) => {
            console.warn(err);
        })
        .finally(() => {
            console.log('Конец');
        })       
    }     
)