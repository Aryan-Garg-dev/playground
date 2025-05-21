import { baseURL } from "@/mail-service/constants";

export interface RelativeTimeOptions {
  short: boolean, locale: Intl.LocalesArgument
}

const defaultRelativeTimeOptions: RelativeTimeOptions = {
  short: false,
  locale: "en"
}

export function relativeTime(
  date: Date = new Date(),
  options: Partial<RelativeTimeOptions> = {}
): string {
  const { short, locale } = { ...defaultRelativeTimeOptions, ...options };
  const rtf = new Intl.RelativeTimeFormat(locale, {
    numeric: 'auto',
    style: short ? "short" : "long",
  });
  const seconds = Math.floor((date.getTime() - Date.now()) / 1000);

  const divisions: { amount: number, unit: Intl.RelativeTimeFormatUnit }[] = [
    { amount: 60, unit: 'second' },
    { amount: 60, unit: 'minute' },
    { amount: 24, unit: 'hour' },
    { amount: 7, unit: 'day' },
    { amount: 4.34524, unit: 'week' },
    { amount: 12, unit: 'month' },
    { amount: Infinity, unit: 'year' },
  ];

  let duration = seconds;
  for (const { amount, unit } of divisions) {
    if (Math.abs(duration) < amount) {
      return rtf.format(Math.round(duration), unit);
    }
    duration /= amount;
  }

  return 'just now';
}

export function match(matchScore: number){
  const data = {
    value: parseInt((matchScore * 100).toFixed(0)),
    image: baseURL + "green.png",
    bgColor: "#E5FCF0",
    borderColor: "#00E266"
  }
  if (matchScore >= 0 && matchScore <= .49){
    data.image = baseURL + "red.png";
    data.bgColor = "#D853000D";
    data.borderColor = "#D85300";
  }

  else if (matchScore >= .5 && matchScore <= 0.74) {
    data.image = baseURL + "blue.png"
    data.bgColor = "#3825980D";
    data.borderColor = "#382598";
  }

  return data;
}

export function formatNum(num: number, base: number = 100){
  if (num < base) return `${num}`;
  else if (num == base) return `${base}`;
  return `${base}+`
}
