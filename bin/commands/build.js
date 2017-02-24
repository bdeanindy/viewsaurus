var viewsaurus = require('../..');

function buildCommand(options) {
    // Generate with initial options, generate CSS and JS
    options.outputDirectory = options.outputDirectory || process.cwd();
    options.outputFileName = options.outputFileName || 'index.html';
    viewsaurus.generate(options, function (err) {
        if (err) {
            console.error(err.stack);
        }
        console.log('Viewsaurus builds successfully in:' + options.outputDirectory);
    });
}

module.exports = buildCommand;