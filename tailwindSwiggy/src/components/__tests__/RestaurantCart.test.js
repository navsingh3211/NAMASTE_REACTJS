import RestaurantCard from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import restroList from "../MockData/mockdataArr";
import "@testing-library/jest-dom"; //it provide browser like environment

test("should render resturantCard component with props data", () => {
  render(<RestaurantCard resData={restroList} />);

  const cardData = screen.getByText("Azad Hind Dhaba");
  //screen.debug()
  expect(cardData).toBeInTheDocument();
});
