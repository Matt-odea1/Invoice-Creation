
import express from 'express';
import http from 'http';
var morgan = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');
import csvtojson from 'csvtojson'
import { ALIVE_ENDPOINT, JS_CREATE_ENDPOINT, CSV_CREATE_ENDPOINT } from '../../interface/interface';

import {
    createUblInvoice,
    exportInvoiceXml
} from './create';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);

/*
MULTER AND AWS SETUP KINDA
Should be a good starting point

aws.config.update({
    secretAccessKey: 'Matts key',
    accessKeyId: 'matts other key',
    region: 'matts other other key'    
});

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3, // This line doesn't work not sure why
        bucket: 'YOUR_BUCKET_NAME',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '_' + file.originalname)
        }
    })
})

// Just looked at a multer tutorial but should be a good starting point
app.post('/create/new', upload.single('file'), (req, res) => {
    res.send({
        message: 'File uploaded successfully',
        fileUrl: req.file.location
    });
});
*/

app.get(ALIVE_ENDPOINT, (req, res) => {
	res.status(200).json({
		status: 'alive',
		data: 'CTRL Freaks invoice creation API is alive'
	});
});

// Working on testing this via post man it is not a fun time
app.post(JS_CREATE_ENDPOINT, async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send('Bad Request: No JSON data provided.');
        }

        const { invoice: invoiceJSON } = req.body;
        
        const outputInvoice = createUblInvoice(invoiceJSON);
        await exportInvoiceXml(outputInvoice);

        res.setHeader('Content-Type', 'application/xml');
        res.download("./src/output/invoice.xml");
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

// Converts a csv into a json object
// This will be changed to do a post request just using a get req
// I had trouble downloading post man
app.post(CSV_CREATE_ENDPOINT, async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send('Bad Request: No JSON data provided.');
        }

        const { invoice: invoiceCSV } = req.body;

        // console.log(invoiceCSV);

		const invoiceJSON = csvtojson().fromString(invoiceCSV);

        // console.log(invoiceJSON); // @pixelmat this is broken

        const outputInvoice = createUblInvoice(invoiceJSON);
        await exportInvoiceXml(outputInvoice);

        res.setHeader('Content-Type', 'application/xml');
        res.download("./src/output/invoice.xml");
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

const PORT: number = parseInt(process.env.PORT || '4000');
const HOST: string = process.env.IP || 'localhost';

server.listen(PORT, HOST, () => {
	console.log(`Server is alive on port ${PORT} at ${HOST}`);	
});

