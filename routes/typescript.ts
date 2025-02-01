import { Request,Response,Router } from "express";
import { typescript_type,typescript_interface } from "../controller/typescript_example1";



const router = Router();
router.get('/example1',typescript_type);
router.get('/example2',typescript_interface);
export default router;