import React from "react";
import { notFound, redirect } from "next/navigation";

const Page = async ({
  params,
}: {
  params: { productsId: string; reviewId: string };
}) => {
  const { productsId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    // notFound();
    redirect("/products")
  }
  return (
    <h1>
      Review {reviewId} for product {productsId}
    </h1>
  );
};

export default Page;
