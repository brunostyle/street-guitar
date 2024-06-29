import { useTheme } from "../../state";

interface IProps {
   big?: boolean;
}

export const Logo = ({ big = false }: IProps) => {
   const { isLight } = useTheme();
   const cls_1 = {
      fill: 'none'
   }
   const cls_2 = {
      fill: isLight ? '#000' : '#fff',
   }
   const cls_3 = {
      fill: '#0072F5'
   }
   return (
      <svg style={big ? { margin: 'auto', width: '2em' } : { width: '1em' }} viewBox="0 0 2341.32 3240.51">
         <path style={cls_1} d="M200.14,277.43" transform="translate(-621.64 -536.3)" />
         <path style={cls_1} d="M1556.38,2063.72l266.38-1.53q630.54,0,630.57-492.36t-630.57-492.36l-868.67-.41" transform="translate(-621.64 -536.3)" />
         <path style={cls_1} d="M2526.75,2917.34q0-509.58-634.88-509.64L1767.72,2410l493.45,808.36,68.47,112.17Q2526.73,3203.68,2526.75,2917.34Z" transform="translate(-621.64 -536.3)" /><polygon style={cls_2} points="1416.97 1.51 1416.97 2.13 1417.36 1.51 1416.97 1.51" /><polygon style={cls_2} points="1418.32 0 1417.36 1.51 1420.25 1.51 1418.32 0" />
         <path style={cls_3} d="M954,3423l-.31-908.64V1902.44L621.64,1361.68l.46,2415.13H1943.69q78,0,150.48-5.81l-207.44-348Z" transform="translate(-621.64 -536.3)" /><path style={cls_2} d="M2816.12,2463.85q-146.88-185.64-410.3-254.82,224.52-82,354.15-259.14t129.57-423.25q0-375.75-261.29-585.22T1891.87,732L745,730.79l177,293.74h0l31.66,52.52h.4l868.67.41q630.54,0,630.57,492.36t-630.57,492.36l-266.38,1.53h-.26L1764.83,2410l2.89-.05,124.15-2.25q634.88,0,634.88,509.64,0,286.38-197.11,413.14h0l201.67,330.37h0q88.53-43.09,161.72-102.15,269.86-218,269.93-624.09Q2963,2649.56,2816.12,2463.85Z" transform="translate(-621.64 -536.3)" /><line style={cls_2} x1="1909.69" y1="3124.57" x2="1909.67" y2="3124.55" /><line style={cls_2} x1="300.39" y1="488.23" x2="300.38" y2="488.23" />
         <path style={cls_2} d="M702.65,665.16" transform="translate(-621.64 -536.3)" />
      </svg>
   )
};
