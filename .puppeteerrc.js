const isHeadless = process.env.PUPPETEER_HEADLESS !== 'false'; // Default to headless

module.exports = {
    launch: {
        headless: isHeadless, // Run Chrome in headless mode
        args: ['--no-sandbox', '--disable-setuid-sandbox'], // Additional command line arguments
    },
    browserContext: 'default', // Context for browser instances
};