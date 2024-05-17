const getCoffee = () => {
  axios({
    method: "get",
    url: "http://localhost:3000/starbucks",
  })
    .then((res) => {
      res.data.forEach((coffee) => {
        createMenuCard(coffee);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const createMenuCard = (data) => {
  const menuCardWrapper = document.createElement("div");
  menuCardWrapper.className = "Menu_Card_Wrapper";

  const menuCardImgBox = document.createElement("div");
  menuCardImgBox.className = "Menu_Card_ImgBox";

  const menuCardName = document.createElement("div");
  menuCardName.className = "Menu_Card_Name";
  menuCardName.textContent = data?.name || "메뉴이름";

  const menuCardInfo = document.createElement("div");
  menuCardInfo.className = "Menu_Card_Info";
  menuCardInfo.textContent = data?.kcal || "칼로리";

  const menuWrapper = document.querySelector("#Menu_Background");
  menuCardWrapper.appendChild(menuCardImgBox);
  menuCardWrapper.appendChild(menuCardName);
  menuCardWrapper.appendChild(menuCardInfo);
  menuWrapper.appendChild(menuCardWrapper);
};
