import mongoose from "mongoose";
import "dotenv/config";
const conn = process.env.MONGO_URI || "";
async function connect() {
    try {
        await mongoose.connect(conn);
        console.log("MongoDB Connected Successfully.");
        mongoose.pluralize(s => s);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}
export default connect;
//# sourceMappingURL=conn.js.map