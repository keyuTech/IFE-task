function $(selector){
  return document.querySelector(selector)
}
function $$(selector){
  return document.querySelectorAll(selector)
}

function setInfo(){
  $$('input').forEach(function(){
    showInfo()
    hideInfo()
  })
}

function showInfo(){
  $('input').addEventListener('focus', function(){
    $('p').classList.add('show')
  })
}
function hideInfo(){
  $('input').addEventListener('blur', function(e){
    console.log(e.target)
    $('p').classList.remove('show')
  })
}
setInfo()
