const { response } = require('express')


const usersGet = (req,res=response) => {

   res.json({
      msg: "get API - controller"
   })

}

const usersPost = (req, res) => {

   const {nombre, edad} = req.body

   res.json({
      msg: "post API - controller",
      nombre,
      edad
   })
}

const usersPut = (req, res) => {
   
   const id = req.params.id
   
   res.json({
      msg: "put API - controller",
      id
   })
}

const usersPatch = (req, res) => {
   res.json({
      msg: "patc API - controller"
   })
}

const usersDelete = (req, res) => {
   res.json({
      msg: "delete API - controller"
   })
}

module.exports = {
   usersGet,
   usersPost,
   usersPut,
   usersPatch,
   usersDelete
}