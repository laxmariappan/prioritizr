import { useLocalStorage, getData } from "../useLocalStorage";
import { getTag } from "../helpers";
export default function Item({ item, index, callBack }) {
  const completedClass = item.complete
    ? "line-through text-gray-400 text-xl"
    : "text-xl";
  const completedBtn = item.complete ? "text-green-500 mx-4" : " mx-4";
  const tagClass = getTag(item);
  const [items, setItems] = useLocalStorage("items", []);
  const setComplete = (item) => {
    let items = getData("items", []);
    var currentItem = items.find((currentItem) => currentItem.id === item.id);
    if (item.complete) {
      currentItem.complete = false;
      item.complete = false;
    } else {
      currentItem.complete = true;
      item.complete = true;
    }
    setItems(items);
  };
  return (
    <>
      <li className="flex flex-wrap items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
        <div className=" items-center justify-start text-sm">
          <span className="mx-4">{index + 1}</span>
          <span className={tagClass}>{item.tag}</span>
          <span className={completedClass}>{item.name}</span>
        </div>
        <div>
          <button onClick={() => setComplete(item)}>
            <svg
              width={20}
              height={20}
              fill="currentColor"
              className={completedBtn}
              viewBox="0 0 1024 1024"
            >
              <path
                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </li>
    </>
  );
}
