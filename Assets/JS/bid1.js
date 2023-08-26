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
    wasteClone.find("#bid_vgroup1").attr('id', 'bid_vgroup' + ($(".waste").length+1))
    wasteClone.find("#bid_vgroup1_1").attr('id', 'bid_vgroup' + ($(".waste").length+1)+'_1')
    wasteClone.find("#bid_vgroup1_2").attr('id', 'bid_vgroup' + ($(".waste").length+1)+'_2')
    let inputs = wasteClone.find("input")
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].value = '';        
    }    
    wasteClone.appendTo(".wastes")   
    Validate() 
})

$(".waste_delete").click((e)=> {
    if($(".waste").length>1) {
        let target = $(e.target)
        target.parent().parent().remove()
    } else {
        alert("Этот элемент последний, его нельзя удалить!")
    }
    Validate()
})


/* validate */
const validate_bid = new JustValidate('#bid1_form', {
    validateBeforeSubmitting: true,
});
function Validate() {    
    for (let index = 1; index < $(".waste").length+1; index++) {    
        validate_bid
        .addField(`#bid_waste${index}`, [
          {
            rule: 'required',
            errorMessage: 'Поле Наименование отходов обязательно к заполнению',
          }  
        ])
        /* .addRequiredGroup(
            `#bid_vgroup${index}`,
            'Необходимо заполнить минимум один объем',
        ) */
    }
    validate_bid
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
          value: 12,      
          errorMessage: 'Поле ИНН должно иметь минимум 12 символов',
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