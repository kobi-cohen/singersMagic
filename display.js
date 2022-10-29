const singers = [

    {name:`מייקל ג'קסון`,born:1959,pic:'https://m.media-amazon.com/images/I/61xgsBsRjSL.jpg'},
    {name:`שלמה ארצי`,born:1949,pic:'https://images.maariv.co.il/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,w_500/457526'},
    {name:`ריטה`,born:1961,pic:'https://medias.atmag.co.il/www/uploads/2021/08/1630325779_15115-600x600-1630326381.jpg'},
    {name:`מרגי`,born:2005,pic:'https://mhatzor.org.il/productImages2/44/2019/06/25/image1561453037.jpg'},
    {name:`נועה קירל`,born:2006,pic:'https://www.euromix.co.il/wp-content/uploads/2022/07/Noa-Kirel-Israel-2023.jpg'},
    {name:`דודו טסה`,born:1977,pic:'https://i1.sndcdn.com/artworks-000161780120-axcimh-t500x500.jpg'},
]

const wrapper = document.querySelector('.wrapper')

const popup = singer =>{
    
    const display = document.querySelector('.display')
    display.textContent=singer.name+` ${singer.born}`
    if (singer.pic){
    const div = document.createElement('div')
    const img = document.createElement('img')
    img.style.width='100rem'
    img.style.height='auto'
    img.src=singer.pic
    div.appendChild(img)
    display.appendChild(div)
    }

    display.classList.add('show')  
    display.addEventListener('click',()=>{
        display.classList.remove('show')
    })  
}


const createList = () =>{
    singers.map(singer =>{
        const div = document.createElement('div')
        div.textContent = singer.name
        div.addEventListener('click',(e)=>{
            popup(singer)
            sendReq(singer.name)
        })
        wrapper.appendChild(div)
    })
    
}
createList()