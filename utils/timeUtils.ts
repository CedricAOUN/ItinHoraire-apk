import { parse , format, differenceInMinutes } from 'date-fns';


export function minutesLeft(date: Date) {
   return differenceInMinutes(date, new Date()) < 10 ? `0${differenceInMinutes(date, new Date())}` : differenceInMinutes(date, new Date())
}

export function parseStringDate(ds: string) {
   const frenchTime = parse(ds, "yyyyMMdd'T'HHmmss", new Date());

   const utcTime = new Date(frenchTime.getTime() - frenchTime.getTimezoneOffset() * 60000);

   return minutesLeft(frenchTime)
}




// 20230818T051500