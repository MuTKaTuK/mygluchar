const cat = document.getElementById('cat')
const info = document.getElementById('info')
cat.addEventListener('click', function () {
  info.style.display = info.style.display === 'block' ? 'none' : 'block'
})
