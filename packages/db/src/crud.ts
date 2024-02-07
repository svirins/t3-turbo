import { prisma, Prisma } from "./client";

export const getGroupIds = async (): Promise<{ id: string }[] | null> => {
  try {
    const groupIds = await prisma.group.findMany({
      select: {
        id: true,
      },
    });
    return groupIds;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error(`DB error: ${JSON.stringify(e)}`);
    } else {
      console.error(`Unknown DB error: `, e);
    }
    return null;
  }
};

export const getGroupById = async (id: string) => {
  try {
    const group = await prisma.group.findUnique({
      where: {
        id: id,
      },
      include: {
        address: {
          include: {
            location: true,
          },
        },
        days: {
          include: {
            meetings: true,
          },
        },
      },
    });
    return group;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error(`DB error: ${JSON.stringify(e)}`);
    } else {
      console.error(`Unknown DB error: `, e);
    }
    return null;
  }
};
