import {Product} from "../models/index.js";
import {errorResponse, exclude, returnAfter, successResponse} from "../helpers/responseHelper.js";
import statusCode from "../helpers/statusCodeHelper.js";
import {productFields} from "./fieldsHelper/productFields.js";

class ProductController {
    async getAll(req, res) {
        try {
            const products = await Product.find({}, exclude([
                'orders', 'reviews'
            ]))

            if (products) {
                return successResponse(res, {
                    data: products
                })
            } else {
                return errorResponse(res, {
                    status: statusCode.NOT_FOUND,
                    errors: ['products not found']
                })
            }

        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: ['get products error']
            })
        }
    }

    async getByCategory(req, res) {
        try {
            const {categoryId} = req.params

            const products = await Product.find({category: categoryId}, exclude([
                'orders', 'reviews'
            ]))

            if (products) {
                return successResponse(res, {
                    data: products
                })
            } else {
                return errorResponse(res, {
                    errors: ['products not found in this category']
                })
            }
        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: ['get product by category error']
            })
        }
    }

    async getById(req, res) {
        try {
            const {id} = req?.params

            if (!id) {
                return errorResponse(res, {
                    errors: ['incorrect product id']
                })
            }
            const product = await Product.findById(id)

            if (product) {
                return successResponse(res, {
                    data: product
                })
            } else {
                return errorResponse(res, {
                    errors: ['product not found']
                })
            }
        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: ['get product by id error']
            })
        }
    }

    async create(req, res) {
        try {
            const newProduct = await Product.create(productFields(req?.body))

            if (newProduct) {
                return successResponse(res, {
                    data: productFields(newProduct)
                })
            } else {
                return errorResponse(res, {
                    errors: ['product not created']
                })
            }
        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: ['product create error', e]
            })
        }
    }

    async update(req, res) {
        try {
            const {id} = req?.params

            if (!id) {
                return errorResponse(res, {
                    errors: ['incorrect product id']
                })
            }

            const updatedProduct = await Product.findByIdAndUpdate(id, productFields(req?.body), {
                returnDocument: 'after'
            })

            if (updatedProduct) {
                return successResponse(res, {
                    data: productFields(updatedProduct)
                })
            } else {
                return errorResponse(res, {
                    errors: ['product not updated']
                })
            }
        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: ['product update error']
            })
        }
    }

    async delete(req, res) {
        try {
            const {id} = req?.params

            if (!id) {
                return errorResponse(res, {
                    errors: ['incorrect product id']
                })
            }

            const deletedProduct = await Product.findByIdAndDelete(id, returnAfter)

            if (deletedProduct) {
                return successResponse(res, {
                    data: productFields(deletedProduct)
                })
            } else {
                return errorResponse(res, {
                    errors: ['product not deleted']
                })
            }
        } catch (e) {
            console.log(e)
            return errorResponse(res, {
                errors: ['delete product error']
            })
        }
    }
}

export default new ProductController()