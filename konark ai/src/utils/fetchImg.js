import axios from "axios"

let apiKey = "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"
let url = "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev"

export async function fetchImg(data) {
    const response = await axios.post(
        "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell",
        data,
        {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            responseType: 'blob' // To receive the response as a blob
        }
    );
    return response.data; // This will be the blob
}


export async function fetchText(data) {
//   const data = await fs.readFile(filename);
  const response = await axios.post(
    "https://api-inference.huggingface.co/models/nlpconnect/vit-gpt2-image-captioning",
    data,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
}
