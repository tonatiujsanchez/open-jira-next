import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose';
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data = 
    | { message: string }
    | IEntry

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { id='' } = req.query

    if( !mongoose.isValidObjectId( id ) ){
        return res.status(400).json({message: `${id} no es un id valido`})
    }
    
    switch (req.method) {
        case 'GET':
            return getEntry(req, res)

        case 'PUT':
            return updateEntry( req, res )

        default:
            return res.status(400).json({ message: 'Endpoint NO existente' })
    }

}

const getEntry = async ( eq:NextApiRequest, res: NextApiResponse<Data>) => {

    return res.status(200).json({ message: 'Entry por GET' })
}



const updateEntry = async ( req:NextApiRequest, res: NextApiResponse<Data>) => {

    const { id } = req.query

    await db.connect()

    const entryToUpdate = await Entry.findById( id )

    if(!entryToUpdate){
        await db.disconnect()
        return res.status(400).json({ message: 'No hay ninguna entrada con ese ID' })
    }

    const { 
        description = entryToUpdate.description,
        status = entryToUpdate.status
    } = req.body


    try {
        const updatedEntry = await Entry.findByIdAndUpdate( id, {description, status}, { runValidators: true, new: true } )
        // entryToUpdate.description = description
        // entryToUpdate.status = status
        // entryToUpdate.save()
        await db.disconnect()
        return res.status(200).json( updatedEntry! )
        
    } catch (error:any) {
                
        await db.disconnect()
        return res.status(400).json({ message: error.errors.status.message })
    }
    


}
