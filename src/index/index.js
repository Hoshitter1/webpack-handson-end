// CSS
import "./style.css";
import "components/css/common.css";

// JS
import "components/js/header";

// image
import "./img/instagram.jpg";

const clicked = () => {
  alert("写真撮ったで！！！");
};

document.querySelector(".btn").addEventListener("click", clicked);
