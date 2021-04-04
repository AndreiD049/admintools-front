import { DateTime } from 'luxon';

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

  /**
   * Given a Time, return the nearest time rounded to 10 minutes
   * Ex: 10:59 -> 11:00
   *     11:12 -> 11:10
   * @param {Date} date
   * @returns Date
   */
  getNearestTimeUTC(date) {
    const dt = DateTime.fromJSDate(date).toUTC();
    const minutes = Math.ceil(dt.minute / 10) * 10;
    return dt.set({ minute: minutes });
  },

  getTimeText(date) {
    return DateTime.fromJSDate(date).toUTC().toFormat('HH:mm');
  },

  /**
   * Receives a text string of form hh:mm and checks if it's valid
   * @param {String} string
   * @param {Date} baseDate
   * @returns {Date} the adjusted valid utc date, with time set
   */
  getValidTimeStringUTC(string, baseDate = null) {
    const pattern = /\d{2}:\d{2}/;
    const dt = baseDate ? DateTime.fromJSDate(baseDate) : DateTime.now();
    if (!pattern.test(string)) {
      return dt.toUTC().set({
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
      }).toISO();
    }
    // Split and convert to numbers, regex passed so this shouldn't give any issues
    let [hour, minute] = string.split(':');
    // Check if hour is valid
    if (+hour < 0 || +hour > 23) {
      const temp = hour;
      hour = hour.slice(0, 1);
      minute = `${temp.slice(1)}${minute}`.slice(0, 2);
    }
    // Check if minutes are valid
    if (+minute < 0 || +minute > 59) {
      minute = `0${minute}`.slice(0, 2);
    }
    // return the validated date as utc iso string
    return dt.toUTC().set({
      hour,
      minute,
      second: 0,
      millisecond: 0,
    }).toISO();
  },

  /**
   * Given start time and duration, return end time in format hh:mm
   * @param {Date} startTime
   * @param {Number} duration
   */
  getEndTimeTextUTC(startTime, duration) {
    return DateTime.fromJSDate(startTime).plus({
      minute: duration,
    }).toUTC().toFormat('HH:mm');
  },

  /**
   * Transform the date to UTC, keeping the same time
   * Example: i have 2021-01-01 10:10 UTC+03:00
   * I want to return 2021-01-01 10:10 UTC+00:00
   * @param {Date} date
   * @returns {Date} the transformed date
   */
  transform2UTCDate(date) {
    const exp = DateTime.fromJSDate(date);
    return DateTime.utc(exp.year, exp.month, exp.day, exp.hour, exp.minute, 0, 0).toJSDate();
  },

  /**
   * Get's date @from and assigns is to @to
   * @param {Date} from
   * @param {Date} to
   */
  setDateFromTo(from, to) {
    const fromDT = DateTime.fromJSDate(from);
    const toDT = DateTime.fromJSDate(to);
    return toDT.set({
      year: fromDT.year,
      month: fromDT.month,
      day: fromDT.day,
    }).toJSDate();
  },
};
