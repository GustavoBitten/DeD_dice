import {Router} from 'express'


const routes = Router()

routes.get('/',(req,res)=>{res.json('Deu certo')})

export default routes