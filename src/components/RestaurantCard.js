import { IMAGE_CDN } from "../utils/constants";
const RestaurantCard = ({ rest }) => {
  const { name, cloudinaryImageId } = rest.info;
  return (
    <li className=" m-2 w-52 border-2 border-transparent hover:border-slate-400">
      <img
        src={IMAGE_CDN + cloudinaryImageId}
        className="m-2 flex h-28 w-[188px] justify-center"
      />
      <div className="-mt-2 px-2">
        <h1>{name}</h1>
      </div>
    </li>
  );
};
export default RestaurantCard;
