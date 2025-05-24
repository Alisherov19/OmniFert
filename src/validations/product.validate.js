const {z} = require("zod")
const {Product} = require("../models")

const productScheme = z.object({
    status: z.string().trim().nonempty("required status"),
    image: z.string().trim().nonempty("required image"),
    name: z.string().trim().nonempty("required name"),
    price: z.number().min(0),
    discount: z.number().min(0).max(100),
    star: z.number().int().min(1).max(5),
    category: z.string().trim().nonempty("required category"),
    image_1: z.string().trim().nonempty("required image_1"),
    image_2: z.string().trim().nonempty("required image_2"),
    image_3: z.string().trim().nonempty("required image_3"),
})


module.exports = {
    productScheme
};
