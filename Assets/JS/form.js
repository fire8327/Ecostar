/* phone mask */


/* validate */
const validate = new JustValidate('#form', {
    validateBeforeSubmitting: true,
});
validate
  .addField('#user_name', [
    {
      rule: 'required',
      errorMessage: 'Поле Имя обязательно к заполнению',
    },
    {
      rule: 'customRegexp',
      value: /^[А-Я]+$/i,      
      errorMessage: 'Поле Имя должно содержать только кириллицу',
    },    
    {
      rule: 'minLength',
      value: 3,      
      errorMessage: 'Поле Имя должно иметь минимум 3 символа',
    },    
  ])
  .addField('#phone_number', [
    {
      rule: 'required',
      errorMessage: 'Поле Телефон обязательно к заполнению',
    },    
    {
        rule: 'customRegexp',
        value: /[0-9]/,      
        errorMessage: 'Поле Телефон должно содержать только цифры',
    },
    /* {
      rule: 'minLength',
      value: 11,      
      errorMessage: 'Поле Телефон должно иметь минимум 11 символов',
    } */
  ]);


/* submit form */
const token = "6688184188:AAGzlkIWoBx9zuXSh71W6Jl_5Woat_RzxlU"
const chat_id = "-920280170"
const url = `https://api.telegram.org/bot${token}/sendMessage`

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    if(validate.isValid) {
    let message = `<b>Заявка с сайта!</b>\n`;
    message += `<b>Отправитель: </b> ${this.name.value}\n`;
    message += `<b>Номер телефона: </b> ${this.number.value}`;

    axios.post(url, {
        chat_id: chat_id,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = ""
        this.number.value = ""
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() => {
        console.log('Конец');
    })            
    }
})