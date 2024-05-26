const axios = require("axios");
const nodeMailjet = require("node-mailjet");

let mailjetClient;

// Use bodyParser middleware to parse request bodies for this specific API route
export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(request, response) {
  if(process.env.NEXT_PUBLIC_ENVIRONMENT === 'production') {
    const response2 = await axios.post(
        "https://www.google.com/recaptcha/api/siteverify",
        null,
        {
          params: {
            secret: process.env.NEXT_PRIVATE_RECAPTCHA_SECRET_KEY,
            response: request.body.token,
          },
        },
    );

    if (response2.data.success === false) {
      return response.status(200).json({
        message: "Failed",
        error: true,
        data: {
          errorCodes: response2.data,
          body: request.body,
        },
      });
    }
  }

  if (!mailjetClient) {
    mailjetClient = await nodeMailjet.apiConnect(
      "3225b80c5d6fc9cb8e4c35bdbc7701cc",
      "6fbebc499512bb5217af469bb59e042e",
    );
  }

  await mailjetClient.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "hello@ilechuks73.com",
          Name: "ilechuks73",
        },
        To: [
          {
            Email: `ilechuks73@gmail.com`,
            Name: `Ilechukwu Joshua`,
          },
        ],
        Subject: `Message from ${request.body.name}!`,
        HTMLPart: `
<p>Full Name: ${request.body.name}</p> 
<p>Email Address: ${request.body.emailAddress}</p>
<p>Message: ${request.body.message}</p>
`,
      },
    ],
  });

  response.status(200).json({
    message: "Success",
    error: false,
    data: null,
  });
}
