import { dice, MersenneTwister19937 } from "random-js"


interface RequestDTO{
    numberDices:number
    sidesDice:number
    }
interface ResponseDTO{
    resultDices:{
        value: number
        order: number
        type: string
    }[]

}

class GenereteDicesService{
    public async execute({numberDices,sidesDice}: RequestDTO): Promise<ResponseDTO>{

        const resultDicesRaw = dice(sidesDice,numberDices)(MersenneTwister19937.autoSeed())

        var order = 0
        const resultDices = resultDicesRaw.map((dice)=>{
            order++
            return {
                value:dice,
                type: `D${sidesDice}`,
                order 
            }
        })




        return {
            resultDices
        }
    }

}


export default GenereteDicesService