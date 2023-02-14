import { typeModal } from "./productsDog";

const namesProductsCats = {
  NUPEC_FELINO_Kitten: "NUPEC_FELINO_Kitten",
  NUPEC_FELINO_Kitten_HUMEDO: "NUPEC_FELINO_Kitten_HUMEDO",
  NUPEC_FELINO_ADULTO_INDOOR: "NUPEC_FELINO_ADULTO_INDOOR",
  NUPEC_FELINO_ADULTO_INDOOR_HUMEDO: "NUPEC_FELINO_ADULTO_INDOOR_HUMEDO",
  NUPEC_FELINO_SENIOR: "NUPEC_FELINO_SENIOR",
  NUPEC_FELINO_Hairball: "NUPEC_FELINO_Hairball",
  NUPEC_FELINO_Hairball_HUMEDO: "NUPEC_FELINO_Hairball_HUMEDO",
  NUPEC_FELINO_Weight_Care: "NUPEC_FELINO_Weight_Care",
  NUPEC_FELINO_Digestive: "NUPEC_FELINO_Digestive",
  NUPEC_FELINO_Urinary: "NUPEC_FELINO_Urinary",
  NUPEC_FELINO_Urinary_HUMEDO: "NUPEC_FELINO_Urinary_HUMEDO",
  NUPEC_FELINO_Renal_Care: "NUPEC_FELINO_Renal_Care",
};

const base = {
  id: "NUPEC",
  title: "NUPEC",
  subtitle: "",
  imgCostal: "",
  points: [],
  model: {
    type: typeModal.costal,
    obj: "",
    map: "",
  },
};

const productsCat = [
  {
    ...base,
    id: namesProductsCats.NUPEC_FELINO_Kitten,
    title: "NUPEC FELINO KITTEN",
    subtitle: "",
    imgCostal: require("../../assets/productos/Nupec-Felino-Kitten-1.png"),
    points: [
      "Vitaminas, minerales y antioxidantes para el desarrollo óptimo del sistema inmune en cachorros felinos",
      "DHA y ácido fólico que contribuyen a la función cognitiva",
      "Proteínas de pollo y salmón de alta calidad que promueven el desarrollo muscular",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_MANTENIMIENTO_FELINO_KITTEN.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsCats.NUPEC_FELINO_Kitten_HUMEDO,
    title: "NUPEC FELINO KITTEN",
    subtitle: "Humedo",
    imgCostal: require("../../assets/productos/HUMEDO_FELINO_KITTEN.png"),
    points: [
      "Vitaminas, minerales y antioxidantes para el desarrollo óptimo del sistema inmune en cachorros felinos",
      "DHA y ácido fólico que contribuyen a la función cognitiva",
      "Proteínas de pollo y salmón de alta calidad que promueven el desarrollo muscular",
    ],
    model: {
      type: typeModal.cans,
      obj: "",
      map: require("../../assets/lata/texture/HUMEDO_FELINO_KITTEN_AL.png"),
    },
  },
  {
    ...base,
    id: namesProductsCats.NUPEC_FELINO_ADULTO_INDOOR,
    title: "NUPEC Felino Adult Indoor",
    subtitle: "",
    imgCostal: require("../../assets/productos/NUPECFELINOADULTOINDOOR.png"),
    points: [
      "Proteína de pollo y salmón altamente digestible para mantener una condición corporal óptima",
      "Prebióticos que promueven la salud del tracto gastrointestinal",
      "Vitaminas del complejo B y romero que regulan el sistema nervioso y mejoran el estado de ánimo",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_MANTENIMIENTO_FELINO_INDOOR.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsCats.NUPEC_FELINO_ADULTO_INDOOR_HUMEDO,
    title: "NUPEC Felino Adult Indoor",
    subtitle: "Humedo",
    imgCostal: require("../../assets/productos/HUMEDO_FELINO_INDOOR.png"),
    points: [
      "Proteína de pollo y salmón altamente digestible para mantener una condición corporal óptima",
      "Prebióticos que promueven la salud del tracto gastrointestinal",
      "Vitaminas del complejo B y romero que regulan el sistema nervioso y mejoran el estado de ánimo",
    ],
    model: {
      type: typeModal.cans,
      obj: "",
      map: require("../../assets/lata/texture/HUMEDO_FELINO_INDOOR_AL.png"),
    },
  },
  {
    ...base,
    id: namesProductsCats.NUPEC_FELINO_Hairball,
    title: "NUPEC Felino Hairball control",
    subtitle: "",
    imgCostal: require("../../assets/productos/HUMEDO_FELINO_HAIRBALL.png"),
    points: [
      "Balance adecuado de nutrientes para mantener una condición corporal óptima",
      "Balance de fibras que reducen la formación de bolas de pelo",
      "Vitaminas, minerales y ácidos grasos omega 3 y 6 para promover un pelaje lustroso y saludable",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_ESPECIALIDAD_FELINO_HAIRBALLCONTROL.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsCats.NUPEC_FELINO_Hairball_HUMEDO,
    title: "NUPEC Felino Hairball control",
    subtitle: "Humedo",
    imgCostal: require("../../assets/productos/HUMEDO_FELINO_HAIRBALL.png"),
    points: [
      "Balance adecuado de nutrientes para mantener una condición corporal óptima",
      "Balance de fibras que reducen la formación de bolas de pelo",
      "Vitaminas, minerales y ácidos grasos omega 3 y 6 para promover un pelaje lustroso y saludable",
    ],
    model: {
      type: typeModal.cans,
      obj: "",
      map: require("../../assets/lata/texture/HUMEDO_FELINO_HAIRBALL_AL.png"),
    },
  },
  {
    ...base,
    id: namesProductsCats.NUPEC_FELINO_SENIOR,
    title: "NUPEC Felino Senior",
    subtitle: "",
    imgCostal: require("../../assets/productos/nupec_senior_felino_2_1024x1024.png"),
    points: [
      "Glucosamina y sulfato de condroitina que promueven la salud articular",
      "Ayuda en el mantenimiento de la masa ósea y muscular",
      "Favorece la respuesta del sistema inmunológico",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_ESPECIALIDAD_FELINO_SENIOR.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsCats.NUPEC_FELINO_Weight_Care,
    title: "NUPEC Felino Weight care",
    subtitle: "",
    imgCostal: require("../../assets/productos/felino_empaque.png"),
    points: [
      "Nutrición para el manejo de peso saludable en gatos adultos con tendencia al sobrepeso o esterilizados",
      "Con Condroitina que ayuda a contrarrestar el desgaste articular generado por el sobrepeso",
      "L-carnitina para promover el metabolismo de las grasas",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_ESPECIALIDAD_FELINO_WEIGHTCARE.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsCats.NUPEC_FELINO_Digestive,
    title: "NUPEC Felino Digestive health",
    subtitle: "",
    imgCostal: require("../../assets/productos/IMG_FEL_Digestive.png"),
    points: [
      "Nutrición especializada, altamente palatable, con prebióticos y probióticos para mantener la microbiota intestinal saludable",
      "Con Yucca shidigera, que ayuda a reducir el aroma de las heces y a mejorar la digestión",
      "Nutrientes de fácil digestión y absorción",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_ESPECIALIDAD_FELINO_DIGESTIVEHEALTH.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsCats.NUPEC_FELINO_Urinary,
    title: "NUPEC Felino Urinary management",
    subtitle: "",
    imgCostal: require("../../assets/productos/IMG_FEL_Urinary.png"),
    points: [
      "Altamente palatable con un alto contenido calórico para compensar la disminución del apetito",
      "Concentrado de arándano y metionina para acidificar la orina",
      "Niveles de minerales controlados para prevenir y evitar la formación de cristales en la orina",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_ESPECIALIDAD_FELINO_URINARYMANAGMENT.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsCats.NUPEC_FELINO_Urinary_HUMEDO,
    title: "NUPEC Felino Urinary management",
    subtitle: "Humedo",
    imgCostal: require("../../assets/productos/HUMEDO_FELINO_URINARY.png"),
    points: [
      "Altamente palatable con un alto contenido calórico para compensar la disminución del apetito",
      "Concentrado de arándano y metionina para acidificar la orina",
      "Niveles de minerales controlados para prevenir y evitar la formación de cristales en la orina",
    ],
    model: {
      type: typeModal.cans,
      obj: "",
      map: require("../../assets/lata/texture/HUMEDO_FELINO_URINARY_AL.png"),
    },
  },
  {
    ...base,
    id: namesProductsCats.NUPEC_FELINO_Renal_Care,
    title: "NUPEC Felino Renal care",
    subtitle: "",
    imgCostal: require("../../assets/productos/IMG_FEL_Renal.png"),
    points: [
      "Altamente palatable con un alto contenido calórico para compensar la disminución del apetito",
      "Baja inclusión de minerales, para aminorar la progresión de la enfermedad renal.",
      "Restricción proteica para disminuir el trabajo renal",
    ],
    model: {
      type: typeModal.cans,
      obj: "",
      map: require("../../assets/costal/textures/TXT_ESPECIALIDAD_FELINO_RENALCARE.jpg"),
    },
  },
];

export { namesProductsCats, productsCat };
