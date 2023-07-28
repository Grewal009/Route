import { IMAGE_CDN } from "../utils/constants";
const RestaurantCard = ({ rest, id }) => {
  const { name, cloudinaryImageId } = rest.info;
  return (
    <li className=" m-1 w-[192px] cursor-pointer rounded-xl border-2 border-transparent bg-slate-100 hover:border-slate-400">
      <img
        src={IMAGE_CDN + cloudinaryImageId}
        className="m-1 flex h-28 w-[180px] justify-center rounded-lg"
      />
      <div className="-mt-1 mb-2 px-2 text-slate-700">
        <h1 className="text-sm font-semibold leading-4">{name}</h1>
      </div>
    </li>
  );
};

export const withDiscountedInfo = (RestaurantCard) => {
  return (props) => {
    //console.log(props.rest.info.aggregatedDiscountInfoV3);
    const { header, subHeader, discountTag } =
      props.rest.info.aggregatedDiscountInfoV3;
    return (
      <div>
        <label className="absolute mx-[10px] my-[6px] rounded-md bg-slate-700  px-2 font-serif text-xs font-medium  text-white ">
          {header} {subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
