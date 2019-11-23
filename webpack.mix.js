const mix = require('laravel-mix');

mix.sass('resources/sass/app.scss', 'dist')
   .js('resources/js/app.js', 'dist')
   .setPublicPath('dist');