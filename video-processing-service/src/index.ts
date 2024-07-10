import express from 'express';
import ffmpeg from 'fluent-ffmpeg';

const app = express();
app.use(express.json());


app.post('/process-video', (req, res) => {
    //get path of the input video file from the request body
    const inputFilePath = req.body.inputFilePath;
    const outputFilePath = req.body.outputFilePath;

    if (!inputFilePath && !outputFilePath) {
        res.status(400).send("BAD REQUEST: Missing input file path and output file path");
    } else if (!inputFilePath) {
        res.status(400).send("BAD REQUEST: Missing input file path");
    } else if (!outputFilePath) {
        res.status(400).send("BAD REQUEST: Missing output file path");
    }

    ffmpeg(inputFilePath)
    .outputOptions("-vf", "scale =-1:360") //converts to 360p
    .on("end", () => {
         return res.status(200).send("Process Success.")
    })
    .on("error", (err) => {
        console.log(`an error occured: ${err.message}`);
        res.status(500).send(`Internal Servor error: ${err.message}`);
    })
    .save(outputFilePath);

});

  
const port = process.env.PORT || 3000;          //provides port at runtime
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
