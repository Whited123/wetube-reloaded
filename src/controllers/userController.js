export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = (req, res) => {
  console.log(req.body);
  res.end();
};
export const edit = (req, res) => res.send("계정 정보 수정");
export const remove = (req, res) => res.send("계삭 ㅋㅋ");
export const login = (req, res) => res.send("로그인 ㅋㅋ");
export const logout = (req, res) => res.send("로그아웃 ㅋㅋ");
export const see = (req, res) => res.send("보기");
