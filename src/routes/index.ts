import {Router} from 'express'
import { dice, integer,MersenneTwister19937 } from "random-js";
import GenereteDicesService from '../services/GenereteDicesService';

const routes = Router()

routes.post('/', async(req,res)=>{

    const {numberDices,sidesDice,name} = req.body
    const genereteDices = new GenereteDicesService()
    const {resultDices} = await genereteDices.execute({numberDices,sidesDice,name})     
    return res.json(resultDices)

})

routes.get('/history', async(req,res)=>{

    
   return res.json('Em construção')

})




export default routes