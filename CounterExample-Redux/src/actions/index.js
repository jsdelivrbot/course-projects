export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";

export function increaseCount() {
  console.log("increase count action");
  return {
      type: INCREASE_COUNT
  };
}

export function decreaseCount() {
  console.log("decrease count action");
  return {
    type: DECREASE_COUNT
  };
}
