export enum Category {
  Software = "software engineering",
  Product = "product",
  VentureCapital = "venture capital",
}
export interface Experience {
  name: string;
  pic: string;
  description?: string;
  timeline: string;
  title: string;
  bullets: string[];
  category: Category;
}

export const experiences: Experience[] = [
  {
    name: "scale ai",
    pic: require("./images/scale.png"), // Using Typeface logo as placeholder until Scale logo is added
    timeline: "2024 - current",
    title: "software engineer",
    category: Category.Software,
    bullets: [
      "building scalable data infrastructure and ai training pipelines",
      "working on enterprise-grade ai solutions and data processing systems"    ],
  },
  {
    name: "typeface",
    pic: require("./images/Typeface.jpeg"),
    timeline: "sept. 2023 - 2024",
    title: "software engineer",
    category: Category.Software,
    bullets: ["building an enterprise grade ai marketing agent"],
  },
  {
    name: "coinbase",
    pic: require("./images/CB.png"),
    timeline: "june 2022 - sept. 2022",
    title: "software engineering intern - security and resilience team",
    category: Category.Software,
    bullets: [
      "developed high-performance asset filtering api using grpc and go, enhancing service reliability and query speed by 40%",
      "architected and implemented full-stack asset management solution using react, mongodb, and go, resulting in 60% faster sub-attribute searches and improved user productivity",
      "led decomposition of golang microservices across 5 financial products, streamlining architecture and accelerating deployment by 30%",
      "spearheaded creation of product service map, identifying 15 critical security vulnerabilities and strengthening disaster recovery protocols",
    ],
  },
  {
    name: "pear vc",
    pic: require("./images/Pear.png"),
    description:
      "company: 0 to 1 vc fund partnering with entrepreneurs from day one. investments include doordash, guardant health, and branch",
    timeline: "oct. 2020 - current",
    title: "venture scout",
    category: Category.VentureCapital,
    bullets: [
      "deals sourced: brutus ai (pearx) -> acquisition by forta health; advex ai (pearx) -> seed from emmerson collective and kleiner perkins; poppin (seed); my ai front desk (offered pearx, uc berkeley $50k competition winner).",
      "sourcing pre-seed to seed-stage start-ups and conducting due diligence to evaluate investment opportunities.",
      "analyzed 25+ crypto white papers for due diligence on potential investments across l1’s, dexs, & liquidity staking protocols",
      "lead monthly office hours for web3 founders at capitol factory (texas) & in the bay area to strengthen founder networks",
      "conduct internal research on emerging market trends covering asset & application interoperability, zks, and scalability solutions",
    ],
  },
  {
    name: "pantera capital",
    pic: require("./images/Pantera.png"),
    description:
      "company: 0 to 1 vc fund partnering with entrepreneurs from day one. investments include doordash, guardant health, and branch",
    timeline: "jan. 2023 - current",
    title: "investment analyst",
    category: Category.VentureCapital,
    bullets: [
      "working with the investment team to drive internal research on asset & application interoperability, zks, and scalability",
    ],
  },
  {
    name: "bonfire",
    pic: require("./images/Bonfire.png"),
    timeline: "nov. 2021 - sept. 2023",
    title: "software engineer",
    category: Category.Software,
    bullets: [
      "developed and shipped various key features (nft showcase, block interface) that enabled artists such as daniel allan to launch nft on platform",
      "engineered metamask/walletconnect integration on platform using next.js, graphql, web3-token, rally api, prisma",
      "used customer feedback and collaborated with design teams to prioritize implementation solutions",
      "developed and shipped various features & projects into production for creators such as daniel allan, odesza, daos, etc.",
      "architected embed block tool template to enable creators to surface custom content with low friction/error rate",
    ],
  },
  {
    name: "kleiner perkins",
    pic: require("./images/KP.png"),
    description: "summer 2022",
    timeline: "april. 2022 - current",
    title: "kleiner perkins engineering fellow 2022",
    category: Category.VentureCapital,
    bullets: ["kp fellow through bonfire"],
  },
  {
    name: "amazon",
    pic: require("./images/Amazon.png"),
    description: "feature migration on music mobile platform",
    timeline: "aug. 2021 - nov. 2021",
    title: "software development engineering intern",
    category: Category.Software,
    bullets: [
      "migrated amazon music user settings interface from objective-c/swift to swiftui with mvvm, improving usability",
      "updated and implemented settings navigation architecture and simplified adding new pages to nodes on a tree",
      "boosted engagement by integrating bauhaus components onto new settings page, exceeding q4 goals",
    ],
  },
  {
    name: "gsv ventures",
    pic: require("./images/GSV.png"),
    description:
      "gsv ventures is a female-led, multi-stage venture capital firm investing in the $7+ trillion education technology sector.",
    timeline: "june. 2021 - aug. 2021",
    title: "venture fellow",
    category: Category.VentureCapital,
    bullets: [
      "building relationships between berkeley student organizations and the venture fund for summer bootcamp",
      "sourcing industry agnostic early-stage start-ups and founders",
    ],
  },
  {
    name: "zighra",
    pic: require("./images/Zighra.png"),
    description:
      "zighra is a leading provider of on-device ai solutions for continuous authentication and fraud detection on mobile and web applications.",
    timeline: "may. 2021 - aug. 2021",
    title: "software engineering intern",
    category: Category.Software,
    bullets: [
      "developed & deployed spur, a mobile cross-platform (ios, android) marketplace for users to view & purchase online classes.",
      "prototyped, designed, & developed end-to-end user flow from login (authentication, otp, and storage), to payment, to upcoming events notification & zoom re-direct on app. (react native, stripe, postman, react navigation, node.js, adobexd)",
      "integrated 4 payment flows via stripe, handling $25k+ transactions per month & allowing users to view & purchase packages.",
      "created a product roadmap for integration of nft/fts onto platform and reduce payment barriers for users.",
      "optimized api caching for payment flow reducing the number of http requests by over 33% per transaction.",
      "analyzed market trends and shifted company focus from entertainment creators to small businesses and edtech to drive revenue",
    ],
  },
  {
    name: "savitude",
    pic: require("./images/Savitude.png"),
    description:
      "savitude provides an inclusive fashion technology solution for brands who want to serve a broader audience.",
    timeline: "feb. 2021 - may 2021",
    title: "software engineering intern",
    category: Category.Software,
    bullets: [
      "optimized bottlenecks in design workflow & reduced sketching analytics time by 75% by developing a modal tutorial system",
      "improved user experience by revamping the frontend interface for rollout using reactjs, chakra-ui, & material ui.",
      "converted user feedback into user stories, & process flows wireframes for development.",
    ],
  },
  {
    name: "avance venture labs",
    pic: require("./images/Avance.jfif"),
    description:
      "avance is a start-up lab geared towards creating sustainably profitable software ideas, quickly, and systematically.",
    timeline: "dec. 2020 - feb. 2021",
    title: "product manager",
    category: Category.Product,
    bullets: [
      "led industry deep dive & competitor analysis on online financial institutions to develop product proposals & requirements",
      "defined key product features in figma with cross-functional team of marketers & software engineers using agile methodologies",
    ],
  },
  {
    name: "1910 genetics",
    pic: require("./images/1910.png"),
    description:
      "1910 genetics is a startup focused on ai-driven small molecule and protein design.",
    timeline: "june, 2020 - august,2020",
    category: Category.Software,
    title:
      "machine learning infrastructure engineering intern (y combinator w2018)",
    bullets: [
      "created architecture overviews for ml pipelines, conglomerating reusable components (data base, data transformation, data validation, model training, model evaluation, and serving infrastructure) for the machine learning platform noelle.",
      "developed intranet using reactjs/html/css for documented architecture/product demo for lbdd/sbdd ml models and researched hyperparameter tuning methods employed for the hit-optimization generative neural network at 1910.",
    ],
  },
  {
    name: "los angeles county department of public health",
    pic: require("./images/LA.gif"),
    description:
      "la county department of public health is currently performing research regarding the proximity of cell towers to schools and hospitals.",
    timeline: "april. 2020 – may 2020",
    title: "data analyst",
    category: Category.Software,
    bullets: [
      "documented procedures and processed raw data to create an interactive tableau dashboard for a research paper",
      "performed statistical analyses in rstudio to determine the density of cell towers in proximity to schools & hospitals.",
      "utilized sqldf, readxl, and lubricate packages, and generated sql queries for statistical analysis.",
    ],
  },
  {
    name: "blendoor",
    pic: require("./images/blendoor.PNG"),
    description:
      "company: blendoor evaluates companies based on factors such as equity metrics, diversity, recruiting practices, leadership, among others to generate a 'blendscore' for each company.",
    timeline: "jan. 2020 - may 2020",
    title: "software developer",
    category: Category.Software,
    bullets: [
      "blendscore automation project: in a team of 5 engineers on the m.e.t bulletin board (technical consulting organization), our goal was to automate the blendscore calculation through a web interface where admin users can edit certain qualitative and quantitative variables related to a company in order to produce an updated blendscore. after updating blendoor's score calculation algorithms, we built a restful api with python and flask to run backend python scripts that would execute sql queries to communicate with blendoor's internal database and used angularjs, typescript, and html/css to build the frontend ui",
    ],
  },
  {
    name: "ginger analytics, loopchat/looppay",
    pic: require("./images/Loop.png"),
    description:
      "loopchat is a berkeley based fintech focused on convenience, inclusion and efficiency in the financial system.",
    timeline: "aug. 2019 - feb. 2020",
    title: "product management intern",
    category: Category.Product,
    bullets: [
      "assisted creation of the architecture for various mini-apps available on loopchat such as club and class database.",
      "streamlined business strategies focused on increasing user downloads and retention through gamifying the platform.",
      "implemented procedures that increased downloads by 232% and marketed to various departments at uc berkeley.",
      "proposed simplification plan of ui/ux of the app and presented to internal and external stakeholders.",
    ],
  },
  {
    name: "our lunch lady",
    pic: require("./images/oll.PNG"),
    description:
      "our lunch lady allows students to purchase food from nearby restaurants and boosts the local economy while providing better food options to students in schools",
    timeline: "aug, 2017 - aug, 2018",
    title: "co-founder",
    category: Category.VentureCapital,
    bullets: [
      "scheduled meetings at capitol factory to develop a web-app and pitched to investors and mentors.",
      "developed financial models based different market penetration predictions and cogs and developed a marketing plan.",
      "executed a proof of concept trial for a 2-week period at westlake high school that generated $800 in profit.",
      "analyzed the feedback from consumers about the service and quality to make future improvements",
    ],
  },
  {
    name: "berkeley venture capital",
    pic: require("./images/bvc.png"),
    description:
      "bvs is an undergraduate community empowered to learn and work with leading venture capitalists and entrepreneurs.",
    timeline: "jan. 2020 - dec 2022",
    title: "venture capital intern",
    category: Category.VentureCapital,
    bullets: [
      "underwent six-week venture capital curriculum with an emphasis on due diligence, and investment summary.",
      "collaborating with local venture capital firms/industry leaders to organize events/speaker series throughout campus",
    ],
  },
];
