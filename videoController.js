let videos = [
  {
    title: "한 코딩 마스터가 해냈다. 누적 조회수 1억만 뷰의 극한의 화제작!!!",
    rating: 2,
    comments: 7,
    createAt: "2일",
    views: 169,
    id: 1,
  },
  {
    title:
      "코딩이 벤치 120치는거 보다 쉬워요. 세상을 놀라게 한 최연소(26) 코딩 천재의 압도적인 강의",
    rating: 3,
    comments: 7,
    createAt: "2일",
    views: 169,
    id: 2,
  },
  {
    title: "왜 다들 내 깃허브 보고 화장실 가는 지 모르겠어.",
    rating: 4.5,
    comments: 7,
    createAt: "2일",
    views: 169,
    id: 3,
  },
];
export const trending = (req, res) => {
  return res.render("home", { titlePage: "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { titlePage: `Watching: ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { titlePage: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {};
