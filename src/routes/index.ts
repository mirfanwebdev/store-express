import { Router } from "express";
import productRoutes from "./productRoutes";
import orderRoutes from "./orderRoutes";

const router = Router();

router.use("/products", productRoutes);
router.use("/orders", orderRoutes);

export default router;