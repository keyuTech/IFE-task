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
      console.log(content)
      switch (true){
        case input[0].classList.contains('nametext'):
          nameIsRight(content, input, p)
          break
        case input[0].classList.contains('passwordtext'):
          passwordIsRight(content, input, p)
          break
        case input[0].classList.contains('confirmtext'):
          confirmPassword(content, input, p)
          break
        case input[0].classList.contains('emailtext'):
          emailIsRight(content, input, p)
          break
        case input[0].classList.contains('phonetext'):
          phoneIsRight(content, input, p)
          break
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
function emailIsRight(value, input, p){
  /*
  Email的规则: name@domain
  name最长64，domain最长253，总长最长256
  name可以使用任意ASCII字符:
    大小写英文字母 a-z,A-Z
    数字 0-9
    字符 !#$%&'*+-/=?^_`{|}~
    字符 .不能是第一个和最后一个，不能连续出现两次
    但是有些邮件服务器会拒绝包含有特殊字符的邮件地址
    domain仅限于26个英文字母、10个数字、连词号-
    连词号-不能是第一个字符
    顶级域名（com、cn等）长度为2到6个
*/
  var emailStr = /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i
  var isRight = emailStr.test(value)
  if(isRight){
    input[0].classList.add('right')
    p[0].innerText = '邮箱可用'
  }else{
    input[0].classList.add('error')
    p[0].innerText = '邮箱错误'
  }
}
function phoneIsRight(value, input, p){
  var phoneStr = /^1[3|4|5|7|8][0-9]{9}$/
  if(phoneStr.test(value)){
    input[0].classList.add('right')
    p[0].innerText = '手机号码正确'
  }else{
    input[0].classList.add('error')
    p[0].innerText = '手机号码错误'
  }
}

setInfo()
