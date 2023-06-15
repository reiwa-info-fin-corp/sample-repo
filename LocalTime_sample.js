const localTime = require("./LocalTime.js");
const whitespace = 2;
const result = [];
const names = [];

let stringLengthMax = 0;
let buf = " ";
let blanks = "";

names[0] = "TimeZone";
names[1] = "SerialNumber";
names[2] = "TimeDifference";
names[3] = "City";
names[4] = "FullYear";
names[5] = "Month";
names[6] = "Date";
names[7] = "Day";
names[8] = "Hours";
names[9] = "Minutes";
names[10] = "Seconds";
names[11] = "Milliseconds";

const test = function(TimeZone) {

    localTime.SetTimeZone(TimeZone);

    result[0] = localTime.Get("TimeZone");
    result[1] = localTime.Get("SerialNumber");
    result[2] = localTime.Get("TimeDifference");
    result[3] = localTime.Get("City");
    result[4] = localTime.Get("FullYear");
    result[5] = localTime.Get("Month");
    result[6] = localTime.Get("Date");
    result[7] = localTime.Get("Day");
    result[8] = localTime.Get("Hours");
    result[9] = localTime.Get("Minutes");
    result[10] = localTime.Get("Seconds");
    result[11] = localTime.Get("Milliseconds");

    //names配列の中の文字列で最大長をstringLengthMaxに格納する。
    names.forEach(t => {
        if (t.length > stringLengthMax) stringLengthMax = t.length;
    });

    //bufに格納した文字列を「stringLengthMax + whitespace」回数分のコピーを含む新しい文字列を作る。
    blanks = buf.repeat(stringLengthMax + whitespace);

    console.log(localTime.GetUTCTimeString());
    console.log(localTime.GetLocalTimeString());

    //現地時間の「タイムゾーン」、「年」、「月」、「日」、「時」、「分」、「秒」、「ミリ秒」を表示させる。
    names.forEach((t, u) => (console.log(t + ":" + blanks.slice(t.length) + result[u])));

};

//localTime.SetLang("JP");

test("LON");
test("MAD");
test("PAR");
test("ROM");
test("BER");
test("CAI");
test("AHI");
test("JNB");
test("RUH");
test("THR");
test("DXB");
test("KBL");
test("KHI");
test("DEL");
test("DAC");
test("RGN");
test("BKK");
test("SIN");
test("HKG");
test("BJS");
test("TPE");
test("TYO");
test("SEL");
test("ADL");
test("SYD");
test("NOU");
test("AKL");
test("SUV");
test("MDY");
test("HNL");
test("ANC");
test("YVR");
test("LAX");
test("DEN");
test("MEX");
test("CHI");
test("NYC");
test("YMQ");
test("MAO");
test("BUE");
test("RIO");
test("FEN");
test("PDL");

//設定可能な都市名の一覧を出す。
console.log(localTime.GetAvailableCities());