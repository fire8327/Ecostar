const token = "6688184188:AAGzlkIWoBx9zuXSh71W6Jl_5Woat_RzxlU"
const chat_id = "-920280170"
const url = `https://api.telegram.org/bot${token}/sendMessage`

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

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
})