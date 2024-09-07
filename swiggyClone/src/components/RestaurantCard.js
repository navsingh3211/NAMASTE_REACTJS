const RestaurantCard = (props) => {
    const {resData} = props;
      // console.log(resData,'resData');
    const {logo,resName,cuisine,stars,deleveryTime} = resData;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={logo}
        />
        <h3>{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>{stars}</h4>
        <h4>{deleveryTime}</h4>
      </div>
    );
};

export default RestaurantCard;