import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "/libs/session.js";
import user from "/mockData/fake.json" assert { type: "json" };

export default withIronSessionApiRoute(apiHandlerName, sessionOptions);
function apiHandlerName(req, res) {
  if (req.method === "GET") {
    return res.status(200).send(user);
  } else {
    return res.status(405).send("Method not allowed");
  }
}
