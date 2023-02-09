const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function click_id() {
    document.querySelector('#demo-1').innerHTML = "Đoạn văn đã được thay đổi";
};

function click_class() {
    document.querySelector(".demo-2").innerHTML = "Đoạn văn đã được thay đổi";
};

function pic_phequa() {
    $('.pic').src='/img/phequa.jpg';
    
};

function pic_cubinh() {
    $('.pic').src='/img/cubinh.jpg';
};

bat_anh = () => $('.pic', '.mucdophe').style.display = "block";
tat_anh = () => $('.pic', '.mucdophe').style.display = "none";

p_phequa = () => $('.mucdophe').innerHTML = "phe qua anh em oi!!!";
p_cubinh = () => $('.mucdophe').innerHTML = "hoi phe thoi anh em oi!!!";

bat_p = () => $('.mucdophe').style.display = "block";
tat_p = () => $('.mucdophe').style.display = "none";

color_p_red = () => $('.mucdophe').style.color = 'red';
color_p_black = () => $('.mucdophe').style.color = 'black';
color_p_green = () => $('.mucdophe').style.color = 'green';
color_p_yellow = () => $('.mucdophe').style.color = 'pink';

function open_modal_1() {
    $('.content-modal-1').style.display = "block";
};

close_modal_1 = () => $('.content-modal-1').style.display = "none";

function open_modal_2() {
    $('.content-modal-2').style.display = "block";
};

close_modal_2 = () => $('.content-modal-2').style.display = "none";


open_modal_3 = () => $('.content-modal-3').style.display = "block";
close_modal_3 = () => $('.content-modal-3').style.display = "none";

login_modal = () => $('.login-modal_none').style.display = "block";
register_modal = () => $('.register-modal_none').style.display = "block";

close_btn_register = () => $('.register-modal_none').style.display = "none";
close_btn_register_overlay = () => $('.register-modal_none').style.display = "none";
close_btn_login_overlay = () => $('.login-modal_none').style.display = "none";
close_btn_login = () => $('.login-modal_none').style.display = "none";