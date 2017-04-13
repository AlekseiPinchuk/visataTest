# visataTest

### Installation
0. Clone repository: `git clone https://github.com/AlekseiPinchuk/visataTest .`
1. Install [composer](https://getcomposer.org/) packages in `./api`: `composer install`
2. Install [npm](https://www.npmjs.com/) packages in `./web`: `npm install`
3. Install [bower](https://bower.io/) packages in `./web`: `bower install`
4. Set up your environment options in `./api/.env` file: run `php artisan key:generate` to generate `APP_KEY`, write down URL where your app is hosted to `APP_URL`
5. Up your Database Server and open visataDB.sql

### Running
Now you can try to make it work. To run web application start [gulp](http://gulpjs.com/) task `gulp monitor` in `./web`. If you haven't got the way to run API yet, you can do this by running `php artisan serve` in `./api`.
