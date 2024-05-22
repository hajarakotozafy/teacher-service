const controller = require("../controllers/teacher.controller");

module.exports = (app) => {
    app.post("/teacher-service/create", controller.createTeacher);
    app.get("/teacher-service/fetch-all", controller.fetchTeachers);
    app.get("/teacher-service/fetch-one", controller.findOneTeacherByRegNum);
    app.put("/teacher-service/update-one", controller.updateTeacherByRegNum);
    app.delete("/teacher-service/delete-one", controller.deleteTeacherByRegNum);
}