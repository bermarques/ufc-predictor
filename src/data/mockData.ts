import { Fight, AIPrediction, Fighter, ScrapedEvent } from "../types";

export const mockFighters: Fighter[] = [
  {
    id: "1",
    name: "Jon Jones",
    record: "27-1-0",
    rank: 1,
    country: "USA",
    age: 36,
    weightClass: "Heavyweight",
    photo:
      "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "2",
    name: "Stipe Miocic",
    record: "20-4-0",
    rank: 3,
    country: "USA",
    age: 41,
    weightClass: "Heavyweight",
    photo:
      "https://images.pexels.com/photos/7045734/pexels-photo-7045734.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "3",
    name: "Islam Makhachev",
    record: "25-1-0",
    rank: 1,
    country: "Russia",
    age: 32,
    weightClass: "Lightweight",
    photo:
      "https://images.pexels.com/photos/8612961/pexels-photo-8612961.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "4",
    name: "Charles Oliveira",
    record: "34-9-0",
    rank: 2,
    country: "Brazil",
    age: 34,
    weightClass: "Lightweight",
    photo:
      "https://images.pexels.com/photos/7045562/pexels-photo-7045562.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "5",
    name: "Alexander Volkanovski",
    record: "26-3-0",
    rank: 1,
    country: "Australia",
    age: 35,
    weightClass: "Featherweight",
    photo:
      "https://images.pexels.com/photos/8611992/pexels-photo-8611992.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "6",
    name: "Ilia Topuria",
    record: "15-0-0",
    rank: 2,
    country: "Spain",
    age: 27,
    weightClass: "Featherweight",
    photo:
      "https://images.pexels.com/photos/7045417/pexels-photo-7045417.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export const mockFights: Fight[] = [
  {
    id: "1",
    fighter1: mockFighters[0],
    fighter2: mockFighters[1],
    weightClass: "Heavyweight",
    eventName: "UFC 309",
    eventDate: "2024-11-16",
    eventLocation: "Madison Square Garden, New York",
    isMainEvent: true,
    status: "upcoming",
  },
  {
    id: "2",
    fighter1: mockFighters[2],
    fighter2: mockFighters[3],
    weightClass: "Lightweight",
    eventName: "UFC 308",
    eventDate: "2024-10-26",
    eventLocation: "Etihad Arena, Abu Dhabi",
    isMainEvent: true,
    status: "upcoming",
  },
  {
    id: "3",
    fighter1: mockFighters[4],
    fighter2: mockFighters[5],
    weightClass: "Featherweight",
    eventName: "UFC 307",
    eventDate: "2024-10-05",
    eventLocation: "Delta Center, Salt Lake City",
    isMainEvent: false,
    status: "upcoming",
  },
];

export const mockPredictions: AIPrediction[] = [
  {
    fightId: "1",
    predictedWinner: "Jon Jones",
    confidence: 78,
    reasoning:
      "Jones possui maior alcance, experiência em grandes lutas e histórico dominante contra lutadores de wrestling. Miocic vem de longa inatividade.",
    keyFactors: [
      "Alcance superior",
      "Experiência em title fights",
      "Clinch game",
      "Inatividade do oponente",
    ],
    oddsShift: 2.5,
    lastUpdated: "2024-01-15T10:30:00Z",
  },
  {
    fightId: "2",
    predictedWinner: "Islam Makhachev",
    confidence: 65,
    reasoning:
      "Makhachev mantém pressão constante e controle superior. Oliveira é perigoso no ground game, mas Islam tem melhor controle posicional.",
    keyFactors: [
      "Pressure fighting",
      "Cardio superior",
      "Wrestling control",
      "Experience advantage",
    ],
    oddsShift: -1.8,
    lastUpdated: "2024-01-15T11:15:00Z",
  },
  {
    fightId: "3",
    predictedWinner: "Ilia Topuria",
    confidence: 72,
    reasoning:
      "Topuria possui poder de nocaute superior e está no auge da carreira. Volkanovski ainda é tecnicamente superior, mas vem de derrotas recentes.",
    keyFactors: [
      "Knockout power",
      "Momentum",
      "Youth advantage",
      "Recent form",
    ],
    oddsShift: 4.2,
    lastUpdated: "2024-01-15T09:45:00Z",
  },
];

export const mockScrapedEvent: ScrapedEvent = {
  title: "UFC 318: Holloway vs. Poirier 3",
  date: "Saturday, July 19,  6:00 PM ET",
  link: "https://www.tapology.com/fightcenter/events/127441-ufc-318",
  fights: [
    {
      main: true,
      weight: "155",
      fighterA: {
        name: "Max Holloway",
        record: "26-8",
        country:
          "https://www.tapology.com/assets/flags/US-a475dadb4ff06978c183ce83b21741c1785beee26da55853490373f5eb2ca9b0.gif",
        picture:
          "https://images.tapology.com/headshot_images/12723/preview/Holloway-Max-UFC155-1.jpg?1543771905",
        link: "https://www.tapology.com/fightcenter/fighters/12723-max-holloway-lil-evil",
      },
      fighterB: {
        name: "Dustin Poirier",
        record: "30-9",
        country:
          "https://www.tapology.com/assets/flags/US-a475dadb4ff06978c183ce83b21741c1785beee26da55853490373f5eb2ca9b0.gif",
        picture:
          "https://images.tapology.com/headshot_images/9008/preview/dustin-poirier-winner.jpg?1602858952",
        link: "https://www.tapology.com/fightcenter/fighters/dustin-poirier-the-diamond",
      },
    },
    {
      main: true,
      weight: "185",
      fighterA: {
        name: "Paulo Costa",
        record: "14-4",
        country:
          "https://www.tapology.com/assets/flags/BR-45af1ab77cd750eff617a8b71f64b318c9a4ecf06c863a2c63cff71550930fe7.gif",
        picture:
          "https://images.tapology.com/headshot_images/64306/preview/Screen_Shot_2020-12-02_at_5.46.51_AM.png?1606898823",
        link: "https://www.tapology.com/fightcenter/fighters/64306-paulo-henrique-costa-borrachinha",
      },
      fighterB: {
        name: "Roman Kopylov",
        record: "14-3",
        country:
          "https://www.tapology.com/assets/flags/RU-3ce9ca248b0d428f663c68cea5b91068d901c71d77fcb4be147e8d0e7500d724.gif",
        picture:
          "https://images.tapology.com/headshot_images/138424/preview/Roman_Kopylov-hs.jpg?1551056313",
        link: "https://www.tapology.com/fightcenter/fighters/138424-roman-kopylov",
      },
    },
    {
      main: true,
      weight: "170",
      fighterA: {
        name: "Kevin Holland",
        record: "28-13",
        country:
          "https://www.tapology.com/assets/flags/US-a475dadb4ff06978c183ce83b21741c1785beee26da55853490373f5eb2ca9b0.gif",
        picture:
          "https://images.tapology.com/headshot_images/35757/preview/Screenshot_%281%29.png?1749349971",
        link: "https://www.tapology.com/fightcenter/fighters/35757-kevin-holland",
      },
      fighterB: {
        name: "Daniel Rodriguez",
        record: "19-5",
        country:
          "https://www.tapology.com/assets/flags/US-a475dadb4ff06978c183ce83b21741c1785beee26da55853490373f5eb2ca9b0.gif",
        picture:
          "https://images.tapology.com/headshot_images/61421/preview/Daniel_Rodriguez-hs.jpg?1580146832",
        link: "https://www.tapology.com/fightcenter/fighters/61421-daniel-rodriguez",
      },
    },
    {
      main: true,
      weight: "145",
      fighterA: {
        name: "Dan Ige",
        record: "19-9",
        country:
          "https://www.tapology.com/assets/flags/US-a475dadb4ff06978c183ce83b21741c1785beee26da55853490373f5eb2ca9b0.gif",
        picture:
          "https://images.tapology.com/headshot_images/21178/preview/Dan_Ige.jpg?1544408383",
        link: "https://www.tapology.com/fightcenter/fighters/21178-dan-ige",
      },
      fighterB: {
        name: "Patricio Pitbull",
        record: "36-8",
        country:
          "https://www.tapology.com/assets/flags/BR-45af1ab77cd750eff617a8b71f64b318c9a4ecf06c863a2c63cff71550930fe7.gif",
        picture:
          "https://images.tapology.com/headshot_images/1542/preview/Patricio-Pitbull_Freire-hs.jpg?1379026563",
        link: "https://www.tapology.com/fightcenter/fighters/patricio-freire-pitbull",
      },
    },
    {
      main: true,
      weight: "155",
      fighterA: {
        name: "Michael Johnson",
        record: "23-19",
        country:
          "https://www.tapology.com/assets/flags/US-a475dadb4ff06978c183ce83b21741c1785beee26da55853490373f5eb2ca9b0.gif",
        picture:
          "https://images.tapology.com/headshot_images/10785/preview/michael-johnson_hs.jpg?1731612300",
        link: "https://www.tapology.com/fightcenter/fighters/michael-johnson-the-menace",
      },
      fighterB: {
        name: "Daniel Zellhuber",
        record: "15-2",
        country:
          "https://www.tapology.com/assets/flags/MX-1cc0876e76b73a2195de1b68812ac8c0812fe99c7ada8a43db91b6f1d28cd113.gif",
        picture:
          "https://images.tapology.com/headshot_images/156784/preview/Screenshot_%282%29.png?1743660265",
        link: "https://www.tapology.com/fightcenter/fighters/156784-daniel-olvera-zellhuber-zellhuber",
      },
    },
    {
      main: false,
      weight: "135",
      fighterA: {
        name: "Kyler Phillips",
        record: "12-3",
        country:
          "https://www.tapology.com/assets/flags/US-a475dadb4ff06978c183ce83b21741c1785beee26da55853490373f5eb2ca9b0.gif",
        picture:
          "https://images.tapology.com/headshot_images/93501/preview/Kyler_Phillips-hs.jpg?1599927918",
        link: "https://www.tapology.com/fightcenter/fighters/93501-kyler-phillips",
      },
      fighterB: {
        name: "Vinicius Oliveira",
        record: "22-3",
        country:
          "https://www.tapology.com/assets/flags/BR-45af1ab77cd750eff617a8b71f64b318c9a4ecf06c863a2c63cff71550930fe7.gif",
        picture:
          "https://images.tapology.com/headshot_images/50927/preview/IMG_0865.jpeg?1738460625",
        link: "https://www.tapology.com/fightcenter/fighters/50927-vinicius-prego",
      },
    },
    {
      main: false,
      weight: "185",
      fighterA: {
        name: "Marvin Vettori",
        record: "19-7-1",
        country:
          "https://www.tapology.com/assets/flags/IT-467e73c3ad5da4d693fb9a9eb9cfa8e38cbea96275ec5cf7fb849ff539240035.gif",
        picture:
          "https://images.tapology.com/headshot_images/50533/preview/Marvin_Vettori-hs.jpg?1519428750",
        link: "https://www.tapology.com/fightcenter/fighters/50533-marvin-vettori",
      },
      fighterB: {
        name: "Brendan Allen",
        record: "24-7",
        country:
          "https://www.tapology.com/assets/flags/US-a475dadb4ff06978c183ce83b21741c1785beee26da55853490373f5eb2ca9b0.gif",
        picture:
          "https://images.tapology.com/headshot_images/91516/preview/Screenshot.png?1693322054",
        link: "https://www.tapology.com/fightcenter/fighters/91516-brendan-allen",
      },
    },
    {
      main: false,
      weight: "170",
      fighterA: {
        name: "Francisco Prado",
        record: "12-3",
        country:
          "https://www.tapology.com/assets/flags/AR-e8afc368c863ba2bc753ede7c665cebbc3b76bde616ed16882f5b0bf69ee0a23.gif",
        picture:
          "https://images.tapology.com/headshot_images/230239/preview/IMG_1023.jpeg?1738947840",
        link: "https://www.tapology.com/fightcenter/fighters/230239-francisco-prado",
      },
      fighterB: {
        name: "Nikolay Veretennikov",
        record: "12-6",
        country:
          "https://www.tapology.com/assets/flags/KZ-8d03a35853709f9b577baab346c7fb8276ee77904bc2a1798564c32498c4dd68.gif",
        picture:
          "https://images.tapology.com/headshot_images/74381/preview/Screenshot_%281%29.png?1721935972",
        link: "https://www.tapology.com/fightcenter/fighters/74381-nikolai-veretenikov",
      },
    },
    {
      main: false,
      weight: "185",
      fighterA: {
        name: "Ateba Gautier",
        record: "7-1",
        country:
          "https://www.tapology.com/assets/flags/CM-43aa7f04f4d2fd5a8e4e9492f5669d64c5f03382311e678af8254f22a8fda0ad.gif",
        picture:
          "https://images.tapology.com/headshot_images/283766/preview/Screenshot_%281%29.png?1748134718",
        link: "https://www.tapology.com/fightcenter/fighters/283766-ateba-abega-gautier",
      },
      fighterB: {
        name: "Robert Valentin",
        record: "10-5",
        country:
          "https://www.tapology.com/assets/flags/CH-16f88ef33fb6adf03093bb5d9935b5b34896d763fe8b93c7005a7208b76f949d.gif",
        picture:
          "https://images.tapology.com/headshot_images/136498/preview/robert2.jpg?1689103465",
        link: "https://www.tapology.com/fightcenter/fighters/136498-robert-valentin",
      },
    },
    {
      main: false,
      weight: "170",
      fighterA: {
        name: "Adam Fugitt",
        record: "10-4",
        country:
          "https://www.tapology.com/assets/flags/US-a475dadb4ff06978c183ce83b21741c1785beee26da55853490373f5eb2ca9b0.gif",
        picture:
          "https://images.tapology.com/headshot_images/112635/preview/Adam-Fugitt.jpg?1667252615",
        link: "https://www.tapology.com/fightcenter/fighters/112635-adam-fugitt",
      },
      fighterB: {
        name: "Islam Dulatov",
        record: "11-1",
        country:
          "https://www.tapology.com/assets/flags/DE-fe6537c9506b556831a53eea4a8923eb299737671943539aa4a09fe807ea12aa.gif",
        picture:
          "https://images.tapology.com/headshot_images/143542/preview/Untitleff.jpg?1567773255",
        link: "https://www.tapology.com/fightcenter/fighters/143542-islam-dultakov",
      },
    },
    {
      main: false,
      weight: "205",
      fighterA: {
        name: "Jimmy Crute",
        record: "12-4-2",
        country:
          "https://www.tapology.com/assets/flags/AU-429ed070b76f87de04728ef13b9d68e308be36cf4444bb32eb97564ae7016ff1.gif",
        picture:
          "https://images.tapology.com/headshot_images/126283/preview/Jim_Crute.jpg?1534889972",
        link: "https://www.tapology.com/fightcenter/fighters/126283-jim-chute",
      },
      fighterB: {
        name: "Marcin Prachnio",
        record: "17-8",
        country:
          "https://www.tapology.com/assets/flags/PL-6bfbe1335d2bffff514135a578895add253182687b5e5a81ded6bbf986755f29.gif",
        picture:
          "https://images.tapology.com/headshot_images/51446/preview/Marcin_Prachnio.jpg?1595883348",
        link: "https://www.tapology.com/fightcenter/fighters/51446-marcin-prachnio",
      },
    },
    {
      main: false,
      weight: "265",
      fighterA: {
        name: "Ryan Spann",
        record: "22-11",
        country:
          "https://www.tapology.com/assets/flags/US-a475dadb4ff06978c183ce83b21741c1785beee26da55853490373f5eb2ca9b0.gif",
        picture:
          "https://images.tapology.com/headshot_images/20908/preview/Ryan_Spann.jpg?1533320850",
        link: "https://www.tapology.com/fightcenter/fighters/20908-ryan-spann",
      },
      fighterB: {
        name: "Łukasz Brzeski",
        record: "9-6-1",
        country:
          "https://www.tapology.com/assets/flags/PL-6bfbe1335d2bffff514135a578895add253182687b5e5a81ded6bbf986755f29.gif",
        picture:
          "https://images.tapology.com/headshot_images/90654/preview/lukasz_brzeski_headshot_4.jpg?1601054691",
        link: "https://www.tapology.com/fightcenter/fighters/90654-ukasz-brzeski",
      },
    },
    {
      main: false,
      weight: "185",
      fighterA: {
        name: "Brunno Ferreira",
        record: "13-2",
        country:
          "https://www.tapology.com/assets/flags/BR-45af1ab77cd750eff617a8b71f64b318c9a4ecf06c863a2c63cff71550930fe7.gif",
        picture:
          "https://images.tapology.com/headshot_images/218790/preview/Screenshot_%281%29.png?1729960242",
        link: "https://www.tapology.com/fightcenter/fighters/218790-bruno-the-hulk",
      },
      fighterB: {
        name: "Jackson McVey",
        record: "6-0",
        country:
          "https://www.tapology.com/assets/flags/US-a475dadb4ff06978c183ce83b21741c1785beee26da55853490373f5eb2ca9b0.gif",
        picture:
          "https://images.tapology.com/headshot_images/238221/preview/Screenshot_%281%29.png?1749866683",
        link: "https://www.tapology.com/fightcenter/fighters/238221-jackson-mcvey",
      },
    },
    {
      main: false,
      weight: "125",
      fighterA: {
        name: "Carli Judice",
        record: "4-2",
        country:
          "https://www.tapology.com/assets/flags/US-a475dadb4ff06978c183ce83b21741c1785beee26da55853490373f5eb2ca9b0.gif",
        picture:
          "https://images.tapology.com/headshot_images/286593/preview/Carli_Judice.jpg?1695236971",
        link: "https://www.tapology.com/fightcenter/fighters/286593-carli-judice",
      },
      fighterB: {
        name: "Nicolle Caliari",
        record: "8-3",
        country:
          "https://www.tapology.com/assets/flags/BR-45af1ab77cd750eff617a8b71f64b318c9a4ecf06c863a2c63cff71550930fe7.gif",
        picture:
          "https://images.tapology.com/headshot_images/107869/preview/IMG_5523.jpeg?1723217677",
        link: "https://www.tapology.com/fightcenter/fighters/107869-nicolle-caliari",
      },
    },
  ],
};
