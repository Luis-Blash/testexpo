const questionsCats = [
  {
    id: 0,
    question: "Elige la edad de tu gato",
    infoText: {
      text: "",
      points: [],
    },
    isMedic: false,
    answers: [
      {
        name: "Gatito",
        id: 0,
        img: require("../../assets/animals/1.png"),
        text: "",
      },
      {
        name: "Adulto",
        id: 1,
        img: require("../../assets/animals/2.png"),
        text: "",
      },
      {
        name: "Senior",
        id: 2,
        img: require("../../assets/animals/3.png"),
        text: "",
      },
    ],
  },
  {
    id: 1,
    question: "Selecciona el tipo de pelaje de tu gato",
    infoText: {
      text: "",
      points: [],
    },
    isMedic: false,
    answers: [
      {
        name: "Corto",
        id: 0,
        img: require("../../assets/animals/13.png"),
        text: "",
      },
      {
        name: "Largo",
        id: 1,
        img: require("../../assets/animals/12.png"),
        text: "",
      },
    ],
  },
  {
    id: 2,
    question: "¿Tu mascota tiene sobrepeso?",
    infoText: {
      text: "",
      points: [],
    },
    isMedic: false,
    answers: [
      {
        name: "Sí",
        id: 0,
        img: require("../../assets/animals/gatogordo.png"),
        text: "",
      },
      {
        name: "No",
        id: 1,
        img: require("../../assets/animals/gatoflaco.png"),
        text: "",
      },
    ],
  },
  {
    id: 3,
    question: "¿Tu gato tiene problemas digestivos?",
    infoText: {
      text: "Algunos signos son:",
      points: ["Falta de apetito", "Heces blandas", "Flatulencias", "Vómitos"],
    },
    isMedic: false,
    answers: [
      {
        name: "Sí",
        id: 0,
        img: require("../../assets/animals/eat.png"),
        text: "",
      },
      {
        name: "No",
        id: 1,
        img: require("../../assets/animals/eat.png"),
        text: "",
      },
    ],
  },
  {
    id: 4,
    question: "¿Tu gato tiene problemas urinarios?",
    infoText: {
      text: "Algunos signos son:",
      points: [
        "Orinia en lugares inusuales",
        "Dificultad o molestia al orinar",
        "Visita constante su arenero",
      ],
    },
    isMedic: true,
    answers: [
      {
        name: "Sí",
        id: 0,
        img: require("../../assets/animals/eat.png"),
        text: "",
      },
      {
        name: "No",
        id: 1,
        img: require("../../assets/animals/eat.png"),
        text: "",
      },
    ],
  },
  {
    id: 5,
    question: "¿Tu gato tiene insuciencia renal?",
    infoText: {
      text: "Algunos signos son:",
      points: [
        "Aumento en la ingesta de agua",
        "Disminución de la frecuencia de orina y cantidad de orina",
        "falta de apetito",
        "Baja de peso repentino",
      ],
    },
    isMedic: true,
    answers: [
      {
        name: "Sí",
        id: 0,
        img: require("../../assets/animals/eat.png"),
        text: "",
      },
      {
        name: "No",
        id: 1,
        img: require("../../assets/animals/eat.png"),
        text: "",
      },
    ],
  },
];

export { questionsCats };
