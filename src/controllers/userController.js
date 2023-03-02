import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  const { email, username, password, password2, name, location } = req.body;
  const pageTitle = "Join";
  if (password !== password2) {
    res.render("join", {
      pageTitle,
      errorMessage: "비밀번호가 일치하지 않습니다.",
    });
  }
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    res.render("join", {
      pageTitle,
      errorMessage: "이 이메일/유저 네임은 이미 사용 중 입니다 !!!",
    });
  }
  await User.create({
    email,
    username,
    password,
    name,
    location,
  });
  return res.redirect("/login");
};
export const edit = (req, res) => res.send("계정 정보 수정");
export const remove = (req, res) => res.send("계삭 ㅋㅋ");
export const login = (req, res) => res.send("로그인 ㅋㅋ");
export const logout = (req, res) => res.send("로그아웃 ㅋㅋ");
export const see = (req, res) => res.send("보기");
