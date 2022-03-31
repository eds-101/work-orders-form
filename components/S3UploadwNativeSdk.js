import React ,{useState} from 'react';
import AWS from 'aws-sdk'

const S3_BUCKET ='wmspics';
const REGION ='eu-west-2';


AWS.config.update({
    accessKeyId: 'AKIAWCQEO7GW6COS4PNQ',
    secretAccessKey: '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'
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})

const S3UploadwNativeSdk = () => {

    const [progress , setProgress] = useState(0);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileInput = (e) => {
        console.log("e: ", e, "e.target.files: ", e.target.files)
        setSelectedFiles(e.target.files);
    }

    const uploadFile = (files) => {

        [...files].forEach(file => {
            const params = {
                ACL: 'public-read',
                Body: file,
                Bucket: S3_BUCKET,
                Key: file.name
            };
    
            myBucket.putObject(params)
                .on('httpUploadProgress', (evt) => {
                    setProgress(Math.round((evt.loaded / evt.total) * 100))
                })
                .send((err) => {
                    if (err) console.log(err)
                })
        })
    }

    return <div>
        <label>Upload Any Pictures | {progress}%</label>
        <input type="file" multiple accept="image/*" onChange={handleFileInput}/>
        <button type='button' onClick={() => uploadFile(selectedFiles)}> Upload to S3</button>
    </div>
}

export default S3UploadwNativeSdk;