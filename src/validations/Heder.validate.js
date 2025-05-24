const {z} = require("zod")

const HeaderScheme = z.object({
    title:z.string().min(5," longer please").max(50,"NO this very long"),
    paragraph: z.string().min(5," longer please").max(500,"NO this very long"),
    btn:z.string().min(1," longer please").max(24,"NO this very long"),
    btn_1:z.string().min(1," longer please").max(24,"NO this very long"),
    img : z.string().max(10000,"12345678")
})

module.exports = {
    HeaderScheme
};
