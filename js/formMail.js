

// обработка полей и отправка на сервер 
$("#sendMail").on("click", function () {
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();
    var address = $("#address").val().trim();

    if (phone == "") {
        $("#errorMess").text("Введите Телефон")
        return false;
    } else if (address == "") {
        $("#errorMess").text("Введите Адрес")
        return false;
    } 
    $("#errorMess").text("");

    $.ajax({
        url: 'php/mail.php',
        type: 'POST',
        cache: false,
        data: { 'name': name, 'phone': phone, 'address': address},
        dataType: 'html',
        beforeSend: function() {
            $("sendMail").prop("disabled", true);
        },
        success: function(data) {
            if(!data) {
                $("formError").css('display', 'block')
                $("#phoneForm").css('display', 'none')
            } else {
                $("#formSuccess").css('display', 'block')
                $("#phoneForm").css('display', 'none')
                $("#phoneForm").trigger("reset");
            }
            $("#sendMail").text("Идет отправка")

            $("sendMail").prop("disabled", false);
        }
    });

});

// закрыть модальное окно после отпарвки формы
$(".close").on("click", function(){
    $("#formSuccess").css('display', 'none')
    $("#phoneForm").css('display', 'block')
});



