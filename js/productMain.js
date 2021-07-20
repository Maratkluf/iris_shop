let select = function(){
    let selectHeader = document.querySelectorAll('.select__header');

    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle(){
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose(){
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = this.closest('.select').querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');
    }
};

select();



$(document).rady(function(){
    var hoodie1 = $('#hoodie1').attr("src");
    var hoodie2 = $('#hoodie2').attr("src");
    var hoodie3 = $('#hoodie3').attr("src");
    var hoodie4 = $('#hoodie4').attr("src");
    $('#hoodie1').click(function(){
        $('#preview').fadeOut(0);
        $('#preview').stop().fadeIn(400).attr('src', hoodie1);
    });
    $('#hoodie2').click(function(){
        $('#preview').fadeOut(0);
        $('#preview').stop().fadeIn(400).attr('src', hoodie2);
    });
    $('#hoodie3').click(function(){
        $('#preview').fadeOut(0);
        $('#preview').stop().fadeIn(400).attr('src', hoodie3);
    });
    $('#hoodie4').click(function(){
        $('#preview').fadeOut(0);
        $('#preview').stop().fadeIn(400).attr('src', hoodie4);
    });
});