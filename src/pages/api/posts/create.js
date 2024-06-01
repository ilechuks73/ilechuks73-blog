import models from "@/models/api";
import utils from "@/utils/api";

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(request, response) {
  try {
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Origin", "*"); // replace this your actual origin
    response.setHeader(
      "Access-Control-Allow-Methods",
      "GET,DELETE,PATCH,POST,PUT,OPTIONS"
    );
    response.setHeader("Access-Control-Allow-Headers", "*");
    if (request.method === "OPTIONS") {
      return response.status(200).end();
    }
    await utils.connectDb();
    let permalink = `https://blog.ilechuks73.com/${request.body.title.replaceAll(
      " ",
      "-"
    )}`;

    let post = await models.post.findOne({ permalink: permalink });
    if (post) {
      return response.status(400).json({
        message: "Post with this title already exists",
        statusCode: "DUPLICATEPOSTTITLE",
        data: null,
      });
    }
    request.body.permalink = permalink;
    await models.post.create({ ...request.body });
    return response.status(200).json({
      message: "success",
      data: null,
      statusCode: "OK",
    });
  } catch (error) {
    console.log(error.message);
    console.log(error.stack);
    return response.status(400).json({
      message: "Unable to process this request",
      statusCode: "ERROR",
      data: null,
    });
  }
}
