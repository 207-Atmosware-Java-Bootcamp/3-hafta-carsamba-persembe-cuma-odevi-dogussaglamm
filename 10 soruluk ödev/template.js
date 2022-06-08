//////////////soru 1 ///////////////////////////////////
/*
var sayi1 = Number(prompt("Lütfen x değerini giriniz."));
var sayi2 = Number(prompt("Lütfen k değerini giriniz."));

function denklem(){
  
    
    document.write("y = 3x+4k" );
    document.write("<br>" + "y =" + (sayi1*3 + sayi2*4));
}

denklem()
*/


//////////////soru 2 ///////////////////////////////////

/*
var derece1 = Number(prompt("Lütfen derece giriniz.")) ;

function derece(){
    document.write("fahrenheit değeriniz :" + ((derece1*9/5)+32));
}

derece()
*/


//////////////soru 3 ///////////////////////////////////

/*
var deger = Number(prompt("Lütfen bir değer giriniz."));

function eksiArtı(){
    if (deger < 0){
        document.write("değer negatiftir")
    } else {
       document.write("değer pozitiftir")
    }
    
    
}

eksiArtı()
 */

//////////////soru 4 ///////////////////////////////////

/*
var sifre= Number(123456);

var sifreNet = Number(prompt("Lütfen bir şifre giriniz."));

function password () { 
    if(sifre===sifreNet){
        document.write(true);
    } else{
        document.write(false);
    }
 }

 password ()  */

 //////////////soru 5 ///////////////////////////////////

/* 
var date = new Date().getDay()
let whichDay = (date) => {
    switch (date) {
        case 0:
            document.write("Günlerden Pazar")
            break;
        case 1:
            document.write("Günlerden Pazartesi")
            break;
        case 2:
            document.write("Günlerden Salı")
            break;
        case 3:
            document.write("Günlerden Çarşamba")
            break;
        case 4:
            document.write("Günlerden Perşembe")
            break;
        case 5:
            document.write("Günlerden Cuma")
            break;
        case 6:
            document.write("Günlerden Cumartesi")
            break;
        default:

    }
}

whichDay(date)
*/

//////////////soru 6 ///////////////////////////////////

/*

function loginUser(emailData, dataPassword) {
    let useremail = "atmosware@gmail.com"
    let userpassword = "turkcell"
    for (let index = 1; index < 5; index++) {

        let emailData = prompt("Kullanıcı mailinizi giriniz : ")
        let dataPassword = prompt("Kullanıcı şifrenizi giriniz : ")

        if (emailData == useremail && dataPassword == userpassword) {
            return registerFunction((index))
        } else if (index == 4) {
            document.write("Kullanıcı bloke oldu.")
        } else {
            alert("Girilen bilgiler yanlış. Tekrar deneyiz. Son " + (4-index) + " Hak")
        }

    }


}
function registerFunction(again) {
    document.write("Giriş başarılı. Parolayı "+again+". denemede doğru girdiniz.")
}
loginUser()
*/

//////////////soru 7 ///////////////////////////////////
/*
var tarih = new Date();
  var gun = tarih.getDay();
  switch(gun) {
    case 0:
      alert("pazar");
    break;
    case 1:
      alert("pazartesi");
    break;
    case 2:
      alert("salı");
    break;
    case 3:
      alert("çarşamba");
    break;
    case 4:
      alert("perşembe");
    break;
    case 5:
      alert("cuma");
    break;
    case 6:
      alert("cumartesi");
  }
  */
//////////////soru 8 ///////////////////////////////////
/*
var date = new Date().getDay()
let whichDay = (date) => {
    switch (date) {
        case 0:
            document.write("Günlerden Pazar")
            break;
        case 1:
            document.write("Günlerden Pazartesi")
            break;
        case 2:
            document.write("Günlerden Salı")
            break;
        case 3:
            document.write("Günlerden Çarşamba")
            break;
        case 4:
            document.write("Günlerden Perşembe")
            break;
        case 5:
            document.write("Günlerden Cuma")
            break;
        case 6:
            document.write("Günlerden Cumartesi")
            break;
        default:

    }
}

whichDay(date)
*/

//////////////soru 9 ///////////////////////////////////
/*
function whichDay (date) {
    var date = new Date().getDay()
    switch (date) {
        case 0:
            document.write("Günlerden Pazar")
            break;
        case 1:
            document.write("Günlerden Pazartesi")
            break;
        case 2:
            document.write("Günlerden Salı")
            break;
        case 3:
            document.write("Günlerden Çarşamba")
            break;
        case 4:
            document.write("Günlerden Perşembe")
            break;
        case 5:
            document.write("Günlerden Cuma")
            break;
        case 6:
            document.write("Günlerden Cumartesi")
            break;
        default:

    }
}

*/ 

//////////////soru 10 ///////////////////////////////////

/*

var sayi, rand;
var count = 1;
sayi = Number(prompt("Enter number 1 to 10:"));
rand = Math.round(Math.random() * 9 + 1);

function whichNumber(sayi) {
  while (rand != sayi) {
    if (sayi < rand) {
      count++;
      sayi = Number(prompt(+sayi + "den büyük bir sayı giriniz:"));
    } else{
      count++;
      sayi = Number(prompt(sayi + "den küçük bir sayı giriniz:"));
    }
  }
  document.write(+sayi + "=" + rand + " " + count + ". tahmininizde bildiniz");
}

whichNumber(sayi);

*/