const data=require('./public/mock/data.json');
const data2=require('./public/mock/data2.json');

module.exports={
  lintOnSave:false,
  devServer:{
    before:function (app) {
      app.get('/api/list',(req,res)=>{
        res.json({
          list:data,
          errCode:0
        })
      }),
      app.get('/api/render',(req,res)=>{
        res.json({
          list:data2,
          errCode:0
        })
      })
    }
  }
}