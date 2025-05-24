const {z} = require("zod")

const ManagementScheme = z.object({
    image : z.string({required_error: "Rasm URL majburiy"})
    .url("url needed"),
    title : z
    .string()
    .min(5)
    .max(200),
     work : z
    .string()
    .min(5)
    .max(200)
}) 

module.exports = {
    ManagementScheme
};
