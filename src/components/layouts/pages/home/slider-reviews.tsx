"use client"

import Slider from "react-infinite-logo-slider"

const reviews = [
  {
    id: 1,
    name: "John D.",
    review: "Too much science to ignore!",
  },
    {
      id: 2,
      name: "Jane D.",
      review: "\"I  feel like I have gotten younger\"",
    },
    {
      id: 3,
      name: "John D.",
      review: "\"I can tell a huge difference\"",
    },
    {
      id: 4,
      name: "John D.",
      review: "\"I can tell a huge difference\"",
    },
]
  

export const SliderReviews = () => {
	return (
		<Slider
		 width="500px"
      duration={15}
      pauseOnHover={true}
      blurBorders={true}>
     {reviews.map((review) => (
      <Slider.Slide key={review.id}>
        <div className="flex items-center justify-center gap-2 text-xl font-bold uppercase bg-background">
          <h3 className="text-gray-500">{review.name}</h3>
          <p className="text-lg text-center text-gray-900">{review.review}</p>
        </div>
      </Slider.Slide>
     ))}
		</Slider>
	)
}