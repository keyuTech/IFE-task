function $(selector){
  return document.querySelector(selector)
}
function $$(selector){
  return document.querySelectorAll(selector)
}

function setInfo(){
  $$('div').forEach(function(e){
    var input = e.getElementsByTagName('input')
    var p = e.getElementsByTagName('p')
    console.log(input)
    input[0].onfocus = function(e){
      console.log(e)
      console.log('focus')
      p[0].classList.add('show')
    }
    input[0].onblur = function(e){
      var content = input[0].value
      switch (true){
        case input[0].classList.contains('nametext'):
          nameIsRight(content, input, p)
          break
        case input[0].classList.contains('passwordtext'):
          passwordIsRight(content, input, p)
        case input[0].classList.contains('confirmtext'):
          confirmPassword(content, input, p)
      }
    }
  })
}

function nameIsRight(value, input, p){
  var len = 0
  for(var i=0; i<value.length; i++){
    if(value[i].charCodeAt()>=0x4E00 && value[i].charCodeAt()<=0x9FA5){
      len+=2
    }else{
      len++
    }
  }
  switch(true){
    case len === 0:
      input[0].classList.add('error')
      p[0].innerText = '名称不能为空'
      break
    case len < 4 || len > 16:
      input[0].classList.add('error')
      p[0].innerText = '名称长度不符'
      break
    case len >=4 && len <=16:
    input[0].classList.remove('error')
      input[0].classList.add('right')
      p[0].innerText = '名称可用'
      break
  }
}
function passwordIsRight(value, input, p){
  var len = 0
  for(var i=0; i<value.length; i++){
    len++
  }
  switch(true){
    case len === 0:
      input[0].classList.add('error')
      p[0].innerText = '密码不能为空'
      break
    case len < 6 || len > 12:
      input[0].classList.add('error')
      p[0].innerText = '密码长度不符'
      break
    case len >=6 && len <= 12:
      input[0].classList.remove('error')
      input[0].classList.add('right')
      p[0].innerText = '密码可用'
      break
  }
}
function confirmPassword(value, input, p){
  console.log($('.passwordtext'))
  if(value === $('.passwordtext').value){
    input[0].classList.add('right')
    p[0].innerText = '密码输入一致'
  }else{
    input[0].classList.add('error')
    p[0].innerText = '密码输入不同'
  }
}

setInfo()
