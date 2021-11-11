const { connect } = require('../config/dbconfig')
const apiLogger = require('../logger/api.logger')
const { Project } = require('../model/projectModel')
const { User } = require('../model/userModel')
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
    
    async getProject(projectid) {

        // const user = await User.findOne({id: 1});
        console.log(projectid)
        const projects = await Project.find({id: projectid});
        console.log(projects)

        return projects
    }

}

module.exports = new projectControler();
