import Item from "./item";
import { Fragment } from "react";

export function List({ items }) {


  const pendingItems = items.filter((item) => item.complete === false).length;
  return (
    <>
      <div className="flex flex-col flex-wrap sm:flex-row ">
        <div className="w-full ">
          <div className="mb-4 mx-0 sm:ml-4 xl:mr-4">
            <div className="shadow-lg bg-white dark:bg-gray-700 w-full">
              <p className="font-bold text-md p-4 text-black dark:text-white">
                My Tasks
                <span className="text-sm text-gray-500 dark:text-gray-300 dark:text-white ml-2">
                  ({pendingItems} / {items?.length})
                </span>
              </p>
              <ul>
                {items?.map(function (item, index) {
                  return (
                    <Fragment key={index}>
                      <Item item={item} index={index}  />
                    </Fragment>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="mb-4 sm:ml-4 xl:mr-4"></div>
        </div>
      </div>
    </>
  );
}
