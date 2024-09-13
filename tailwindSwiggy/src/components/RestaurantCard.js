const RestaurantCard = (props) => {
    const {resData} = props;
      // console.log(resData,'resData');
    const {logo,resName,cuisine,stars,deleveryTime} = resData;
    return (
      <div className="res-card p-1.5 m-1.5 w-[200px] h-[380px] bg-slate-50 hover:bg-slate-200 rounded-lg">
        <img
          className="res-logo max-w-full max-h-full rounded-lg"
          alt="res-logo"
          src={logo}
        />
        <h3 className="font-bold py-2 text-lg">{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>{stars}</h4>
        <h4>{deleveryTime}</h4>
      </div>
    );
};

export default RestaurantCard;