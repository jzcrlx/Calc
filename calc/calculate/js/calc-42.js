function MDCalc(z){a=z.tc;b=z.hdl;c=z.trig;if(pref=="si"){chol_conv=.02586;trig_conv=.01129}if(pref=="us"){chol_conv=1;trig_conv=1}a=a*chol_conv;b=b*chol_conv;c=c*trig_conv;value=a-b-c/5;Answer(Round(value,1))}