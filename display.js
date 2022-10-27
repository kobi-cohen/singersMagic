const names = [

    {name:`מייקל ג'קסון`,born:1959},
    {name:`שלמה ארצי`,born:1949},
    {name:`אום כולתום`,born:1902},
    {name:`מרגי`,born:2005},
    {name:`נועה קירל`,born:2006},
    {name:`דודו טסה`,born:1976},
]

const wrapper = document.querySelector('.wrapper')

const popup = name =>{
    console.log(name)
    
    const display = document.querySelector('.display')
    display.textContent=name.name+` ${name.born}`
    display.classList.add('show')  
    display.addEventListener('click',()=>{
        display.classList.remove('show')
    })  
}


const createList = () =>{
    names.map(name =>{
        const div = document.createElement('div')
        div.textContent = name.name
        div.addEventListener('click',(e)=>{
            popup(name)
        })
        wrapper.appendChild(div)
    })
    
}
createList()