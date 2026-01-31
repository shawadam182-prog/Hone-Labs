'use client';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  white?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false, white = false }) => {
  const bgColor = white ? "#ffffff" : "#f1f5f9";
  const iconColor = white ? "#334155" : "#475569";
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
       <svg width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 shrink-0">
            <defs>
                <filter id="labsShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodOpacity="0.15"/>
                </filter>
            </defs>

            <rect
                x="2" y="2"
                width="40" height="40"
                rx="10" ry="10"
                fill={bgColor}
                filter="url(#labsShadow)"
            />

            <g>
                <circle
                    cx="22" cy="22" r="13"
                    stroke={iconColor}
                    strokeWidth="2.5"
                    fill="none"
                />
                <circle
                    cx="22" cy="22" r="8"
                    stroke={iconColor}
                    strokeWidth="2"
                    fill="none"
                />
                <circle
                    cx="22" cy="22" r="3.5"
                    stroke={iconColor}
                    strokeWidth="1.5"
                    fill="none"
                />
                <line
                    x1="22" y1="22"
                    x2="34" y2="10"
                    stroke={iconColor}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                />
                <path
                    d="M34 10 L30 11 L33 14 Z"
                    fill={iconColor}
                />
            </g>
       </svg>

       {!iconOnly && (
           <span className={`text-xl font-bold tracking-wide ${white ? "text-white" : "text-slate-900"}`}>
             HONE LABS
           </span>
       )}
    </div>
  );
};

export default Logo;
