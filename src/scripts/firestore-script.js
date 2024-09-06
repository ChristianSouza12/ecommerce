const { addDoc, collection } = require("firebase/firestore");
const { getFirestore } = require("firebase/firestore");
const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyA0i46FB3LzGqgvG4aBLaupjPLnWU3reIo",
  authDomain: "e-commerce-e656a.firebaseapp.com",
  projectId: "e-commerce-e656a",
  storageBucket: "e-commerce-e656a.appspot.com",
  messagingSenderId: "267136656213",
  appId: "1:267136656213:web:06e3364a5af820c5cac5dc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const categories = [
  {
    id: "1",
    name: "bikes",
    displayName: "Bikes",
    imageUrl: "https://images.tcdn.com.br/img/img_prod/1112018/bicicleta_mtb_aro_29_cannondale_f_si_carbon_3_1427_2_fbc03c127083952d92b4ab8a0ab133fc.jpg",
    products: [
      {
        id: "2",
        name: "Cannondale Scalpel HT Carbon 4 2022/2023",
        price: 20000,
        imageUrl: "https://www.flashbike.com.br/site/carrega?_tp=img5&_img=008813001.jpg"
      },
      {
        id: "3",
        name: "Specialized Rockhopper Comp 29",
        price: 17000,
        imageUrl: "https://d2ul2exfru69gk.cloudfront.net/Custom/Content/Products/23/50/23501_bicicleta-specialized-rockhopper-comp-29_l5_638048250834945455.jpg"
      },
      {
        id: "4",
        name: "Trek Marlin 7 2023",
        price: 18000,
        imageUrl: "https://media.trekbikes.com/image/upload/w_1200/Marlin7_23_36967_A_Portrait"
      },
      {
        id: "5",
        name: "Scott Scale 970",
        price: 16000,
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_743971-MLB75552717275_042024-O.webp"
      },
      {
        id: "6",
        name: "Giant XTC Advanced SL 29",
        price: 22000,
        imageUrl: "https://ik.imagekit.io/gobikes/xtc-advanced-sl-29-0-2020-14061962d.jpg?tr=w-900,t-true"
      }
    ]
  },
  {
    id: "11",
    name: "acessorios",
    displayName: "Acessórios",
    imageUrl: "https://blog.bikeregistrada.com.br/wp-content/uploads/2023/03/Checklistdosacessoriosparabikeobrigatorios.jpg",
    products: [
      {
        id: "12",
        name: "Óculos Ciclista",
        price: 90,
        imageUrl: "https://www.mxbikes.com.br/imagens_e_fotos/cycling-eyeglasses-1.jpg"
      },
      {
        id: "13",
        name: "Capacete MTB",
        price: 250,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScPxlCxinDtsHGmFV7VT4-QY3eriFNvqJV_w&s"
      },
      {
        id: "14",
        name: "Luva de Ciclismo",
        price: 80,
        imageUrl: "https://m.media-amazon.com/images/I/411tYZk7faL._AC_.jpg"
      },
      {
        id: "15",
        name: "Garrafa Térmica para Bike",
        price: 45,
        imageUrl: "https://img.ws.mms.shopee.com.br/5e3f5cf2ba7ef91b42444e231517e54d"
      },
      {
        id: "16",
        name: "Sapatilha de Ciclismo",
        price: 350,
        imageUrl: "https://ericbike.vteximg.com.br/arquivos/ids/170586-0-0/Sapatilha-para-Bike-MTB-Absolute-Prime-Preto-Fosco.jpg?v=637445816734900000"
      }
    ]
  },
  {
    id: "21",
    name: "bikes-urbanas",
    displayName: "Bikes de Uso Urbano",
    imageUrl: "https://blog.bikeregistrada.com.br/wp-content/uploads/2022/05/bikes-urbanas.jpg",
    products: [
      {
        id: "22",
        name: "Caloi City Tour",
        price: 2800,
        imageUrl: "https://www.flashbike.com.br/site/carrega?_tp=img5&_img=005291001.jpg"
      },
      {
        id: "23",
        name: "Sense Move",
        price: 3000,
        imageUrl: "https://www.ciclogiro.com.br/wp-content/uploads/2022/01/Bicicleta-Sense-Move-Urban-2022-Creme-Verde-5.jpg"
      },
      {
        id: "24",
        name: "GTSM1 Urban",
        price: 2000,
        imageUrl: "https://imgs.casasbahia.com.br/1558928872/1xg.jpg"
      },
      {
        id: "25",
        name: "Trek FX 3 Disc",
        price: 3500,
        imageUrl: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_800,h_600,c_pad/FX3Disc_22_35021_D_Primary"
      },
      {
        id: "26",
        name: "Specialized Sirrus 3.0",
        price: 3300,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFbShfRLPJeyl9WQGBsMmHz5ykdXiY7-rLIA&s"
      }
    ]
  },
  {
    id: "31",
    name: "pecas",
    displayName: "Peças para Bike",
    imageUrl: "https://www.brics-ocp.com.br/wp-content/uploads/2021/09/Pe%C3%A7as-de-bicicleta.jpg",
    products: [
      {
        id: "32",
        name: "Câmbio Shimano Alivio",
        price: 400,
        imageUrl: "https://ultramacho.com.br/wp-content/uploads/2019/11/alivio.jpg"
      },
      {
        id: "33",
        name: "Pedal Wellgo Alumínio",
        price: 150,
        imageUrl: "https://cdn.awsli.com.br/600x700/2126/2126575/produto/163779743647342271d.jpg"
      },
      {
        id: "34",
        name: "Cassete Shimano 11-28T",
        price: 350,
        imageUrl: "https://static.shopbike.com.br/public/shopbike/imagens/produtos/cassete-shimano-cs-hg50-cinza-64f876afb824f.png"
      },
      {
        id: "35",
        name: "Pneu Continental Ultra Sport",
        price: 250,
        imageUrl: "https://acdn.mitiendanube.com/stores/001/062/247/products/5c931822541-44282aea12df24fe4615732460505179-640-0.jpg"
      },
      {
        id: "36",
        name: "Freio a Disco Shimano MT200",
        price: 600,
        imageUrl: "https://static.portalwheeling.com.br/public/portalwheeling/imagens/produtos/freio-hidraulico-shimano-traseiro-mt200-altus-649600805fd24-6639.jpg"
      }
    ]
  },
  {
    id: "41",
    name: "bikes-infantis",
    displayName: "Bicicletas Infantis",
    imageUrl: "https://blog.bikeregistrada.com.br/wp-content/uploads/2022/05/bicicletas-infantis.jpg",
    products: [
      {
        id: "42",
        name: "Caloi Cecizinha",
        price: 500,
        imageUrl: "https://www.flashbike.com.br/site/carrega?_tp=img3&_img=6983-1.jpg"
      },
      {
        id: "43",
        name: "Sense Kids",
        price: 600,
        imageUrl: "https://images.tcdn.com.br/img/img_prod/665700/bicicleta_infantil_sense_grom_aro_16_aluminio_2021_22_6151_1_8f7a4a4a7cc5eda1ca26497357bb91b8.jpg"
      },
      {
        id: "44",
        name: "GTSM1 Kids Urban",
        price: 700,
        imageUrl: "https://static.netshoes.com.br/produtos/bicicleta-infantil-gts-aro-16-freio-v-brake-advanced-kids-pro/90/ABS-0222-390/ABS-0222-390_zoom1.jpg?ts=1704379912"
      },
      {
        id: "45",
        name: "Trek Precaliber",
        price: 800,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJvohwtZr1KxA8tmtMCbOT11tSKHyeroSPmw&s"
      },
      {
        id: "46",
        name: "Specialized Hotwalk",
        price: 750,
        imageUrl: "https://assets.specialized.com/i/specialized/94022-00_HOTWALK-CARBON_HERO?$scom-pdp-product-image-xl$&fmt=auto"
      }
    ]
  }
];

const main = async () => {
  await Promise.all(
    categories.map(async (category) => {
      await addDoc(collection(db, "categories"), category);
    })
  );
};

main().then(() => process.exit());
