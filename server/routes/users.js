const router = require('express').Router();
const authController = require('../controllers/auth');
const userController = require('../controllers/user');

// auth
router.post("/register", authController.signUp);
router.post('/login', authController.signIn);
router.get('/logout', authController.logout);

// user display: 'block',
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;