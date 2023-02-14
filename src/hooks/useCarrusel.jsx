import { useEffect, useState } from "react";

export const useCarrusel = () => {
  const [cardProducts, setCardProducts] = useState([]);
  const [selectProduct, setselectProduct] = useState(0);
  const [infoView, setInfoView] = useState({
    title: "",
    subtitle: "",
    img: "",
    points: [],
    model: {
      type: -1,
      obj: "",
      map: "",
    },
  });

  useEffect(() => {
    if (cardProducts.length > 0) {
      const { title, subtitle, imgCostal, points, model } =
        cardProducts[selectProduct];
      setInfoView({ title, subtitle, img: imgCostal, points, model });
    }
  }, [cardProducts]);

  const nextInfo = () => {
    let info = {
      title: "",
      subtitle: "",
      img: "",
      points: [],
      model: {
        type: -1,
        obj: "",
        map: "",
      },
    };
    if (selectProduct === cardProducts.length - 1) {
      const { title, subtitle, imgCostal, points, model } = cardProducts[0];
      info.img = imgCostal;
      info.title = title;
      info.subtitle = subtitle;
      info.points = points;
      info.model = model;
      setselectProduct(0);
    } else {
      let number = selectProduct + 1;
      const { title, subtitle, imgCostal, points, model } =
        cardProducts[number];
      info.img = imgCostal;
      info.title = title;
      info.subtitle = subtitle;
      info.points = points;
      info.model = model;
      setselectProduct(number);
    }
    setInfoView(info);
  };

  return {
    infoView,
    setCardProducts,
    isCardExist: cardProducts.length > 0,
    nextInfo,
    totalCard: cardProducts.length,
  };
};
