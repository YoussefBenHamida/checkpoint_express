const date = new Date()

const availabilty =(req,res,next)=>{
    const h=date.getHours()
    const d = date.getDay()
    if (!(d>=1 && d<=5 && h>=9 && h<=17)){
        return res.send('Come back during working hours (Monday to Friday,  from 9 to 17)')
    }
    next()
}

module.exports=availabilty