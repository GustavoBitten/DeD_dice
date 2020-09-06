import { dice, MersenneTwister19937 } from "random-js"


interface RequestDTO{
    numberDices:number
    sidesDice:number
    }
interface ResponseDTO{
    resultDices:number[]

}

class GenereteDicesService{
    public async execute({numberDices,sidesDice}: RequestDTO): Promise<ResponseDTO>{

        const resultDices = dice(sidesDice,numberDices)(MersenneTwister19937.autoSeed())

        return {
            resultDices
        }
    }

}


export default GenereteDicesService