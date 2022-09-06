"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("password123", 10);
    await queryInterface.bulkInsert("Users", [
      {
        user_id: 1,
        fullname: "Dimas Ashidiqi",
        email: "example@mail.com",
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
