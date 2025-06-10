import{Router} from 'express';
import AlunoController from '../controllers/AlunoController.js';

const router  = Router();
//cria uma nova instancia do Router

router.get("/", AlunoController.getAlunos);
router.post("/",  AlunoController.createAluno);
router.post("/:id/edit", AlunoController.editAluno);
router.post("/:id", AlunoController.deleteAluno);

export default router;