/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
  // All your code here
  let ft = toUTC(fromTime);
  let tof = toUTC(takeOffTime);

  let diff = Math.floor((tof - ft) / 1000);
  // console.log(diff)

  return diff;
};

function toUTC(elfTime) {
  return new Date(
    String(elfTime)
      .replaceAll("*", "-")
      .replaceAll("@", "T")
      .replaceAll("|", ":")
      .replace("NP", "z")
      .replace(" ", "")
  );
}

const takeoff = '2025*12*25@00|00|00 NP'

// from December 24, 2025, 23:59:30, 30 seconds before takeoff
timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff)
// 30

// exactly at takeoff time
timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff)
// 0

// 12 seconds after takeoff
timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff)
// -12