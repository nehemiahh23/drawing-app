import { v2 as cloudinary } from 'cloudinary';
import "dotenv/config"

const CLOUD_NAME: string = process.env.CLOUD_NAME || ""
const CLOUD_API_KEY: string = process.env.CLOUD_API_KEY || ""
const CLOUD_SECRET: string = process.env.CLOUD_SECRET || ""

export default function cloudConnect() {

    // Configuration
    cloudinary.config({
        cloud_name: CLOUD_NAME,
        api_key: CLOUD_API_KEY,
        api_secret: CLOUD_SECRET
    });
}
