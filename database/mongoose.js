import { connect } from "mongoose";
import { mongodbURL } from "../config.js";

const urlConnection = mongodbURL

export async function connect_(){
    console.log(urlConnection)
    try {
        const connection = await connect(urlConnection, () => console.log('Database connected successfully'))
        console.log('Database connected successfully')
        return connection
    } catch (error) {
        console.log(error)
    }

}

connect_()
