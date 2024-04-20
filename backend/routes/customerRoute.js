const express = require('express');
const { 
    create_customer,
    getCustomers,
    delete_customer,
    getByCustomerID,
    get_companyNamesAndCampaign,
    get_companyNames,
    get_archive,
    add_archive,
    exract_archive,
    get_not_archive
} = require('../controllers/customerController');
const { userControl } = require('../middlewares/authMiddleware');
const router = express.Router();


router.post('/create-customer', userControl, create_customer); // yeni customer kaydet
router.get('/get-all-customers', userControl, getCustomers); // tüm customerları listele
router.get('/get-notArchive-customers', userControl, get_not_archive); // arşivlenmemiş markaları listele
router.delete('/delete-customer/:id', userControl, delete_customer); //customer sil
router.get('/get-by-customerID/:id', userControl, getByCustomerID); // id değerine göre customer getir.
router.get('/get-searched-data', userControl, get_companyNamesAndCampaign); //müşterilerin şirket isimlerini ve kampanya isimlerini getir.
router.get('/get-brand-names', userControl, get_companyNames); //müşterilerin şirket isimlerini getir.
router.get('/get-archive', userControl, get_archive); // arşivlenmiş şirketleri getir.
router.put('/add-archive/:id', userControl, add_archive); //müşteriyi arşivle
router.put('/exract-archive/:id', userControl, exract_archive); // müşteriyi arşivden çıkart
module.exports = router

