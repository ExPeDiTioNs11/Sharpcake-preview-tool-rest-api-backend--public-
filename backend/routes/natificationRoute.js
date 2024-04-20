const express = require('express');
const { 
    send_natification,
    getNatificationByRecipientID,
    getNatificationBySenderID,
    delete_natification,
    update_seen,
    natificationGetId
   } = require('../controllers/natificationController');
const { userControl } = require('../middlewares/authMiddleware');
const router = express.Router();


router.post('/send-natification', userControl, send_natification); // bildirim gönder
router.get('/get-by-recipientUser/:recipientID', userControl, getNatificationByRecipientID); // alıcı kullanıcıya göre bildirim getir
router.get('/get-by-senderUser/:senderID', userControl, getNatificationBySenderID); // gönderici kullanıcıya göre bildirim getir
router.delete('/delete-natification/:id', userControl, delete_natification); // bildirim sil
router.get('/getNatificationById/:id', userControl, natificationGetId); // bildirim sil
router.put('/update-natification-seen/:id', userControl, update_seen); // okundu bilgisini güncelle

module.exports = router