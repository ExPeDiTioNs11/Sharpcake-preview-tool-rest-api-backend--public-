const express = require('express');
const { 
    create_campaign,
    getCampaigns,
    delete_campaign,
    getByCampaignID,
    get_favoriteCampaigns,
    add_favorite,
    exract_favorite,
    get_Not_favoriteCampaigns,
    getThisCampaignCategories,
    update_campaign
} = require('../controllers/campaignController');
const { userControl } = require('../middlewares/authMiddleware');
const router = express.Router();


router.post('/create-campaign', userControl, create_campaign); // çalışma oluştur
router.get('/get-all-campaigns', userControl, getCampaigns);  // tüm çalışmaları getir
router.get('/get-notFavorite-campaign', userControl, get_Not_favoriteCampaigns); // favorilere eklenmemiş çalışmaları getir
router.delete('/delete-campaign/:id', userControl, delete_campaign);  // çalışma sil
router.get('/get-by-campaignID/:id', userControl, getByCampaignID); // id değerine göre çalışma getir
router.get('/get-by-campaignID-shareLink/:id', getByCampaignID); // id değerine göre çalışma getir
router.get('/get-favorite', userControl, get_favoriteCampaigns);  // favori çalışmaları getir
router.put('/add-favorite/:id', userControl, add_favorite);  // favorilere ekle
router.put('/exract-favorite/:id', userControl, exract_favorite);  // favorilerden çıkart
router.put('/update-campaign/:id', userControl, update_campaign) // kampanya güncelle
router.get('/getCategories/getThisCampaignCategories/:campaign_id', userControl, getThisCampaignCategories);  // bu çalışamaya ait kategorileri getir.
module.exports = router

