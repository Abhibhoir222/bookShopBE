import { Query } from "mongoose"
import bookProvider from "../provider/book-provider.js"
import createHttpError from 'http-errors'

class bookController {

    addBook = async (req, res, next) => {
        const payload = req.body
        bookProvider
            .addBookPrvider({ payload })
            .then((data) => res.status(201).json(data))
            .catch(next)

    }

    getBook = async (req, res, next) => {
        const page = parseInt(req.query.page) || 1

        bookProvider
            .getBookProvider(page)
            .then((data) => res.status(200).json(data))
            .catch(next)
    }

    getByIdBook = async (req, res, next) => {
        const id = req.params
        bookProvider
            .getBookByIdProvider(id)
            .then((data) => res.status(200).json(data))
            .catch(next)
    }

    updateBook = async (req, res, next) => {
        const id = req.params
        bookProvider
            .updateBookProvider(id, req.body)
            .then((data) => res.status(201).json(data))
            .catch(next)
    }
    deleteBook = async (req, res, next) => {
        const id = req.params
        bookProvider
            .deleteBookProvider(id)
            .then((data) => res.status(201).json(data))
            .catch(next)
    }

}

export default new bookController