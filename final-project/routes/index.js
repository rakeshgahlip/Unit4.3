const express = require("express");
const router = express.Router();
const studentElectivesController = require("../controllers/studentElectivesController");

router.get("/", (req, res) => {
  res.send("Students Electives");
});

router.post("/addStudent", async (req, res) => {
  studentElectivesController.create(req.body, (err, studentResponse) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send({
      response: studentResponse,
    });
  });
});

router.post("/updateElectives", (req, res) => {
  let data = req.body;
  studentElectivesController.findOneAndUpdate(
    { name: req.body.name.toLowerCase() },
    data,
    (err, updatedStudent) => {
      if (err) {
        return res.send({ response: err });
      }
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send({
        response: updatedStudent,
      });
    }
  );
});

router.get("/findStudent", (req, res) => {
  studentElectivesController.find(
    { name: req.body.name.toLowerCase() },
    (err, studentDetails) => {
      if (err) {
        return res.send({ response: err });
      }
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.json({
        response: studentDetails,
      });
    }
  );
});

router.delete("/deleteStudent", (req, res) => {
  studentElectivesController.findOneAndRemove(
    { name: req.body.name.toLowerCase() },
    (err, deletedStudent) => {
      if (err) {
        return res.send({ response: err });
      }
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");

      res.send({
        response: deletedStudent,
      });
    }
  );
});

router.get("/findAllStudents", (req, res) => {
  studentElectivesController.find({}, (err, allStudentDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({
      response: allStudentDetails,
    });
  });
});

module.exports = router;
