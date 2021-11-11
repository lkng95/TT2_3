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
    
        const user = await User.findOne({id: 1});

        
        const projects = await Project.find({user_id: 1});
        console.log(projects)

        return projects
        
        
    }
    


}

module.exports = new projectControler();
