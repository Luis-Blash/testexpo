const questionsDogs = [
  {
    id: 0,
    question: "Elige la talla de tu mascota",
    infoText: {
      text: "",
      points: [],
    },
    isMedic: false,
    answers: [
      {
        name: "Mini",
        id: 0,
        img: require("../../assets/animals/9.png"),
        text: "",
      },
      {
        name: "Pequeño",
        id: 1,
        img: require("../../assets/animals/8.png"),
        text: "",
      },
      {
        name: "Mediano/Grande",
        id: 2,
        img: require("../../assets/animals/11.png"),
        text: "",
      },
      {
        name: "Extra Grande",
        id: 3,
        img: require("../../assets/animals/10.png"),
        text: "",
      },
    ],
  },
  {
    id: 1,
    question: "Elige la edad de tu mascota",
    infoText: {
      text: "",
      points: [],
    },
    isMedic: false,
    answers: [
      {
        name: "Cachorro",
        id: 0,
        img: require("../../assets/animals/4.png"),
        text: "",
      },
      {
        name: "Adulto",
        id: 1,
        img: require("../../assets/animals/5.png"),
        text: "",
      },
      {
        name: "Senior",
        id: 2,
        img: require("../../assets/animals/6.png"),
        text: "",
      },
    ],
  },
  {
    id: 2,
    question: "Selecciona la frecuencia de actividad física de tu mascota",
    infoText: {
      text: "",
      points: [],
    },
    isMedic: false,
    answers: [
      {
        name: "Baja",
        id: 0,
        img: "",
        text: "",
      },
      {
        name: "Moderada",
        id: 1,
        img: "",
        text: "",
      },
      {
        name: "Alta",
        id: 2,
        img: "",
        text: "",
      },
    ],
  },
  {
    id: 3,
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
        img: require("../../assets/animals/perrogordo.png"),
        text: "",
      },
      {
        name: "No",
        id: 1,
        img: require("../../assets/animals/perroflaco.png"),
        text: "",
      },
    ],
  },
  {
    id: 4,
    question: "¿Tu mascota padece de piel sensible?",
    infoText: {
      text: "Algunos signos son:",
      points: ["Resequedad", "Caida de pelo", "Rascado continuo"],
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
    id: 5,
    question: "¿Tu perro tiene problemas digestivos?",
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
    id: 6,
    question: "¿Tu perro experimenta ansiedad?",
    infoText: {
      text: "Algunos signos son:",
      points: [
        "Hiperactividad",
        "Destrucción de cosas y/o espacios",
        "Jadeos o temblores inusuales",
      ],
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
    id: 7,
    question: "¿Tu perro tiene problemas urinarios?",
    infoText: {
      text: "Algunos signos son:",
      points: ["Dificultad o molestia al orinar"],
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
    id: 8,
    question: "¿Tu perro tiene insuciencia renal?",
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

export { questionsDogs };
