import { IMAGE_CDN } from "../utils/constants";
const RestaurantCard = ({ rest }) => {
  const { name, cloudinaryImageId } = rest.info;
  return (
    <li className=" m-1 w-[192px] cursor-pointer rounded-xl border-2 border-transparent hover:border-slate-400">
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
export default RestaurantCard;
