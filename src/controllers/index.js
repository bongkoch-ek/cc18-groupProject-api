const {register,login,loginGoogle,currentUser} = require('./auth-controller')
const {getUser,listUser,updateProfile,deleteUser, createProject} = require('./user-controller')
const {getAllUser,createComment,createList,createTask,addMember,getAllComments,getAllProjects,getAllLists,getAllTasks,getCommentByTaskId,getListById,getTaskById,getProjectById,updateList,updateProject,updateTask,deleteComment,deleteList,deleteMember,deleteProject,deleteTask,uploadImages,removeImages,searchFilters, getActivityLog, createActivityLog, getTodayTask,updateStatusMember, createWebLink, deleteWebLink} = require("./dashboard-controller")

module.exports = {
    register,
    login,
    loginGoogle,
    getUser,
    listUser,
    updateProfile,
    deleteUser,
    createProject,
    createComment,
    createList,
    createTask,
    addMember,
    getAllComments,
    getAllProjects,
    getAllLists,
    getAllTasks,
    getCommentByTaskId,
    getListById,
    getTaskById,
    getProjectById,
    updateList,
    updateProject,
    updateTask,
    deleteComment,
    deleteList,
    deleteMember,
    deleteProject,
    deleteTask,
    uploadImages,
    removeImages,
    searchFilters,
    getActivityLog,
    createActivityLog,
    getTodayTask,
    currentUser,
    updateStatusMember,
    getAllUser,
    createWebLink,
    deleteWebLink
}