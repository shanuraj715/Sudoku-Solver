export const TOP_NAV_LINKS = [
    { label: 'website', url: 'https://shanuthewebdev.in' },
    { label: 'github', url: "https://github.com/shanuraj715" },
    { label: 'linkedin', url: "https://linkedin.com/in/shanu-raj-094807148/" },
    { label: 'twitter', url: "https://twitter.com/shanuraj715" },
    { label: 'email', url: "mailto://shanuraj715@gmail.com" },
    { label: 'instagram', url: "https://instagram.com/shanu_the_web_dev/" },
    { label: 'facebook', url: "https://facebook.com/shanuraj715" },
]

export const APP_META = {
    name: "Sudoku Solver",
    description: "A Free 9x9 Sudodu Solver Tool.",
    domain: 'https://sudoku-solver.techfacts007.in',
    path: '/', // subdirectory
}

export const NAVBAR_LINKS = [
    { label: "Home", url: "/", iconIdentifier: "home" },
    { label: "Sudoku", url: "/sudoku", iconIdentifier: "sudoku" },
    { label: "API", url: "/api", iconIdentifier: "api" },
    { label: "How To Use", url: "/how-to-use", iconIdentifier: "howtouse" },
    { label: "Developer", url: "https://shanuthewebdev.in", iconIdentifier: "developer", type: 'external' },
]

export const SCREEN_SIZES = {
    MOBILE_WIDTH: 576,
    TABLET_WIDTH: 768
}

export const PAGES = [
    {
        label: 'home',
        title: `${APP_META.name}`,
        description: "Solve any 9x9 Sudoku within a second. We also provide a free API for the sudoku so you can simply integrate our sudoku solver into your app.",
        path: '/'
    },
    {
        label: 'solveSudoku',
        title: `Solve Sudoku | ${APP_META.name}`,
        description: "Create your own 9x9 sudoku and get your answer within seconds.",
        path: '/sudoku'
    },
    {
        label: 'api',
        title: ` | ${APP_META.name}`,
        description: "",
        path: '/'
    },
    {
        label: 'howToUse',
        title: ` | ${APP_META.name}`,
        description: "",
        path: '/'
    },
    {
        label: 'Developer',
        title: ` | ${APP_META.name}`,
        description: "",
        path: '/'
    },
]