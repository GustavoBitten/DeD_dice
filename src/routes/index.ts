import {Router} from 'express'
import GenereteDicesService from '../services/GenereteDicesService';
import { getRepository } from 'typeorm';
import Dice from '../models/Dice';

const routes = Router()

routes.post('/', async(req,res)=>{

    const {numberDices,sidesDice,name} = req.body
    const genereteDices = new GenereteDicesService()
    const {resultDices} = await genereteDices.execute({numberDices,sidesDice,name})

    const diceRepository = getRepository(Dice) 
    const newsDices = diceRepository.create(resultDices)
    
    await diceRepository.save(newsDices)
    
    return res.json(newsDices)
    
})

routes.get('/history', async(req,res)=>{
    
    
    const diceRepository = getRepository(Dice) 
    const historyDices = await diceRepository.find({take: 15, order: {created_at: "DESC"}})
   return res.json(historyDices)

})




export default routes