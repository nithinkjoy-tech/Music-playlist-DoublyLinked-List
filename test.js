const fetch=require("fetch")

fetch('https://dns4.vippendu.com/download/128k-dmmpg/Kaane-Kaane.mp3')
  .then(response => response.json())
  .then(data => console.log(data));