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

  makeUTC(date) {
    if (Number.isNaN(+new Date(date)) || date === null) return null;
    return new Date(Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ));
  },

  getNearestTime(date) {
    return `${(`0${date.getHours()}`).slice(-2)}:${(`0${Math.round(date.getMinutes() / 10) * 10}`).slice(-2)}`;
  },
};
