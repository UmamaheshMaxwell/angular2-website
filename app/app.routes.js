"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./components/pages/home/home.component");
var about_component_1 = require("./components/pages/about/about.component");
exports.routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', component: about_component_1.AboutComponent }
];
//# sourceMappingURL=app.routes.js.map