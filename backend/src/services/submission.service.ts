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
