/* Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a. In other words, find the element x in a, which minimizes the following sum:

abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
(where abs denotes the absolute value)

If there are several possible answers, output the smallest one.

Example

For a = [2, 4, 7], the output should be absoluteValuesSumMinimization(a) = 4.

for x = 2, the value will be abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7.
for x = 4, the value will be abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5.
for x = 7, the value will be abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8.
The lowest possible value is when x = 4, so the answer is 4.

For a = [2, 3], the output should be absoluteValuesSumMinimization(a) = 2.

for x = 2, the value will be abs(2 - 2) + abs(3 - 2) = 1.
for x = 3, the value will be abs(2 - 3) + abs(3 - 3) = 1.
Because there is a tie, the smallest x between x = 2 and x = 3 is the answer.
 */



function absoluteValuesSumMinimization(a) {
 let num=10000000000
 let total;
 let value
 let abs;
 for(let i=0;i<a.length;i++){
   total=0
   for(let j=0;j<a.length;j++){
     abs=a[i]-a[j]<0?(a[i]-a[j])*(-1):(a[i]-a[j])
     total=total+abs
   }
  
   if(total<num){
     num=total
     value=a[i]
     
   }
 }
return value

}


console.log(absoluteValuesSumMinimization( [
  -999163,
  -999011,
  -998044,
  -996266,
  -996179,
  -995721,
  -994028,
  -992410,
  -990218,
  -984635,
  -982201,
  -981613,
  -970765,
  -968120,
  -965120,
  -963094,
  -961641,
  -960902,
  -957943,
  -957384,
  -955205,
  -955184,
  -954178,
  -953272,
  -952450,
  -951804,
  -949492,
  -949198,
  -947412,
  -947037,
  -946138,
  -945422,
  -945357,
  -944752,
  -943774,
  -943523,
  -943450,
  -939085,
  -935420,
  -931728,
  -931289,
  -929318,
  -926767,
  -925631,
  -924495,
  -922522,
  -921480,
  -918417,
  -917632,
  -916402,
  -907969,
  -907228,
  -902935,
  -901235,
  -899723,
  -898061,
  -897837,
  -896698,
  -896397,
  -895699,
  -894870,
  -893791,
  -893678,
  -892171,
  -891706,
  -890971,
  -890839,
  -890721,
  -888862,
  -888205,
  -887836,
  -885658,
  -883944,
  -881307,
  -878455,
  -877143,
  -871361,
  -869063,
  -867262,
  -866636,
  -865558,
  -865272,
  -864466,
  -862329,
  -859738,
  -853932,
  -853920,
  -852250,
  -852206,
  -850610,
  -849248,
  -848871,
  -848459,
  -846532,
  -840296,
  -835966,
  -835679,
  -835515,
  -834245,
  -833557,
  -827444,
  -822947,
  -821395,
  -818949,
  -818146,
  -817877,
  -814945,
  -812452,
  -811173,
  -805978,
  -804685,
  -798343,
  -794072,
  -791827,
  -787771,
  -786796,
  -785929,
  -783252,
  -780455,
  -780211,
  -778919,
  -778825,
  -773620,
  -773197,
  -772737,
  -772613,
  -771794,
  -771079,
  -767985,
  -767038,
  -764902,
  -764082,
  -763630,
  -761516,
  -761484,
  -761415,
  -760049,
  -754074,
  -751420,
  -750639,
  -750043,
  -748745,
  -748292,
  -743202,
  -738380,
  -737735,
  -737605,
  -736514,
  -734497,
  -733471,
  -730786,
  -730254,
  -727797,
  -726083,
  -721323,
  -720607,
  -719607,
  -718690,
  -717473,
  -714731,
  -714497,
  -711713,
  -711249,
  -710864,
  -709845,
  -706984,
  -705333,
  -704995,
  -702865,
  -702731,
  -702288,
  -702181,
  -699279,
  -695270,
  -695247,
  -692801,
  -692503,
  -690998,
  -689739,
  -688790,
  -686712,
  -686687,
  -683909,
  -683903,
  -683749,
  -683704,
  -677256,
  -675122,
  -672844,
  -670903,
  -670410,
  -669594,
  -666430,
  -665998,
  -664401,
  -663741,
  -661063,
  -659803,
  -659317,
  -655316,
  -651144,
  -650708,
  -650209,
  -649691,
  -647561,
  -646370,
  -643131,
  -642203,
  -641841,
  -640780,
  -636663,
  -634598,
  -627288,
  -625873,
  -625520,
  -625003,
  -624271,
  -621503,
  -619517,
  -616697,
  -613042,
  -611578,
  -609901,
  -603677,
  -601354,
  -597044,
  -596514,
  -595215,
  -592781,
  -590546,
  -585585,
  -579350,
  -578923,
  -576745,
  -574850,
  -574799,
  -573286,
  -572804,
  -571332,
  -570422,
  -568765,
  -568111,
  -566031,
  -565981,
  -565783,
  -560797,
  -559098,
  -552537,
  -549706,
  -547275,
  -546989,
  -546836,
  -544186,
  -540100,
  -538962,
  -538737,
  -538412,
  -536978,
  -536628,
  -526549,
  -525780,
  -524974,
  -522062,
  -521735,
  -521338,
  -519965,
  -519721,
  -518522,
  -513599,
  -513407,
  -507273,
  -507026,
  -506547,
  -506372,
  -504515,
  -501204,
  -500147,
  -498510,
  -496532,
  -493382,
  -491017,
  -485152,
  -484872,
  -482099,
  -480140,
  -476679,
  -476620,
  -473686,
  -473462,
  -473315,
  -472987,
  -472038,
  -471178,
  -466185,
  -464778,
  -463449,
  -463287,
  -462379,
  -461619,
  -457424,
  -457312,
  -449242,
  -448377,
  -447546,
  -445902,
  -443138,
  -441751,
  -440271,
  -439768,
  -439396,
  -438604,
  -436329,
  -434050,
  -428856,
  -425726,
  -425588,
  -425090,
  -424082,
  -423437,
  -422859,
  -417884,
  -414839,
  -412825,
  -411846,
  -406877,
  -405231,
  -404696,
  -402787,
  -397260,
  -396288,
  -395116,
  -393848,
  -392947,
  -392816,
  -389466,
  -388895,
  -387071,
  -387046,
  -385631,
  -384944,
  -383943,
  -383373,
  -381653,
  -378291,
  -377322,
  -374793,
  -371622,
  -370142,
  -367231,
  -367097,
  -366908,
  -366191,
  -365427,
  -364541,
  -364489,
  -363125,
  -359749,
  -357670,
  -348716,
  -344840,
  -339922,
  -335408,
  -334308,
  -333914,
  -333694,
  -331723,
  -330342,
  -329151,
  -328632,
  -324862,
  -323160,
  -322096,
  -321004,
  -320956,
  -317034,
  -316377,
  -314444,
  -310632,
  -310545,
  -310096,
  -309654,
  -309581,
  -308624,
  -306808,
  -306157,
  -305851,
  -305808,
  -305255,
  -304836,
  -303253,
  -301667,
  -299135,
  -297659,
  -295321,
  -294654,
  -284916,
  -281937,
  -280531,
  -275160,
  -272503,
  -272172,
  -270278,
  -254137,
  -253728,
  -249433,
  -247293,
  -246008,
  -244986,
  -242452,
  -242426,
  -239437,
  -236547,
  -235433,
  -233751,
  -233387,
  -233325,
  -231693,
  -231410,
  -229762,
  -227768,
  -224395,
  -221489,
  -220581,
  -219302,
  -217978,
  -215965,
  -214317,
  -211938,
  -210091,
  -206305,
  -205720,
  -202062,
  -201981,
  -200516,
  -199864,
  -199096,
  -198482,
  -198119,
  -197879,
  -196756,
  -195039,
  -192962,
  -192714,
  -192679,
  -188947,
  -183354,
  -180133,
  -176506,
  -172295,
  -171737,
  -170154,
  -168921,
  -168020,
  -156747,
  -155655,
  -155507,
  -155187,
  -153997,
  -151722,
  -150480,
  -149650,
  -149191,
  -146689,
  -146218,
  -144700,
  -136197,
  -136166,
  -135134,
  -133599,
  -130803,
  -129641,
  -126124,
  -125875,
  -123990,
  -121652,
  -116434,
  -115560,
  -115058,
  -114587,
  -109800,
  -108554,
  -104327,
  -103270,
  -102689,
  -98250,
  -98196,
  -96474,
  -94617,
  -90781,
  -89307,
  -88427,
  -87773,
  -87654,
  -85882,
  -85295,
  -80411,
  -77680,
  -68241,
  -67750,
  -64273,
  -64033,
  -63471,
  -62294,
  -61934,
  -61388,
  -59464,
  -55920,
  -53232,
  -53119,
  -52199,
  -50834,
  -49896,
  -47100,
  -45700,
  -40990,
  -35771,
  -31534,
  -28562,
  -27886,
  -26745,
  -25115,
  -23274,
  -22797,
  -21996,
  -13767,
  -13039,
  -12685,
  -12355,
  -2511,
  6165,
  6897,
  9295,
  10840,
  11205,
  16407,
  20524,
  20759,
  21377,
  24270,
  27519,
  28449,
  31008,
  36222,
  37759,
  40816,
  44957,
  47124,
  49266,
  57395,
  57543,
  58902,
  59288,
  61596,
  62955,
  67002,
  67006,
  68096,
  70997,
  71477,
  73540,
  74051,
  74328,
  78333,
  78354,
  78820,
  83194,
  85290,
  98466,
  100772,
  101471,
  107063,
  108458,
  113901,
  115096,
  116003,
  116282,
  116677,
  119381,
  119413,
  121678,
  123367,
  126547,
  128806,
  133411,
  134184,
  134391,
  135063,
  135366,
  136552,
  138249,
  140003,
  140653,
  140752,
  143098,
  143548,
  146104,
  147226,
  148249,
  154454,
  154768,
  156254,
  156679,
  158766,
  159337,
  161541,
  165759,
  168022,
  168635,
  168904,
  169304,
  171733,
  174205,
  176123,
  176782,
  185342,
  189204,
  191353,
  193213,
  196709,
  198710,
  199377,
  205719,
  206956,
  212174,
  213518,
  213804,
  214449,
  217388,
  224640,
  227283,
  228878,
  230273,
  230411,
  230996,
  232108,
  233228,
  233321,
  234302,
  235475,
  238861,
  244088,
  244186,
  244202,
  244973,
  247285,
  248604,
  249286,
  251191,
  251528,
  253140,
  254295,
  259612,
  275392,
  275869,
  282110,
  283510,
  285567,
  286451,
  286529,
  287605,
  289013,
  289994,
  290960,
  291296,
  292044,
  294097,
  300825,
  301103,
  301223,
  304017,
  304460,
  305146,
  317992,
  320325,
  324257,
  325495,
  327718,
  328240,
  329123,
  334023,
  335498,
  336028,
  338105,
  339728,
  344215,
  344791,
  345485,
  351618,
  351926,
  353537,
  354109,
  356748,
  357213,
  357961,
  358609,
  361153,
  366692,
  368646,
  368860,
  370858,
  371690,
  373742,
  376834,
  377367,
  378292,
  385652,
  385857,
  387855,
  388209,
  388740,
  390297,
  391112,
  394019,
  394937,
  395170,
  398893,
  399018,
  400721,
  407251,
  407644,
  410596,
  411798,
  412860,
  416778,
  420533,
  423148,
  427695,
  430194,
  430762,
  432660,
  432951,
  436065,
  437217,
  437894,
  443268,
  444677,
  448881,
  455533,
  456467,
  456624,
  458967,
  459416,
  462769,
  463409,
  463421,
  465775,
  467393,
  467572,
  467934,
  468954,
  471784,
  477336,
  478538,
  480922,
  482530,
  483718,
  485336,
  485377,
  486493,
  488382,
  488441,
  488713,
  489888,
  493814,
  495098,
  495357,
  495401,
  499037,
  501822,
  502075,
  502487,
  504063,
  504351,
  509135,
  509610,
  510132,
  511302,
  517094,
  517612,
  519800,
  520090,
  520377,
  521624,
  524086,
  524310,
  524796,
  530644,
  532383,
  535105,
  535465,
  536061,
  537216,
  538614,
  539039,
  539208,
  539498,
  539901,
  540082,
  542603,
  544489,
  545955,
  546961,
  551832,
  552353,
  555292,
  556847,
  558321,
  559537,
  561715,
  562523,
  563573,
  564721,
  568859,
  569115,
  569426,
  575218,
  575779,
  576346,
  579542,
  579588,
  579866,
  580256,
  580893,
  581055,
  583617,
  584032,
  586985,
  591447,
  592300,
  592843,
  594322,
  595883,
  595899,
  598396,
  601134,
  602417,
  602515,
  606244,
  607753,
  608850,
  610429,
  610805,
  611690,
  612840,
  614151,
  614813,
  621160,
  621961,
  622388,
  625396,
  631002,
  632998,
  633120,
  641708,
  642176,
  643220,
  655557,
  655852,
  666347,
  666873,
  671556,
  675632,
  677025,
  681486,
  683478,
  683650,
  685248,
  686335,
  686699,
  690218,
  690426,
  693310,
  697785,
  699559,
  702864,
  703719,
  704176,
  705300,
  705393,
  710041,
  710242,
  712451,
  712978,
  713424,
  715097,
  715532,
  718676,
  720239,
  720510,
  723759,
  724767,
  728145,
  730594,
  731643,
  733031,
  735115,
  735533,
  737384,
  740093,
  740490,
  747579,
  747662,
  747677,
  748767,
  749625,
  757811,
  758554,
  761465,
  761935,
  766039,
  769766,
  770231,
  771699,
  773868,
  781202,
  782277,
  784992,
  785741,
  792442,
  793889,
  796273,
  797084,
  797952,
  801395,
  805971,
  807105,
  808672,
  811113,
  811317,
  812444,
  815500,
  817455,
  818373,
  821812,
  831482,
  835229,
  836576,
  838136,
  838735,
  840549,
  841454,
  841947,
  842910,
  843558,
  847655,
  848189,
  848318,
  848407,
  849796,
  851967,
  854117,
  855130,
  857532,
  858761,
  860527,
  860660,
  862974,
  863262,
  870851,
  878623,
  879805,
  880502,
  881853,
  883061,
  886350,
  888854,
  889817,
  891365,
  898707,
  903682,
  904947,
  905346,
  906116,
  907218,
  907794,
  909940,
  913356,
  915295,
  917020,
  919602,
  927589,
  928540,
  935543,
  938745,
  942218,
  947636,
  948040,
  949833,
  956739,
  963785,
  971425,
  982783,
  983296,
  984419,
  988398,
  988873,
  993356,
  996512,
  997913,
  999992
]))