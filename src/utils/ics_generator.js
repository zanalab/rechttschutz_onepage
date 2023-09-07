import * as ics from 'ics';

export function generateICS({ start, duration, title, description }) {
  return new Promise((resolve, reject) => {
    const event = {
      start: start,
      duration: duration,
      title: title,
      description: description,
      // You can add other properties if needed
    };

    ics.createEvent(event, (error, value) => {
      if (error) {
        reject(error);
      } else {
        resolve(value);
      }
    });
  });
}
