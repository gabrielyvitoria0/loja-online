
require("dotenv").config()


const express = require("express")
const cors = require("cors")
const stripe = require("stripe")(
    process.env.STRIPE_SECRET_KET
)


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("public"))


app.post("/checkout", async (req, res) => {
    const { produto, preco } = req.body
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                    currency: "brl",
                    product_data: {
                        name: produto
                    },
                    unit_amount: preco
                },
                quantity: 1
            }
        ],
        mode: "payment",
        success_url: "http://localhost:3000/sucesso.html",
        cancel_url: "http://localhost:3000/cancelado.html"
    })
    res.json({
        id: session.id
    })
})


app.listen(3000, () => {
    console.log("Servidor rodando")
})
