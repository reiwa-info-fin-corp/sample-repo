const LocalTime = (function() {

    const that = {};
    const my = {};
    const WeekChars = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    my.TimeZone = "";
    my.lang = "EN";
    my.LocalTime = new Map();
    my.TodayDate = new Map();
    my.YesterdayDate = new Map();
    my.TomorrowDate = new Map();
    my.LocalTimeString = "";
    my.UTCTimeString = "";
    my.Today_Day = "";
    my.Tomorrow_Day = "";
    my.Yesterday_Day = "";

    //TimeZoneに設定可能な都市
    my.city = new Map();

    my.city.set("LON", [0, "UTC + 0", "No.01", "イギリス / ロンドン", "The United Kingdom / London"]);
    my.city.set("MAD", [1, "UTC + 1", "No.02", "スペイン / マドリード", "Spain / Madrid"]);
    my.city.set("PAR", [1, "UTC + 1", "No.03", "フランス / パリ", "France / Paris"]);
    my.city.set("ROM", [1, "UTC + 1", "No.04", "イタリア / ローマ", "Italy / Rome"]);
    my.city.set("BER", [1, "UTC + 1", "No.05", "ドイツ / ベルリン", "Germany / Berlin"]);

    my.city.set("CAI", [2, "UTC + 2", "No.06", "エジプト / カイロ", "Egypt / Cairo"]);
    my.city.set("AHI", [2, "UTC + 2", "No.07", "ギリシャ / アテネ", "Greece / Athens"]);
    my.city.set("JNB", [2, "UTC + 2", "No.08", "南アフリカ共和国 / ヨハネスブルグ", "South Africa / Johannesburg"]);
    my.city.set("RUH", [3, "UTC + 3", "No.09", "サウジアラビア / リヤド", "Saudi Arabia / Riyadh"]);
    my.city.set("THR", [3.5, "UTC + 3.5", "No.10", "イラン / テヘラン", "Iran / Tehran"]);

    my.city.set("DXB", [4, "UTC + 4", "No.11", "アラブ首長国連邦 / ドバイ", "United Arab Emirates / Dubai"]);
    my.city.set("KBL", [4.5, "UTC + 4.5", "No.12", "アフガニスタン / カブール", "Afghanistan / Kabul"]);
    my.city.set("KHI", [5, "UTC + 5", "No.13", "パキスタン / カラチ", "Pakistan / Karachi"]);
    my.city.set("DEL", [5.5, "UTC + 5.5", "No.14", "インド / デリー", "India/Delhi"]);
    my.city.set("DAC", [6, "UTC + 6", "No.15", "バングラデシュ / ダッカ", "Bangladesh / Dhaka"]);

    my.city.set("RGN", [6.5, "UTC + 6.5", "No.16", "ミャンマー / ヤンゴン", "Myanmar / Yangon"]);
    my.city.set("BKK", [7, "UTC + 7", "No.17", "タイ / バンコク", "Bangkok, Thailand"]);
    my.city.set("SIN", [8, "UTC + 8", "No.18", "シンガポール / シンガポール", "Singapore / Singapore"]);
    my.city.set("HKG", [8, "UTC + 8", "No.19", "香港特別行政区 / 香港", "Hong Kong / Hong Kong"]);
    my.city.set("BJS", [8, "UTC + 8", "No.20", "中華人民共和国 / 北京", "China / Beijing"]);

    my.city.set("TPE", [8, "UTC + 8", "No.21", "台湾地区 / 台北", "Taiwan / Taipei"]);
    my.city.set("TYO", [9, "UTC + 9", "No.22", "日本 / 東京", "Japan / Tokyo"]);
    my.city.set("SEL", [9, "UTC + 9", "No.23", "韓国 / ソウル", "South Korea / Seoul"]);
    my.city.set("ADL", [9.5, "UTC + 9.5", "No.24", "オーストラリア / アデレード", "Australia / Adelaide"]);
    my.city.set("SYD", [10, "UTC + 10", "No.25", "オーストラリア / シドニー", "Australia / Sydney"]);

    my.city.set("NOU", [11, "UTC + 11", "No.26", "ニューカレドニア / ヌーメア", "New Caledonia / Noumea"]);
    my.city.set("AKL", [12, "UTC + 12", "No.27", "ニュージーランド / オークランド", "New Zealand / Auckland"]);
    my.city.set("SUV", [12, "UTC + 12", "No.28", "フィジー諸島共和国 / スバ", "The Republic of Fiji / Suva"]);

    my.city.set("MDY", [-11, "UTC - 11", "No.29", "アメリカ合衆国 / ミッドウェー諸島", "The United States of America / Midway Atoll"]);
    my.city.set("HNL", [-10, "UTC - 10", "No.30", "アメリカ合衆国 / ホノルル", "The United States of America / Honolulu"]);
    my.city.set("ANC", [-9, "UTC - 9", "No.31", "アメリカ合衆国 / アンカレジ", "The United States of America / Anchorage"]);
    my.city.set("YVR", [-8, "UTC - 8", "No.32", "カナダ / バンクーバー", "Canada / Vancouver"]);
    my.city.set("LAX", [-8, "UTC - 8", "No.33", "アメリカ合衆国 / ロサンゼルス", "The United States of America / Los Angeles"]);

    my.city.set("DEN", [-7, "UTC - 7", "No.34", "アメリカ合衆国 / デンバー", "The United States of America / Denver"]);
    my.city.set("MEX", [-6, "UTC - 6", "No.35", "メキシコ / メキシコシティー", "Mexico / Mexico City"]);
    my.city.set("CHI", [-6, "UTC - 6", "No.36", "アメリカ合衆国 / シカゴ", "The United States of America / Chicago"]);
    my.city.set("NYC", [-5, "UTC - 5", "No.37", "アメリカ合衆国 / ニューヨーク", "The United States of America / New York"]);
    my.city.set("YMQ", [-5, "UTC - 5", "No.38", "カナダ / モントリオール", "Canada / Montreal"]);

    my.city.set("MAO", [-4, "UTC - 4", "No.39", "ブラジル / マナウス", "Brazil / Manaus"]);
    my.city.set("BUE", [-3, "UTC - 3", "No.40", "アルゼンチン / ブエノスアイレス", "Argentina / Buenos Aires"]);
    my.city.set("RIO", [-3, "UTC - 3", "No.41", "ブラジル / リオデジャネイロ", "Brazil / Rio de Janeiro"]);
    my.city.set("FEN", [-2, "UTC - 2", "No.42", "ブラジル / フェルナンド・デ・ノローニャ諸島", "Brazil / Fernando de Noronha"]);
    my.city.set("PDL", [-1, "UTC - 1", "No.43", "ポルトガル領 / アゾレス諸島", "Portuguese / Azores"]);

    //時差の計算をする
    my.Calculate = function() {

        const GetTimeString = function(TimeZone, map) {

            const TMPTime = [];

            TMPTime.push("[");
            TMPTime.push(TimeZone);
            TMPTime.push("] ");
            TMPTime.push(map.get("yyyy"));
            TMPTime.push("-");
            TMPTime.push(map.get("MM"));
            TMPTime.push("-");
            TMPTime.push(map.get("dd"));
            TMPTime.push("(");
            TMPTime.push(map.get("day"));
            TMPTime.push(")");
            TMPTime.push(" ");
            TMPTime.push(map.get("hh"));
            TMPTime.push(":");
            TMPTime.push(map.get("mm"));
            TMPTime.push(":");
            TMPTime.push(map.get("ss"));
            TMPTime.push(".");
            TMPTime.push(map.get("msec"));

            return TMPTime.join("");

        };

        const SplitUTC = function(t, day) {

            let map = new Map();

            //toISOString()メソッドで現在時刻をISO 8601形式のUTC表現にした値を引数tとする
            //tの例2023-04-15T03:35:45.794
            //「年」、「月」、「日」、「時」、「分」、「秒」、「ミリ秒」に分解してmapに格納する。

            //年
            let yyyy = t.split("T")[0].split("-")[0];
            map.set(day + "yyyy", yyyy);

            //月
            let MM = t.split("T")[0].split("-")[1];
            map.set(day + "MM", MM);

            //日
            let dd = t.split("T")[0].split("-")[2];
            map.set(day + "dd", dd);

            //時
            let hh = t.split("T")[1].split("-")[0].split(":")[0];
            map.set(day + "hh", hh);

            //分
            let mm = t.split("T")[1].split("-")[0].split(":")[1];
            map.set(day + "mm", mm);

            //秒
            let ss = t.split("T")[1].split("-")[0].split(":")[2].split(".")[0];
            map.set(day + "ss", ss);

            //ミリ秒
            let msec = t.split("T")[1].split("-")[0].split(":")[2].split(".")[1].split("Z")[0];
            map.set(day + "msec", msec);

            return map;

        }; //splitUTCの終わり

        const CalLocalTime = function(map, TimeZone) {

            let city = this.city.get(TimeZone);

            let a = parseInt(this.TodayDate.get("Today_hh"), 10) * 60 + parseInt(this.TodayDate.get("Today_mm"), 10);

            if (city[0] > 0) {

                let a2 = a + city[0] * 60;
                let a3 = a2 % 60;
                let a4 = Math.floor(a2 / 60);

                a3 = ("0" + a3).slice(-2);
                map.set("mm", a3);

                if (a4 >= 24) {
                    //明日の日付になる。
                    let a5 = a4 - 24;
                    a5 = ("0" + a5).slice(-2);
                    map.set("yyyy", this.TomorrowDate.get("Tomorrow_yyyy"));
                    map.set("MM", this.TomorrowDate.get("Tomorrow_MM"));
                    map.set("dd", this.TomorrowDate.get("Tomorrow_dd"));
                    map.set("hh", a5);
                    map.set("day", WeekChars[this.Tomorrow_Day]);
                } else {
                    a4 = ("0" + a4).slice(-2);
                    map.set("hh", a4);
                }

            }

            if (city[0] < 0) {

                let a2 = 0;

                if (a + city[0] * 60 >= 0) {
                    a2 = a + city[0] * 60;
                } else {
                    //昨日の日付になる。
                    a2 = a + 24 * 60 + city[0] * 60;
                    map.set("yyyy", this.YesterdayDate.get("Yesterday_yyyy"));
                    map.set("MM", this.YesterdayDate.get("Yesterday_MM"));
                    map.set("dd", this.YesterdayDate.get("Yesterday_dd"));
                    map.set("day", WeekChars[this.Yesterday_Day]);
                }

                let a3 = Math.floor(a2 / 60);
                let a4 = a2 % 60;

                a3 = ("0" + a3).slice(-2);
                map.set("hh", a3);

                a4 = ("0" + a4).slice(-2);
                map.set("mm", a4);

            }

        }; //CalLocalTimeの終わり

        const date = new Date();

        //今日の現在時刻(ISO形式)
        let today = date.toISOString();

        //LocalTimeを一時的に格納する
        let map = new Map();

        //今日の曜日
        this.Today_Day = date.getUTCDay();
        //昨日の曜日
        this.Yesterday_Day = (this.Today_Day) === 0 ? 6 : (this.Today_Day - 1);
        //明日の曜日
        this.Tomorrow_Day = (this.Today_Day) === 6 ? 0 : (this.Today_Day + 1);

        //今日の現在時刻(ISO形式)
        this.TodayDate = SplitUTC(today, "Today_");

        map.set("yyyy", this.TodayDate.get("Today_yyyy"));
        map.set("MM", this.TodayDate.get("Today_MM"));
        map.set("dd", this.TodayDate.get("Today_dd"));
        map.set("day", WeekChars[this.Today_Day]);
        map.set("hh", this.TodayDate.get("Today_hh"));
        map.set("mm", this.TodayDate.get("Today_mm"));
        map.set("ss", this.TodayDate.get("Today_ss"));
        map.set("msec", this.TodayDate.get("Today_msec"));

        //my.UTCTimeStringを設定する
        this.UTCTimeString = GetTimeString("UTC", map);

        //昨日の現在時刻(ISO形式)
        let yesterday = (new Date((new Date(today)).getTime() - (24 * 60 * 60 * 1000))).toISOString();

        this.YesterdayDate = SplitUTC(yesterday, "Yesterday_");

        //明日の現在時刻(ISO形式)
        let tomorrow = (new Date((new Date(today)).getTime() + (24 * 60 * 60 * 1000))).toISOString();

        this.TomorrowDate = SplitUTC(tomorrow, "Tomorrow_");

        //LocalTimeを計算する。
        CalLocalTime.call(my, map, this.TimeZone);

        //my.LocalTimeStringを設定する
        this.LocalTimeString = GetTimeString(this.TimeZone, map);

        //that.get("〇〇")で取得する値を設定する。
        this.LocalTime.set("TimeZone", this.TimeZone);

        this.LocalTime.set("SerialNumber", my.city.get(this.TimeZone)[2]);

        this.LocalTime.set("TimeDifference", my.city.get(this.TimeZone)[1]);

        if (my.lang === "JP") {
            //都市名が日本語
            this.LocalTime.set("City", my.city.get(this.TimeZone)[3]);
        } else {
            //都市名が英語
            this.LocalTime.set("City", my.city.get(this.TimeZone)[4]);
        }

        this.LocalTime.set("FullYear", map.get("yyyy"));
        this.LocalTime.set("Month", map.get("MM"));
        this.LocalTime.set("Date", map.get("dd"));
        this.LocalTime.set("Day", map.get("day"));
        this.LocalTime.set("Hours", map.get("hh"));
        this.LocalTime.set("Minutes", map.get("mm"));
        this.LocalTime.set("Seconds", map.get("ss"));
        this.LocalTime.set("Milliseconds", map.get("msec"));

    }; //my.Calculateの終わり

    that.GetLocalTimeString = function() {

        let ret = (my.lang === "JP") ? "ERROR:TimeZoneが設定されていません。" : "ERROR:TimeZone is not set.";

        //時差の計算をする
        my.Calculate();

        //my.TimeZoneに空文字以外の値が設定されていること。
        //my.LocalTimeStringを返す。
        if (my.TimeZone !== "") {
            ret = my.LocalTimeString;
        }

        return ret;

    };

    that.GetUTCTimeString = function() {

        let ret = (my.lang === "JP") ? "ERROR:TimeZoneが設定されていません。" : "ERROR:TimeZone is not set.";

        //時差の計算をする
        my.Calculate();

        //my.TimeZoneに空文字以外の値が設定されていること。
        //my.UTCTimeStringを返す。
        if (my.TimeZone !== "") {
            ret = my.UTCTimeString;
        }

        return ret;

    };

    //設定可能な都市
    that.GetAvailableCities = function() {

        const str = [];
        const whitespace = 1;
        const result = [];
        const names = [];

        let stringLengthMax = 0;
        let buf = " ";
        let blanks = "";

        my.city.forEach(function(value, key, i) {
            names.push(key + " (" + value[1] + ")");
            if (my.lang === "JP") {
                result.push(value[2] + " " + value[3]);
            } else {
                result.push(value[2] + " " + value[4]);
            }
        });

        //names配列の中の文字列で最大長をstringLengthMaxに格納する。
        names.forEach(t => {
            if (t.length > stringLengthMax) stringLengthMax = t.length;
        });

        //bufに格納した文字列を「stringLengthMax + whitespace」回数分のコピーを含む新しい文字列を作る。
        blanks = buf.repeat(stringLengthMax + whitespace);

        str.push("--AvailableCities(" + my.city.size + ") begin--\n");

        names.forEach((t, u) => (str.push(t + ":" + blanks.slice(t.length) + result[u] + "\n")));

        str.push("--AvailableCities(" + my.city.size + ") end--");

        return str.join("");

    };

    that.Get = function(str) {

        str = str.trim();

        //LocalTimeの「タイムゾーン」、「時差」、「年」、「月」、「日」、「時」、「分」、「秒」、「ミリ秒」を取得する。
        let ret = (my.lang === "JP") ? "ERROR:TimeZoneが設定されていません。" : "ERROR:TimeZone is not set.";

        //strはmy.TimeZoneが空文字ではないこと、かつmap形式のLocalTimeが持つ値と同じ値であること
        if (my.TimeZone !== "") {
            if (my.LocalTime.has(str)) {
                ret = my.LocalTime.get(str);
            } else {
                ret = (my.lang === "JP") ? "ERROR:'" + str + "'はLocalTimeに存在しないメソッド名です。" : "ERROR:'" + str + "' is a method name that does not exist in LocalTime.";
            }
        }

        return ret;

    };

    that.SetLang = function(str) {

        str = str.trim();

        if (str === "JP") {
            my.lang = "JP";
        } else if (str === "EN") {
            console.log("ERROR:'EN' is invalid. Default language is English.");
        } else {
            console.log("ERROR:'" + str + "' is invalid. Languages are Japanese and English only.");
        }

    };

    that.SetTimeZone = function(str) {

        str = str.trim();

        //strが空文字ではないこと、かつmap形式のcityが持つ値と同じであること。
        if (str !== "" && my.city.has(str)) {
            my.TimeZone = str;
            //時差の計算をする
            my.Calculate();
        } else {
            const msg = (my.lang === "JP") ? "ERROR:TimeZoneの文字列が間違っています。" : "ERROR:The TimeZone string is incorrect.";
            console.log(msg);
        }

    };

    return that;

})();

module.exports = LocalTime;