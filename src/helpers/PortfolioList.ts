const assetsPath = import.meta.env.MODE === "production" ? "/portfolio" : "";

export interface PortfolioData {
  mainImageUrl: string;
  images: string[];
  title: string;
  shortDescription: string;
  mainDescription: string;
  url?: string;
  tech: string | string[] | TechData[];
  projectRole: string;
  date: string;
  projectType: "Web App" | "Mobile App" | "Template Image" | "Library";
}

export interface TechData {
  name: string;
  url: string;
}

export const PORTFOLIO_LIST: PortfolioData[] = [
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "Xtremax Revamp",
    shortDescription: "Revamp the company profile of xtremax",
    mainDescription:
      "Revamp the company profile of xtremax. The base of the project is nuxt2 and using nimvio as headless CMS. This website includes several css animation such as GSAP and slick slider.",
    url: "https://www.xtremax.com/",
    tech: "Vuejs, Nuxt2, Vuex, Nimvio, HTML5, CSS3, SCSS, javascript",
    projectRole: "Frontend Developer",
    date: "2024-04-24T00:00:00Z",
    projectType: "Web App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "NT Thailand CMP",
    shortDescription:
      "NT CMP is a Cloud Management Portal for cloud management of Thailand Gov",
    mainDescription:
      "NT CMP is a Cloud Management Portal for cloud management of Thailand Gov. This portal consists of dynamic terraform, AWS console feature and base business process of multi tenancy.",
    url: "",
    tech: "Vuejs, Pinia, Tailwind css,  Microservice, Micro-frontend, HTML5, CSS3, SCSS, javascript",
    projectRole: "Frontend Developer",
    date: "2024-04-23T00:00:00Z",
    projectType: "Web App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "XBase",
    shortDescription:
      "The purpose of the project is to create a base project service that almost several projects use.",
    mainDescription:
      "The purpose of the project is to create a base project service that almost several projects use.",
    url: "",
    tech: "Vuejs, Vuex, Pinia, Tailwind css, Microservice, Micro-frontend, HTML5, CSS3, SCSS, javascript",
    projectRole: "Frontend Developer",
    date: "2024-04-22T00:00:00Z",
    projectType: "Template Image",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "XBase UI",
    shortDescription:
      "The project purpose is to create an UI library to make development faster",
    mainDescription:
      "The project purpose is to create an UI library to make development faster using the best practice that has been researched before.",
    url: "",
    tech: "Vuejs, Vuex, Pinia, Tailwind css, Microservice, Micro-frontend, HTML5, CSS3, SCSS, javascript",
    projectRole: "Frontend Developer",
    date: "2023-12-21T00:00:00Z",
    projectType: "Library",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "PUPR BIM Dashboard",
    shortDescription:
      "The portal to monitor the progress of the site project",
    mainDescription:
      "The portal to monitor the progress of the site project.",
    url: "",
    tech: "Vuejs, Vuex, Microservice, Micro-frontend, HTML5, CSS3, SCSS, javascript",
    projectRole: "Frontend Developer",
    date: "2023-12-20T00:00:00Z",
    projectType: "Web App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "SMKK",
    shortDescription:
      "The portal to monitor the progress of the site project",
    mainDescription:
      "The portal to monitor the progress of the site project.",
    url: "",
    tech: "Vuejs, Vuex, Microservice, Micro-frontend, HTML5, CSS3, SCSS, javascript",
    projectRole: "Frontend Developer",
    date: "2023-12-19T00:00:00Z",
    projectType: "Web App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "Joyland",
    shortDescription:
      "Joyland is a web portal as a marketing site , such as posting new events, line up, etc",
    mainDescription:
      "Joyland is a web portal as a marketing site , such as posting new events, line up, etc.",
    url: "",
    tech: "HTML5, CSS3, Tailwind css, SCSS, javascript",
    projectRole: "Frontend Developer",
    date: "2023-11-19T00:00:00Z",
    projectType: "Web App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "PUPR IKN Dashboard",
    shortDescription:
      "The portal is to see the progression of the PUPR IKN Project",
    mainDescription:
      "The portal is to see the progression of the PUPR IKN Project.",
    url: "",
    tech: "Vuejs, Vuex, Microservice, Micro-frontend, HTML5, CSS3, SCSS, javascript",
    projectRole: "Frontend Developer",
    date: "2022-11-18T00:00:00Z",
    projectType: "Web App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "Halalin",
    shortDescription:
      "Marketing site for halal industry aggregator company",
    mainDescription:
      "Marketing site for halal industry aggregator company, providing ease in obtaining Indonesian Halal licenses and digitized",
    url: "",
    tech: "Vuejs, Vuex, Microservice, Micro-frontend, HTML5, CSS3, SCSS, javascript",
    projectRole: "Frontend Developer",
    date: "2022-11-17T00:00:00Z",
    projectType: "Web App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "Pixbox",
    shortDescription:
      "Cargo Web App tracking",
    mainDescription:
      "Cargo Web App tracking",
    url: "",
    tech: "Vuejs, Vuex, Microservice, Micro-frontend, HTML5, CSS3, SCSS, javascript",
    projectRole: "Frontend Developer",
    date: "2022-11-16T00:00:00Z",
    projectType: "Web App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "PUPR Sitaba",
    shortDescription:
      "The portal is to see the progression of the PUPR project in several sites",
    mainDescription:
      "The portal is to see the progression of the PUPR project in several sites",
    url: "",
    tech: "Vuejs, Vuex, HTML5, CSS3, SCSS, javascript",
    projectRole: "Frontend Developer",
    date: "2021-11-16T00:00:00Z",
    projectType: "Web App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "MAS BA (Monetary Authority of Singapore - Billing Aggregator)",
    shortDescription:
      "This portal is for Billing Aggregator for MAS Users/Customers",
    mainDescription:
      "This portal is for Billing Aggregator for MAS Users/Customers",
    url: "",
    tech: "Vuejs, Vuex, Microservice, Micro-frontend, HTML5, CSS3, SCSS, javascript",
    projectRole: "Frontend Developer",
    date: "2021-11-15T00:00:00Z",
    projectType: "Web App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "NIMBUS Stream",
    shortDescription:
      "This portal is to get the cost report, optimize the cost and check the anomaly of the CSP",
    mainDescription:
      "This portal is to get the cost report, optimize the cost and check the anomaly of the CSP",
    url: "",
    tech: "Vuejs, Vuex, Microservice, Micro-frontend, HTML5, CSS3, SCSS, javascript",
    projectRole: "Frontend Developer",
    date: "2020-11-15T00:00:00Z",
    projectType: "Web App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "GCCI (Government on Commercial Cloud)",
    shortDescription:
      "This site has the ability to combine big CSPs in the world.",
    mainDescription:
      "This portal is CMP (Cloud Management Portal). This site has the ability to combine big CSPs in the world. Such as AWS, Azure, and GCP. This portal only for Singapore Government.",
    url: "",
    tech: "Vuejs, Vuex, Microservice, Micro-frontend, HTML5, CSS3, SCSS, javascript",
    projectRole: "Frontend Developer",
    date: "2019-11-15T00:00:00Z",
    projectType: "Web App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "Chingay",
    shortDescription:
      "Web portal as marketing site for chingay community singapore",
    mainDescription:
      "Web portal as marketing site for chingay community singapore",
    url: "",
    tech: "HTML5, CSS3, SCSS, javascript, jQuery",
    projectRole: "Frontend Developer",
    date: "2018-11-14T00:00:00Z",
    projectType: "Web App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "REACH Portal",
    shortDescription:
      "Web portal as marketing site for REACH Gov SG",
    mainDescription:
      "Web portal as marketing site for REACH Gov SG",
    url: "",
    tech: "HTML5, CSS3, SCSS, javascript, jQuery",
    projectRole: "Frontend Developer",
    date: "2018-11-13T00:00:00Z",
    projectType: "Web App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "SingCERT (Part of CSA Project)",
    shortDescription:
      "Web portal as marketing site for SingCERT part of CSA Gov SG",
    mainDescription:
      "Web portal as marketing site for SingCERT part of CSA Gov SG",
    url: "",
    tech: "HTML5, CSS3, SCSS, javascript, jQuery",
    projectRole: "Frontend Developer",
    date: "2018-11-12T00:00:00Z",
    projectType: "Web App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "GSO (Part of CSA Project)",
    shortDescription:
      "Web portal as marketing site for GSO part of CSA Gov SG",
    mainDescription:
      "Web portal as marketing site for GSO part of CSA Gov SG",
    url: "",
    tech: "HTML5, CSS3, SCSS, javascript, jQuery",
    projectRole: "Frontend Developer",
    date: "2018-11-11T00:00:00Z",
    projectType: "Web App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "CSA (Cyber Security Agency of Singapore) Portal",
    shortDescription:
      "Web portal as marketing site for CSA Gov SG",
    mainDescription:
      "Web portal as marketing site for CSA Gov SG",
    url: "",
    tech: "HTML5, CSS3, SCSS, javascript, jQuery",
    projectRole: "Frontend Developer",
    date: "2018-11-10T00:00:00Z",
    projectType: "Web App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "NHB (National Heritage Board) Portal",
    shortDescription:
      "Web portal as marketing site for NHB Gov SG",
    mainDescription:
      "Web portal as marketing site for NHB Gov SG",
    url: "",
    tech: "HTML5, CSS3, SCSS, javascript, jQuery",
    projectRole: "Frontend Developer",
    date: "2018-10-30T00:00:00Z",
    projectType: "Web App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "CIMB Niaga Mofiz",
    shortDescription:
      "Mobile Applications for leave permissions, memos, etc",
    mainDescription:
      "Mobile Applications for leave permissions, memos, and associated licensing permits using paper that is used as an application to enable it to reduce paper use in the enterprise",
    url: "",
    tech: "Android, Kotlin, Java",
    projectRole: "Android Developer",
    date: "2017-10-29T00:00:00Z",
    projectType: "Mobile App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "InSing Movie",
    shortDescription:
      "The app is used for checking movies of all cinemas in the app.",
    mainDescription:
      "The app is used for checking movies of all cinemas in the app. The user can reserve a ticket, review a movie, find a movie coming soon but the user cannot watch the movie from the app.",
    url: "",
    tech: "Android, Kotlin, Java",
    projectRole: "Android Developer",
    date: "2017-10-28T00:00:00Z",
    projectType: "Mobile App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "Car Inspection System",
    shortDescription:
      "Android app for car inspection",
    mainDescription:
      "Android app for car inspection. Users of the app can give value for the car when the car is inspected by the user. total value and price will appear after inspection. This app only sends the value of the car and the calculation of car point and price will be done by web app.",
    url: "",
    tech: "Android, Kotlin, Java",
    projectRole: "Android Developer",
    date: "2017-10-27T00:00:00Z",
    projectType: "Mobile App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "Bike Inspection System",
    shortDescription:
      "Android app for bike inspection",
    mainDescription:
      "Android app for bike inspection. Users of the app can give value for the car when the bike is inspected by the user. total value and price will appear after inspection. This app only sends the value of the bike and the calculation of bike point and price will be done by web app.",
    url: "",
    tech: "Android, Kotlin, Java",
    projectRole: "Android Developer",
    date: "2017-10-26T00:00:00Z",
    projectType: "Mobile App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "HungryGoWhere",
    shortDescription:
      "The app is used to find and reserve restaurants based on your location",
    mainDescription:
      "The app is used to find and reserve restaurants based on your location (not required) or filter. Not only reserve, users can read details or restaurants and give a rating for the restaurant.",
    url: "",
    tech: "Android, Kotlin, Java",
    projectRole: "Android Developer",
    date: "2017-10-26T00:00:00Z",
    projectType: "Mobile App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "SKY ARK",
    shortDescription:
      "SKY ARK is a web app for musicians to share portofolio of the musician and reserve musician",
    mainDescription:
      "SKY ARK is a web app for musicians to share portofolio of the musician and reserve musician. Users of the app are Admin, musician (Manager), member, and guest.",
    url: "",
    tech: "ASP.NET MVC, C#, PostgreSQL",
    projectRole: "Fullstack Developer",
    date: "2017-10-24T00:00:00Z",
    projectType: "Web App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "WGEA",
    shortDescription:
      "Develop web app for WGEA from Badan Pemeriksa Keuangan (BPK) Indonesia",
    mainDescription:
      "Develop web app for WGEA from Badan Pemeriksa Keuangan (BPK) Indonesia. The web app is used by the WGEA community around the world. The web app shows an audit of several countries, an e-book of audit, list of past meetings or future meetings and news about the audit.",
    url: "",
    tech: "Umbraco CMS, C#, ASP.NET, MS SQL Server, Angular JS",
    projectRole: "Fullstack Developer",
    date: "2017-10-21T00:00:00Z",
    projectType: "Web App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "BC+ Sophie Paris",
    shortDescription:
      "Become Extended Team to upgrade feature of BC+ Sophie Paris website",
    mainDescription:
      "Become Extended Team to upgrade feature of BC+ Sophie Paris website. The website was used by a Sophie Paris client called BC. This website was used for checking quantity of product, PO, SO, creating reports etc.",
    url: "",
    tech: "ASP.NET MVC, C#, PostgreSQL",
    projectRole: "Fullstack Developer",
    date: "2016-10-24T00:00:00Z",
    projectType: "Web App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "Solatip",
    shortDescription:
      "Develop Android App for Solatip E-Commerce",
    mainDescription:
      "Develop Android App for Solatip E-Commerce. The app shows all products of solatip. The app uses restful api from smartstore framework. features of the app are wish list, checkout product, payment, etc.",
    url: "",
    tech: "Android, Java",
    projectRole: "Android Developer",
    date: "2015-10-24T00:00:00Z",
    projectType: "Mobile App",
  },
  {
    mainImageUrl: assetsPath + "/assets/img/portfolio/xtremax-revamp/1.png",
    images: [
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/1.png`,
      `${assetsPath}/assets/img/portfolio/xtremax-revamp/2.png`,
    ],
    title: "Temploy",
    shortDescription:
      "Android app that matches part time workers to employers",
    mainDescription:
      "Android app that matches part time workers to employers automatically, safely and anonymously. It allows candidates to design their own jobs based on preferences of time, location, skills and pay.",
    url: "",
    tech: "C#, Xamarin.Android, Telerik UI for Xamarin",
    projectRole: ".NET Developer",
    date: "2015-10-21T00:00:00Z",
    projectType: "Mobile App",
  },
];
