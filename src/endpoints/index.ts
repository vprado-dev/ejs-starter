import { endpoint } from "@ev-fns/endpoint";

export const index = endpoint(async (req, res) => {
  res.render("index");
});
