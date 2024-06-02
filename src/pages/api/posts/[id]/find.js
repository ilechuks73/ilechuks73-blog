import models from "@/models/api";
import utils from "@/utils/api";

export default async function handler(request, response) {
  await utils.connectDb();
  const post = await models.post.findOne({ _id: request.query.id });
  if (!post) {
    return response.status(400).json({
      message: "Post not found",
      statusCode: "POSTNOTFOUND",
      data: null,
    });
  }
  return response.status(200).json({
    message: "success",
    data: { post },
    statusCode: 200,
  });
}
