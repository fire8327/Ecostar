/* open&close */
$("#bid1_open, #bid1_close").click(() => {
    $("#bid1").toggleClass("hidden")
    $("body").toggleClass("overflow-hidden")
})


/* clone&delete wastes */
$("#waste_clone").click(() => {
    let wasteClone = $(".waste").first().clone(true)
    wasteClone.find("#bid_waste1").attr('id', 'bid_waste' + ($(".waste").length+1))
    wasteClone.find("#bid_fkko1").attr('id', 'bid_fkko' + ($(".waste").length+1))
    wasteClone.find("#bid_index1").attr('id', 'bid_index' + ($(".waste").length+1))
    wasteClone.find("#bid_V1").attr('id', 'bid_V' + ($(".waste").length+1))
    wasteClone.find("#error_V1").attr('id', 'error_V' + ($(".waste").length+1))
    wasteClone.find("input[name='bid_change_V1']").attr('name', 'bid_change_V' + ($(".waste").length+1))
    wasteClone.find(".just-validate-error-label").remove()
    let inputs = wasteClone.find("input:text")
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].value = '';        
    }    
    wasteClone.appendTo(".wastes")
    Validate()
    updInput()
})

$(".waste_delete").click((e)=> {
    if($(".waste").length>1) {
        let target = $(e.target)
        target.parent().parent().remove()
    } else {
        alert("Этот элемент последний, его нельзя удалить!")
    }
    Validate()
    updInput()
})


/* validate */
const validate_bid1 = new JustValidate('#bid1_form', {
    validateBeforeSubmitting: true,
});
function Validate() {    
    for (let index = 1; index < $(".waste").length+1; index++) {    
        validate_bid1
        .addField(`#bid_waste${index}`, [
            {
                rule: 'required',
                errorMessage: 'Поле Наименование отходов обязательно к заполнению',
            }  
        ])
        .addField(`#bid_fkko${index}`, [
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
        .addField(`#bid_index${index}`, [
            {
                rule: 'customRegexp',
                value: /^[0-9.,]+$/,      
                errorMessage: 'Поле Коэффициент перевода тн/м3 должно содержать только цифры и разделительные знаки ("." , ",")',
            }  
        ])
        .addField(`#bid_V${index}`, [
            {
                rule: 'required',
                errorMessage: 'Поле Объем обязательно к заполнению',
            },
            {
                rule: 'customRegexp',
                value: /^[0-9.,]+$/,      
                errorMessage: 'Поле Объем должно содержать только цифры и разделительные знаки ("." , ",")',
            }  
        ], {
                errorsContainer: `#error_V${index}`,
        })
    }
    validate_bid1
    .addField('#bid_date', [
        {
            rule: 'required',
            errorMessage: 'Поле Дата заключения договора обязательно к заполнению',
        }  
    ])
    .addRequiredGroup(
        '#bid_locate_group',
        'Необходимо выбрать один из вариантов'
    )
    .addField('#bid_object', [
        {
            rule: 'required',
            errorMessage: 'Поле Объект заказчика, адрес, полное наименование обязательно к заполнению',
        }  
    ])
    .addRequiredGroup(
        '#bid_disposal_group',
        'Необходимо выбрать один из вариантов'
    )
    .addRequiredGroup(
        '#bid_transportation_group',
        'Необходимо выбрать один из вариантов'
    )
    .addRequiredGroup(
        '#bid_permission_group',
        'Необходимо выбрать один из вариантов'
    )
    .addRequiredGroup(
        '#bid_eco_group',
        'Необходимо выбрать один из вариантов'
    )
    .addField('#bid_fio', [
        {
            rule: 'required',
            errorMessage: 'Поле ФИО обязательно к заполнению',
        }  
    ])
    .addField('#bid_number', [
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
    .addField('#bid_orgname', [
        {
            rule: 'required',
            errorMessage: 'Поле Наименование организации обязательно к заполнению',
        }
    ])
    .addField('#bid_inn', [
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
    .addField('#bid_kpp', [
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
    .addField('#bid_ogrn', [
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
    .addField('#bid_badress', [
        {
            rule: 'required',
            errorMessage: 'Поле Юридический адрес обязательно к заполнению',
        }  
    ])
    .addField('#bid_padress', [
        {
            rule: 'required',
            errorMessage: 'Поле Фактический адрес обязательно к заполнению',
        }  
    ])
    .addField('#bid_bank', [
        {
            rule: 'required',
            errorMessage: 'Поле Название банка обязательно к заполнению',
        }  
    ])
    .addField('#bid_rs', [
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
    .addField('#bid_bik', [
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
    .addField('#bid_ks', [
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
    .addField('#bid_director', [
        {
            rule: 'required',
            errorMessage: 'Поле Генеральный директор обязательно к заполнению',
        }  
    ])
    .addField('#bid_orgemail', [
        {
            rule: 'required',
            errorMessage: 'Поле E-mail обязательно к заполнению',
        },  
        {
            rule: 'email',
            errorMessage: 'Поле E-mail заполнено неверно',
        }  
    ])
    .addField('#bid_orgnumber', [
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
Validate()


/* wastes&fkko */
let wastes = []
$.getJSON( "Assets/Json/wastes.json", function( data ) {
    $.each( data, function( key, val ) {
        wastes.push(val)            
        $("<option value='" + val.name + "'>" + "</option>").appendTo($("#wastes_list"))
        $("<option value='" + val.fkko + "'>" + "</option>").appendTo($("#fkko_list"))
    })    
})

function setFKKO(value, id) {    
    let waste = null 
    waste = wastes.find((a) => {
        return a.name == value
    })
    if(waste !== undefined) {
        $(`#${id}`).val(waste.fkko) 
    }
}

function setWaste(value, id) {    
    let waste = null 
    waste = wastes.find((a) => {
        return a.fkko == value
    })
    if(waste !== undefined) {
        $(`#${id}`).val(waste.name) 
    }
}

function updInput() {    
    $(".waste").each((index, el) => {
        let waste = $(el).find(".bid_waste")
        let fkko = $(el).find(".bid_fkko")
        $(waste).on("input", function() {
            setFKKO($(waste).val(), $(fkko).attr("id"))
        })
        $(fkko).on("input", function() {
            setWaste($(fkko).val(), $(waste).attr("id"))
        })
    })
}
updInput()


/* radio&label */
function changeRadio() {
    $(".change_v").each((index, el) => {
        if($(el).is(":checked")) {
            $(el).parent().addClass("bg-[#FAFAFA] text-[#1A1A1B]")
        } else {
            $(el).parent().removeClass("bg-[#FAFAFA] text-[#1A1A1B]")
        }
    })
}
changeRadio()
$(".change_v").each((index, el) => {
    $(el).on("change", () => {
        changeRadio()
    })
})


/* submit */
document.getElementById("bid1_form").addEventListener("submit", function (e) {
    e.preventDefault()

    if(validate_bid1.isValid) {
        let date = new Date(this.bid_date.value)
        let message = `<b>Заявка на заключение договора</b>\n`;
        message += `<b>Дата заключения договора: </b> ${date.toLocaleDateString()}\n`;
        message += `<b>Место расположения объекта образования отходов: </b> ${this.bid_locate.value}\n`;
        message += `<b>Объект заказчика, адрес, полное наименование: </b> ${this.bid_object.value}\n\n\n`;
        message += `<b>-----------------------------------</b>\n`;
        $(".waste").each((index, el) => {
            message += `<b>Наименование отходов: </b> ${$(el).find("input[name='bid_waste']").val()}\n`;
            message += `<b>ФККО: </b> ${$(el).find("input[name='bid_fkko']").val()}\n`;
            message += `<b>Коэффициент перевода тн/м3: </b> ${$(el).find("input[name='bid_index']").val()}\n`;
            message += `<b>Объем: </b> ${$(el).find("input[name='bid_V']").val()}${$(el).find("input:radio:checked").val()}\n`;
            message += `<b>-----------------------------------</b>\n`;
        })
        message += `\n\n<b>Договор на утилизацию: </b> ${this.bid_disposal.value}\n`;
        message += `<b>Договор на утилизацию и транспортирование: </b> ${this.bid_transportation.value}\n`;
        message += `<b>Требуется ли открытие РАЗРЕШЕНИЯ на утилизацию и транспортирование: </b> ${this.bid_permission.value}\n`;
        message += `<b>Имеются ли экологические изыскания с лабораторными определениями класса опасности либо протокол биотестирования: </b> ${this.bid_eco.value}\n\n\n`;
        message += `<b>Контактное лицо</b>\n`;
        message += `<b>ФИО: </b> ${this.bid_fio.value}\n`;
        message += `<b>Номер телефона: </b> ${this.bid_number.value}\n\n\n`;
        message += `<b>Реквизиты организации</b>\n`;
        message += `<b>Наименование организации: </b> ${this.bid_orgname.value}\n`;
        message += `<b>ИНН: </b> ${this.bid_inn.value}\n`;
        message += `<b>КПП: </b> ${this.bid_kpp.value}\n`;
        message += `<b>ОГРН: </b> ${this.bid_ogrn.value}\n`;
        message += `<b>Юридический адрес: </b> ${this.bid_badress.value}\n`;
        message += `<b>Фактический адрес: </b> ${this.bid_padress.value}\n`;
        message += `<b>Название банка: </b> ${this.bid_bank.value}\n`;
        message += `<b>Рассчетный счет: </b> ${this.bid_rs.value}\n`;
        message += `<b>БИК: </b> ${this.bid_bik.value}\n`;
        message += `<b>Корреспондентский счет: </b> ${this.bid_ks.value}\n`;
        message += `<b>Генеральный директор: </b> ${this.bid_director.value}\n`;
        message += `<b>E-mail: </b> ${this.bid_orgemail.value}\n`;
        message += `<b>Номер телефона организации: </b> ${this.bid_orgnumber.value}\n`;

        console.log(message);

        axios.post(url, {
            chat_id: chat_id,
            parse_mode: 'html',
            text: message
        })
        .then((res) => {
            this.reset()
        })
        .catch((err) => {
            console.warn(err);
        })
        .finally(() => {
            console.log('Конец');
        })       
    }     
})

