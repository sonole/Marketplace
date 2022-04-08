function chk(){

    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;

    if(pass!=cpass){
      document.getElementById("error").innerHTML = "Passwords do not match!";
        document.getElementById("cpass").value = "";
    }
    else{
        document.getElementById("error").innerHTML = "Passwords match!";
    }
}

function openRegForm() {
  document.getElementById("regForm").style.display = "block";
}

function closeRegForm() {
  document.getElementById("regForm").style.display = "none";
}


function openLoginForm() {
  document.getElementById("loginForm").style.display = "block";
}

function closeLoginForm() {
  document.getElementById("loginForm").style.display = "none";
}

function openAdmin() {
  document.getElementById("adminArea").style.display = "block";
}

function closeAdmin() {
  document.getElementById("adminArea").style.display = "none";
}

function openOrders() {
  document.getElementById("ordersArea").style.display = "block";
}

function closeOrders() {
  document.getElementById("ordersArea").style.display = "none";
}


function openRegStoreForm() {
  document.getElementById("regStoreForm").style.display = "block";
}

function closeRegStoreForm() {
  document.getElementById("regStoreForm").style.display = "none";
}

function openEditStoreForm() {
  document.getElementById("editStoreForm").style.display = "block";
  sessionStorage.setItem('clicked', true);

}

function closeEditStoreForm() {
  document.getElementById("editStoreForm").style.display = "none";
  sessionStorage.removeItem('clicked');
}

function openRegProductForm() {
  document.getElementById("regProductForm").style.display = "block";
  sessionStorage.setItem('clicked1', true);
}

function closeRegProductForm() {
  document.getElementById("regProductForm").style.display = "none";
  sessionStorage.removeItem('clicked1');
}

function openEditProductForm() {
  document.getElementById("editProductForm").style.display = "block";
    sessionStorage.setItem('clicked2', true);
}

function closeEditProductForm() {
  document.getElementById("editProductForm").style.display = "none";
  sessionStorage.removeItem('clicked2');
}

function openSelectProductForm() {
  document.getElementById("selectProductForm").style.display = "block";
    sessionStorage.setItem('clicked3', true);
}

function closeSelectProductForm() {
  document.getElementById("selectProductForm").style.display = "none";
  sessionStorage.removeItem('clicked3');
}

function openSelectStoreForm() {
  document.getElementById("selectStoreForm").style.display = "block";
    //sessionStorage.setItem('clicked2', true);
}

function closeSelectStoreForm() {
  document.getElementById("selectStoreForm").style.display = "none";
  //sessionStorage.removeItem('clicked2');
}

function openPaymentForm() {
  document.getElementById("paymentForm").style.display = "block";
    sessionStorage.setItem('clicked4', true);
}

function closePaymentForm() {
  document.getElementById("paymentForm").style.display = "none";
  sessionStorage.removeItem('clicked4');
}

window.onload = function () {
    var data = sessionStorage.getItem('clicked');
    if (data == 'true') {
        openEditStoreForm();
    }
    var data1 = sessionStorage.getItem('clicked1');
    if (data1 == 'true') {
        openRegProductForm(); 
    }
    var data2 = sessionStorage.getItem('clicked2');
    if (data2 == 'true') {
        openEditProductForm(); 
    }
    var data3 = sessionStorage.getItem('clicked3');
    if (data3 == 'true') {
        openSelectProductForm(); 
    }
    var data4 = sessionStorage.getItem('clicked4');
    if (data4 == 'true') {
        openPaymentForm(); 
    }
    
                
};
