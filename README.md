# LocalTime
When using the Date construct in Node.js to generate a date object, it is not possible to set an arbitrary time zone.
This means that the date and time will differ depending on the environment in which the date object is generated using the Date construct.
Therefore, we will create a LocalTime module that displays the local time in an arbitrarily set time zone, no matter what environment it is executed in.
The time zone is selected from 43 different city names.
The mechanism is that UTC (Coordinated Universal Time) will be the same regardless of the environment in which it is run, so the local time of the set city name is obtained by calculating the time difference from the UTC value.

(Node.jsでDateコンストラクを使ってdateオブジェクトを生成するときに任意のタイムゾーンを設定できない。
つまり、Dateコンストラクを使ってdateオブジェクトを生成する環境によって日時が異なることを意味する。
そこで今回、どんな環境で実行しても任意で設定したタイムゾーンの現地時間を表示するLocalTimeモジュールを作る。
タイムゾーンは、43種類の都市名から選択する。
仕組みとして、どんな環境で実行してもUTC(協定世界時)は同じ値になるため、UTCの値から時差を計算することによって設定した都市名の現地時間を求めている。)

## Install it via npm
```shell
npm i @reiwa_info_fin_corp/localtime
```

## Require the Module
```shell
const localTime = require("@reiwa_info_fin_corp/localtime");
```

## To use
```shell
//Set the city.
//(都市を設定する。)
localTime.SetTimeZone("TYO");
//Default language is English.If you want to set Japanese, set "JP".
//(デフォルト言語は英語。もし、日本語を設定するなら"JP"を設定する。)
localTime.SetLang("JP");
//Get UTC time.
//(UTC時間を取得する。)
localTime.GetUTCTimeString();
//Get the local time of the city.
//(都市の現地時間を取得する。)
localTime.GetLocalTimeString();
//Bring up a list of possible city names to be set.
//(設定可能な都市名の一覧を出す。)
localTime.GetAvailableCities();
//Get TimeZone
localTime.Get("TimeZone");
//Get SerialNumber
localTime.Get("SerialNumber");
//Get TimeDifference
localTime.Get("TimeDifference");
//Get City
localTime.Get("City");
//Get FullYear
localTime.Get("FullYear");
//Get Month
localTime.Get("Month");
//Get Date
localTime.Get("Date");
//Get Day
localTime.Get("Day");
//Get Hours
localTime.Get("Hours");
//Get Minutes
localTime.Get("Minutes");
//Get Seconds
localTime.Get("Seconds");
//Get Milliseconds
localTime.Get("Milliseconds");
```

## Parameters 
The SetTimeZone method can be set to the following cities.
You can choose only one of 43 cities.

(SetTimeZoneメソッドで設定できる都市は、以下の通りである。43都市のうち、1都市のみ選択可能である。)
```
LON
MAD
PAR
ROM
BER
CAI
AHI
JNB
RUH
THR
DXB
KBL
KHI
DEL
DAC
RGN
BKK
SIN
HKG
BJS
TPE
TYO
SEL
ADL
SYD
NOU
AKL
SUV
MDY
HNL
ANC
YVR
LAX
DEN
MEX
CHI
NYC
YMQ
MAO
BUE
RIO
FEN
PDL
```


## Sample Code
You can run the Sample Code.

(あなたはサンプルコードを実行できる。)

```shell
〇〇\node_modules\@reiwa_info_fin_corp\localtime>node LocalTime_sample.js
[UTC] 2023-06-09(Fri) 01:37:58.816
[LON] 2023-06-09(Fri) 01:37:58.821
TimeZone:        LON
SerialNumber:    No.01
TimeDifference:  UTC + 0
City:            The United Kingdom / London
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           01
Minutes:         37
Seconds:         58
Milliseconds:    815
[UTC] 2023-06-09(Fri) 01:37:58.823
[MAD] 2023-06-09(Fri) 02:37:58.824
TimeZone:        MAD
SerialNumber:    No.02
TimeDifference:  UTC + 1
City:            Spain / Madrid
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           02
Minutes:         37
Seconds:         58
Milliseconds:    823
[UTC] 2023-06-09(Fri) 01:37:58.825
[PAR] 2023-06-09(Fri) 02:37:58.825
TimeZone:        PAR
SerialNumber:    No.03
TimeDifference:  UTC + 1
City:            France / Paris
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           02
Minutes:         37
Seconds:         58
Milliseconds:    825
[UTC] 2023-06-09(Fri) 01:37:58.826
[ROM] 2023-06-09(Fri) 02:37:58.826
TimeZone:        ROM
SerialNumber:    No.04
TimeDifference:  UTC + 1
City:            Italy / Rome
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           02
Minutes:         37
Seconds:         58
Milliseconds:    826
[UTC] 2023-06-09(Fri) 01:37:58.828
[BER] 2023-06-09(Fri) 02:37:58.828
TimeZone:        BER
SerialNumber:    No.05
TimeDifference:  UTC + 1
City:            Germany / Berlin
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           02
Minutes:         37
Seconds:         58
Milliseconds:    828
[UTC] 2023-06-09(Fri) 01:37:58.829
[CAI] 2023-06-09(Fri) 03:37:58.829
TimeZone:        CAI
SerialNumber:    No.06
TimeDifference:  UTC + 2
City:            Egypt / Cairo
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           03
Minutes:         37
Seconds:         58
Milliseconds:    829
[UTC] 2023-06-09(Fri) 01:37:58.830
[AHI] 2023-06-09(Fri) 03:37:58.830
TimeZone:        AHI
SerialNumber:    No.07
TimeDifference:  UTC + 2
City:            Greece / Athens
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           03
Minutes:         37
Seconds:         58
Milliseconds:    830
[UTC] 2023-06-09(Fri) 01:37:58.831
[JNB] 2023-06-09(Fri) 03:37:58.831
TimeZone:        JNB
SerialNumber:    No.08
TimeDifference:  UTC + 2
City:            South Africa / Johannesburg
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           03
Minutes:         37
Seconds:         58
Milliseconds:    831
[UTC] 2023-06-09(Fri) 01:37:58.832
[RUH] 2023-06-09(Fri) 04:37:58.832
TimeZone:        RUH
SerialNumber:    No.09
TimeDifference:  UTC + 3
City:            Saudi Arabia / Riyadh
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           04
Minutes:         37
Seconds:         58
Milliseconds:    832
[UTC] 2023-06-09(Fri) 01:37:58.833
[THR] 2023-06-09(Fri) 05:07:58.833
TimeZone:        THR
SerialNumber:    No.10
TimeDifference:  UTC + 3.5
City:            Iran / Tehran
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           05
Minutes:         07
Seconds:         58
Milliseconds:    833
[UTC] 2023-06-09(Fri) 01:37:58.834
[DXB] 2023-06-09(Fri) 05:37:58.835
TimeZone:        DXB
SerialNumber:    No.11
TimeDifference:  UTC + 4
City:            United Arab Emirates / Dubai
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           05
Minutes:         37
Seconds:         58
Milliseconds:    834
[UTC] 2023-06-09(Fri) 01:37:58.835
[KBL] 2023-06-09(Fri) 06:07:58.835
TimeZone:        KBL
SerialNumber:    No.12
TimeDifference:  UTC + 4.5
City:            Afghanistan / Kabul
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           06
Minutes:         07
Seconds:         58
Milliseconds:    835
[UTC] 2023-06-09(Fri) 01:37:58.836
[KHI] 2023-06-09(Fri) 06:37:58.836
TimeZone:        KHI
SerialNumber:    No.13
TimeDifference:  UTC + 5
City:            Pakistan / Karachi
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           06
Minutes:         37
Seconds:         58
Milliseconds:    836
[UTC] 2023-06-09(Fri) 01:37:58.837
[DEL] 2023-06-09(Fri) 07:07:58.838
TimeZone:        DEL
SerialNumber:    No.14
TimeDifference:  UTC + 5.5
City:            India/Delhi
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           07
Minutes:         07
Seconds:         58
Milliseconds:    837
[UTC] 2023-06-09(Fri) 01:37:58.838
[DAC] 2023-06-09(Fri) 07:37:58.838
TimeZone:        DAC
SerialNumber:    No.15
TimeDifference:  UTC + 6
City:            Bangladesh / Dhaka
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           07
Minutes:         37
Seconds:         58
Milliseconds:    838
[UTC] 2023-06-09(Fri) 01:37:58.842
[RGN] 2023-06-09(Fri) 08:07:58.842
TimeZone:        RGN
SerialNumber:    No.16
TimeDifference:  UTC + 6.5
City:            Myanmar / Yangon
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           08
Minutes:         07
Seconds:         58
Milliseconds:    842
[UTC] 2023-06-09(Fri) 01:37:58.843
[BKK] 2023-06-09(Fri) 08:37:58.843
TimeZone:        BKK
SerialNumber:    No.17
TimeDifference:  UTC + 7
City:            Bangkok, Thailand
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           08
Minutes:         37
Seconds:         58
Milliseconds:    843
[UTC] 2023-06-09(Fri) 01:37:58.844
[SIN] 2023-06-09(Fri) 09:37:58.844
TimeZone:        SIN
SerialNumber:    No.18
TimeDifference:  UTC + 8
City:            Singapore / Singapore
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           09
Minutes:         37
Seconds:         58
Milliseconds:    843
[UTC] 2023-06-09(Fri) 01:37:58.845
[HKG] 2023-06-09(Fri) 09:37:58.845
TimeZone:        HKG
SerialNumber:    No.19
TimeDifference:  UTC + 8
City:            Hong Kong / Hong Kong
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           09
Minutes:         37
Seconds:         58
Milliseconds:    845
[UTC] 2023-06-09(Fri) 01:37:58.846
[BJS] 2023-06-09(Fri) 09:37:58.846
TimeZone:        BJS
SerialNumber:    No.20
TimeDifference:  UTC + 8
City:            China / Beijing
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           09
Minutes:         37
Seconds:         58
Milliseconds:    846
[UTC] 2023-06-09(Fri) 01:37:58.847
[TPE] 2023-06-09(Fri) 09:37:58.847
TimeZone:        TPE
SerialNumber:    No.21
TimeDifference:  UTC + 8
City:            Taiwan / Taipei
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           09
Minutes:         37
Seconds:         58
Milliseconds:    846
[UTC] 2023-06-09(Fri) 01:37:58.847
[TYO] 2023-06-09(Fri) 10:37:58.848
TimeZone:        TYO
SerialNumber:    No.22
TimeDifference:  UTC + 9
City:            Japan / Tokyo
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           10
Minutes:         37
Seconds:         58
Milliseconds:    847
[UTC] 2023-06-09(Fri) 01:37:58.848
[SEL] 2023-06-09(Fri) 10:37:58.848
TimeZone:        SEL
SerialNumber:    No.23
TimeDifference:  UTC + 9
City:            South Korea / Seoul
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           10
Minutes:         37
Seconds:         58
Milliseconds:    848
[UTC] 2023-06-09(Fri) 01:37:58.849
[ADL] 2023-06-09(Fri) 11:07:58.849
TimeZone:        ADL
SerialNumber:    No.24
TimeDifference:  UTC + 9.5
City:            Australia / Adelaide
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           11
Minutes:         07
Seconds:         58
Milliseconds:    849
[UTC] 2023-06-09(Fri) 01:37:58.850
[SYD] 2023-06-09(Fri) 11:37:58.850
TimeZone:        SYD
SerialNumber:    No.25
TimeDifference:  UTC + 10
City:            Australia / Sydney
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           11
Minutes:         37
Seconds:         58
Milliseconds:    850
[UTC] 2023-06-09(Fri) 01:37:58.851
[NOU] 2023-06-09(Fri) 12:37:58.852
TimeZone:        NOU
SerialNumber:    No.26
TimeDifference:  UTC + 11
City:            New Caledonia / Noumea
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           12
Minutes:         37
Seconds:         58
Milliseconds:    851
[UTC] 2023-06-09(Fri) 01:37:58.852
[AKL] 2023-06-09(Fri) 13:37:58.852
TimeZone:        AKL
SerialNumber:    No.27
TimeDifference:  UTC + 12
City:            New Zealand / Auckland
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           13
Minutes:         37
Seconds:         58
Milliseconds:    852
[UTC] 2023-06-09(Fri) 01:37:58.853
[SUV] 2023-06-09(Fri) 13:37:58.853
TimeZone:        SUV
SerialNumber:    No.28
TimeDifference:  UTC + 12
City:            The Republic of Fiji / Suva
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           13
Minutes:         37
Seconds:         58
Milliseconds:    853
[UTC] 2023-06-09(Fri) 01:37:58.854
[MDY] 2023-06-08(Thu) 14:37:58.854
TimeZone:        MDY
SerialNumber:    No.29
TimeDifference:  UTC - 11
City:            The United States of America / Midway Atoll
FullYear:        2023
Month:           06
Date:            08
Day:             Thu
Hours:           14
Minutes:         37
Seconds:         58
Milliseconds:    854
[UTC] 2023-06-09(Fri) 01:37:58.857
[HNL] 2023-06-08(Thu) 15:37:58.857
TimeZone:        HNL
SerialNumber:    No.30
TimeDifference:  UTC - 10
City:            The United States of America / Honolulu
FullYear:        2023
Month:           06
Date:            08
Day:             Thu
Hours:           15
Minutes:         37
Seconds:         58
Milliseconds:    857
[UTC] 2023-06-09(Fri) 01:37:58.858
[ANC] 2023-06-08(Thu) 16:37:58.858
TimeZone:        ANC
SerialNumber:    No.31
TimeDifference:  UTC - 9
City:            The United States of America / Anchorage
FullYear:        2023
Month:           06
Date:            08
Day:             Thu
Hours:           16
Minutes:         37
Seconds:         58
Milliseconds:    858
[UTC] 2023-06-09(Fri) 01:37:58.859
[YVR] 2023-06-08(Thu) 17:37:58.859
TimeZone:        YVR
SerialNumber:    No.32
TimeDifference:  UTC - 8
City:            Canada / Vancouver
FullYear:        2023
Month:           06
Date:            08
Day:             Thu
Hours:           17
Minutes:         37
Seconds:         58
Milliseconds:    859
[UTC] 2023-06-09(Fri) 01:37:58.860
[LAX] 2023-06-08(Thu) 17:37:58.860
TimeZone:        LAX
SerialNumber:    No.33
TimeDifference:  UTC - 8
City:            The United States of America / Los Angeles
FullYear:        2023
Month:           06
Date:            08
Day:             Thu
Hours:           17
Minutes:         37
Seconds:         58
Milliseconds:    860
[UTC] 2023-06-09(Fri) 01:37:58.861
[DEN] 2023-06-08(Thu) 18:37:58.861
TimeZone:        DEN
SerialNumber:    No.34
TimeDifference:  UTC - 7
City:            The United States of America / Denver
FullYear:        2023
Month:           06
Date:            08
Day:             Thu
Hours:           18
Minutes:         37
Seconds:         58
Milliseconds:    861
[UTC] 2023-06-09(Fri) 01:37:58.862
[MEX] 2023-06-08(Thu) 19:37:58.862
TimeZone:        MEX
SerialNumber:    No.35
TimeDifference:  UTC - 6
City:            Mexico / Mexico City
FullYear:        2023
Month:           06
Date:            08
Day:             Thu
Hours:           19
Minutes:         37
Seconds:         58
Milliseconds:    862
[UTC] 2023-06-09(Fri) 01:37:58.863
[CHI] 2023-06-08(Thu) 19:37:58.863
TimeZone:        CHI
SerialNumber:    No.36
TimeDifference:  UTC - 6
City:            The United States of America / Chicago
FullYear:        2023
Month:           06
Date:            08
Day:             Thu
Hours:           19
Minutes:         37
Seconds:         58
Milliseconds:    863
[UTC] 2023-06-09(Fri) 01:37:58.864
[NYC] 2023-06-08(Thu) 20:37:58.864
TimeZone:        NYC
SerialNumber:    No.37
TimeDifference:  UTC - 5
City:            The United States of America / New York
FullYear:        2023
Month:           06
Date:            08
Day:             Thu
Hours:           20
Minutes:         37
Seconds:         58
Milliseconds:    864
[UTC] 2023-06-09(Fri) 01:37:58.865
[YMQ] 2023-06-08(Thu) 20:37:58.865
TimeZone:        YMQ
SerialNumber:    No.38
TimeDifference:  UTC - 5
City:            Canada / Montreal
FullYear:        2023
Month:           06
Date:            08
Day:             Thu
Hours:           20
Minutes:         37
Seconds:         58
Milliseconds:    865
[UTC] 2023-06-09(Fri) 01:37:58.866
[MAO] 2023-06-08(Thu) 21:37:58.866
TimeZone:        MAO
SerialNumber:    No.39
TimeDifference:  UTC - 4
City:            Brazil / Manaus
FullYear:        2023
Month:           06
Date:            08
Day:             Thu
Hours:           21
Minutes:         37
Seconds:         58
Milliseconds:    866
[UTC] 2023-06-09(Fri) 01:37:58.867
[BUE] 2023-06-08(Thu) 22:37:58.867
TimeZone:        BUE
SerialNumber:    No.40
TimeDifference:  UTC - 3
City:            Argentina / Buenos Aires
FullYear:        2023
Month:           06
Date:            08
Day:             Thu
Hours:           22
Minutes:         37
Seconds:         58
Milliseconds:    867
[UTC] 2023-06-09(Fri) 01:37:58.867
[RIO] 2023-06-08(Thu) 22:37:58.868
TimeZone:        RIO
SerialNumber:    No.41
TimeDifference:  UTC - 3
City:            Brazil / Rio de Janeiro
FullYear:        2023
Month:           06
Date:            08
Day:             Thu
Hours:           22
Minutes:         37
Seconds:         58
Milliseconds:    867
[UTC] 2023-06-09(Fri) 01:37:58.868
[FEN] 2023-06-08(Thu) 23:37:58.868
TimeZone:        FEN
SerialNumber:    No.42
TimeDifference:  UTC - 2
City:            Brazil / Fernando de Noronha
FullYear:        2023
Month:           06
Date:            08
Day:             Thu
Hours:           23
Minutes:         37
Seconds:         58
Milliseconds:    868
[UTC] 2023-06-09(Fri) 01:37:58.869
[PDL] 2023-06-09(Fri) 00:37:58.869
TimeZone:        PDL
SerialNumber:    No.43
TimeDifference:  UTC - 1
City:            Portuguese / Azores
FullYear:        2023
Month:           06
Date:            09
Day:             Fri
Hours:           00
Minutes:         37
Seconds:         58
Milliseconds:    869
--AvailableCities(43) begin--
LON (UTC + 0):   No.01 The United Kingdom / London
MAD (UTC + 1):   No.02 Spain / Madrid
PAR (UTC + 1):   No.03 France / Paris
ROM (UTC + 1):   No.04 Italy / Rome
BER (UTC + 1):   No.05 Germany / Berlin
CAI (UTC + 2):   No.06 Egypt / Cairo
AHI (UTC + 2):   No.07 Greece / Athens
JNB (UTC + 2):   No.08 South Africa / Johannesburg
RUH (UTC + 3):   No.09 Saudi Arabia / Riyadh
THR (UTC + 3.5): No.10 Iran / Tehran
DXB (UTC + 4):   No.11 United Arab Emirates / Dubai
KBL (UTC + 4.5): No.12 Afghanistan / Kabul
KHI (UTC + 5):   No.13 Pakistan / Karachi
DEL (UTC + 5.5): No.14 India/Delhi
DAC (UTC + 6):   No.15 Bangladesh / Dhaka
RGN (UTC + 6.5): No.16 Myanmar / Yangon
BKK (UTC + 7):   No.17 Bangkok, Thailand
SIN (UTC + 8):   No.18 Singapore / Singapore
HKG (UTC + 8):   No.19 Hong Kong / Hong Kong
BJS (UTC + 8):   No.20 China / Beijing
TPE (UTC + 8):   No.21 Taiwan / Taipei
TYO (UTC + 9):   No.22 Japan / Tokyo
SEL (UTC + 9):   No.23 South Korea / Seoul
ADL (UTC + 9.5): No.24 Australia / Adelaide
SYD (UTC + 10):  No.25 Australia / Sydney
NOU (UTC + 11):  No.26 New Caledonia / Noumea
AKL (UTC + 12):  No.27 New Zealand / Auckland
SUV (UTC + 12):  No.28 The Republic of Fiji / Suva
MDY (UTC - 11):  No.29 The United States of America / Midway Atoll
HNL (UTC - 10):  No.30 The United States of America / Honolulu
ANC (UTC - 9):   No.31 The United States of America / Anchorage
YVR (UTC - 8):   No.32 Canada / Vancouver
LAX (UTC - 8):   No.33 The United States of America / Los Angeles
DEN (UTC - 7):   No.34 The United States of America / Denver
MEX (UTC - 6):   No.35 Mexico / Mexico City
CHI (UTC - 6):   No.36 The United States of America / Chicago
NYC (UTC - 5):   No.37 The United States of America / New York
YMQ (UTC - 5):   No.38 Canada / Montreal
MAO (UTC - 4):   No.39 Brazil / Manaus
BUE (UTC - 3):   No.40 Argentina / Buenos Aires
RIO (UTC - 3):   No.41 Brazil / Rio de Janeiro
FEN (UTC - 2):   No.42 Brazil / Fernando de Noronha
PDL (UTC - 1):   No.43 Portuguese / Azores
--AvailableCities(43) end--

〇〇\node_modules\@reiwa_info_fin_corp\localtime>
```

## License
The MIT License (MIT)

Copyright (c)2023 reiwa_info_fin_corp

