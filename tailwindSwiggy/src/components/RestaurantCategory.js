import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  console.log(data, "datanfienf");
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 text-center">
        {/* Header */}
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.cardItems.length})
          </span>
          <span className="w-50 font-bold">▼</span>
        </div>
        {/* accordians body */}
        <ItemList items={data.cardItems} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
