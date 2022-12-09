import * as yup from "yup"
import {v4 as uuidv4} from "uuid"

export const newProduct = yup.object().shape({
    id: yup.string().default(() => uuidv4()).transform(() => uuidv4()),
    name: yup.string().min(3).max(200).required(),
    price: yup.number().required(),
    category_id: yup.string()
})