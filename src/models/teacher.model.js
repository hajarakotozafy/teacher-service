module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define("teachers", {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        birthday: {
            type: Sequelize.DATE
        },
        grade: {
            type: Sequelize.STRING
        },
        diplome: {
            type: Sequelize.STRING
        }
    });
    return Teacher
};