import { isValidObjectId } from "mongoose";
import { db } from "./";
import { Entry, IEntry } from "../models";

// import { Entry } from "../interfaces"


export const getEntryById = async(id: string): Promise<IEntry | null> => {

    if( !isValidObjectId(id) ){
        return null
    }

    await db.connect()
    const entry = await Entry.findById(id)
    
    if(!entry){
        await db.disconnect()
        return null
    }
    
    entry.views = entry.views + 1
    entry.save() 

    await db.disconnect()

    // const resp = await fetch(`/api/entris/${id}`)
    // const entry = await resp.json()

    return JSON.parse( JSON.stringify(entry) )
}
