/**
 *
 * @see https://stackoverflow.com/a/979325/6877482
 */
 export const sort_by = (field, reverse, primer) => {
  const key = primer
    ? function (x) {
        return primer(x[field]);
      }
    : function (x) {
        return x[field];
      };

  reverse = !reverse ? 1 : -1;

  return function (a, b) {
    return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
  };
};

export const getWeight = (tag) => {
  let weight;
  switch (tag) {
    case "mind":
      weight = 200;
      break;
    case "body":
      weight = 180;
      break;
    case "finance":
      weight = 150;
      break;
    default:
      weight = 100;
      break;
  }
  return weight;
};

export const getTag = (item) => {
  let pill;
  switch (item.tag) {
    case "mind":
      pill = "bg-green-400";
      break;
    case "body":
      pill = "bg-yellow-400";
      break;
    case "finance":
      pill = "bg-blue-400";
      break;
    default:
      pill = "bg-green-400";
      break;
  }
  const complete = item.complete ? " opacity-50" : "";
  const tagclass = `${pill} ${complete} p-1 text-white text-sm rounded mr-2`;
  return tagclass;
};
