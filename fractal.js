'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'Starter Component Library');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

/* Set the default component preview layout */
fractal.components.set('default.preview', '@preview');

/* Set the path for compiled assets */
fractal.web.set('static.path', __dirname + '/public');

fractal.components.engine('@frctl/nunjucks');
fractal.components.set('ext', '.njk');
