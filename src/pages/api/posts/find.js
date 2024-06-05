import models from "@/models/api";
import utils from "@/utils/api";

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
    const posts = await models.post.find({});
    return response.status(200).json({
      message: "success",
      data: { posts },
      statusCode: 200,
    });
  } catch (error) {
    console.log(error.message);
    console.log(error.stack);
    return response.status(400).json({
      message: "Unable to process this request",
      data: null,
      statusCode: 400,
    });
  }
}
