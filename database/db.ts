import mongoose from 'mongoose';

/*
* 0 = disconnected    //Desconetado
* 1 = connected       //Conectado
* 2 = connnecting     //Conectando
* 2 = disconnecting   //Desconectando
*/

const mongoConnection = {
    isConnected: 0
}

export const connect = async () => {
    if (mongoConnection.isConnected) {
        console.log('Ya estabamos conectados');
        return
    }

    if (mongoose.connections.length > 0) {
        mongoConnection.isConnected = mongoose.connections[0].readyState

        if (mongoConnection.isConnected === 1) {
            console.log('Usuando conexion anterior')
            return
        }

        await mongoose.disconnect()
    }

    await mongoose.connect(process.env.MONGO_URL || '')
    mongoConnection.isConnected = 1
    console.log('Conectado a mongoDB:', process.env.MONGO_URL);

}

export const disconnect = async () => {

    if( process.env.NODE_ENV === 'development' ) return

    if (mongoConnection.isConnected === 0) return

    
    await mongoose.disconnect()
    mongoConnection.isConnected = 0

    console.log('Desconectado de MongoDB');

}