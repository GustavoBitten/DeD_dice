import {Router} from 'express'
import { dice, integer,MersenneTwister19937 } from "random-js";

const routes = Router()

routes.get('/', async(req,res)=>{

     const teste =dice(100,10)(MersenneTwister19937.autoSeed())
     
    return res.json(teste)

})

export default routes