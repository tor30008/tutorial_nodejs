import { Request,Response,Router } from "express";
import { typescript_type,typescript_interface,typescript_interface_optional} from "../controller/typescript_interface";
import { typescript_interface_readonly , typescript_interface_inheritance  } from "../controller/typescript_interface";

import { typescript_basic_type, typescript_type_symbol } from "../controller/typescript_types";



const router = Router();
router.get('/example1',typescript_type);
router.get('/example2',typescript_interface);
router.get('/example3',typescript_interface_optional);
router.get('/example4',typescript_interface_readonly);
router.get('/example5',typescript_interface_inheritance);

router.get('/example6',typescript_basic_type);
router.get('/example7',typescript_type_symbol);
export default router;