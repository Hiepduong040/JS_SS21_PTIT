var number = +prompt("Number:");
if(number%2==0){
    document.write("Đây là số chẵn ", number);
}else if(number%2==1){
    document.write("Đây là số lẻ ", number);
}else {
    document.write("Số không hợp lệ");
}