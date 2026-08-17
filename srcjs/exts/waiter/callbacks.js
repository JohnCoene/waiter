/**
 * Callback function to set the waiter input on shown.
 * @function
 * @param  {string} id - Id of element to show.
 */
export const setWaiterShownInput = (id) => {
  let input = "waiter_shown";
  if (id !== null) input = id + "_" + input;

  const e = new CustomEvent("waiter:show", {
    detail: {
      id: id,
    }
  })

  if(id != null) {
    const el = document.querySelector(id);
    el.dispatchEvent(e);
  } else {
    document.dispatchEvent(e);
  }

  Shiny.setInputValue(input, true, { priority: "event" });
};
/**
 * Callback function to set the waiter input on hidden.
 * @function
 * @param  {string} id - Id of element to show.
 */
export const setWaiterHiddenInput = (id) => {
  let input = "waiter_hidden";
  if (id !== null) input = id + "_" + input;

  const e = new CustomEvent("waiter:hide", {
    detail: {
      id: id,
    }
  })

  if(id != null) {
    const el = document.querySelector(id);
    el.dispatchEvent(e);
  } else {
    document.dispatchEvent(e);
  }

  Shiny.setInputValue(input, true, { priority: "event" });
};
