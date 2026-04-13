const newman = require('newman');

const apiKey = process.env.POSTMAN_API_KEY;

if (!apiKey) {
    console.error("POSTMAN_API_KEY is missing");
    process.exit(1);
}

newman.run({
    collection: {
        url: `https://api.postman.com/collections/52498897-2a596169-603f-43d2-b980-f74c235385b6?access_key=${apiKey}`
    },

    environment: './EnvTestEmployee.postman_environment.json',

    reporters: ['cli', 'htmlextra'],

    reporter: {
        htmlextra: {
            export: './Reports/report.html',
            title: "API Test Report",   
            browserTitle: "Newman Report"
        }
    }

}, function (err, summary) {
    if (err) {
        console.error("Newman run failed:", err);
        process.exit(1);
    }

    if (!summary || !summary.collection || !summary.collection.name) {
        console.error("Collection not loaded properly");
        process.exit(1);
    }

    console.log("Collection run complete!");
});