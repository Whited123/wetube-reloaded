import Video from "../models/Video";

export const home = (req, res) => {
  console.log("시작");
  Video.find({}, (error, videos) => {
    console.log("검색 끝");
    return res.render("home", { titlePage: "Home", videos });
  });
};
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { titlePage: `Watching` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { titlePage: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { titlePage: "Upload Video" });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  return res.redirect("/");
};
