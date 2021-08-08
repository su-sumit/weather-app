const dateFormatOptions = {
  weekday: "short",
  month: "short",
  day: "numeric",
};

export function normalizeData(data) {
  data.sort((t1, t2) => t1.dt - t2.dt);
  const normalized = {};

  data.forEach((weatherSlot) => {
    const {
      dt_txt,
      main: { temp },
      dt,
    } = weatherSlot;
    const date = new Date(dt_txt);
    const key = dt_txt.split(" ")[0];
    if (!(key in normalized)) {
      normalized[key] = {
        avgTemp: { c: 0, f: 0 },
        date: date.toLocaleDateString("en-US", dateFormatOptions),
        weatherSlots: [],
      };
    }
    const slotTemp = {
      key: dt,
      c: temp,
      f: Math.round(temp * (9 / 5) + 32),
      time: date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const prevLen = normalized[key].weatherSlots.length;
    normalized[key].weatherSlots.push(slotTemp);
    const newAvgC = normalized[key].avgTemp.c * prevLen + slotTemp.c;
    const newAvgF = normalized[key].avgTemp.f * prevLen + slotTemp.f;

    normalized[key].avgTemp.c = Math.round(
      newAvgC / normalized[key].weatherSlots.length
    );
    normalized[key].avgTemp.f = Math.round(
      newAvgF / normalized[key].weatherSlots.length
    );
  });
  return Object.values(normalized);
}
