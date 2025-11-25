import express from "express";
import dotenv from "dotenv";
import perfumeRoutes from "./routes/perfumeRoutes.js";
import brandRoutes from "./routes/brandRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => res.json({ ok: true, msg: "Scentify API" }));

app.use("/api/perfumes", perfumeRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/reviews", reviewRoutes);

// basic error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Server error" });
});

app.listen(PORT, () => {
    console.log(`Scentify API running on port ${PORT}`);
});