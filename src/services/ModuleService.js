import React from 'react'
const MODULE_COURSE_API_URL="http://localhost:8080/api/course/CID/module";
const MODULE_API_URL_='http://localhost:8080/api/module';


let _singleton = Symbol();

export default class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Error');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }

    createModule(courseId,module){
        return fetch(MODULE_COURSE_API_URL.replace('CID', courseId),
            {   body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    findAllModules() {
        return fetch(MODULE_API_URL_)
            .then(function(response){
                return response.json();
            });
    }
    
    findAllModulesForCourse(courseId) {
        return fetch(MODULE_COURSE_API_URL.replace('CID', courseId))
            .then(function (response) {
                return response.json();
            });
    }

    findModuleById(moduleId) {
        return fetch(MODULE_API_URL_ + '/' + moduleId)
            .then(function(response) {
                return response.json();
            });
    }

    deleteModule(courseId,moduleId){
        return fetch(MODULE_COURSE_API_URL.replace('CID', courseId)+'/'+moduleId,{
            method:'delete'
        });
    }


}