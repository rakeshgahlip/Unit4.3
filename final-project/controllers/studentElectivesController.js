const BaseController = require("./baseController");
const StudentElectivesModel = require("../models/studentElectivesModel");
class StudentElectives extends BaseController {
  constructor() {
    super(StudentElectivesModel, StudentElectives);
  }
}
module.exports = new StudentElectives();
