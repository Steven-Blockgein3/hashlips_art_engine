const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;
// General metadata for Ethereum
const namePrefix = "Seipes";
const description = "Seipes";
const baseUri = "";

const solanaMetadata = {
  symbol: "SEIPES",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "",
  creators: [
    {
      address: "",
      share: 100,
    },
  ],
};

//If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    // Creates an Common 2000 artworks
    growEditionSizeTo: 2000,
    layersOrder: [
      { name: "Common Background" },
      { name: "Common Body" },
      { name: "Common Clothing" },
      { name: "Common Eyes" },
      { name: "Common Mouth" },
      { name: "Common Head" },
    ],
  },
  {
    // Creates an Rare 1023 artworks
    growEditionSizeTo: 3023,
    layersOrder: [
      { name: "Rare Background" },
      { name: "Rare Body" },
      { name: "Rare Clothing" },
      { name: "Rare Eyes" },
      { name: "Rare Mouth" },
      { name: "Rare Head" },
    ],
  },
  {
    // Creates legendary 310 artworks
    growEditionSizeTo: 3323,
    layersOrder: [
      { name: "Legendary Background" },
      { name: "Legendary Body" },
      { name: "Legendary Clothing" },
      { name: "Legendary Eyes" },
      { name: "Legendary Mouth" },
      { name: "Legendary Head" },
    ],
  },
];


const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
