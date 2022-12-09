import { AppError } from "../../errors.js"

export const validateData = (schema) => async (request, response, next) => {
    try {
        const validated = await schema.validate(request.body, {
            stripUnknown: true,
            abortEarly: false
        })

        request.validatedBody = validated

        return next()
    } catch (error) {
        throw new AppError(error.errors, 400)
    }
}