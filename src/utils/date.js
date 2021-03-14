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

  // Return an array containing all days from the same week as date
  // By default first day is monday
  getWeekFromDate(date, firstDay = 1) {
    const result = [];
    // Get first day of the week, take into account firstDay parameter
    const firstDayUTC = this.makeUTCDateOnly(date);
    let day = firstDayUTC.getDay();
    if (day === 0 && firstDay === 1) day = 7;
    firstDayUTC.setDate(firstDayUTC.getDate() - day + firstDay);
    for (let i = 0; i < 7; i += 1) {
      const dt = new Date(firstDayUTC);
      dt.setDate(dt.getDate() + i);
      result.push(dt);
    }
    return result;
  },

  makeUTCDateOnly(date) {
    if (Number.isNaN(+new Date(date)) || date === null) return null;
    return new Date(Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      0,
      0,
      0,
    ));
  },

  getNearestTime(date) {
    return `${(`0${date.getHours()}`).slice(-2)}:${(`0${Math.round(date.getMinutes() / 10) * 10}`).slice(-2)}`;
  },
};
