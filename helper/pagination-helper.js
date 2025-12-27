// export default paginationHelper = async (model, page = 1, limit = 10, querry = {}) => {
//     try {
//         const skip = (page - 1) * limit;

//         const [data, total] = await Promise.all([
//             model.find(querry)
//                 .skip()
//                 .limit(limit),
//             model.countDocuments(querry)
//         ])
//         return {
//             data,
//             pagination: {
//                 totalRecords: total,
//                 currentPage: page,
//                 totalPages: Math.ceil(total / limit),
//                 limit
//             }
//         }
//     } catch (error) {
//         return Promise.reject(error)
//     }
// }