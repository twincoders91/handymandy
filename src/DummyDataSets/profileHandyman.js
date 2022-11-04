import defaultavatar from "../Assets/profile/defaultavatar.jpeg";

const handymanData = [
  {
    first_name: "Plumber",
    last_name: "Jack",
    email: "plumberjack@ga.com",
    business_name: "Plumber Jack pte ltd",
    specialities: [
      { speciality: "Painting", icon: "painting.svg" },
      { speciality: "Plumbing", icon: "plumbing.svg" },
    ],
    number_of_years: {
      years: "XX years",
      icon: "time.svg",
    },
    number_of_jobs: {
      jobs: 82,
      icon: "trophy.svg",
    },
    number_of_reviews: {
      reviews: 4,
      icon: "reviews.svg",
    },
    reviews_score: [4, 3, 3, 3],
    reviews: [
      {
        name: "Khloe",
        message:
          "very efficient very efficient very efficient very efficient very efficient very efficient very efficient very efficient very efficient very efficient lah very efficient lah very efficient lah ",
        score: 4,
        icon: "defaultavatar.jpeg",
      },
      {
        name: "Khloe2",
        message: "very efficient lah2",
        score: 3,
        icon: "defaultavatar.jpeg",
      },
      {
        name: "Khloe2",
        message: "very efficient lah2",
        score: 3,
        icon: "defaultavatar.jpeg",
      },
      {
        name: "Khloe2",
        message: "very efficient lah2",
        score: 3,
        icon: "defaultavatar.jpeg",
      },
    ],
    about:
      "At Plumber Jack, we work with clients closely to provide the best repair services, with no hidden costs.",
    profile_image: "defaultavatar.jpeg",
  },
];

export default handymanData;
