var birthday = +prompt("Bạn sinh năm bao nhiêu?");
var current = 2024;
if(birthday <2025 || birthday > 1900){
    var age = current- birthday
    document.write("Tuổi của bạn hiện nay là:", age);
}else{
    document.write("Năm sinh không hợp lệ");
}