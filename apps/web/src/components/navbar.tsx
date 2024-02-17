"use client";

import Link from "next/link";

import { getToday } from "@acme/utils";

const locatorIcon = (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100%"
    className="h-8 w-8"
    viewBox="0 0 512 512"
  >
    <path
      fill="none"
      stroke="none"
      d="
M1.000000,205.000000
	C1.000000,136.666672 1.000000,68.833336 1.000000,1.000000
	C171.666672,1.000000 342.333344,1.000000 513.000000,1.000000
	C513.000000,171.666672 513.000000,342.333344 513.000000,513.000000
	C342.333344,513.000000 171.666672,513.000000 1.000000,513.000000
	C1.000000,410.500000 1.000000,308.000000 1.000000,205.000000
M354.718292,317.990448
	C354.482178,316.828522 353.665100,315.323608 354.112762,314.565399
	C355.850159,311.622559 358.065765,308.967865 359.967712,306.115448
	C377.602386,279.668274 394.913422,252.982101 405.848602,222.911041
	C409.824554,211.977417 413.569824,200.535553 414.638550,189.066360
	C416.332794,170.884689 414.447662,152.768646 409.251984,134.886139
	C402.026733,110.018120 389.632996,88.346802 372.029419,69.697884
	C357.523041,54.330059 340.460052,42.404659 320.939423,33.861588
	C305.385895,27.054686 289.249207,22.305717 272.503143,21.308908
	C258.568787,20.479464 244.389923,21.567877 230.472214,23.150742
	C208.441132,25.656340 188.455032,34.262539 170.036713,46.471188
	C157.817383,54.570816 146.653488,63.837925 137.173248,75.186813
	C127.912941,86.272423 120.092690,98.143944 113.887535,111.182281
	C106.394264,126.927246 101.654137,143.342484 99.874413,160.720795
	C98.437317,174.753555 98.351494,188.598404 101.699165,202.412643
	C105.904358,219.765411 112.523537,236.189560 121.352638,251.591431
	C134.048965,273.739441 147.431351,295.494171 160.595779,317.542175
	C156.928802,318.470276 152.015808,319.392944 147.319336,320.963165
	C133.775742,325.491272 120.103912,329.747742 106.881348,335.096893
	C88.797913,342.412506 72.524361,352.619812 60.205723,368.270294
	C49.790817,381.502106 46.279030,396.482422 50.195461,412.632507
	C53.537479,426.413971 62.295952,436.841431 73.198616,445.911163
	C90.091705,459.964203 109.722458,468.570435 130.133881,475.434296
	C148.170120,481.499481 166.700531,485.993927 185.723770,488.067505
	C199.889771,489.611664 214.015167,492.521515 228.193222,492.758881
	C259.445526,493.282135 290.734802,494.018188 321.870453,489.162140
	C343.308014,485.818665 364.587067,482.075806 385.086456,474.888855
	C410.688324,465.913055 435.229034,455.063141 453.131714,433.380188
	C463.585938,420.718536 467.218384,406.393494 464.113831,390.261749
	C460.930542,373.721069 450.294342,362.207031 437.732117,352.489563
	C423.468323,341.455841 407.208710,333.742035 390.127594,328.055908
	C378.746796,324.267334 367.081940,321.332031 354.718292,317.990448
z"
    />
    <path
      fill="#006DF0"
      opacity="1.000000"
      stroke="none"
      d="
M355.131256,318.002625
	C367.081940,321.332031 378.746796,324.267334 390.127594,328.055908
	C407.208710,333.742035 423.468323,341.455841 437.732117,352.489563
	C450.294342,362.207031 460.930542,373.721069 464.113831,390.261749
	C467.218384,406.393494 463.585938,420.718536 453.131714,433.380188
	C435.229034,455.063141 410.688324,465.913055 385.086456,474.888855
	C364.587067,482.075806 343.308014,485.818665 321.870453,489.162140
	C290.734802,494.018188 259.445526,493.282135 228.193222,492.758881
	C214.015167,492.521515 199.889771,489.611664 185.723770,488.067505
	C166.700531,485.993927 148.170120,481.499481 130.133881,475.434296
	C109.722458,468.570435 90.091705,459.964203 73.198616,445.911163
	C62.295952,436.841431 53.537479,426.413971 50.195461,412.632507
	C46.279030,396.482422 49.790817,381.502106 60.205723,368.270294
	C72.524361,352.619812 88.797913,342.412506 106.881348,335.096893
	C120.103912,329.747742 133.775742,325.491272 147.319336,320.963165
	C152.015808,319.392944 156.928802,318.470276 160.595779,317.542175
	C147.431351,295.494171 134.048965,273.739441 121.352638,251.591431
	C112.523537,236.189560 105.904358,219.765411 101.699165,202.412643
	C98.351494,188.598404 98.437317,174.753555 99.874413,160.720795
	C101.654137,143.342484 106.394264,126.927246 113.887535,111.182281
	C120.092690,98.143944 127.912941,86.272423 137.173248,75.186813
	C146.653488,63.837925 157.817383,54.570816 170.036713,46.471188
	C188.455032,34.262539 208.441132,25.656340 230.472214,23.150742
	C244.389923,21.567877 258.568787,20.479464 272.503143,21.308908
	C289.249207,22.305717 305.385895,27.054686 320.939423,33.861588
	C340.460052,42.404659 357.523041,54.330059 372.029419,69.697884
	C389.632996,88.346802 402.026733,110.018120 409.251984,134.886139
	C414.447662,152.768646 416.332794,170.884689 414.638550,189.066360
	C413.569824,200.535553 409.824554,211.977417 405.848602,222.911041
	C394.913422,252.982101 377.602386,279.668274 359.967712,306.115448
	C358.065765,308.967865 355.850159,311.622559 354.112762,314.565399
	C353.665100,315.323608 354.482178,316.828522 355.131256,318.002625
M134.129639,125.711601
	C122.526642,154.076721 117.960304,182.995468 130.309158,212.154480
	C137.431320,228.971832 145.407928,245.603134 154.760117,261.267273
	C182.795975,308.225067 217.124802,350.525238 253.594818,391.133301
	C254.563751,392.212250 255.713852,393.128540 257.882538,395.147675
	C259.179962,393.280884 260.203339,391.561523 261.461151,390.035370
	C280.954193,366.383667 301.010376,343.172607 319.852600,319.014343
	C341.082581,291.794617 360.234253,263.097748 375.437683,231.955093
	C387.052795,208.162628 393.684875,183.856903 389.231537,156.713272
	C377.645355,86.094223 308.024414,34.776283 237.696686,46.457813
	C189.611191,54.444881 155.233719,80.923416 134.129639,125.711601
M122.756325,445.928802
	C124.747726,446.626526 126.745453,447.306763 128.729568,448.024628
	C155.691574,457.779327 183.449158,464.002075 212.054749,465.927124
	C228.911926,467.061523 245.825012,467.798035 262.716034,467.859100
	C276.242767,467.907959 289.801025,466.997681 303.295013,465.896820
	C314.031586,465.020935 324.808350,463.796509 335.361389,461.693634
	C354.805481,457.819183 374.068451,453.094818 392.320587,445.024292
	C406.748810,438.644501 421.002594,431.814728 431.543549,419.674591
	C435.262207,415.391815 438.422150,409.874420 439.731018,404.415741
	C441.971191,395.072968 437.444427,387.330505 431.076752,380.510834
	C422.068695,370.863434 410.901611,364.594055 399.170929,359.021515
	C379.945038,349.888428 359.582764,344.417297 338.847961,340.211823
	C337.094208,339.856110 334.402832,341.290100 332.982208,342.721527
	C330.124817,345.600586 327.936646,349.129700 325.309448,352.253632
	C311.062256,369.194824 296.789490,386.114685 282.471863,402.996399
	C277.793335,408.512817 273.074738,414.004852 268.158447,419.307800
	C261.134583,426.884003 252.567261,426.791138 246.030533,419.565948
	C239.723389,412.594574 233.404495,405.633514 227.141403,398.622681
	C222.211624,393.104340 217.172394,387.668762 212.509644,381.929993
	C201.897797,368.869232 191.553375,355.590759 180.900024,342.564545
	C179.754425,341.163788 177.229172,340.048828 175.448364,340.183380
	C171.595993,340.474457 167.784851,341.556152 164.003662,342.501740
	C146.802963,346.803284 129.885254,351.798126 113.784737,359.525787
	C101.214798,365.558899 89.325706,372.446533 80.523582,383.315277
	C77.236465,387.374146 74.946762,393.023132 74.229500,398.226501
	C72.452950,411.114624 80.523140,419.970032 89.788353,426.652924
	C99.856606,433.915070 111.251328,439.338196 122.756325,445.928802
z"
    />
    <path
      fill="#77B9EB"
      opacity="1.000000"
      stroke="none"
      d="
M134.287262,125.367195
	C155.233719,80.923416 189.611191,54.444881 237.696686,46.457813
	C308.024414,34.776283 377.645355,86.094223 389.231537,156.713272
	C393.684875,183.856903 387.052795,208.162628 375.437683,231.955093
	C360.234253,263.097748 341.082581,291.794617 319.852600,319.014343
	C301.010376,343.172607 280.954193,366.383667 261.461151,390.035370
	C260.203339,391.561523 259.179962,393.280884 257.882538,395.147675
	C255.713852,393.128540 254.563751,392.212250 253.594818,391.133301
	C217.124802,350.525238 182.795975,308.225067 154.760117,261.267273
	C145.407928,245.603134 137.431320,228.971832 130.309158,212.154480
	C117.960304,182.995468 122.526642,154.076721 134.287262,125.367195
M265.205444,95.996811
	C263.041901,95.910805 260.879089,95.780655 258.714722,95.745232
	C206.018021,94.882698 166.227142,141.063049 174.834335,193.084702
	C181.741821,234.833420 218.661102,264.070587 262.058990,262.159821
	C310.138824,260.042908 347.439819,213.985718 339.457367,166.592682
	C333.000885,128.259628 305.357941,101.670258 265.205444,95.996811
z"
    />
    <path
      fill="none"
      opacity="1.000000"
      stroke="none"
      d="
M122.411995,445.746002
	C111.251328,439.338196 99.856606,433.915070 89.788353,426.652924
	C80.523140,419.970032 72.452950,411.114624 74.229500,398.226501
	C74.946762,393.023132 77.236465,387.374146 80.523582,383.315277
	C89.325706,372.446533 101.214798,365.558899 113.784737,359.525787
	C129.885254,351.798126 146.802963,346.803284 164.003662,342.501740
	C167.784851,341.556152 171.595993,340.474457 175.448364,340.183380
	C177.229172,340.048828 179.754425,341.163788 180.900024,342.564545
	C191.553375,355.590759 201.897797,368.869232 212.509644,381.929993
	C217.172394,387.668762 222.211624,393.104340 227.141403,398.622681
	C233.404495,405.633514 239.723389,412.594574 246.030533,419.565948
	C252.567261,426.791138 261.134583,426.884003 268.158447,419.307800
	C273.074738,414.004852 277.793335,408.512817 282.471863,402.996399
	C296.789490,386.114685 311.062256,369.194824 325.309448,352.253632
	C327.936646,349.129700 330.124817,345.600586 332.982208,342.721527
	C334.402832,341.290100 337.094208,339.856110 338.847961,340.211823
	C359.582764,344.417297 379.945038,349.888428 399.170929,359.021515
	C410.901611,364.594055 422.068695,370.863434 431.076752,380.510834
	C437.444427,387.330505 441.971191,395.072968 439.731018,404.415741
	C438.422150,409.874420 435.262207,415.391815 431.543549,419.674591
	C421.002594,431.814728 406.748810,438.644501 392.320587,445.024292
	C374.068451,453.094818 354.805481,457.819183 335.361389,461.693634
	C324.808350,463.796509 314.031586,465.020935 303.295013,465.896820
	C289.801025,466.997681 276.242767,467.907959 262.716034,467.859100
	C245.825012,467.798035 228.911926,467.061523 212.054749,465.927124
	C183.449158,464.002075 155.691574,457.779327 128.729568,448.024628
	C126.745453,447.306763 124.747726,446.626526 122.411995,445.746002
z"
    />
    <path
      fill="#016DF0"
      opacity="1.000000"
      stroke="none"
      d="
M265.669189,96.029839
	C305.357941,101.670258 333.000885,128.259628 339.457367,166.592682
	C347.439819,213.985718 310.138824,260.042908 262.058990,262.159821
	C218.661102,264.070587 181.741821,234.833420 174.834335,193.084702
	C166.227142,141.063049 206.018021,94.882698 258.714722,95.745232
	C260.879089,95.780655 263.041901,95.910805 265.669189,96.029839
M227.039459,229.537186
	C228.223434,230.080307 229.437042,230.567368 230.586792,231.175217
	C242.584106,237.517868 255.396378,240.021179 268.544983,236.796509
	C281.134003,233.709076 292.350067,227.916565 301.182098,217.581253
	C309.727905,207.580917 314.843719,196.155380 315.739014,183.558151
	C317.107147,164.307770 310.382751,147.645905 295.358459,134.856598
	C281.691895,123.223000 266.249878,118.055748 248.160599,120.892830
	C235.069656,122.945992 223.596298,128.416000 214.903381,137.927124
	C202.179947,151.848114 195.425644,168.240204 198.920654,187.811096
	C202.112885,205.686630 211.116364,219.427002 227.039459,229.537186
z"
    />
    <path
      fill="none"
      opacity="1.000000"
      stroke="none"
      d="
M226.740753,229.309509
	C211.116364,219.427002 202.112885,205.686630 198.920654,187.811096
	C195.425644,168.240204 202.179947,151.848114 214.903381,137.927124
	C223.596298,128.416000 235.069656,122.945992 248.160599,120.892830
	C266.249878,118.055748 281.691895,123.223000 295.358459,134.856598
	C310.382751,147.645905 317.107147,164.307770 315.739014,183.558151
	C314.843719,196.155380 309.727905,207.580917 301.182098,217.581253
	C292.350067,227.916565 281.134003,233.709076 268.544983,236.796509
	C255.396378,240.021179 242.584106,237.517868 230.586792,231.175217
	C229.437042,230.567368 228.223434,230.080307 226.740753,229.309509
z"
    />
  </svg>
);

const infoIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="hover: translate h-6 w-6 origin-center delay-150 hover:rotate-180	"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
    />
  </svg>
);

export function Navbar() {
  const { localizedToday } = getToday();
  return (
    <div className="navbar px-4">
      <div className="navbar-start flex-1">
        <Link href="/">{locatorIcon}</Link>
        <p className="pl-2 font-semibold">{localizedToday}</p>
      </div>

      <div className="navbar-end">
        <div className="flex-none">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value="dark" />

            {/* sun icon */}
            <svg
              className="swap-on h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
        <div className="flex-none pb-[6px] pl-2">
          <Link href="/about">{infoIcon}</Link>
        </div>
      </div>
    </div>
  );
}
