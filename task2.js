function getInterval(arr, from, to) {
  if (typeof from === "number" && typeof to === "number") {
    return arr.filter((elem) => {
      if (typeof elem !== "number") {
        throw new Error(
          "В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения"
        );
      }
      if (from < to) {
        if (elem >= from && elem <= to) {
          return true;
        }
      } else {
        if (elem >= from && elem <= to) {
          return true;
        }
      }
    });
  } else {
    if (!typeof from === "number") {
      throw new Error(
        "В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом"
      );
    }
    if (!typeof to === "number") {
      throw new Error(
        "В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом"
      );
    }
  }
}
