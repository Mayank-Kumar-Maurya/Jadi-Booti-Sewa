const express = require("express");
const router = express.Router();
const { textAi, imageIdentification, speechAi } = require("../utils/OpenAI");
const multer = require("multer");
const {storage, cloudinary} = require("../utils/CloudConfig.js");
const upload = multer({ storage });

router.route("/")
.get(async(req, res)=>
{
    res.send("hi");
});

router.route("/test")
.get((req, res)=>
{
    const recog = new window.SpeechRecognition();
    recog.onresult = (event)=>
    {
        const transcript = event.results[0][0].transcript;
        console.log("you speech is: ",transcript);
    }
    recog.start();
})

router.route("/text")
.post(async(req, res)=>
{
    let {message} = req.body;
    console.log("client-message:", req.body);
    let aiRes = await textAi(message);
    res.status(200).json({"message": aiRes});
});

router.route("/voice")
.post(async(req, res)=>
{
    let {message} = req.body;
    console.log("client-voice-message:", req.body);
    // res.send("okkk");
    let aiRes = await textAi(message);
    res.status(200).json({"message": aiRes});
});


// TODO
router.route("/speech")
.post(async(req, res)=>
{
    await speechAi();
    
});


router.route("/image")
.post(upload.single("image"), async(req, res)=>
{
    try {
    let imageUrl = req.file;
    console.log("client-image-info:", imageUrl.path);

    
    // let {imageUrl} = req.body;  // providing Image URL from body
    let aiRes = await imageIdentification(imageUrl.path);

    let delImg = await cloudinary.uploader.destroy(imageUrl.filename, {resource_type: 'image'}); 
    console.log("deleting img",delImg)

    res.status(200).json({"message": aiRes});
    // res.send("ok")

    } catch (error) {
    res.status(500).json({"message": error});
    }
});

module.exports = router;