function $(selector){
  return document.querySelector(selector)
}
function $$(selector){
  return document.querySelectorAll(selector)
}

function setInfo(){
  $$('div').forEach(function(e){
    var input = e.getElementsByTagName('input')[0]
    var p = e.getElementsByTagName('p')[0]
    var content = input.value
    input.onfocus = function(e){
      p.classList.add('show')
    }
    input.onblur = function(e){
      switch (true){
        case input.classList.contains('nametext'):
          nameIsRight(content, input, p)
          break
        case input.classList.contains('passwordtext'):
          passwordIsRight(content, input, p)
          break
        case input.classList.contains('confirmtext'):
          confirmPassword(content, input, p)
          break
        case input.classList.contains('emailtext'):
          emailIsRight(content, input, p)
          break
        case input.classList.contains('phonetext'):
          phoneIsRight(content, input, p)
          break
      }
    }
    submitConfirm(content, input, p)   
  })
}

function submitConfirm(value, input, p){
  $('button').onclick = function(){
    nameIsRight(value, input, p)
    passwordIsRight(value, input, p)
    confirmPassword(value, input, p)
    emailIsRight(value, input, p)
    phoneIsRight(value, input, p)
    function check(){
      console.log(nameRight)
      if(nameRight && passwordRight && confirmRight && emailRight && phoneRight == true){
        alert('输入正确')
      }else{
        alert('输入有误')
      }
    }
  }
}

function nameIsRight(value, input, p){
  console.log('name')
  console.log(value)
  var len = 0
  var nameRight = true
  for(var i=0; i<value.length; i++){
    if(value[i].charCodeAt()>=0x4E00 && value[i].charCodeAt()<=0x9FA5){
      len+=2
    }else{
      len++
    }
  }
  switch(true){
    case len === 0:
      input.classList.add('error')
      input.classList.remove('right')      
      p.innerText = '名称不能为空'
      nameRight = false
      break
    case len < 4 || len > 16:
      input.classList.add('error')      
      input.classList.remove('right')      
      p.innerText = '名称长度不符'
      nameRight = false
      break
    case len >=4 && len <=16:
      input.classList.add('right')
      input.classList.remove('error')      
      p.innerText = '名称可用'
      break
  }
}
function passwordIsRight(value, input, p){
  var len = 0
  var passwordRight = true
  for(var i=0; i<value.length; i++){
    len++
  }
  switch(true){
    case len === 0:
      input.classList.add('error')
      input.classList.remove('right')
      p.innerText = '密码不能为空'
      passwordRight = false
      break
    case len < 6 || len > 12:
      input.classList.add('error')
      input.classList.remove('right')
      p.innerText = '密码长度不符'
      passwordRight = false
      break
    case len >=6 && len <= 12:
      input.classList.add('right')
      input.classList.remove('error')
      p.innerText = '密码可用'
      break
  }
}
function confirmPassword(value, input, p){
  console.log($('.passwordtext'))
  var confirmRight = true
  if(value === $('.passwordtext').value){
    input.classList.add('right')
    input.classList.remove('error')
    p.innerText = '密码输入一致'
  }else{
    input.classList.add('error')
    input.classList.remove('right')
    p.innerText = '密码输入不同'
    confirmRight = false
  }
}
function emailIsRight(value, input, p){
  var emailRight = true
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
    input.classList.add('right')
    input.classList.remove('error')
    p.innerText = '邮箱可用'
  }else{
    input.classList.add('error')
    input.classList.remove('right')
    p.innerText = '邮箱错误'
    emailRight = false
  }
}
function phoneIsRight(value, input, p){
  var phoneRight = true
  var phoneStr = /^1[3|4|5|7|8][0-9]{9}$/
  if(phoneStr.test(value)){
    input.classList.add('right')
    input.classList.remove('error')
    p.innerText = '手机号码正确'
  }else{
    input.classList.add('error')
    input.classList.remove('right')
    p.innerText = '手机号码错误'
    phoneRight = false
  }
}

setInfo()
