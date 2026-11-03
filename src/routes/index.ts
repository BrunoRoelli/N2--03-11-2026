import { Router } from "express";
import productRoutes from "./product.route";
import customerRoutes from "./customer.route";
import orderRoutes from "./order.route";

const router = Router();

router.use("/products", productRoutes);
router.use("/customers", customerRoutes);
router.use("/orders", orderRoutes);

export default router;