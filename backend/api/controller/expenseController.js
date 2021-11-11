const apiLogger = require('../logger/api.logger')
const { expense } = require('../model/expenseModel')
const { connect, disconnect } = require('../config/dbconfig');



async function updateExpenseController(projectId, category_id, name, description, amount, updated_by, updated_at) {
    apiLogger.info(`expense controller::: update expenses ${projectId}`)

    await expense.updateOne(
        { project_id: projectId},
        {$set: {test: test}}
    )

    
}

async function deleteExpenseController(projectId) {
    apiLogger.info(`expense controller::: delete expenses ${projectId}`)

    await expense.deleteOne({project_id: projectId})
}

module.exports = {
    updateExpenseController,
    deleteExpenseController
}