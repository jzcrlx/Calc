function MDCalc(z){a=z.ca;b=z.alb_1;c=z.alb_2;if(pref=="si"){ca_conv=4;alb_conv=.1}if(pref=="us"){ca_conv=1;alb_conv=1}a*=ca_conv;b*=alb_conv;c*=alb_conv;value=(.8*(b-c)+a)/ca_conv;Answer(Round(value,1))}if(pref=="si"){$("#alb_1").val(40)}