function $(selector){
  return document.querySelector(selector)
}
function $$(selector){
  return document.querySelectorAll(selector)
}
//is in school
function inSchool(){
  $('.inschool').onclick = function(){
    $('#inschool').classList.remove('hide')
    if(!$('#inwork').classList.contains('hide')){
      $('#inwork').classList.add('hide')
    }
    chooseCity()
  }
  $('.inwork').onclick = function(){
    $('#inwork').classList.remove('hide')
    if(!$('#inschool').classList.contains('hide')){
      $('#inschool').classList.add('hide')
    }
  }
}
//choose city
function chooseCity(){
  $('#city').onchange = function(){
    var index = $('#city').selectedIndex
    var value = $('#city').options[index].value
    switch(true){
      case value === 'beijing':
        $('.beijingschool').classList.remove('hide')
        $('.shanghaischool').classList.add('hide')
        $('.guangzhouschool').classList.add('hide')
        break
      case value === 'shanghai':
        $('.beijingschool').classList.add('hide')
        $('.shanghaischool').classList.remove('hide')
        $('.guangzhouschool').classList.add('hide')
        break
      case value === 'guangzhou':
        $('.beijingschool').classList.add('hide')
        $('.shanghaischool').classList.add('hide')
        $('.guangzhouschool').classList.remove('hide')
        break
    }
  }
}




inSchool()
