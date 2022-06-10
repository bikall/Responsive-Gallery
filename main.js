 date=new Date();
dpic=date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()
datepara.innerText=dpic
datepara.style.opacity='1'
imgs=document.getElementsByTagName('img')
for(items of imgs){
  items.style.marginTop='1vw'
  items.addEventListener('click',(e)=>{
  container.style.display='none'
  container2.style.display='flex'
  detailimg.src=e.target.src
  })
}
back.addEventListener('click',()=>{
 container2.style.display='none'
 container.style.display='block'
})
