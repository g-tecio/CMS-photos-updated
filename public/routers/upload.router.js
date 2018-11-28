let express = require('express');
let router = express.Router();

let upload = require('../config/multer.config.js'); 
const awsWorker = require('../controllers/aws.controller.js');
 
router.post('/', upload.single("file2"),()=>{
    debugger
    const s3Client = s3.s3Client;
	const params = s3.uploadParams;

	params.Body = 'file123'//req.file.buffer//'C:\Users\Miguel Sh\Pictures\Captura3.png'// req.file.originalname; //file2
	params.Key = '546949_489448797813290_1265757404_n.jpg'//req.file.buffer; //546949_489448797813290_1265757404_n.jpg
		

	s3Client.upload(params, (err, data) => {
        debugger
		if (err) {
			res.status(500).json({error:"Error -> " + err});
		}
		res.json({message: 'File uploaded successfully! -> keyname = ' + req.file.originalname});
	});
});


router.get("/subir", (req, res) => {
    res.json({
        message: 'hi world'
    });
});

module.exports = router;