const { connect } = require('http2')
const apiLogger = require('../logger/api.logger')
const { Project } = require('../model/projectModel')

class projectControler {

    constructor() {
        connect();
    }

    async getAllProjects() {
        apiLogger.info(`project controller: getAllProjects`)
    
        try{
            const projects = await Project.find();
            return projects
        } catch(err) {
            apiLogg
        }
    }
    


}

module.exports = new projectControler();
