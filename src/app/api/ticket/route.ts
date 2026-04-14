import axios, { isAxiosError } from "axios";

type RequestType = {
  subject: string;
  category: string;
  description: string;
};

export interface ErrorResponse<T> {
  success: boolean;
  message: string;
  data: T;
  metadata: any;
}

export async function POST(request: Request) {
  const body: RequestType = await request.json();

  if (!body) {
    return Response.json({
      message: "An unknown error occurred. Please try again later.",
    });
  }

  if (!body.subject || body.subject.length <= 0) {
    return Response.json(
      {
        message: "Subject is required",
      },
      {
        status: 400,
      },
    );
  }

  if (!body.category || body.category.length <= 0) {
    return Response.json(
      {
        message: "Category is required",
      },
      {
        status: 400,
      },
    );
  }

  if (!body.description || body.description.length <= 0) {
    return Response.json(
      {
        message: "Description is required",
      },
      {
        status: 400,
      },
    );
  }

  const validCategoryTypes: string[] = [
    "general inquiry",
    "technical support",
    "billing issue",
    "feature request",
    "bug report",
    "other",
  ];

  if (!validCategoryTypes.includes(body.category.toLowerCase())) {
    return Response.json(
      {
        message: "Please provide a valid category.",
      },
      {
        status: 400,
      },
    );
  }

  try {
    await axios.post(`${process.env.API_URL}/support/ticket`, body);

    return Response.json({
      message: "Message sent successfully. We will be contacting you soon!",
    });
  } catch (err) {
    if (isAxiosError<ErrorResponse<any>>(err)) {
      return Response.json(
        {
          message:
            err.response?.data.message ||
            "An unknown error occurred. Please try again later.",
        },
        { status: 400 },
      );
    } else {
      return Response.json(
        {
          message: "An unknown error occurred. Please try again later.",
        },
        { status: 400 },
      );
    }
  }
}
