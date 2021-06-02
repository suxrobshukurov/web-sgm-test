$(window).load(function()
{
   phone = [{ "mask": "+7 (###) ###-##-##"}, { "mask": "+7 (###) ###-##-##"}];
    $('#phone').inputmask({ 
        mask: phone, 
        greedy: false, 
        definitions: { '#': { validator: "[0-9]", cardinality: 1}} });

    $("#name").on('keypress', function() {
       var that = this;
       
       setTimeout(function() {
           var res = /[^A-Za-zА-Яа-яЁё\-]+$/g.exec(that.value);
           that.value = that.value.replace(res, '');
       }, 0);
    });

});
