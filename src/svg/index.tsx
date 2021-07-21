import React from "react";
import { SvgXml } from "react-native-svg";

type SvgProps = {
  alterColor: boolean
}

export const OnbordingSvg: React.FC = () => {
  const data = `<svg width="50" height="57" viewBox="0 0 50 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M33.8534 4.80666C34.0954 2.64506 32.5629 0.69317 30.4013 0.451201C28.2397 0.193099 26.2878 1.74171 26.0458 3.9033C25.7555 6.3714 26.1587 9.32343 26.6749 12.3561C28.1106 12.7917 29.4979 13.4208 30.7884 14.1628C32.1757 10.8882 33.5308 7.64577 33.8534 4.80666ZM49.033 14.2919C48.178 12.2916 45.8551 11.3882 43.8548 12.2432C41.2254 13.3885 38.4992 15.6308 35.7569 17.9376C36.7893 18.9538 37.7572 20.0992 38.5799 21.3413C41.6932 20.9541 44.6775 20.4863 46.9843 19.4862C48.9846 18.5989 49.9041 16.276 49.033 14.2919ZM42.403 3.74199C40.6608 2.45148 38.1927 2.80637 36.9022 4.54856C34.9342 7.19409 33.6114 11.1463 32.1757 15.0017C32.6597 15.3243 33.1113 15.6469 33.5469 15.9857C33.8695 16.2438 34.2083 16.518 34.547 16.7922C37.8378 14.308 41.2577 11.8883 43.2257 9.24277C44.5162 7.50059 44.1452 5.0325 42.403 3.74199Z" fill="white"/>
    <path d="M34.9181 35.3271C33.7082 36.6337 32.4177 37.8436 31.0466 39.0212C29.1269 40.6827 27.175 42.2958 25.1909 43.8444C23.0615 42.5378 21.5291 41.8764 21.271 42.2152C21.0451 42.5217 21.9324 43.6509 23.5294 45.1188C18.1738 49.1032 12.5117 52.6199 6.43015 55.5074C5.4784 55.9591 4.47826 56.2817 3.49425 56.6366C3.23615 56.7334 2.96192 56.7334 2.849 56.7495C1.30039 56.9269 0.832581 56.5075 0.897107 55.088C1.09068 50.668 2.46185 46.5222 3.8814 42.3926C4.26855 41.2634 4.67184 40.1342 5.09125 39.005C7.23672 40.3117 8.76919 40.9892 9.0273 40.6504C9.30153 40.2794 8.01102 38.7953 5.84942 36.9402C7.39803 32.9397 9.12408 29.0036 11.1566 25.2289C15.2217 28.2454 18.8351 30.2296 19.2384 29.6811C19.6417 29.1327 16.6574 26.2129 12.5439 23.1641L12.3665 23.035C13.0763 21.8252 13.8183 20.6153 14.6087 19.4377C15.5927 17.9537 16.8026 16.5986 17.9963 15.2759C19.5933 13.5175 21.6581 12.9207 23.9649 13.4369C31.3531 15.0823 36.4828 19.3248 38.9025 26.6C39.3865 28.0841 38.9509 29.5359 38.1927 30.8748C37.6765 31.7782 37.1119 32.6332 36.4828 33.4397C32.579 30.5845 29.1915 28.7455 28.8043 29.2617C28.4333 29.7779 31.1272 32.4396 34.9181 35.3271Z" fill="white"/>
    </svg>
    `;

  return <SvgXml xml={data} />;
};

export const GoogleSvg: React.FC = () => {
  const data = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M23.9288 12.5172C23.9288 11.5279 23.8507 10.8059 23.6816 10.0573H12.6865V14.5226H19.1404C19.0103 15.6323 18.3077 17.3035 16.7462 18.4264L16.7243 18.5759L20.2008 21.3431L20.4416 21.3678C22.6536 19.2687 23.9288 16.1804 23.9288 12.5172Z" fill="white"/>
  <path d="M12.6866 24.2822C15.8485 24.2822 18.5029 23.2126 20.4417 21.3677L16.7463 18.4264C15.7574 19.1349 14.4302 19.6296 12.6866 19.6296C9.58978 19.6296 6.96139 17.5307 6.02444 14.6295L5.8871 14.6415L2.27225 17.5159L2.22498 17.6509C4.15072 21.5815 8.10636 24.2822 12.6866 24.2822Z" fill="white"/>
  <path d="M6.02441 14.6295C5.77719 13.8808 5.63411 13.0786 5.63411 12.2497C5.63411 11.4208 5.77719 10.6186 6.0114 9.86997L6.00485 9.71052L2.3447 6.78992L2.22495 6.84844C1.43125 8.47953 0.97583 10.3112 0.97583 12.2497C0.97583 14.1883 1.43125 16.0198 2.22495 17.6509L6.02441 14.6295Z" fill="white"/>
  <path d="M12.687 4.86993C14.8859 4.86993 16.3693 5.84589 17.2151 6.66148L20.5201 3.34585C18.4903 1.40729 15.8488 0.217407 12.687 0.217407C8.10672 0.217407 4.15109 2.91801 2.22534 6.84858L6.0118 9.8701C6.96175 6.96895 9.59014 4.86993 12.687 4.86993Z" fill="white"/>
  </svg>
  `;

  return <SvgXml xml={data} />;
};

export const FacebookSvg: React.FC = () => {
  const data = `<svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.5494 4.04632H12.6875V0.219994C12.3187 0.167854 11.05 0.0505371 9.57249 0.0505371C6.48964 0.0505371 4.3778 2.04291 4.3778 5.70479V9.07488H0.97583V13.3524H4.3778V24.1155H8.54877V13.3534H11.8131L12.3313 9.07589H8.5478V6.12893C8.54877 4.8926 8.87277 4.04632 10.5494 4.04632Z" fill="white"/>
  </svg>
  `;

  return <SvgXml xml={data} />;
};

export const CarrotSvg: React.FC = () => {
  const data = `<svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5275 2.68899C18.6597 1.5079 17.8223 0.441392 16.6413 0.30918C15.4602 0.168154 14.3937 1.01431 14.2614 2.1954C14.1028 3.54397 14.3231 5.15695 14.6052 6.81401C15.3896 7.05199 16.1477 7.39574 16.8528 7.80119C17.6108 6.01192 18.3512 4.24028 18.5275 2.68899ZM26.8216 7.8717C26.3544 6.77875 25.0852 6.28516 23.9922 6.75231C22.5555 7.37811 21.0659 8.60328 19.5675 9.8637C20.1317 10.419 20.6605 11.0448 21.11 11.7235C22.8111 11.5119 24.4418 11.2563 25.7022 10.7099C26.7951 10.2251 27.2975 8.95584 26.8216 7.8717ZM23.199 2.10726C22.247 1.40213 20.8985 1.59604 20.1933 2.54797C19.118 3.99349 18.3953 6.15295 17.6108 8.25952C17.8752 8.43581 18.122 8.61209 18.36 8.79719C18.5363 8.93821 18.7214 9.08805 18.9065 9.23789C20.7046 7.88052 22.5732 6.5584 23.6485 5.11288C24.3536 4.16095 24.1509 2.81239 23.199 2.10726Z" fill="#53B175"/>
  <path d="M19.109 19.3653C18.4479 20.0793 17.7428 20.7403 16.9936 21.3838C15.9447 22.2916 14.8782 23.173 13.7941 24.0192C12.6306 23.3052 11.7933 22.9439 11.6522 23.129C11.5288 23.2964 12.0136 23.9134 12.8862 24.7155C9.95992 26.8926 6.86616 28.8141 3.54323 30.3918C3.0232 30.6386 2.47672 30.8149 1.93906 31.0088C1.79804 31.0617 1.6482 31.0617 1.5865 31.0705C0.74034 31.1674 0.484731 30.9383 0.519987 30.1626C0.625757 27.7476 1.37496 25.4823 2.1506 23.2259C2.36214 22.6089 2.58249 21.9919 2.81166 21.3749C3.98394 22.0889 4.82128 22.4591 4.96231 22.274C5.11215 22.0713 4.40702 21.2604 3.22593 20.2467C4.07208 18.0608 5.01519 15.9102 6.12577 13.8477C8.34694 15.4959 10.3213 16.5801 10.5417 16.2804C10.762 15.9807 9.13139 14.3853 6.88379 12.7195L6.78683 12.6489C7.17466 11.9879 7.58011 11.3268 8.012 10.6834C8.54966 9.8725 9.21072 9.13211 9.86297 8.40935C10.7356 7.44861 11.8638 7.12249 13.1242 7.40454C17.1611 8.30358 19.964 10.6217 21.2861 14.5969C21.5505 15.4078 21.3125 16.201 20.8983 16.9326C20.6162 17.4262 20.3077 17.8934 19.964 18.3341C17.8309 16.774 15.98 15.7692 15.7684 16.0512C15.5657 16.3333 17.0377 17.7876 19.109 19.3653Z" fill="#F3603F"/>
  </svg>
  `
  return <SvgXml xml={data} />
}

export const LocationSvg: React.FC = () => {
  const data = `<svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0204 1.30752C10.1053 0.912343 9.12029 0.704376 8.12349 0.69588C7.11999 0.680341 6.12382 0.869165 5.19562 1.25086C4.26741 1.63255 3.42658 2.19913 2.7243 2.91611C1.29841 4.36011 0.491346 6.30291 0.474387 8.3322C0.45743 10.3615 1.23192 12.3175 2.63347 13.7851L7.2354 18.5485C7.32802 18.6457 7.4391 18.7235 7.56214 18.7772C7.68517 18.8309 7.81769 18.8595 7.95193 18.8614C8.08598 18.8644 8.21914 18.839 8.34265 18.7868C8.46616 18.7346 8.5772 18.6569 8.66846 18.5586L13.3511 13.8659C14.7784 12.4232 15.5873 10.4811 15.6061 8.45183C15.625 6.42254 14.8523 4.46578 13.452 2.99685C12.7624 2.2771 11.9356 1.7027 11.0204 1.30752ZM7.96174 11.0055C9.31078 11.0055 10.4044 9.91191 10.4044 8.56287C10.4044 7.21383 9.31078 6.12022 7.96174 6.12022C6.6127 6.12022 5.51909 7.21383 5.51909 8.56287C5.51909 9.91191 6.6127 11.0055 7.96174 11.0055Z" fill="#4C4F4D"/>
  </svg>
  `

  return <SvgXml xml={data} />
}

export const SearchSvg: React.FC = () => {
  const data = `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.75954 14.5715C9.54747 14.5715 10.3277 14.4164 11.0556 14.1148C11.7836 13.8133 12.445 13.3713 13.0022 12.8142C13.5593 12.257 14.0013 11.5956 14.3028 10.8676C14.6043 10.1397 14.7595 9.35948 14.7595 8.57155C14.7595 7.78362 14.6043 7.0034 14.3028 6.27545C14.0013 5.54749 13.5593 4.88606 13.0022 4.32891C12.445 3.77176 11.7836 3.3298 11.0556 3.02827C10.3277 2.72674 9.54747 2.57155 8.75954 2.57155C7.16824 2.57155 5.64211 3.20369 4.5169 4.32891C3.39168 5.45413 2.75954 6.98025 2.75954 8.57155C2.75954 10.1628 3.39168 11.689 4.5169 12.8142C5.64211 13.9394 7.16824 14.5715 8.75954 14.5715ZM15.0795 13.4775L18.6595 17.0575C18.755 17.1499 18.8311 17.2603 18.8834 17.3823C18.9357 17.5043 18.9632 17.6356 18.9643 17.7684C18.9653 17.9011 18.9399 18.0328 18.8896 18.1557C18.8392 18.2785 18.7649 18.3901 18.6709 18.4839C18.577 18.5778 18.4653 18.6519 18.3423 18.7021C18.2194 18.7523 18.0877 18.7775 17.9549 18.7763C17.8221 18.775 17.6909 18.7474 17.569 18.6949C17.447 18.6424 17.3367 18.5661 17.2445 18.4705L13.6645 14.8905C12.057 16.1384 10.0343 16.7267 8.00829 16.5357C5.98225 16.3448 4.10514 15.3889 2.75909 13.8626C1.41303 12.3364 0.699221 10.3545 0.762962 8.32047C0.826703 6.28645 1.66321 4.35317 3.10218 2.91419C4.54116 1.47522 6.47444 0.638715 8.50846 0.574974C10.5425 0.511233 12.5243 1.22504 14.0506 2.5711C15.5768 3.91715 16.5328 5.79426 16.7237 7.8203C16.9147 9.84634 16.3264 11.869 15.0785 13.4765L15.0795 13.4775Z" fill="#181B19"/>
  </svg>
  `

  return <SvgXml xml={data} />
}

export const MaisSvg: React.FC = () => {
  const data = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5527 8.62971C17.5527 9.00554 17.4086 9.36885 17.1392 9.63193C16.876 9.90127 16.5126 10.0516 16.1366 10.0516H10.472V15.7141C10.472 16.0899 10.3216 16.4532 10.0522 16.7163C9.789 16.9794 9.43183 17.1297 9.05587 17.1297C8.6799 17.1297 8.31646 16.9794 8.05329 16.7163C7.78384 16.4532 7.63346 16.0899 7.63346 15.7141V10.0516H1.96888C1.59291 10.0516 1.22948 9.90127 0.966299 9.63193C0.703121 9.36885 0.552734 9.00554 0.552734 8.62971C0.552734 8.25389 0.703121 7.89685 0.966299 7.6275C1.22948 7.36442 1.59291 7.21409 1.96888 7.21409H7.63346V1.5516C7.63346 1.17577 7.78384 0.812471 8.05329 0.549391C8.31646 0.280047 8.6799 0.129715 9.05587 0.129715C9.43183 0.129715 9.789 0.280047 10.0522 0.549391C10.3216 0.812471 10.472 1.17577 10.472 1.5516V7.21409H16.1366C16.5126 7.21409 16.876 7.36442 17.1392 7.6275C17.4086 7.89685 17.5527 8.25389 17.5527 8.62971Z" fill="white"/>
  </svg>
  `
  
  return <SvgXml xml={data} />
}

export const ShopSvg: React.FC<SvgProps> = ({ alterColor }) => {

  const color = alterColor ? '#53B175' : '#181725';

  const data = `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 7.75407C7.53 8.22907 8.232 8.51807 9 8.51807H11C11.7381 8.51909 12.4505 8.24695 13 7.75407H7ZM7 7.75407C6.45054 8.24695 5.73814 8.51909 5 8.51807L7 7.75407ZM6.05 2.51807V2.46807H6H3C2.72153 2.46807 2.45445 2.57869 2.25754 2.7756C2.06063 2.97252 1.95 3.23959 1.95 3.51807V5.51807C1.95 5.79654 2.06063 6.06362 2.25754 6.26053C2.45445 6.45744 2.72153 6.56807 3 6.56807H5C5.27848 6.56807 5.54555 6.45744 5.74247 6.26053C5.93938 6.06362 6.05 5.79654 6.05 5.51807V2.51807ZM3.01 8.46807H2.96V8.51807V18.4831V18.5331H3.01H5H5.05V18.4831V13.5181C5.05 13.0009 5.25545 12.5049 5.62114 12.1392C5.98684 11.7735 6.48283 11.5681 7 11.5681H9C9.51717 11.5681 10.0132 11.7735 10.3789 12.1392C10.7446 12.5049 10.95 13.0009 10.95 13.5181V18.4831V18.5331H11H17.013H17.063V18.4831V8.51807V8.46807H17.013H15C14.2448 8.46807 13.5545 8.18391 13.0334 7.71683L13 7.68691L12.9666 7.71685C12.4263 8.20148 11.7259 8.46907 11.0001 8.46807H11H9C8.24476 8.46807 7.55454 8.18391 7.03337 7.71683L6.99999 7.68691L6.96662 7.71685C6.42634 8.20148 5.72586 8.46907 5.00007 8.46807H5H3.01ZM1.00817 7.69519C0.711731 7.42442 0.473701 7.09573 0.308902 6.72925C0.137674 6.34848 0.0494202 5.93564 0.0500029 5.51814V5.51807V3.51807C0.0500029 2.73568 0.360806 1.98533 0.914038 1.4321C1.46727 0.878869 2.21761 0.568066 3 0.568066H17C17.7824 0.568066 18.5327 0.878869 19.086 1.4321C19.6392 1.98533 19.95 2.73568 19.95 3.51807V5.51807C19.95 6.3854 19.5764 7.1661 18.9795 7.70598L18.963 7.72087V7.74307V18.4831C18.963 19.0002 18.7576 19.4962 18.3919 19.8619C18.0262 20.2276 17.5302 20.4331 17.013 20.4331H9.373V20.4322L9.36371 20.4339C9.2438 20.4566 9.12203 20.468 8.99999 20.4681H7C6.87798 20.468 6.75621 20.4566 6.63629 20.4339L6.63646 20.4331H6.627H3.011C2.49383 20.4331 1.99784 20.2276 1.63214 19.8619C1.26645 19.4962 1.061 19.0002 1.061 18.4831V7.76307V7.64237L1.00817 7.69519ZM9.05 13.5181V13.4681H9H7H6.95V13.5181V18.4831V18.5331H7H9V18.4841H9.05V18.4831V18.4331V13.5181ZM12.05 2.51807V2.46807H12H8H7.95V2.51807V5.51807C7.95 5.79654 8.06063 6.06362 8.25754 6.26053C8.45445 6.45744 8.72153 6.56807 9 6.56807H11C11.2785 6.56807 11.5456 6.45744 11.7425 6.26053C11.9394 6.06362 12.05 5.79654 12.05 5.51807V2.51807ZM14 2.46807H13.95V2.51807V5.51807C13.95 5.79654 14.0606 6.06362 14.2575 6.26053C14.4545 6.45744 14.7215 6.56807 15 6.56807H17C17.2785 6.56807 17.5456 6.45744 17.7425 6.26053C17.9394 6.06362 18.05 5.79654 18.05 5.51807V3.51807C18.05 3.23959 17.9394 2.97252 17.7425 2.7756C17.5456 2.57869 17.2785 2.46807 17 2.46807H14ZM14 11.5681H15C15.252 11.5681 15.4936 11.6682 15.6718 11.8463C15.8499 12.0245 15.95 12.2661 15.95 12.5181V15.5181C15.95 15.77 15.8499 16.0117 15.6718 16.1898C15.4936 16.368 15.252 16.4681 15 16.4681H14C13.748 16.4681 13.5064 16.368 13.3283 16.1898C13.1501 16.0117 13.05 15.77 13.05 15.5181V12.5181C13.05 12.2661 13.1501 12.0245 13.3283 11.8463C13.5064 11.6682 13.748 11.5681 14 11.5681Z" fill="${color}" stroke="white" stroke-width="0.1"/>
  </svg>
  `
  return <SvgXml xml={data} />
}

export const ExploreSvg: React.FC<SvgProps> = ({ alterColor }) => {

  const color = alterColor ? '#53B175' : '#181725';

  const data = `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.56496 14.2376C9.35289 14.2376 10.1331 14.0824 10.8611 13.7808C11.589 13.4793 12.2504 13.0374 12.8076 12.4802C13.3647 11.9231 13.8067 11.2616 14.1082 10.5337C14.4098 9.80571 14.565 9.0255 14.565 8.23756C14.565 7.44963 14.4098 6.66942 14.1082 5.94146C13.8067 5.21351 13.3647 4.55207 12.8076 3.99492C12.2504 3.43777 11.589 2.99581 10.8611 2.69429C10.1331 2.39276 9.35289 2.23756 8.56496 2.23756C6.97366 2.23756 5.44753 2.8697 4.32232 3.99492C3.1971 5.12014 2.56496 6.64627 2.56496 8.23756C2.56496 9.82886 3.1971 11.355 4.32232 12.4802C5.44753 13.6054 6.97366 14.2376 8.56496 14.2376ZM14.885 13.1436L18.465 16.7236C18.5604 16.8159 18.6365 16.9263 18.6888 17.0483C18.7411 17.1704 18.7686 17.3016 18.7697 17.4344C18.7708 17.5672 18.7454 17.6988 18.695 17.8217C18.6446 17.9445 18.5703 18.0561 18.4763 18.15C18.3824 18.2438 18.2707 18.318 18.1477 18.3682C18.0248 18.4183 17.8931 18.4436 17.7603 18.4423C17.6276 18.4411 17.4964 18.4134 17.3744 18.3609C17.2524 18.3084 17.1421 18.2321 17.05 18.1366L13.47 14.5566C11.8624 15.8044 9.83975 16.3927 7.81371 16.2018C5.78767 16.0108 3.91056 15.0549 2.56451 13.5286C1.21845 12.0024 0.504641 10.0205 0.568382 7.98649C0.632123 5.95247 1.46863 4.01919 2.9076 2.58021C4.34658 1.14123 6.27986 0.304731 8.31388 0.24099C10.3479 0.177248 12.3298 0.89106 13.856 2.23711C15.3823 3.58317 16.3382 5.46028 16.5292 7.48632C16.7201 9.51236 16.1318 11.535 14.884 13.1426L14.885 13.1436Z" fill="${color}" />
  </svg>
  `
  return <SvgXml xml={data} />
}

export const CartSvg: React.FC<SvgProps> = ({ alterColor }) => {

  const color = alterColor ? '#53B175' : '#181725';

  const data = `<svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.22593 20.5181C8.57738 20.5181 7.95539 20.2604 7.4968 19.8018C7.03821 19.3432 6.78057 18.7212 6.78057 18.0727C6.78057 17.4241 7.03821 16.8021 7.4968 16.3436C7.95539 15.885 8.57738 15.6273 9.22593 15.6273C9.87448 15.6273 10.4965 15.885 10.9551 16.3436C11.4137 16.8021 11.6713 17.4241 11.6713 18.0727C11.6713 18.7212 11.4137 19.3432 10.9551 19.8018C10.4965 20.2604 9.87448 20.5181 9.22593 20.5181ZM17.7847 20.5181C17.1362 20.5181 16.5142 20.2604 16.0556 19.8018C15.597 19.3432 15.3393 18.7212 15.3393 18.0727C15.3393 17.4241 15.597 16.8021 16.0556 16.3436C16.5142 15.885 17.1362 15.6273 17.7847 15.6273C18.4333 15.6273 19.0552 15.885 19.5138 16.3436C19.9724 16.8021 20.2301 17.4241 20.2301 18.0727C20.2301 18.7212 19.9724 19.3432 19.5138 19.8018C19.0552 20.2604 18.4333 20.5181 17.7847 20.5181ZM1.84338 3.30636C1.53815 3.29651 1.24872 3.16834 1.03629 2.94895C0.823853 2.72955 0.705078 2.43614 0.705078 2.13075C0.705078 1.82536 0.823853 1.53195 1.03629 1.31255C1.24872 1.09316 1.53815 0.964984 1.84338 0.955139L3.25069 0.955139C4.35355 0.955139 5.30724 1.72054 5.54688 2.7965L7.0789 9.69487C7.31855 10.7708 8.27224 11.5362 9.3751 11.5362H18.5599L20.323 4.48135H8.89703C8.59468 4.46756 8.30928 4.33774 8.10019 4.11889C7.89111 3.90005 7.77443 3.60903 7.77443 3.30636C7.77443 3.00369 7.89111 2.71266 8.10019 2.49382C8.30928 2.27498 8.59468 2.14516 8.89703 2.13136H20.323C20.6804 2.13125 21.0332 2.21264 21.3544 2.36933C21.6757 2.52603 21.957 2.7539 22.177 3.03564C22.3969 3.31737 22.5498 3.64554 22.6238 3.99521C22.6979 4.34488 22.6913 4.70684 22.6045 5.05357L20.8414 12.106C20.7143 12.6149 20.4207 13.0666 20.0073 13.3894C19.5939 13.7122 19.0844 13.8875 18.5599 13.8874H9.3751C8.305 13.8876 7.26686 13.5227 6.43212 12.8532C5.59738 12.1836 5.01598 11.2494 4.78393 10.2047L3.25069 3.30636H1.84338Z" fill="${color}" />
  </svg>
  `
  return <SvgXml xml={data} />
}

export const FavouriteSvg: React.FC<SvgProps> = ({ alterColor }) => {

  const color = alterColor ? '#53B175' : '#181725';

  const data = `<svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.97914 9.00969L11.8032 16.8338L19.6273 9.00969C20.3191 8.31794 20.7077 7.37973 20.7077 6.40145C20.7077 5.42317 20.3191 4.48496 19.6273 3.79321C19.2848 3.4507 18.8782 3.179 18.4307 2.99363C17.9831 2.80826 17.5035 2.71285 17.0191 2.71285C16.0408 2.71285 15.1026 3.10147 14.4109 3.79321L11.8032 6.40084L9.19562 3.79444C8.50211 3.11198 7.56702 2.7312 6.59403 2.73504C5.62105 2.73889 4.68899 3.12705 4.0009 3.81498C3.31281 4.50291 2.92443 5.43487 2.92035 6.40786C2.91628 7.38084 3.29684 8.31602 3.97914 9.00969ZM10.934 2.05357L11.8032 2.92278L12.6724 2.05357C13.2424 1.47865 13.9202 1.02196 14.6671 0.709714C15.414 0.397469 16.2152 0.23582 17.0247 0.234047C17.8342 0.232274 18.6361 0.390413 19.3843 0.699384C20.1326 1.00836 20.8124 1.46207 21.3848 2.03449C21.9573 2.60691 22.411 3.28675 22.7199 4.03499C23.0289 4.78323 23.1871 5.58513 23.1853 6.39465C23.1835 7.20417 23.0219 8.00536 22.7096 8.75224C22.3974 9.49912 21.9407 10.177 21.3658 10.7469L12.6737 19.4402C12.5595 19.5545 12.4239 19.6452 12.2747 19.707C12.1254 19.7689 11.9654 19.8008 11.8039 19.8008C11.6423 19.8008 11.4823 19.7689 11.3331 19.707C11.1838 19.6452 11.0482 19.5545 10.934 19.4402L2.24072 10.7481C1.65799 10.18 1.19385 9.50191 0.875231 8.75306C0.556614 8.00421 0.389862 7.19955 0.384648 6.38576C0.379434 5.57196 0.535861 4.76523 0.844856 4.01237C1.15385 3.2595 1.60926 2.57548 2.18467 1.99999C2.76009 1.42449 3.44404 0.968985 4.19687 0.659884C4.94969 0.350782 5.7564 0.19424 6.57019 0.199339C7.38399 0.204438 8.18867 0.371077 8.93756 0.689588C9.68646 1.0081 10.3646 1.47214 10.9328 2.0548L10.934 2.05357Z" fill="${color}" />
  </svg>
  `
  return <SvgXml xml={data} />
}

export const AccountSvg: React.FC<SvgProps> = ({ alterColor }) => {

  const color = alterColor ? '#53B175' : '#181725';

  const data = `<svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.9097 10.5881C5.05053 10.5356 5.20197 10.5083 5.35508 10.5078C5.50819 10.5074 5.65986 10.5337 5.80112 10.5853C5.94237 10.6368 6.07036 10.7126 6.1775 10.8081C6.28464 10.9036 6.36877 11.0168 6.4249 11.1412C6.48104 11.2656 6.50805 11.3985 6.50433 11.5321C6.50062 11.6657 6.46625 11.7974 6.40327 11.9192C6.34028 12.041 6.24996 12.1506 6.13764 12.2415C6.02531 12.3323 5.89327 12.4025 5.74931 12.4481C4.98363 12.7114 4.32647 13.1699 3.86334 13.7638C3.40021 14.3577 3.15255 15.0596 3.15259 15.7781V17.5181C3.15259 17.7833 3.27327 18.0376 3.48808 18.2252C3.70289 18.4127 3.99424 18.5181 4.29803 18.5181H13.4616C13.7654 18.5181 14.0567 18.4127 14.2715 18.2252C14.4864 18.0376 14.607 17.7833 14.607 17.5181V15.8711C14.6072 15.1295 14.3492 14.4055 13.8672 13.7949C13.3853 13.1843 12.7021 12.716 11.9084 12.4521C11.7635 12.4082 11.6302 12.3394 11.5164 12.2497C11.4026 12.16 11.3106 12.0513 11.2458 11.9299C11.181 11.8086 11.1447 11.6772 11.1392 11.5434C11.1337 11.4096 11.159 11.2763 11.2136 11.1512C11.2682 11.0261 11.351 10.9119 11.4571 10.8152C11.5632 10.7186 11.6905 10.6416 11.8313 10.5887C11.9722 10.5358 12.1238 10.5081 12.2771 10.5074C12.4304 10.5066 12.5824 10.5326 12.7239 10.5841C13.9514 10.9922 15.0078 11.7164 15.7532 12.6606C16.4986 13.6047 16.8978 14.7244 16.8979 15.8711V17.5181C16.8979 18.3137 16.5359 19.0768 15.8915 19.6394C15.247 20.202 14.373 20.5181 13.4616 20.5181H4.29803C3.38666 20.5181 2.51261 20.202 1.86817 19.6394C1.22374 19.0768 0.861694 18.3137 0.861694 17.5181L0.861694 15.7781C0.861852 14.6582 1.24803 13.5643 1.96998 12.6387C2.69194 11.7131 3.71626 10.9985 4.9097 10.5881ZM8.87981 0.518066C10.095 0.518066 11.2604 0.939494 12.1196 1.68964C12.9789 2.43978 13.4616 3.4572 13.4616 4.51807V6.51807C13.4616 7.57893 12.9789 8.59635 12.1196 9.34649C11.2604 10.0966 10.095 10.5181 8.87981 10.5181C7.66465 10.5181 6.49925 10.0966 5.64 9.34649C4.78075 8.59635 4.29803 7.57893 4.29803 6.51807V4.51807C4.29803 3.4572 4.78075 2.43978 5.64 1.68964C6.49925 0.939494 7.66465 0.518066 8.87981 0.518066ZM8.87981 2.51807C8.27223 2.51807 7.68953 2.72878 7.25991 3.10385C6.83028 3.47893 6.58892 3.98763 6.58892 4.51807V6.51807C6.58892 7.0485 6.83028 7.55721 7.25991 7.93228C7.68953 8.30735 8.27223 8.51807 8.87981 8.51807C9.4874 8.51807 10.0701 8.30735 10.4997 7.93228C10.9293 7.55721 11.1707 7.0485 11.1707 6.51807V4.51807C11.1707 3.98763 10.9293 3.47893 10.4997 3.10385C10.0701 2.72878 9.4874 2.51807 8.87981 2.51807Z" fill="${color}" />
  </svg>
  `
  return <SvgXml xml={data} />
}

export const Menos: React.FC = () => {
  const data = `<svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.0166 2.13767C17.0166 2.5135 16.8725 2.8768 16.603 3.13988C16.3399 3.40922 15.9764 3.55956 15.6005 3.55956H9.93588H7.09732H1.43275C1.05678 3.55956 0.693343 3.40922 0.430166 3.13988C0.166989 2.8768 0.0166016 2.5135 0.0166016 2.13767C0.0166016 1.76184 0.166989 1.4048 0.430166 1.13546C0.693343 0.872378 1.05678 0.722046 1.43275 0.722046H7.09732H9.93588H15.6005C15.9764 0.722046 16.3399 0.872378 16.603 1.13546C16.8725 1.4048 17.0166 1.76184 17.0166 2.13767Z" fill="#B3B3B3"/>
  </svg>
  `

  return <SvgXml xml={data} />
}

export const Mais: React.FC = () => {
  const data = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.582 8.72205C17.582 9.09787 17.4379 9.46118 17.1685 9.72426C16.9053 9.9936 16.5419 10.1439 16.1659 10.1439H10.5013V15.8064C10.5013 16.1823 10.3509 16.5456 10.0815 16.8086C9.8183 17.0717 9.46113 17.222 9.08516 17.222C8.7092 17.222 8.34576 17.0717 8.08258 16.8086C7.81314 16.5456 7.66275 16.1823 7.66275 15.8064V10.1439H1.99818C1.62221 10.1439 1.25877 9.9936 0.995596 9.72426C0.732418 9.46118 0.582031 9.09787 0.582031 8.72205C0.582031 8.34622 0.732418 7.98918 0.995596 7.71984C1.25877 7.45676 1.62221 7.30642 1.99818 7.30642H7.66275V1.64393C7.66275 1.2681 7.81314 0.904802 8.08258 0.641722C8.34576 0.372378 8.7092 0.222046 9.08516 0.222046C9.46113 0.222046 9.8183 0.372378 10.0815 0.641722C10.3509 0.904802 10.5013 1.2681 10.5013 1.64393V7.30642H16.1659C16.5419 7.30642 16.9053 7.45676 17.1685 7.71984C17.4379 7.98918 17.582 8.34622 17.582 8.72205Z" fill="#53B175"/>
  </svg>
  `

  return <SvgXml xml={data} />
}

export const Close: React.FC = () => {
  const data = `<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.5445 13.192L14.5436 13.191L10.1518 8.9593L10.1516 8.95907L9.15995 8.01613L14.5436 2.84164C14.6566 2.73306 14.7487 2.61198 14.8067 2.4781C14.8637 2.34655 14.8984 2.20294 14.8984 2.05819C14.8984 1.90653 14.876 1.7615 14.806 1.62615C14.7496 1.49647 14.6699 1.36455 14.5655 1.26422L14.5655 1.26417L14.5635 1.26246C14.4517 1.16569 14.3265 1.07771 14.188 1.02227C14.049 0.966595 13.8889 0.944995 13.7423 0.944995C13.5925 0.944995 13.4441 0.978215 13.2978 1.03231L13.2978 1.03229L13.2966 1.03279C13.1581 1.08824 13.0323 1.17641 12.93 1.27475L6.73109 7.23288C6.62718 7.33274 6.54693 7.45424 6.48986 7.58589L6.48984 7.58588L6.48932 7.5872C6.4329 7.72819 6.39812 7.87145 6.39812 8.01632C6.39812 8.16107 6.43284 8.30468 6.48986 8.43622C6.54693 8.56787 6.62718 8.68938 6.73109 8.78924L12.93 14.7474L12.93 14.7474L12.931 14.7483C13.1493 14.9471 13.4356 15.0455 13.7313 15.0455C14.0294 15.0455 14.3155 14.9245 14.5217 14.7263C14.7389 14.5176 14.8544 14.2525 14.8546 13.9649C14.8659 13.6766 14.7503 13.4007 14.5445 13.192Z" fill="#B3B3B3" stroke="#B3B3B3" stroke-width="0.1"/>
  <path d="M0.990371 2.79865L0.991288 2.79955L5.38312 7.0313L5.38335 7.03153L6.37496 7.97447L0.991332 13.149C0.878359 13.2575 0.786245 13.3786 0.728206 13.5125C0.67118 13.644 0.636462 13.7877 0.636462 13.9324C0.636462 14.0841 0.658902 14.2291 0.728907 14.3644C0.785309 14.4941 0.865047 14.6261 0.969428 14.7264L0.96938 14.7264L0.971365 14.7281C1.08323 14.8249 1.20846 14.9129 1.34691 14.9683C1.48592 15.024 1.64598 15.0456 1.79263 15.0456C1.94242 15.0456 2.09077 15.0124 2.23711 14.9583L2.23711 14.9583L2.23836 14.9578C2.3768 14.9024 2.50257 14.8142 2.60489 14.7159L8.80383 8.75772C8.90773 8.65786 8.98798 8.53636 9.04505 8.40471L9.04507 8.40472L9.0456 8.4034C9.10201 8.26241 9.13679 8.11915 9.13679 7.97428C9.13679 7.82953 9.10208 7.68592 9.04505 7.55438C8.98798 7.42273 8.90773 7.30122 8.80383 7.20136L2.60489 1.24323L2.6049 1.24322L2.6039 1.24231C2.38557 1.04351 2.09933 0.945057 1.80359 0.945057C1.50552 0.945057 1.21941 1.06612 1.01324 1.26428C0.796053 1.47303 0.680538 1.73813 0.680272 2.02568C0.669028 2.31397 0.784589 2.58987 0.990371 2.79865Z" fill="#B3B3B3" stroke="#B3B3B3" stroke-width="0.1"/>
  </svg>
  `

  return <SvgXml xml={data} />
}

export const ArrowR: React.FC = () => {
  const data = `<svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.568532 2.68224C0.371401 2.48224 0.261883 2.21908 0.272835 1.9454C0.272835 1.67171 0.382352 1.41908 0.590436 1.21908C0.787568 1.02961 1.06136 0.913817 1.34611 0.913817C1.63085 0.913817 1.90465 1.00855 2.11273 1.19803L8.31143 7.15592C8.40999 7.25066 8.48666 7.36645 8.54141 7.49277C8.59617 7.61908 8.62903 7.75592 8.62903 7.89277C8.62903 8.02961 8.59617 8.16645 8.54141 8.30329C8.48666 8.42961 8.40999 8.5454 8.31143 8.64013L2.11273 14.598C2.01416 14.6928 1.89369 14.777 1.76227 14.8296C1.6199 14.8822 1.47753 14.9138 1.33516 14.9138C1.19278 14.9138 1.03946 14.8928 0.908036 14.8401C0.776615 14.7875 0.656145 14.7033 0.546628 14.6086C0.448062 14.5138 0.3714 14.3875 0.316641 14.2612C0.25093 14.1349 0.229027 13.998 0.229027 13.8507C0.229027 13.7138 0.261882 13.577 0.316641 13.4507C0.3714 13.3243 0.459014 13.2086 0.568531 13.1033L5.98965 7.89277L4.96019 6.91382L0.568532 2.68224Z" fill="#181725"/>
  </svg>
  `
  return <SvgXml xml={data} />
}

export const Orders: React.FC = () => {
  const data = `<svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.09149 1.14722L1.09149 5.14722V19.1472C1.09149 19.6776 1.30221 20.1864 1.67728 20.5614C2.05235 20.9365 2.56106 21.1472 3.09149 21.1472H17.0915C17.6219 21.1472 18.1306 20.9365 18.5057 20.5614C18.8808 20.1864 19.0915 19.6776 19.0915 19.1472V5.14722L16.0915 1.14722H4.09149Z" stroke="#181725" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.09149 5.14722H19.0915" stroke="#181725" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.0915 9.14722C14.0915 10.2081 13.6701 11.2255 12.9199 11.9756C12.1698 12.7258 11.1524 13.1472 10.0915 13.1472C9.03063 13.1472 8.01321 12.7258 7.26306 11.9756C6.51292 11.2255 6.09149 10.2081 6.09149 9.14722" stroke="#181725" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `

  return <SvgXml xml={data} />
}