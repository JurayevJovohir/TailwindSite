/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Alata"],
        body2: ["Josefin Sans"],
      },
      fontSize: {
        vrfont: ["15px"],
      },
      lineHeight: {
        height: ["70px"],
      },
      letterSpacing:{
        gridtitle:["5px"]
      },
      maxWidth: {
        vrWidth: ["545px"],
        gridsubtitle:["164px"],
        gridsubtitle2:["195px"],
        gridsubtitle3:["77px"],
      },
      height:{
        grid:["450px"],
      },
      backgroundImage: {
        headerbgi: ["url(../images/header-bgi.jpg)"],
        earth:["url(../images/earth.jpg)"],
        arcade:["url(../images/arcade.jpg)"],
        soccer:["url(../images/soccer.jpg)"],
        car:["url(../images/car.jpg)"],
        road:["url(../images/road.jpg)"],
        borealis:["url(../images/curiocity.jpg)"],
        curiocity:["url(../images/borealis.jpg)"],
        fisheye:["url(../images/fisheye.jpg)"],
      },
    },
  },
  plugins: [],
};
