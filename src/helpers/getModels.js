import { namesProductsCats, productsCat } from "../types/productsCat";
import { namesProductsDogs, productsDog } from "../types/productsDog";

//! DOG AND CAT
const problemsHealth = (urinario = 0, renal = 0) => {
  return {
    ur: urinario === 0,
    re: renal === 0,
  };
};

const selectCardProductsView = (selectProducts = [], type = 0) => {
  let cards = [];
  //* 0 = dog, 1 = cat
  selectProducts.forEach((product) => {
    let findIndex = -1;
    if (type === 0) {
      findIndex = productsDog.findIndex((prodog) => prodog.id === product);
    }
    if (type === 1) {
      findIndex = productsCat.findIndex((prodog) => prodog.id === product);
    }
    if (findIndex !== -1) {
      if (type === 0) {
        cards.push(productsDog[findIndex]);
      }
      if (type === 1) {
        cards.push(productsCat[findIndex]);
      }
    }
  });
  return cards;
};

//! -- DOG

const normalDog = (size = 0, age = 0) => {
  let modalCostal = [];
  //? age 1 = adulto , 2 = senior
  //? size 0 = mini, 1 = pequeño, 2 = Grande, 3 = gigante
  //*seniors grande y gigante
  if ((size === 2 || size === 3) && age === 2) {
    modalCostal = [...modalCostal, namesProductsDogs.NUPEC_SENIOR];
  } else if ((size === 0 || size === 1) && age === 2) {
    modalCostal = [
      ...modalCostal,
      namesProductsDogs.NUPEC_SENIOR_RAZAS_PEQUENAS,
    ];
  } else if ((size === 2 || size === 3) && age === 1) {
    modalCostal = [...modalCostal, namesProductsDogs.NUPEC_ADULTO];
  } else if (size === 1 && age === 1) {
    modalCostal = [
      ...modalCostal,
      namesProductsDogs.NUPEC_RAZAS_PEQUENAS_ADULTO,
    ];
  } else if (size === 0 && age === 1) {
    modalCostal = [...modalCostal, namesProductsDogs.NUPEC_RAZAS_MINI_ADULTO];
  }
  return modalCostal;
};
const specialtyDog = (
  size = 1,
  weight = 1,
  sensitive = 1,
  digestive = 1,
  activityHigh = 2
) => {
  //? size 0 = mini, 1 = pequeño, 2 = Grande, 3 = gigante
  let modalCostal = [];
  const costalSelect = {
    weight: [
      namesProductsDogs.NUPEC_Weight_Control_RAZAS_PEQUENAS,
      namesProductsDogs.NUPEC_Weight_Control,
    ],
    sensitive: [
      namesProductsDogs.NUPEC_SENSITIVE_RAZAS_PEQUENAS,
      namesProductsDogs.NUPEC_SENSITIVE,
    ],
    digestive: [namesProductsDogs.NUPEC_DIGESTIVE_HEALTH],
  };
  if (weight === 0 || sensitive === 0 || digestive === 0) {
    const costalnumer = size === 0 || size === 1 ? 0 : 1;
    if (activityHigh !== 2) {
      if (weight === 0) {
        modalCostal = [...modalCostal, costalSelect["weight"][costalnumer]];
      }
    }
    if (sensitive === 0) {
      modalCostal = [...modalCostal, costalSelect["sensitive"][costalnumer]];
    }
    if (digestive === 0) {
      modalCostal = [...modalCostal, costalSelect["digestive"][0]];
    }
  }
  return modalCostal;
};
const activityDog = (age = 0, size = 1, activity = 0) => {
  let modalCostal = [];
  if (
    activity === 2 &&
    (age === 1 || age === 2) &&
    (size === 2 || size === 3)
  ) {
    modalCostal = [...modalCostal, namesProductsDogs.NUPEC_High_Performance];
  }
  return modalCostal;
};

const sizePuppyDogCostal = (size = 0) => {
  //? size 0 = mini, 1 = pequeño, 2 = Grande, 3 = gigante
  let modelCostal = [];
  if (size === 0) {
    modelCostal = [namesProductsDogs.NUPEC_RAZAS_MINI_CACHORRO];
  } else if (size === 1) {
    modelCostal = [namesProductsDogs.NUPEC_RAZAS_PEQUENAS_CACHORRO];
  } else if (size === 2 || size === 3) {
    modelCostal = [namesProductsDogs.NUPEC_CACHORRO];
  }
  return modelCostal;
};

const dogsModal = (answers = []) => {
  let modals = [];
  const sizeDog = answers.find((uri) => uri.idfather === 0);
  const lifeDog = answers.find((uri) => uri.idfather === 1);
  //! es adulto o senior
  if (lifeDog.id !== 0) {
    const findUrinario = answers.find((uri) => uri.idfather === 7);
    const findRenal = answers.find((uri) => uri.idfather === 8);
    const { re, ur } = problemsHealth(findUrinario.id, findRenal.id);
    //! existe problemas urinarios o renales
    if (re || ur) {
      if (re) {
        modals = [...modals, namesProductsDogs.NUPEC_RENAL_CARE];
      }
      if (ur) {
        modals = [...modals, namesProductsDogs.NUPEC_URINARY_MANAGEMENT];
      }
    } else {
      //* sin problemas
      const activity = answers.find((acti) => acti.idfather === 2);
      const weight = answers.find((acti) => acti.idfather === 3);
      const sensitive = answers.find((acti) => acti.idfather === 4);
      const digestive = answers.find((acti) => acti.idfather === 5);
      const anxiety = answers.find((acti) => acti.idfather === 6);
      const specialty = specialtyDog(
        sizeDog.id,
        weight.id,
        sensitive.id,
        digestive.id,
        activity.id
      );
      if (specialty.length > 0) {
        modals = [...modals, ...specialty];
      } else {
        const activityCostalDog = activityDog(
          lifeDog.id,
          sizeDog.id,
          activity.id
        );
        if (activityCostalDog.length === 0) {
          const normalCostalDog = normalDog(sizeDog.id, lifeDog.id);
          modals = [...modals, ...normalCostalDog];
        } else {
          modals = [...modals, ...activityCostalDog];
        }
      }
      if (anxiety.id === 0) {
        modals = [...modals, namesProductsDogs.NUPEC_RELAX_PRIZE];
      }
      //* adulto y senior
      if (lifeDog.id === 1 || lifeDog.id === 2) {
        modals = [
          ...modals,
          namesProductsDogs.NUPEC_DENTAL_PRIZE,
          namesProductsDogs.NUPEC_TRAINING_PRIZE,
        ];
      }
    }
  } else {
    //! cachorro
    const modalCachorro = sizePuppyDogCostal(sizeDog.id);
    modals = [...modals, ...modalCachorro];
  }

  return modals;
};
//! ---- DOG

//! --- Cat

const specialtyCats = (age = 0, fur = 0, weight = 1, digestive = 1) => {
  //?  1 = adulto 2 = senior
  //? fur 0 = corto 1 = largo
  let modalCostal = [];
  if (digestive === 0) {
    modalCostal = [...modalCostal, namesProductsCats.NUPEC_FELINO_Digestive];
  } else if (weight === 0 && age === 1) {
    modalCostal = [...modalCostal, namesProductsCats.NUPEC_FELINO_Weight_Care];
  } else if (fur === 1 && age === 1) {
    modalCostal = [
      ...modalCostal,
      namesProductsCats.NUPEC_FELINO_Hairball,
      namesProductsCats.NUPEC_FELINO_Hairball_HUMEDO,
    ];
  }
  return modalCostal;
};

const catsModal = (answers = []) => {
  let modals = [];
  //? 0 = gatito, 1 = adulto 2 = senior
  const lifeCat = answers.find((uri) => uri.idfather === 0);
  if (lifeCat.id === 0) {
    //! es un gatito
    const modalKitten = [
      namesProductsCats.NUPEC_FELINO_Kitten,
      namesProductsCats.NUPEC_FELINO_Kitten_HUMEDO,
    ];
    modals = [...modals, ...modalKitten];
  } else {
    //! adulto y senior
    const findUrinario = answers.find((uri) => uri.idfather === 4);
    const findRenal = answers.find((uri) => uri.idfather === 5);
    const { re, ur } = problemsHealth(findUrinario.id, findRenal.id);
    // //! existe problemas urinarios o renales
    if (re || ur) {
      if (re) {
        modals = [...modals, namesProductsCats.NUPEC_FELINO_Renal_Care];
      }
      if (ur) {
        modals = [
          ...modals,
          namesProductsCats.NUPEC_FELINO_Urinary,
          namesProductsCats.NUPEC_FELINO_Urinary_HUMEDO,
        ];
      }
    } else {
      //* no tiene problemas
      const fur = answers.find((uri) => uri.idfather === 1);
      const weight = answers.find((uri) => uri.idfather === 2);
      const digestive = answers.find((uri) => uri.idfather === 3);
      const specialty = specialtyCats(
        lifeCat.id,
        fur.id,
        weight.id,
        digestive.id
      );
      if (specialty.length > 0) {
        modals = [...modals, ...specialty];
      } else {
        if (lifeCat.id === 1) {
          modals = [
            ...modals,
            namesProductsCats.NUPEC_FELINO_ADULTO_INDOOR,
            namesProductsCats.NUPEC_FELINO_ADULTO_INDOOR_HUMEDO,
          ];
        } else if (lifeCat.id === 2) {
          modals = [...modals, namesProductsCats.NUPEC_FELINO_SENIOR];
        }
      }
    }
  }

  return modals;
};

const getCardsModal = (answers = [], type = "") => {
  let cards = [];
  let modalCard = [];
  let typeSelect = type === "Perro" ? 0 : 1;
  if (typeSelect === 0) {
    modalCard = dogsModal(answers);
  }
  if (typeSelect === 1) {
    modalCard = catsModal(answers);
  }
  cards = selectCardProductsView(modalCard, typeSelect);
  return { cards };
};

export { getCardsModal };
