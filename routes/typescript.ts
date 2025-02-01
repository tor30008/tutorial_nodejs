import { Request,Response,Router } from "express";
import { typescript_type,typescript_interface,typescript_interface_optional} from "../controller/typescript_example";
import { typescript_interface_readonly , typescript_interface_inheritance  } from "../controller/typescript_example";



const router = Router();
router.get('/example1',typescript_type);
router.get('/example2',typescript_interface);
router.get('/example3',typescript_interface_optional);
router.get('/example4',typescript_interface_readonly);
router.get('/example5',typescript_interface_inheritance);
export default router;