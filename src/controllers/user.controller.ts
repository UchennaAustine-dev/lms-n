import type { Request, Response, NextFunction } from "express";
import { UserService } from "../service/user.service.js";
import { ApiResponseUtil } from "../utils/apiResponse.util.js";

export class UserController {
  static async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserService.createUser(req.body, req.user!.role);

      return ApiResponseUtil.success(res, null, "User deleted successfully");
    } catch (error: any) {
      next(error);
    }
  }

  static async resetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { newPassword } = req.body;

      await UserService.resetUserPassword(req.params.id, newPassword);

      return ApiResponseUtil.success(res, null, "Password reset successfully");
    } catch (error: any) {
      next(error);
    }
  }
}
