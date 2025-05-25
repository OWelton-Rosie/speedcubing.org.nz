 const eventOrder = [
    "333",
    "222",
    "444",
    "555",
    "666",
    "777",
    "333bf",
    "333fm",
    "333oh",
    "clock",
    "minx",
    "pyram",
    "skewb",
    "sq1",
    "444bf",
    "555bf",
    "333mbf",
  ];

function dateToShort(dateString) {
  // param: yyyy-mm-dd
  return new Date(dateString).toLocaleDateString("en-US", {
    timeZone: "Pacific/Auckland",
    day: "numeric",
    month: "short", // Abbreviated month (e.g., "Feb")
  });
}

function getRegDate(comp){
  const dateDisplayOptions = [
    "en-US",
    {
      month: "short", // "May"
      day: "numeric", // "12"
      hour: "numeric", // "6"
      minute: "numeric", // "00"
      hour12: true, // Use 12-hour clock with AM/PM
    },
  ];
  const now = Date.now();
  const regOpens = new Date(comp.registration.open);
  const regCloses = new Date(comp.registration.close);
  return regCloses < now
      ? `Registration is closed`
      : regOpens <= now
        ? `Register now until ${regCloses.toLocaleDateString(
            ...dateDisplayOptions
          )}`
        : `Registration opens ${regOpens.toLocaleDateString(
            ...dateDisplayOptions
          )}`;
    
}

export { dateToShort, eventOrder, getRegDate }