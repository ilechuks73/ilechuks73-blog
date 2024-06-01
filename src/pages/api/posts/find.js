import models from "@/models/api";
import utils from "@/utils/api";

export default async function handler(request, response) {
  await utils.connectDb();
  const posts = await models.post.find({});
  return response.status(200).json({
    message: "success",
    data: { posts },
    statusCode: 200,
  });
}
