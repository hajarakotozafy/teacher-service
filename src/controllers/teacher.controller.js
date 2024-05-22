const db = require("../models")

const { teacher: Teacher } = db;
const Op = db.Sequelize.Op;

exports.createTeacher = (req, res) => {
    const newTeacher = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        birthday: req.body.birthday,
        grade: req.body.grade,
        diplome: req.body.diplome
    }

    Teacher.create(newTeacher).then(teacher => {
        res.send(teacher);
    })
}

exports.fetchTeachers = (req, res) => {
    Teacher.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving teachers!",
        });
    });
};

// Find One Teacher By Registration Number (RegNum)
exports.findOneTeacherByRegNum = (req, res) => {
    Teacher.findByPk(req.body.teacherRegNum).then( data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving the Teacher with registration number " + req.body.teacherRegNum,
        });
    });
};

exports.updateTeacherByRegNum = (req, res) => {
    const newTeacher = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        birthday: req.body.birthday,
        grade: req.body.grade,
        diplome: req.body.diplome
    }

    Teacher.update(newTeacher, {where: {id: req.body.teacherRegNum}}).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while updating the Teacher with registration number " + req.body.teacherRegNum,
        });
    });
};

exports.deleteTeacherByRegNum = (req, res) => {
    Teacher.destroy({where: { id: req.body.teacherRegNum }}).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while destroying the Teacher with registration number " + req.body.teacherRegNum,
        })
    })
}