const express = require('express');
const { 
    create_category,
    getCategories,
    delete_category,
    getByCategoryID,
    getThisCategoryInSubCategories,

    // sub category func's
    addFileForSubCategory,
    createSubCategory,
    getBySubCategoryID,
    getSubCategories,
    delete_subCategory,
    addFileForCategory,
   

    //files route
    downloadCampaignFiles,
    fileInformation,
    deleteFile,

    // file path desc func's
    createFileDesc,
    getAllFilePathDesc,
    getByFilePath

} = require('../controllers/categoryController');
const { userControl } = require('../middlewares/authMiddleware');
const router = express.Router();


// category routes
router.post('/create-category', userControl, create_category); // kategori oluştur
router.get('/get-all-categories', userControl, getCategories);  // tüm kategorileri getir
router.delete('/delete-category/:id', userControl, delete_category);  // kategori sil
router.get('/get-by-categoryID/:id', userControl, getByCategoryID); // id değerine göre kategori getir
router.get('/get-by-categoryID-shareLink/:id', getByCategoryID); // id değerine göre kategori getir
router.get('/get-by-categoryInSubCategories/:id', userControl, getThisCategoryInSubCategories); // id değerine göre kategori getir
router.get('/get-by-categoryInSubCategories-shareLink/:id', getThisCategoryInSubCategories); // id değerine göre kategori getir
router.put('/add-filePath/:id', userControl, addFileForCategory) // add new file category

// sub category routes
router.put('/subCategory/add-filePath/:id', userControl, addFileForSubCategory); // alt kategoriye file kaydet
router.post('/subCategory/create-subCategory', userControl, createSubCategory); // alt kategori oluştur
router.get('/subCategory/get-all-subCategory', userControl, getSubCategories);  // tüm alt kategorileri getir
router.delete('/subCategory/delete-subCategory/:id', userControl, delete_subCategory);  // alt kategori sil
router.get('/subCategory/get-by-subCategoryID/:id', userControl, getBySubCategoryID); // id değerine göre alt kategori getir
router.get('/subCategory/get-by-subCategoryID-shareLink/:id', getBySubCategoryID); // id değerine göre alt kategori getir

// file worker route 
router.post('/download-files/:campaign_id', downloadCampaignFiles); // campaign file download
router.get('/file-information', fileInformation) // dosya bilgilerini alma
router.delete('/deleteFile', deleteFile) // aws s3 dosya silme

// file path desc workers
router.put('/file-desc-worker', userControl, createFileDesc) //file desc worker (create update and add new)
router.get('/get-all-filePathDesc', userControl, getAllFilePathDesc);  // tüm file path desc verilerini getir
router.get('/get-all-filePathDesc-shareLink', getAllFilePathDesc);  // tüm file path desc verilerini getir for customer page
router.get('/get-by-filePath-desc', userControl, getByFilePath);  // tüm file path desc verilerini getir  
router.get('/get-by-filePath-desc-shareLink', getByFilePath);  //   file path değerine göre desc verilerini getir for customer page

module.exports = router

