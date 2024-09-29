import { create } from 'ipfs-http-client';
import fs from 'fs';

// Create an IPFS client
const client = create({ url: 'https://ipfs.infura.io:5001/api/v0' });
 // Using Infura's IPFS gateway

async function uploadFile() {

    for(i = 0; i < 15; i++){
        
        index = i + 1
        str =  "nft" + index.toString()
        let file = fs.readFileSync('assets/' + str);
        str2 = "image" + index.toString()
        let { cid } = await client.add({ path: str2, content: file });
        // Log the CID
        console.log('File uploaded with CID:', cid.toString());
    }

}

uploadFile();
