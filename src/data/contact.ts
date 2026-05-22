export const WHATSAPP_NUMBER = "27646064363";
export const PHONE_DISPLAY = "064 606 4363";
export const PHONE_TEL = "0646064363";
export const EMAIL = "harrybigboy81@gmail.com";

export const ADDRESS_LINE_1 = "114 Sefako Makgatho Drive";
export const ADDRESS_LINE_2 = "Sinoville, Montana";
export const ADDRESS_LINE_3 = "Pretoria";
export const ADDRESS_FULL = `${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}, ${ADDRESS_LINE_3}`;

export const HOURS = [
  { day: "Monday – Friday", time: "08:00 – 17:00" },
  { day: "Saturday", time: "08:00 – 13:00" },
  { day: "Sunday & Public Holidays", time: "Closed" },
];

export const waLink = (message?: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};

export const MAPS_DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=114+Sefako+Makgatho+Drive+Sinoville+Pretoria";
