function MDCalc(z){if(pref=="si"){wt_conv=1}if(pref=="us"){wt_conv=1/2.2}z.wt*=wt_conv;value=z.volume/z.wt;value2=value/z.hours;Answer(Round(value,2));Answer2(Round(value2,2))}