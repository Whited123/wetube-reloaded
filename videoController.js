export const trending = (req, res) => res.render("home", { titlePage: "Home" });
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("설치");
export const upload = (req, res) => res.send("올리기");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("내리기");
};
