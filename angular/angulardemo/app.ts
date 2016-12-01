

/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
    selector: 'my-app'
})
@View({
    template: '<h1>Hello {{ name }}</h1>'
})

// Component controller
class TestAppCompo {
    name: string;

    constructor() {
	this.name = 'Makhtar';
    }
}

bootstrap(TestAppCompo);

