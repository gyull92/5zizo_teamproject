const AdminService = require("../services/admin.service");

class AdminController {

    adminService = new AdminService(); 
// -----------------------------------------------------------------------------------------------

    findMemberList = async (req, res, next) => {
        try {
            const memberList = await this.adminService.findMemberList();

            res.status(201).json({ data: memberList });
        } catch (error) {
            console.error(error)
            res.status(400).json({ errorMessage: error.message });
        };
    };
};

module.exports = AdminController;