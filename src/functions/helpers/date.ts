export const calculateYearDifference = (date: Date): number => {
    const now = new Date();
  
    if (date > now) {
      return 0;
    }
  
    const yearDifference = now.getFullYear() - date.getFullYear();
  
    const isBeforeThisYear =
      now.getMonth() < date.getMonth() ||
      (now.getMonth() === date.getMonth() && now.getDate() < date.getDate());
  
    return isBeforeThisYear ? yearDifference - 1 : yearDifference;
  };