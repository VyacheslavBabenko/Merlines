$(function() {

    // Изменение стрелки в выпадающем списке на странице ваши вопросы

    $('.dropdown-list').on('click', function () {
        let el = $(this).children().eq(1);
        $(el).slideToggle(300);
        let grayLineBot = $(this).children().eq(0).find('.line-in-bottom');
        let grayLineUp = $(this).children().eq(0).find('.line-in-up');
        grayLineUp.toggle();
        grayLineBot.toggle();
    });

    // Плюс минус функция

    $('.plus').on('click', function () {
        let element = $(this).parent().find('input');
        let pElement = $(this).parent();
        $(element).val(parseInt(element.val())+1);
  
        if (element.val() != 0){
            $(pElement.find('.minus')).css({'background' : '#71CB42'});
        }
  
    });
  
    $('.minus').on('click', function () {
        let element = $(this).parent().find('input');
        let pElement = $(this).parent();
        $(element).val(parseInt(element.val())-1);
  
        if (element.val() == 0){
            $(pElement.find('.minus')).css({'background' : '#F5F5F5'})
        }
   
        if (element.val() == -1){ 
            element.val(0);
        }
    });

    // Функции для правого меню регистации и авторизации

    $('#enter').on('click', function () {
        $(".close-block, .right-auth-registr").animate({right:'-100%'},200);}, function() {
            $(".close-block, .right-auth-registr").animate({right:0},700);
    });

    $('.close-right-menu').on('click', function () {
        $(".right-auth-registr, .close-block").animate({right: 0},200);}, function() {
            $(".right-auth-registr, .close-block").animate({right: '-100%'},700);
    });

    $('#registration').on('click', function () {
        $('.auth-side, .registration-side').hide();
        $('.registr-page').show();
    });

    $('#registrationSend').on('click', function () {
        $('.registr-page').hide();
        $('.sms-page').show();
    });

    $('#registrationFull').on('click', function () {
        $('.sms-page').hide();
        $('.social-web').hide();
        $('.thank-for-registr').show();
    });

    // Функции для правого меню мой профиль 

    $('#myProfileBtn').on('click', function () {
        $(".close-block, .right-my-profile").animate({right:'-100%'},200);}, function() {
            $(".close-block, .right-my-profile").animate({right:0},700);
    });

    $('.close-right-menu').on('click', function () {
        $(".right-my-profile, .close-block").animate({right: 0},200);}, function() {
            $(".right-my-profile, .close-block").animate({right: '-100%'},700);
    });

    // Активные вкладки в меню профиля

    $('.block-prof-link').on('click', function () {
        $('.block-prof-link').removeClass('active-links-profile');
        $(this).addClass('active-links-profile');
        let tabsContent = $('.my-profile-content, .tickets-content, .my-passengers-content, .connect-us-content');
        let elId = $(this).attr("id");
        if (elId == "myProfileLink") {
            tabsContent.hide();
            $('.my-profile-content').show();
        } else if (elId == "ticketsLink") {
            tabsContent.hide();
            $('.tickets-content').show();
        } else if (elId == "myPassengersLink") {
            tabsContent.hide();
            $('.my-passengers-content').show();
        } else if (elId == "connectWithUsLink") {
            tabsContent.hide();
            $('.connect-us-content').show();
        }
        
    });

    // Доп инфо о билете в профиле

    $('.extra-info-link, .hide-link').on('click', function () {
        $('.hidden-extra-info').slideToggle();
        $('.hide-link').toggle();
        $('.extra-info-link').toggle();
    });

    // Активные вкладки в доп инфо о билете на главной

    $('.ticket-tabs').on('click', function () {
        $('.ticket-tabs').removeClass('black-text');
        $(this).addClass('black-text');
        let tabsContent = $('.route-content, .carrier-content, .bus-content, .map-content');
        let elId = $(this).attr("id");
        if (elId == "route") {
            tabsContent.removeClass('d-flex');
            tabsContent.addClass('d-none');
            $('.route-content').removeClass('d-none');
            $('.route-content').addClass('d-flex');
        } else if (elId == "carrier") {
            tabsContent.removeClass('d-flex');
            tabsContent.addClass('d-none');
            $('.carrier-content').removeClass('d-none');
            $('.carrier-content').addClass('d-flex');
        } else if (elId == "bus") {
            tabsContent.removeClass('d-flex');
            tabsContent.addClass('d-none');
            $('.bus-content').removeClass('d-none');
            $('.bus-content').addClass('d-flex');
        } else if (elId == "map") {
            tabsContent.removeClass('d-flex');
            tabsContent.addClass('d-none');
            $('.map-content').removeClass('d-none');
            $('.map-content').addClass('d-flex');
        }
        
    });

    
    $('#extraDetails').on('click', function () {
        $('.ticket-extra-info').slideToggle();
    });

    // Открытие-закрытие дополнительных параметров 

    $('#extraParam').on('click', function () {
        $('.hidden-extra-param').slideToggle();
    });

    // Отключение всех других чекбоксов - мест в автобсуе

    $('form#my_form > :checkbox').on('change', function() {
        var checkbox = $(this);
        var name = checkbox.prop('name');
        if (checkbox.is(':checked')) {
          $(':checkbox[name="' + name + '"]').not($(this)).prop({
            'checked': false,
            'required': false
          });
        }
    });

    $('#nextBusSeats').on('click', function () {
        $(this).hide();
        $('#secondBusSeats').show();
        $('#firstBusSeats').hide();
        $('.first-trip').removeClass('current-trip');
        $('.first-trip span').addClass('disable-trip')
        $('.second-trip').addClass('current-trip');
        $('.second-trip span').removeClass('disable-trip');
        $('#nextStepPassangers').removeClass('d-none');
    });

    //  Изменение цвета табов при заказе билета
      
    $('#linkPassengers').on('click', function () {
        $(this).removeClass('next-link');
        $('#linkSelectSeats').addClass('prev-link');
    });
    
    $('#linkSelectSeats').on('click', function () {
        $(this).removeClass('next-link');
        $('#linkPassengers').addClass('prev-link');
    });




  

});