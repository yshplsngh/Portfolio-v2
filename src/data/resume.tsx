import {Icons} from "@/components/icons";

export const DATA = {
    name: "Yashpal Singh",
    initials: "YS",
    url: "https://yshplsngh.in",
    location: "Mathura, Uttar pradesh, India",
    locationLink: "",
    description:
        "Software Engineer. Passionate about System Architecture, Databases Internals, Language Internals, and Algorithms.",
    summary:'Seasoned Fullstack Engineer with 1+ years of experience in building WebApps. I excel in building applications from scratch to production-ready. My expertise spans across frontend, backend, and full-stack development, with a small knack for deployment.',
    avatarUrl: "/me.png",
    skills: [
        "React",
        "Next.js",
        "Redux",
        "Typescript",
        "Node.js",
        "Postgres",
        "Prisma",
        "Docker",
        "Redis",
        "Java",
        "REST APIs",
        "Tanstack Query",
        "Tailwind CSS",
        "AWS",
        "Vercel",
        "Github"
    ],
    // navbar: [
    //     {href: "/", icon: HomeIcon, label: "Home"}
    // ],
    contact: {
        email: "yashpal9rx@gmail.com",
        tel: "+123456789",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/yshplsngh",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://linkedin.com/in/yshplsngh",
                icon: Icons.linkedin,
                navbar: true,
            },
            X: {
                name: "X",
                url: "https://x.com/yshplsngh",
                icon: Icons.x,
                navbar: true,
            },
            Email: {
                name: "Send Email",
                url: "mailto:yashpal9rx@gmail.com",
                icon: Icons.email,
                navbar: true,
            },
        },
    },

    work: [
        // {
        //     company: "Atomic Finance",
        //     href: "https://atomic.finance",
        //     badges: [],
        //     location: "Remote",
        //     title: "Bitcoin Protocol Engineer",
        //     logoUrl: "/atomic.png",
        //     start: "May 2021",
        //     end: "Oct 2022",
        //     description:
        //         "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
        // },
    ],
    education: [
        {
            school: "GLA University",
            href: "https://gla.ac.in",
            degree: "Bachelor of Technology in Computer Science (B.Tech)",
            logoUrl: "/gla.png",
            start: "2021",
            end: "2025",
        },
        // {
        //     school: "Buildspace",
        //     href: "https://buildspace.so",
        //     degree: "s3, s4, sf1, s5",
        //     logoUrl: "/buildspace.jpg",
        //     start: "2023",
        //     end: "2024",
        // },
    ],
    projects: [
        {
            title: "Feedback Testimonial",
            href: "https://testimonial.yshplsngh.in",
            dates: "Sep 2024 - Oct 2024",
            active: true,
            description: "Web app for collecting and embedding customer testimonials. And it allows easy integration of testimonials widget into website.",
            technologies: [
                "React",
                "Redux",
                "Typescript",
                "Node.js",
                "PostgreSQL",
                "Prisma",
                "Docker",
                "Redis"
            ],
            links: [
                {
                    type: "Website",
                    href: "https://testimonial.yshplsngh.in",
                    icon: <Icons.globe className="size-3"/>,
                },
                {
                    type: "Source",
                    href: "https://github.com/yshplsngh/Feedback-Testimonial",
                    icon: <Icons.github className="size-3"/>,
                },
            ],
            image: "/testi.png",
            video:"",
        },
        {
            title: "Automate",
            href: "https://github.com/yshplsngh/Automate",
            dates: "Dec 2024 - Jan 2025",
            active: true,
            description: "A powerful automation platform that enables users to create custom workflows and integrate various apps and services seamlessly.",
            technologies: [
                "React",
                "Redux",
                "Typescript",
                "Node.js",
                "PostgreSQL",
                "Prisma"
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/yshplsngh/Automate",
                    icon: <Icons.github className="size-3"/>,
                },
            ],
            image: "/automate.png",
            video:"",
        },
        {
            title: "Shop Mart",
            href: "https://github.com/yshplsngh/Shop-mart",
            dates: "June 2024 - July 2024",
            active: true,
            description:
                "A Scalable Shopping platform for seamless online shopping experiences. Integrated GoAPI, Biteship, and Xendit APIs for enhanced functionality. ",
            technologies: [
                "React",
                "Typescript",
                "Node.js",
                "MongoDB",
                "Docker"
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/yshplsngh/Shop-mart",
                    icon: <Icons.github className="size-3"/>,
                },
            ],
            image: "/shop-mart.png",
            video: "",
        },
        {
            title: "Task Manager",
            href: "https://github.com/yshplsngh/Task-Manager",
            dates: "Dec 2024 - Dec 2024",
            active: true,
            description:
                "A task management app that helps you organize, track, and prioritize your tasks with filters, sorting, and a statistics dashboard.",
            technologies: [
                "React",
                "Redux",
                "Typescript",
                "Node.js",
                "Postgresql",
                "Prisma",
                "Docker",
                'CICD'
            ],
            links: [
                {
                    type: "Website",
                    href: "https://task.yshplsngh.in",
                    icon: <Icons.globe className="size-3"/>,
                },
                {
                    type: "Source",
                    href: "https://github.com/yshplsngh/Task-Manager",
                    icon: <Icons.github className="size-3"/>,
                },
            ],
            image: "/tm.png",
            video: "",
        },
        {
            title: "Blog Site - Blog Making App",
            href: "https://github.com/yshplsngh/Blog-Site",
            dates: "Jan 2024 - Mar 2024",
            active: true,
            description:
                "A Blogging Platform with secure custom authentication using JWT, refresh token rotation, and efficient blog caching powered by RTK Query.",
            technologies: [
                "React",
                "Redux",
                "RTK-Query",
                "Typescript",
                "Node.js",
                "MongoDB",
                "TailwindCSS",
                "JWT"
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/yshplsngh/Blog-Site",
                    icon: <Icons.github className="size-3"/>,
                },
            ],
            image: "/blog-site.png",
            video: "",
        },
        {
            title: "Screen Recorder",
            href: "https://github.com/yshplsngh/ScreenRecorder",
            dates: "Apr 2024 - Apr 2024",
            active: true,
            description: "A Browser-based screen recording app allow capturing capture video and audio, with local download features.",
            technologies: [
                "React",
                "Typescript",
                "TailwindCSS",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://screen-recorder-amber.vercel.app",
                    icon: <Icons.globe className="size-3"/>,
                },
                {
                    type: "Source",
                    href: "https://github.com/yshplsngh/ScreenRecorder",
                    icon: <Icons.github className="size-3"/>,
                },
            ],
            image: "/sr.png",
            video: "",
        },

        // {
        //     title: "llm.report",
        //     href: "https://llm.report",
        //     dates: "April 2023 - September 2023",
        //     active: true,
        //     description:
        //         "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
        //     technologies: [
        //         "Next.js",
        //         "Typescript",
        //         "PostgreSQL",
        //         "Prisma",
        //         "TailwindCSS",
        //         "Shadcn UI",
        //         "Magic UI",
        //         "Stripe",
        //         "Cloudflare Workers",
        //     ],
        //     links: [
        //         {
        //             type: "Website",
        //             href: "https://llm.report",
        //             icon: <Icons.globe className="size-3"/>,
        //         },
        //         {
        //             type: "Source",
        //             href: "https://github.com/dillionverma/llm.report",
        //             icon: <Icons.github className="size-3"/>,
        //         },
        //     ],
        //     image: "",
        //     video: "",
        // }
    ],
    hackathons: [
        // {
        //     title: "Hack Western 5",
        //     dates: "November 23rd - 25th, 2018",
        //     location: "London, Ontario",
        //     description:
        //         "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
        //     image:
        //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
        //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
        //     links: [],
        // },
        // {
        //     title: "Hack The North",
        //     dates: "September 14th - 16th, 2018",
        //     location: "Waterloo, Ontario",
        //     description:
        //         "Developed a mobile application which delivers university campus wide events in real time to all students.",
        //     image:
        //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
        //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
        //     links: [],
        // },
        // {
        //     title: "FirstNet Public Safety Hackathon",
        //     dates: "March 23rd - 24th, 2018",
        //     location: "San Francisco, California",
        //     description:
        //         "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
        //     icon: "public",
        //     image:
        //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
        //     links: [],
        // },
        // {
        //     title: "DeveloperWeek Hackathon",
        //     dates: "February 3rd - 4th, 2018",
        //     location: "San Francisco, California",
        //     description:
        //         "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
        //     image:
        //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
        //     links: [
        //         {
        //             title: "Github",
        //             icon: <Icons.github className="h-4 w-4"/>,
        //             href: "https://github.com/cryptotrends/cryptotrends",
        //         },
        //     ],
        // },
        // {
        //     title: "HackDavis",
        //     dates: "January 20th - 21st, 2018",
        //     location: "Davis, California",
        //     description:
        //         "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
        //     image:
        //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
        //     win: "Best Data Hack",
        //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
        //     links: [
        //         {
        //             title: "Devpost",
        //             icon: <Icons.globe className="h-4 w-4"/>,
        //             href: "https://devpost.com/software/my6footprint",
        //         },
        //         {
        //             title: "ML",
        //             icon: <Icons.github className="h-4 w-4"/>,
        //             href: "https://github.com/Wallet6/my6footprint-machine-learning",
        //         },
        //         {
        //             title: "iOS",
        //             icon: <Icons.github className="h-4 w-4"/>,
        //             href: "https://github.com/Wallet6/CarbonWallet",
        //         },
        //         {
        //             title: "Server",
        //             icon: <Icons.github className="h-4 w-4"/>,
        //             href: "https://github.com/Wallet6/wallet6-server",
        //         },
        //     ],
        // },
        // {
        //     title: "ETH Waterloo",
        //     dates: "October 13th - 15th, 2017",
        //     location: "Waterloo, Ontario",
        //     description:
        //         "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
        //     image:
        //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
        //     links: [
        //         {
        //             title: "Organization",
        //             icon: <Icons.github className="h-4 w-4"/>,
        //             href: "https://github.com/ethdocnet",
        //         },
        //     ],
        // },
        // {
        //     title: "Hack The North",
        //     dates: "September 15th - 17th, 2017",
        //     location: "Waterloo, Ontario",
        //     description:
        //         "Developed a virtual reality application allowing users to see themselves in third person.",
        //     image:
        //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
        //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
        //     links: [
        //         {
        //             title: "Streamer Source",
        //             icon: <Icons.github className="h-4 w-4"/>,
        //             href: "https://github.com/justinmichaud/htn2017",
        //         },
        //         {
        //             title: "Client Source",
        //             icon: <Icons.github className="h-4 w-4"/>,
        //             href: "https://github.com/dillionverma/RTSPClient",
        //         },
        //     ],
        // },
        // {
        //     title: "Hack The 6ix",
        //     dates: "August 26th - 27th, 2017",
        //     location: "Toronto, Ontario",
        //     description:
        //         "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
        //     image:
        //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
        //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
        //     links: [
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4"/>,
        //             href: "https://github.com/ShareShip/ShareShip",
        //         },
        //         {
        //             title: "Site",
        //             icon: <Icons.globe className="h-4 w-4"/>,
        //             href: "https://share-ship.herokuapp.com/",
        //         },
        //     ],
        // },
        // {
        //     title: "Stupid Hack Toronto",
        //     dates: "July 23rd, 2017",
        //     location: "Toronto, Ontario",
        //     description:
        //         "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
        //     image:
        //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
        //     links: [
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4"/>,
        //             href: "https://github.com/nsagirlfriend/nsagirlfriend",
        //         },
        //     ],
        // },
        // {
        //     title: "Global AI Hackathon - Toronto",
        //     dates: "June 23rd - 25th, 2017",
        //     location: "Toronto, Ontario",
        //     description:
        //         "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
        //     image:
        //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
        //     win: "1st Place Winner",
        //     links: [
        //         {
        //             title: "Article",
        //             icon: <Icons.globe className="h-4 w-4"/>,
        //             href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        //         },
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4"/>,
        //             href: "https://github.com/TinySamosas/",
        //         },
        //     ],
        // },
        // {
        //     title: "McGill AI for Social Innovation Hackathon",
        //     dates: "June 17th - 18th, 2017",
        //     location: "Montreal, Quebec",
        //     description:
        //         "Developed realtime facial microexpression analyzer using AI",
        //     image:
        //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
        //     links: [],
        // },
        // {
        //     title: "Open Source Circular Economy Days Hackathon",
        //     dates: "June 10th, 2017",
        //     location: "Toronto, Ontario",
        //     description:
        //         "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
        //     image:
        //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
        //     win: "1st Place Winner",
        //     links: [
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4"/>,
        //             href: "https://github.com/dillionverma/genecis",
        //         },
        //     ],
        // },
        // {
        //     title: "Make School's Student App Competition 2017",
        //     dates: "May 19th - 21st, 2017",
        //     location: "International",
        //     description: "Improved PocketDoc and submitted to online competition",
        //     image:
        //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
        //     win: "Top 10 Finalist | Honourable Mention",
        //     links: [
        //         {
        //             title: "Medium Article",
        //             icon: <Icons.globe className="h-4 w-4"/>,
        //             href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        //         },
        //         {
        //             title: "Devpost",
        //             icon: <Icons.globe className="h-4 w-4"/>,
        //             href: "https://devpost.com/software/pocketdoc-react-native",
        //         },
        //         {
        //             title: "YouTube",
        //             icon: <Icons.youtube className="h-4 w-4"/>,
        //             href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        //         },
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4"/>,
        //             href: "https://github.com/dillionverma/pocketdoc-react-native",
        //         },
        //     ],
        // },
        // {
        //     title: "HackMining",
        //     dates: "May 12th - 14th, 2017",
        //     location: "Toronto, Ontario",
        //     description: "Developed neural network to optimize a mining process",
        //     image:
        //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
        //     links: [],
        // },
        // {
        //     title: "Waterloo Equithon",
        //     dates: "May 5th - 7th, 2017",
        //     location: "Waterloo, Ontario",
        //     description:
        //         "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
        //     image:
        //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
        //     links: [
        //         {
        //             title: "Devpost",
        //             icon: <Icons.globe className="h-4 w-4"/>,
        //             href: "https://devpost.com/software/pocketdoc-react-native",
        //         },
        //         {
        //             title: "YouTube",
        //             icon: <Icons.youtube className="h-4 w-4"/>,
        //             href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        //         },
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4"/>,
        //             href: "https://github.com/dillionverma/pocketdoc-react-native",
        //         },
        //     ],
        // },
        // {
        //     title: "SpaceApps Waterloo",
        //     dates: "April 28th - 30th, 2017",
        //     location: "Waterloo, Ontario",
        //     description:
        //         "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
        //     image:
        //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
        //     links: [
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4"/>,
        //             href: "https://github.com/dillionverma/earthwatch",
        //         },
        //     ],
        // },
        // {
        //     title: "MHacks 9",
        //     dates: "March 24th - 26th, 2017",
        //     location: "Ann Arbor, Michigan",
        //     description:
        //         "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
        //     image:
        //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
        //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
        //     links: [
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4"/>,
        //             href: "https://github.com/dillionverma/threejs-planes",
        //         },
        //     ],
        // },
        // {
        //     title: "StartHacks I",
        //     dates: "March 4th - 5th, 2017",
        //     location: "Waterloo, Ontario",
        //     description:
        //         "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
        //     image:
        //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
        //     win: "1st Place Winner",
        //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
        //     links: [
        //         {
        //             title: "Source (Mobile)",
        //             icon: <Icons.github className="h-4 w-4"/>,
        //             href: "https://github.com/mattBlackDesign/recipic-ionic",
        //         },
        //         {
        //             title: "Source (Server)",
        //             icon: <Icons.github className="h-4 w-4"/>,
        //             href: "https://github.com/mattBlackDesign/recipic-rails",
        //         },
        //     ],
        // },
        // {
        //     title: "QHacks II",
        //     dates: "February 3rd - 5th, 2017",
        //     location: "Kingston, Ontario",
        //     description:
        //         "Developed a mobile game which enables city-wide manhunt with random lobbies",
        //     image:
        //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
        //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
        //     links: [
        //         {
        //             title: "Source (Mobile)",
        //             icon: <Icons.github className="h-4 w-4"/>,
        //             href: "https://github.com/dillionverma/human-huntr-react-native",
        //         },
        //         {
        //             title: "Source (API)",
        //             icon: <Icons.github className="h-4 w-4"/>,
        //             href: "https://github.com/mattBlackDesign/human-huntr-rails",
        //         },
        //     ],
        // },
        // {
        //     title: "Terrible Hacks V",
        //     dates: "November 26th, 2016",
        //     location: "Waterloo, Ontario",
        //     description:
        //         "Developed a mock of Windows 11 with interesting notifications and functionality",
        //     image:
        //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
        //     links: [
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4"/>,
        //             href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        //         },
        //     ],
        // },
        // {
        //     title: "Portal Hackathon",
        //     dates: "October 29, 2016",
        //     location: "Kingston, Ontario",
        //     description:
        //         "Developed an internal widget for uploading assignments using Waterloo's portal app",
        //     image:
        //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
        //     links: [
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4"/>,
        //             href: "https://github.com/UWPortalSDK/crowmark",
        //         },
        //     ],
        // },
    ],
} as const;
