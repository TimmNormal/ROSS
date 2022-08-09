us = "testjsender@gmail.com"
ps = "ender123ender123"

function sendEmail(to,fio,project,phone,file) { 
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(){
      console.log()
      Email.send({ 
        Host: "smtp.gmail.com", 
        Username: us, 
        Password: ps, 
        To: to, 
        From: us, 
        Subject: fio, 
        Body: `Почта - ${project}
        Номер телефона - ${phone}`, 
        Attachments:[{
          name:file.name,
          data:reader.result
        }]
      }) 
        .then(function (message) { 
          if(message == "OK")
            alert("Сообщение отправлено")
          else
            alert("При отправке возникла ошибка, повторите попытку") 
        }); 
      }
    } 

  function sendMailClick(to,f="",n="",d="",fl=""){
    try{
      const fio = document.querySelector("#fio" + f).value
      const project = document.querySelector("#numberPhone" + n).value
      const phone = document.querySelector("#description" + d).value

      const file = document.querySelector("#file" + fl).files[0]
      sendEmail(to,fio,project,phone,file)
    }catch(e){alert("Прикрепите файл"); console.log(e)}
  }
