// import paginationHelper from '../helper/pagination-helper.js';
import bookModel from '../models/book-model.js'

class bookProvider {

    addBookPrvider = async ({ payload }) => {
        return bookModel.create(payload)
            .then((book) => {
                return { book }
            })
            .catch((error) => {
                return Promise.reject(error);
            })
    }
    getBookProvider = async (page) => {
        const book = bookModel.find()
        return book
            .then((book) => {
                return { book }
            })
            .catch((error) => {
                return Promise.reject(error)
            })
    }

    getBookByIdProvider = async ({ id }) => {
        const book = bookModel.findById(id)
        return book
            .then((book) => {
                return { book }
            })
            .catch((error) => {
                return Promise.reject(error)
            })
    }

    updateBookProvider = async ({ id }, data) => {
        const book = bookModel.findByIdAndUpdate({ _id: id }, data, {
            new: true
        })
        return book
            .then((book) => {
                return { book }
            })
            .catch((error) => {
                return Promise.reject(error)
            })
    }

    deleteBookProvider = async ({ id }) => {
        const book = bookModel.findByIdAndDelete({ _id: id })
        return book
            .then((book) => {
                return {
                    message: `delete ${id} successful`
                }
            })
            .catch((error) => {
                return Promise.reject(error)
            })
    }
}

export default new bookProvider