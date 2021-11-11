const { connect } = require('../config/dbconfig')
const apiLogger = require('../logger/api.logger')
const { Project } = require('../model/projectModel')

class projectControler {

    constructor() {
        connect();
    }

    async getAllProjects() {
        apiLogger.info(`project controller: getAllProjects`)
    
            const projects = await Project.find();
            console.log(projects)

            return projects
        
        
    }
    


}

module.exports = new projectControler();
