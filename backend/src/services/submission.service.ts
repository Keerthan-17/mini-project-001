import prisma from "../config/prisma.js";

type CreateSubmissionInput = {
  fullName: string;
  phone: string;
  address: string;
  message: string;
};

export async function createSubmission(
  userId: number,
  data: CreateSubmissionInput,
) {
  const submission = await prisma.formSubmission.create({
    data: {
      userId,
      fullName: data.fullName,
      phone: data.phone,
      address: data.address,
      message: data.message,
    },
  });

  return submission;
}

export async function getUserSubmissions(userId: number) {
  const submissions = await prisma.formSubmission.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return submissions;
}

export async function getAllSubmissions(page: number, limit: number) {
  const skip = (page - 1) * limit;

  const [submissions, total] = await Promise.all([
    prisma.formSubmission.findMany({
      skip,
      take: limit,

      orderBy: {
        createdAt: "desc",
      },

      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    }),

    prisma.formSubmission.count(),
  ]);

  const totalPages = Math.ceil(total / limit);

  return {
    submissions,
    pagination: {
      page,
      limit,
      total,
      totalPages,
    },
  };
}
