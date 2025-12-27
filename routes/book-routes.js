import express from 'express'
import bookController from '../controller/book-controller.js';

const router = express.Router();

router.post('/add-book',bookController.addBook)
router.get('/get-book',bookController.getBook)
router.get('/get-by-book/:id', bookController.getByIdBook)
router.put('/update-book/:id',bookController.updateBook)
router.delete('/delete-book/:id',bookController.deleteBook)



export default router;