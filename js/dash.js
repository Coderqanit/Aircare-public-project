let dashclose = document.querySelector('.reveal')
let hdd = document.querySelector('.list')
let close = document.querySelector('.cls')
let left = document.querySelector('#left')
let open = document.querySelector('.open');
let icon_img = document.querySelector('#img-it')
let inputTag= document.querySelector('#input-file')





open.addEventListener('click', function(){
  left.style.display = 'block'
})


close.addEventListener('click', function(){
  left.style.display = 'none'
})




dashclose.addEventListener('click', function(){
  hdd.style.display = 'none'
})

inputTag.onchange = function(){
  icon_img.src = URL.createObjectURL(inputTag.file[0])
}

