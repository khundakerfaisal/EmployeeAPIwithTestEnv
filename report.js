const newman = require('newman');
require('dotenv').config(); //require install dotenv package
 
newman.run({
    // past collection url 
    collection:`https://api.postman.com/collections/52498897-2a596169-603f-43d2-b980-f74c235385b6?access_key=${process.env.secretKey}`,
      // Environment file
    environment: './EnvTestEmployee.postman_environment.json',
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
