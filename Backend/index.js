const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect(
    "mongodb+srv://EshopMaster:Nell234@cluster0.u711r.mongodb.net/Eshop-master?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// API creation
app.get("/", (req, res) => {
    res.send("Express App is running");
});

// Image storage engine
const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({ storage: storage });

// Creating upload endpoint for images
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
    try {
        res.json({
            success: 1,
            image_url: `http://localhost:${port}/images/${req.file.filename}`,
        });
    } catch (error) {
        res.status(500).json({ success: 0, message: error.message });
    }
});

// Schema for creating products
const Product = mongoose.model("product", {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    new_price: { type: Number, required: true },
    old_price: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    available: { type: Boolean, default: true },
});

// Creating api for add product

// Endpoint for adding products
app.post("/addproduct", async (req, res) => {
    try {
        let products = await Product.find({});
        let id;
        if (products.length > 0) {
            let last_product = products[products.length - 1];
            id = last_product.id + 1;
        } else {
            id = 1;
        }

        const product = new Product({
            id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        });

        await product.save();
        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Creating api for add product
add.post('/removeproduct', async(req, res) => {
    await product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success: true,
        name: req.body.name,

    })
})

//api for getting all product
app.get('/allproducts', async(req, res) => {
    let products = await Product.find({})
        console.log("All products Fetched");
        res.send(products);
    })
})

app.listen(port, (error) => {
    if (!error){
        console.log("Server is running on port" + port);
    }else {
        console.log("Error: " + error);
    }
})

// Start the server
app.listen(port, (error) => {
    if (!error) {
        console.log("Server is running on port " + port);
    } else {
        console.log("Error: " + error);
    }
});
