console.log('hello')

const open = document.getElementById('open');
const close = document.getElementById('close');
const wrap = document.querySelector('.wrapper');

open.addEventListener('click', () => {
  wrap.classList.add('show')
})

close.addEventListener('click', () => {
  wrap.classList.remove('show')
})
