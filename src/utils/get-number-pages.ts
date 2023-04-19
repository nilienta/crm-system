const HEIGHT_HEAD = 74;
const HEIGHT_TABLE_CAPTION = 48;
const HEIGHT_THEAD = 54;
const HEIGHT_PAGINATION = 30;
const HEIGHT_MARGIN = 12;

const HEIGHT_CARD_CONTACT = 78;

const solvePageSize = Math.floor(
  (document.documentElement.clientHeight -
    HEIGHT_HEAD -
    HEIGHT_TABLE_CAPTION -
    HEIGHT_THEAD -
    HEIGHT_PAGINATION -
    HEIGHT_MARGIN * 3) /
    (HEIGHT_CARD_CONTACT + HEIGHT_MARGIN)
);
export const pageSize = solvePageSize > 0 ? solvePageSize : 1;
