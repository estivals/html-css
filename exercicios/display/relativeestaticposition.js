const $elemento1 = document.querySelector('.elemento1')
const $elemento2 = document.querySelector('.elemento2')
$elemento1.addEventListener('click', function(event) {
  this.classList.toggle('exemplo_isActive')
  $elemento2.classList.add('exemplo_isActive')
})
$elemento2.addEventListener('click', function(event) {
  this.classList.toggle('exemplo_isActive')
  $elemento1.classList.add('exemplo_isActive')
})
$elemento1.addEventListener('click', function(event) {
 this.classList.toggle('exemplo_isActive')
 $elemento2.classList.add('exemplo_isActive')
})
$elemento2.addEventListener('click', function(event) {
 this.classList.toggle('exemplo_isActive')
 $elemento1.classList.add('exemplo_isActive')
})