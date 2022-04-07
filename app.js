function App() {
  const cardArr = [
    {
      gambar:
        "https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png",
      nama: "Doraemon",
      umur: 40,
      kota: "toyama",
    },
    {
      gambar:
        "https://pbs.twimg.com/profile_images/493416454104969216/2gt_nClw_400x400.jpeg",
      nama: "Goku",
      umur: 11,
      kota: "west city",
    },
    {
      gambar: "https://pbs.twimg.com/media/DyXR3quXQAUBo81.jpg",
      nama: "Itachi",
      umur: 8,
      kota: "konoha",
    },
  ];

  return React.createElement(
    "div",
    { className: "container" },
    cardArr.map((item, index) =>
      React.createElement(
        "div",
        {
          className: "card",
        },
        [
          React.createElement("img", {
            className: "image",
            src: item.gambar,
          }),
          React.createElement("h1", {}, item.nama),
          React.createElement("h2", {}, item.umur),
          React.createElement("h3", {}, item.kota),
        ]
      )
    )
  );
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));

// Version 1
// =================================
// return React.createElement(
//   "div",
//   {
//     className: "container",
//   },
//   React.createElement(
//     "div",
//     {
//       className: "card",
//     },
//     [
//       React.createElement("img", {
//         className: "image",
//         src: "https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png",
//       }),
//       React.createElement("h1", {}, "Doraemon"),
//       React.createElement("h2", {}, 40),
//       React.createElement("h3", {}, "Toyama"),
//     ]
//   ),
//   React.createElement(
//     "div",
//     {
//       className: "card",
//     },
//     [
//       React.createElement("img", {
//         className: "image",
//         src: "https://pbs.twimg.com/profile_images/493416454104969216/2gt_nClw_400x400.jpeg",
//       }),
//       React.createElement("h1", {}, "Goku"),
//       React.createElement("h2", {}, 11),
//       React.createElement("h3", {}, "West City"),
//     ]
//   ),
//   React.createElement(
//     "div",
//     {
//       className: "card",
//     },
//     [
//       React.createElement("img", {
//         className: "image",
//         src: "https://pbs.twimg.com/media/DyXR3quXQAUBo81.jpg",
//       }),
//       React.createElement("h1", {}, "Itachi"),
//       React.createElement("h2", {}, 8),
//       React.createElement("h3", {}, "Konoha"),
//     ]
//   )
// );
// =================================

// Version 2 (With Map)
// =================================
// const cardArr = [
//   {
//     gambar:
//       "https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png",
//     nama: "Doraemon",
//     umur: 40,
//     kota: "toyama",
//   },
//   {
//     gambar:
//       "https://pbs.twimg.com/profile_images/493416454104969216/2gt_nClw_400x400.jpeg",
//     nama: "Goku",
//     umur: 11,
//     kota: "west city",
//   },
//   {
//     gambar: "https://pbs.twimg.com/media/DyXR3quXQAUBo81.jpg",
//     nama: "Itachi",
//     umur: 8,
//     kota: "konoha",
//   },
// ];

// return React.createElement(
//   "div",
//   { className: "container" },
//   cardArr.map((item, index) =>
//     React.createElement(
//       "div",
//       {
//         className: "card",
//       },
//       [
//         React.createElement("img", {
//           className: "image",
//           src: item.gambar,
//         }),
//         React.createElement("h1", {}, item.nama),
//         React.createElement("h2", {}, item.umur),
//         React.createElement("h3", {}, item.kota),
//       ]
//     )
//   )
// );
// =================================
