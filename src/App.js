import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ThemeContext } from "./themeContext";
import { useLocalStorage, getData } from "./useLocalStorage";
import Left from "./components/left";
import Nav from "./components/nav";
import { List } from "./components/list";
import { getWeight } from "./helpers";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const bodyClass = `${darkMode ? "dark" : "light"}`;

  const [items, setItems] = useLocalStorage("items", []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = function (data) {
    const submittedItem = data;
    submittedItem.id = Date.now(); // set Unique ID
    submittedItem.weight = getWeight(submittedItem.tag);
    submittedItem.complete = false;
    let items = getData("items", []);
    items.push(submittedItem);
    setItems(items);
    reset();
  };

  var today = new Date();
  const defaultDate = today.toISOString().substring(0, 10);
  return (
    <>
      <div className={bodyClass}>
        <header>
          <Nav />
        </header>
        <main>
          <div className="flex">
            <div className="">
              <Left />
            </div>
            <div className="flex flex-col w-1/3 h-screen py-8 ">
              <List items={items} />
            </div>
            <div className="flex flex-col w-1/3 h-screen py-8 ">
              <div className="flex flex-col flex-wrap sm:flex-row ">
                <div className="w-full ">
                  <div className="mb-4 mx-0 sm:ml-4 xl:mr-4">
                    <div className="shadow-lg bg-white dark:bg-gray-700 w-full p-4">
                      <p className="font-bold text-md p-4 text-black dark:text-white">
                        Add an item
                        <span className="text-sm text-gray-500 dark:text-gray-300 dark:text-white ml-2">
                          (+)
                        </span>
                      </p>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <ul>
                          <li className="flex flex-wrap items-center text-gray-800 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                            <input
                              placeholder="Take a break..."
                              {...register("name")}
                              className="form-input p-2 text-gray-700 bg-gray-200 dark:bg-gray-800 dark:text-gray-200"
                            />
                          </li>
                          <li className="flex flex-wrap items-center text-gray-800 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                            <input
                              type="date"
                              {...register("date", {
                                valueAsDate: false,
                                value: defaultDate,
                              })}
                              className="form-input p-2 text-gray-700 bg-gray-200 dark:bg-gray-800 dark:text-gray-200"
                            />
                          </li>
                          <li className="flex flex-wrap items-center text-gray-800 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                            <select
                              {...register("tag", { required: true })}
                              className="form-input p-2 text-gray-700 bg-gray-200 dark:bg-gray-800 dark:text-gray-200"
                            >
                              <option value="">Select Tag</option>
                              <option value="mind">Mind</option>
                              <option value="body">Body</option>
                              <option value="finance">Finance</option>
                            </select>
                            {errors.tag && <span>This field is required</span>}
                          </li>
                          <li>
                            <input
                              type="submit"
                              value="Add"
                              className="bg-green-700 text-gray-100 dark:text-gray-600 dark:bg-green-200 p-2"
                            />
                          </li>
                        </ul>
                      </form>
                    </div>
                    <div className="mb-4 sm:ml-4 xl:mr-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
