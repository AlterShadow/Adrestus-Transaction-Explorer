import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Icon } from "@iconify/react";
import TitleItem from "../TitleItem";

const AddressItem = ({ title, value }) => {
  return (
    <>
      <tr>
        <TitleItem title={title} />
        <td className="text-left bg-transparent py-4 px-2 w-2/3 border-b-[1px] dark:border-darkColorSeparator border-colorSeparator">
          <div className="max-w-[700px] items-baseline flex flex-row w-full">
            <div className="flex flex-row items-center gap-[5px]">
              <CopyToClipboard text={value}>
                <Icon
                  icon="mingcute:copy-3-line"
                  rotate={3}
                  width={14}
                  height={14}
                  className="text-primary dark:text-darkViewColor mb-1 cursor-pointer"
                />
              </CopyToClipboard>
              <Link to={`/address/${value}`}>
                <span className="text-[14px] text-primary dark:text-[#69FABD] leading-[20px] text-ellipsis max-w-[700px] w-full whitespace-nowrap overflow-hidden inline-block">
                  {value}
                </span>
              </Link>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default AddressItem;
