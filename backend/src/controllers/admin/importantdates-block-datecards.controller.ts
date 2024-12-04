import prisma from '@/utils/prisma';
import { Prisma } from '@prisma/client';
import { createHandler, defaultHandler, updateHandler } from 'ra-data-simple-prisma';
import { All, Controller, Req, UseBefore } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { checkPageRoles } from './utils';

@Controller()
export class AdminImportantDatesBlockDateCardsController {
  @All('/admin/importantDatesBlockDateCards')
  @OpenAPI({ summary: 'Handle ImportantDatesBlockDateCards' })
  @UseBefore(checkPageRoles())
  async importantDatesBlockDateCards(@Req() req): Promise<any> {
    switch (req.body.method) {
      case 'create':
        return await createHandler<Prisma.ImportantDatesBlockDateCardsCreateArgs>(req.body, prisma.importantDatesBlockDateCards, {
          connect: { importantDatesBlock: 'id' },
        });
      case 'update':
        return await updateHandler<Prisma.ImportantDatesBlockDateCardsUpdateArgs>(req.body, prisma.importantDatesBlockDateCards, {
          skipFields: {
            id: true,
            blockId: true,
            pageName: true,
            importantDatesBlock: true,
          },
        });
      default:
        return await defaultHandler(req.body, prisma);
    }
  }
}
