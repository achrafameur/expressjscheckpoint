
// const express = require('express')
// const app= express()
// const condition=true
// const testMiddlaware = (req,res,next)=>{
//     if(condition)
//     {req.user='test user'
//         next()}
//         else {
//             res.send('introuvable')
//         }
// }
// app.set('view engine', 'ejs');
// app.set('views','./server/views');
// app.use(testMiddlaware)
// app.get('/test',(req,res)=>{
// console.log(req)
// res.render('./index.ejs',{user:"achref"})}
// )
// app.get('/test2',(req,res)=>{
// console.log(req)
// res.send('hello2')}
// )
// app.listen(5000,()=>console.log('server is listening'))

const express = require('express');
const app = express();

let date = new Date();
let d = date.getDay();
let h= date.getHours();

const testMiddlaware=(req,res,next)=>{
    if(d!== 0 && d!==6 && h>=9 && h<=17)
    next()
    else
    res.redirect('/horsService.html')
    //res.sendFile(__dirname+'/public/horsService.html')
}
app.get('/horsService.html',(req,res)=>{
    res.sendFile(__dirname+'/public/horsService.html')
})
app.use(testMiddlaware)
app.use(express.static('public'))

// app.use(testMiddlaware);
/* app.get('/', (req,res) => {
        if (d!== (0 && 6) && (h>=9 && h<=17)){
            console.log(req)
            res.render('/public/home.html')}
        else {
            console.log(req)
            res.render('/public/horsService.html')
        }
    }) */
app.listen(5000,()=>console.log('server is listening'));