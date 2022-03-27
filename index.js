const items = document.querySelectorAll('.item');

items.forEach((item) => {
  item.addEventListener('click', () => {
    remove();
    item.classList.add('active')
  })
});

function remove() {
  items.forEach((item) => {
    item.classList.remove('active')
  });

}
