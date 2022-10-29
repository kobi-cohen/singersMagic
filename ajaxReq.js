const sendReq = async selection =>{
    const value = {value:selection}
    const req = await fetch('https://server-sbdt.onrender.com/set',{
    method:'post',
    headers:{
    'Content-Type':'application/json'},
    body:JSON.stringify(value)

    })
    console.log('request was fired')
}