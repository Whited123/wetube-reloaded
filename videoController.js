export const trending = (req, res) => res.send("환영합니다.");
export const see = (req, res) => {
  return res.send(`즐감 ㅋㅋ #${req.params.id}`);
};
export const edit = (req, res) => {
  console.log(req.params);
  return res.send("수정");
};
export const search = (req, res) => res.send("설치");
export const upload = (req, res) => res.send("올리기");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("내리기");
};
