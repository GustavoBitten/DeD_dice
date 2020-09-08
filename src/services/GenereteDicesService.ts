import { dice, MersenneTwister19937 } from "random-js"
import AppError from "../errors/AppError"


interface RequestDTO{
    numberDices:number
    sidesDice:number
    name: string
    }

interface ResponseDTO{
    resultDices:{
        value: number
        order: number
        type: string
    }[]

}

class GenereteDicesService{
    public async execute({numberDices,sidesDice,name}: RequestDTO): Promise<ResponseDTO>{

        const resultDicesRaw = dice(sidesDice,numberDices)(MersenneTwister19937.autoSeed())

        if(numberDices >1000 || sidesDice >1000){
            throw new AppError('Deu erro')
        }

        var order = 0
        const resultDices = resultDicesRaw.map((dice)=>{
            order++
            return {
                value:dice,
                type: `D${sidesDice}`,
                name,
                order 
            }
        })




        return {
            resultDices
        }
    }

}


export default GenereteDicesService