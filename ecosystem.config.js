module.exports = {
    apps: [{
        script: 'npm start',
        name: 'sudoku_solver',
        env: {
            NODE_ENV: 'production',
            PORT: 3022,
        },
        env_file: '.env'
    }]
};
