import {Category} from "../models/index.js";
import statusCode from "../helpers/statusCodeHelper.js";
import {errorResponse, exclude, successResponse} from "../helpers/responseHelper.js";
import {categoryFields} from "./fieldsHelper/categoryFields.js";

class CategoryController {
    async get(req, res) {
        try {
            const categories = await Category.find({}, exclude([
                'products'
            ]))

            if (categories) {
                return successResponse(res, {
                    data: categories
                })
            } else {
                return errorResponse(res, {
                    status: statusCode.NOT_FOUND,
                    errors: ['categories not found']
                })
            }
        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: ['categories error']
            })
        }
    }

    async create(req, res) {
        try {
            const category = await Category.create(categoryFields(req?.body))

            if (category) {
                return successResponse(res, {
                    data: category
                })
            } else {
                return errorResponse(res, {
                    errors: ['category not created']
                })
            }
        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: ['category create error', e]
            })
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params

            if (!id) {
                return errorResponse(res, {
                    errors: ['incorrect id']
                })
            }
            const updatedCategory = await Category.findByIdAndUpdate(id, categoryFields(req?.body), {
                returnDocument: "after"
            })

            if (updatedCategory) {
                return successResponse(res, {
                    data: updatedCategory
                })
            } else {
                return errorResponse(res, {
                    errors: ['category not updated']
                })
            }
        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: ['category update error']
            })
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                return errorResponse(res, {
                    errors: ['incorrect id']
                })
            }
            const deletedCategory = await Category.findByIdAndDelete(id, {
                returnDocument: "after"
            })

            if (deletedCategory) {
                return successResponse(res, {
                    data: categoryFields(deletedCategory)
                })
            } else {
                return errorResponse(res, {
                    errors: ['category not deleted']
                })
            }
        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: ['category delete error', e]
            })
        }
    }
}

export default new CategoryController()