import { Router } from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
// Import other routes as they are created
// import branchRoutes from './branch.routes';
// import customerRoutes from './customer.routes';
// import loanRoutes from './loan.routes';
// etc.

const router = Router();

// Mount routes
router.use("/auth", authRoutes);
router.use("/users", userRoutes);

// Mount other routes as they are created
// router.use('/branches', branchRoutes);
// router.use('/customers', customerRoutes);
// router.use('/loans', loanRoutes);
// router.use('/loan-types', loanTypeRoutes);
// router.use('/repayments', repaymentRoutes);
// router.use('/schedule-items', scheduleItemRoutes);
// router.use('/documents', documentRoutes);
// router.use('/assignments', assignmentRoutes);
// router.use('/audit-logs', auditLogRoutes);

export default router;
