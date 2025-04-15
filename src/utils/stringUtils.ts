export const stringUtils = {
  thousandSeparator(value: number): string {
    if (!value || value <= 0) {
      return '0';
    }
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  },

  replaceChar(value: string, searchBy: string, replaceBy: string): string {
    if (!value) {
      return '';
    }
    return value.split(searchBy).join(replaceBy);
  },
};
