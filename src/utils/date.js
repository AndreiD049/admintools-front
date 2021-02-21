export default {
  getHoursFromText(text) {
    const [hours, minutes, seconds] = text.split(':').map((t) => +t);
    return {
      h: hours,
      m: minutes,
      s: seconds ?? 0,
    };
  },

  combineDateHours(date, hours) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours.h, hours.m, hours.s);
  },
};
