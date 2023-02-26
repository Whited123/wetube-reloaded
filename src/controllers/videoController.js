import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({});
  console.log(videos);
  return res.render("home", { titlePage: "Home", videos });
};
export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  console.log(video);
  if (!video) {
    return res.render("404", { titlePage: "비디오가 없어용" });
  }
  return res.render("watch", { titlePage: video.title, video });
};
export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { titlePage: "비디오가 없어용" });
  }
  return res.render("edit", { titlePage: `Edit ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { titlePage: "Upload Video" });
};
export const postUpload = async (req, res) => {
  try {
    const { title, description, hashtags } = req.body;
    const video = new Video({
      title,
      description,
      createdAt: Date.now(),
      hashtags: hashtags.split(",").map((word) => `#${word}`),
    });
    await video.save();
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      titlePage: "Upload Video",
      errorMessage: error._message,
    });
  }
};
