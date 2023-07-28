// gitprofile.config.js

const config = {
  github: {
    username: 'codingispink', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'katherine-ngo-556688159/',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepi'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://codingispink.github.io/portfolio/',
    phone: '',
    email: 'ngogiang321@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/drive/u/2/folders/1Sw3yvCZ9YyTHV6Uz7jbgShxlMQuYqjjI', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'MySQL',
    'JavaScript',
    'R',
    //'Node.js',
    //'Nest.js',
    //'MySQL',
    //'PostgreSQL',
    // 'Git',
    // 'Docker',
    // 'PHPUnit',
    // 'CSS',
    // 'Antd',
    // 'Tailwind',
  ],
  experiences: [
    {
      company: 'KPIM JOINT STOCK COMPANY',
      position: 'Business Analyst Intern',
      from: 'February 2023',
      to: 'May 2023',
      companyLink: 'https://kpim.vn/',
    },
    {
      company: 'University of Minnesota (Twin Cities)',
      position: 'Human Resources/Payroll Assistant',
      from: 'July 2022',
      to: 'May 2023',
      companyLink: 'https://sua.umn.edu/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'University of Chicago',
      degree: 'Master of Science, Applied Data Science',
      from: 'September 2023',
      to: 'December 2024',
    },
    {
      institution: 'University of Minnesota (Twin Cities)',
      degree: 'Bachelor of Science in Business, Management Information Systems, Marketing Minor',
      from: 'September 2019',
      to: 'May 2023',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  // externalProjects: [
  //   {
  //     title: '',
  //     description:
  //       '',
  //     imageUrl: '',
  //     link: '',
  //   },
  //   {
  //     title: '',
  //     description:
  //       '',
  //     imageUrl: '',
  //     link: '',
  //   },
  // ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#e6bfba',
      secondary: '#c78e89',
      accent: '#cd9e92',
      neutral: '#FEEEEC',
      'base-100': '#ffdce7',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
