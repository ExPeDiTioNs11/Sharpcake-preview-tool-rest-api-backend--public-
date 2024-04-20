const express = require('express');
const { user_register,
    user_login,
    get_users,
    getByEmail,
    getById,
    getByPermission,
    hard_delete_user,
    update_user,
    update_password, 
    forgot_password
} = require('../controllers/userController');
const { userControl } = require('../middlewares/authMiddleware');
const router = express.Router();


router.post('/register', user_register); // kullanıcı kayıt olma / etme
router.post('/login', user_login); // kullanıcı giriş
router.get('/', userControl, get_users); // tüm kullanıcıları listele
router.route('/get-by-email/:email').get(userControl, getByEmail); // email ile kullanıcıları getir
router.route('/get-by-id/:id').get(userControl, getById); // id değeri ile kullanıcı getir
router.route('/get-by-permissions/:permissions').get(userControl, getByPermission); // kullanıcıları yetki düzeyine göre listele
router.route('/user-update/:id').put(userControl, update_user); // kullanıcı güncelle
router.route('/delete-user/:id').delete(userControl, hard_delete_user) // kullanıcıyı kalıcı olarak silme
router.put('/update-password/:id', userControl, update_password);  // kullanıcının şifresini şifreli olarak güncelleme
router.put('/forgot-password', forgot_password);  // kullanıcının şifresini şifreli olarak güncelleme

module.exports = router

