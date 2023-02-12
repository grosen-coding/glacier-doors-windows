import React from "react";
import Image from "next/image";
import { reviews } from "@/data/reviews";

const ReviewsSection = () => {
  return (
    <section>
      <h2>EcoTech Windows & Doors Reviews</h2>
      <div>
        <ul>
          {reviews.map((review, i) => (
            <li key={i}>
              <div>
                <div>
                  <div>
                    <Image src={review.image} alt="" />
                    <div>
                      <h6>{review.name}</h6>
                      <span>{review.date}</span>
                    </div>
                    <i>Icon</i>
                  </div>
                </div>

                <div>Rating: {review.rating}</div>
                <p>{review.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ReviewsSection;
