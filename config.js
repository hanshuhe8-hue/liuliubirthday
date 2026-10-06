const CONFIG = {
  // 昵称、图片和音乐
  name: "溜溜",
  photos: [
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg",
  "./img/6.jpg",
  "./img/7.jpg",
  "./img/0.jpg",
],
  music: "./music/hbd.mpeg",

  // 白金色主题
  colors: {
    primary: "#b58a32",
    accent: "#5266b8",
    dark: {
      background: "#111827",
      text: "#f8fafc",
    },
    light: {
      background: "#faf8f2",
      text: "#20283c",
    },
  },

  defaultMode: "light",

  sections: [
    {
      type: "greeting",
      title: "生日快乐",
      subtitle: "皇马球迷 · 山大学子 · 峡谷召唤师",
    },
    {
      type: "countdown",
      from: 3,
      goText: "开场！⚽",
    },
    {
      type: "announcement",
      text: "溜溜的生日特别赛季，正式开始！",
    },
    {
      type: "chatbox",
      message:
        "生日快乐，兄弟！祝你新的一岁，看球开心，排位顺利，学习有收获，生活有盼头。",
      buttonText: "发送祝福",
    },
    {
      type: "ideas",
      lines: [
        "本来，发一句生日快乐就完事了。",
        "但仔细一想……",
        "皇马球迷的生日，必须有点<strong>主场气氛</strong>。",
        "山大学子的生日，也得<strong>理论联系实际</strong>。",
        "所以今天的主要任务是：<span>吃好，玩好！</span>",
      ],
      bigLetters: "开整",
    },
    {
      type: "quote",
      text:
        "今天的主要矛盾：蛋糕有限，兄弟的胃口无限。",
      author: "生日特别议题",
    },
    {
      type: "balloons",
      count: 18,
    },
    {
      type: "profile",
      wishTitle: "生日快乐，溜溜！",
      wishText:
        "愿你看球常有欢呼，排位常有好队友，读书常有新收获。顺风一起冲，逆风一起扛。",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "祝福送到，兄弟情不多说。下次见面，一起吃顿好的！",
      replayText: "再来一遍，重返生日主场 →",
    },
  ],
};