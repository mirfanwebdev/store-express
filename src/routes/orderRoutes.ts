import { Router } from "express";
import { getOrderList } from "../controllers/orderController";

const router = Router();

router.get("/", getOrderList);

export default router;