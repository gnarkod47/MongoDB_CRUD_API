import Product from '../models/product.model.js';

const getproducts = async (req, res) => {
    try {
        const result = await Product.find({})
        res.json(result)

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getproduct = async (req, res) => {
    try {
        const { id } = req.params
        const result = await Product.findById(id)
        res.json(result)

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const result = await Product.findByIdAndUpdate(id, req.body)

        if (!result) {
            res.json({ message: "Product couldn't be found!" })
        }

        const updatedResult = await Product.findById(id)
        res.json(updatedResult)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const result = await Product.findById(id)

        if (!result) {
            res.send("Product not found")
        }

        else {
            res.send("Deleted element")
            await Product.findByIdAndDelete(id)
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export { getproducts, getproduct, createProduct, updateProduct, deleteProduct }