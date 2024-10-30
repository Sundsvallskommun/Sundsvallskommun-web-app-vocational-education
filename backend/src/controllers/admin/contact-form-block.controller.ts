import prisma from '@/utils/prisma';
import { UserRoleEnum } from '@prisma/client';
import { defaultHandler } from 'ra-data-simple-prisma';
import { All, Controller, Req, UseBefore } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { checkPageRoles, hasRolesForMethods } from './utils';

@Controller()
export class AdminContactFormBlockController {
  @All('/admin/contactFormBlock')
  @OpenAPI({ summary: 'Handle ContactFormBlock' })
  @UseBefore(hasRolesForMethods([UserRoleEnum.ADMIN], ['delete', 'create']), checkPageRoles())
  async contactFormBlock(@Req() req): Promise<any> {
    switch (req.body.method) {
      case 'deleteMany':
        // Dont allow these
        return;
      default:
        return await defaultHandler(req.body, prisma);
    }
  }
}
