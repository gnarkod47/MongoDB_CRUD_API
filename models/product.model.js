import mongoose, { Schema } from "mongoose";
const ProductSchema = new Schema(
    {
        name:{
            type:String,
            required: [true,"Enter a name"],
        },

        quantity:{
            type:Number,
            required:true,
            default:0,
        },

        price:{
            type:Number,
            required:true,
            default:0,
        },

        image:{
            type:String,
            required:false,
        },
    },
    {
        timestamps:true,
    }
)

const Product  = mongoose.model("Product",ProductSchema);

// module.exports = Product;
export default Product;