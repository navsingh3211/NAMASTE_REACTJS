const ItemList = ({ items }) => {
//   console.log(items, "item is want");
  return (
    <div>
        {items.map((item,index) => (
             <div key={index}>
                 <div>
                     <span>{item.name}</span>
                     <span>{item.cost}</span>
                 </div>
                 <p>{item.Description}</p>
             </div>
        ))}
    
    </div>
  );
};

export default ItemList;
