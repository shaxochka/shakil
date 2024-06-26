 let color1 = prompt('1введите свой любимый цвет');
 let color2 = prompt('2введите свой любимый цвет');
 color1 = color1.toLowerCase();
 color2 = color2.toLowerCase();
 if(color1 == 'белый' && color2 == 'черный'){
     document.write('я тоже люблю белый цвет');
 }else {
     document.write('я ${color1} va ${color2} ranlarini yoqtirmayman, manga oq va qora')
 }


 let num = [8,5,6, 'shaxa'];
 document.write(num[3]);
 console.log(num);


 let week = prompt('hafta kunlarini kiriting');
 week = week.toLowerCase();
 switch (week) {
    case 'dushanba':
     case 'seshanba':
     case 'chorshanba':
    case 'juma':

     document.write('ish kuni')
     break;
     case 'shanba':
     case 'yakshanba':
         document.write('dam olish kuni')
        break;



         default :
         document.write('xatolik')
         break;

 }