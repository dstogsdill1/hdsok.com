import React from 'react';

export default function PaymentIcons() {
  return (
    <div className="flex items-center gap-3">
      {/* Visa */}
      <div className="w-10 h-6 bg-white rounded flex items-center justify-center overflow-hidden" title="Visa">
        <svg viewBox="0 0 36 11" className="w-full h-full px-1">
          <path fill="#1A1F71" d="M12.236 10.376l1.916-9.168h3.064l-1.916 9.168h-3.064zm-4.244 0l-2.14-7.624c-.084-.36-.344-.588-.796-.588h-4.412l-.06.284c1.64.42 3.132 1.104 4.18 2.26l3.56 6.788h2.868l4.228-10.376h-3.22l-2.38 6.124c-.02.052-.04.052-.06.02l-1.66-4.088zm16.044-9.168h-2.364c-.732 0-1.28.212-1.6.988l-5.62 13.32h3.22l.644-1.78h3.936l.372 1.78h2.84l-2.52-11.988zm-3.608 8.22l1.14-5.464.656 3.144c.112.536.192 1.076.268 1.616l.04.224h-2.104zm11.66-8.22h-2.428c-.66 0-1.16.192-1.452.58l-.044.064-.84 4.012c-.14.664.344 1.084 1.084 1.224.72.136.96.244.96.548 0 .296-.356.432-1.14.432-1.064 0-1.632-.16-2.504-.548l-.348-.164-.36 2.228c.604.276 1.72.516 2.88.516 2.708 0 4.472-1.324 4.48-3.372.012-1.124-.668-1.98-2.132-2.684-.888-.452-1.432-.76-1.432-1.224 0-.42.464-.848 1.472-.848.844-.028 1.46.18 1.932.388l.232.112.356-2.204c-.588-.208-1.296-.364-2.06-.364z"/>
        </svg>
      </div>

      {/* Mastercard */}
      <div className="w-10 h-6 bg-white rounded flex items-center justify-center overflow-hidden" title="Mastercard">
        <svg viewBox="0 0 24 15" className="w-full h-full px-1">
          <rect fill="#252525" width="24" height="15" rx="1" />
          <circle fill="#EB001B" cx="9" cy="7.5" r="5.5" />
          <circle fill="#F79E1B" cx="15" cy="7.5" r="5.5" />
          <path fill="#FF5F00" d="M12,11.8c-1.7,0-3.2-0.9-4.2-2.3c-0.4-0.5-0.7-1.1-0.8-1.7c-0.1-0.6-0.1-1.2,0-1.8c0.1-0.6,0.4-1.2,0.8-1.7C8.8,2.9,10.3,2,12,2c1.7,0,3.2,0.9,4.2,2.3c0.4,0.5,0.7,1.1,0.8,1.7c0.1,0.6,0.1,1.2,0,1.8c-0.1,0.6-0.4,1.2-0.8,1.7C15.2,10.9,13.7,11.8,12,11.8z" />
        </svg>
      </div>

      {/* Amex */}
      <div className="w-10 h-6 bg-[#006FCF] rounded flex items-center justify-center overflow-hidden" title="American Express">
        <svg viewBox="0 0 24 24" className="w-full h-full p-1">
          <path fill="#FFF" d="M4.5 4.5h15v15h-15z" opacity="0"/>
          <path fill="#FFF" d="M14.24 10.42h-1.6l-.68 1.66h-1.2l2.1-4.86h1.96l2.12 4.86h-1.24l-.66-1.66zm-.44-1.12l-.36-.92-.38.92h.74zm-5.6-2.22h-2.6v4.86h1.22v-1.84h1.16v-1.06h-1.16v-1.02h1.38v-.94zm11.56 0h-1.4l-1.16 2.82-1.12-2.82h-1.38l1.82 4.1-1.02 2.36h1.36l.46-1.18.48 1.18h1.38l-2.4-5.36 1.98-1.1zm-15.56 0h-1.22l-1.76 4.86h1.28l.32-1.02h1.56l.34 1.02h1.28l-1.8-4.86zm-1.26 2.9l.52-1.64.5 1.64h-1.02zm10.38-2.9h-2.7v4.86h2.7v-.94h-1.48v-1.02h1.36v-1.06h-1.36v-.9h1.48v-.94z"/>
        </svg>
      </div>

      {/* Discover */}
      <div className="w-10 h-6 bg-white rounded flex items-center justify-center overflow-hidden" title="Discover">
        <svg viewBox="0 0 24 15" className="w-full h-full px-1">
          <path fill="#FF6000" d="M2.5 11.5h19v-8h-19z" opacity="0"/>
          <path fill="#F47321" d="M12 7.5a4 4 0 1 1 0-0.01"/>
          <path fill="#4D4D4D" d="M2.5 10.5h2.5v-6h-2.5v6zm3.5 0h2.5v-6h-2.5v6zm3.5 0h2.5v-6h-2.5v6zm10-6v6h2.5v-6h-2.5zm-3.5 6h2.5v-1.5h-1.5v-1h1.5v-1.5h-1.5v-1h1.5v-1h-2.5v6z"/>
        </svg>
      </div>

      {/* Stripe Badge */}
      <div className="ml-2 px-2 py-1 bg-white/10 rounded border border-white/20 flex items-center gap-1">
        <span className="text-[10px] text-gray-400 font-medium">Powered by</span>
        <svg viewBox="0 0 32 13" className="h-3 w-auto">
          <path fill="#fff" d="M12.3 12.6c-2.6 0-4.6-2-4.6-4.6s2-4.6 4.6-4.6c1.3 0 2.5.5 3.4 1.4l-1.6 1.6c-.5-.5-1.1-.7-1.8-.7-1.4 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4c.7 0 1.4-.3 1.8-.8l1.6 1.5c-.9 1-2.1 1.4-3.4 1.4zM29.6 3.5h2.3v9.1h-2.3V3.5zm-16.8 9.1h-2.3V3.5h2.3v9.1zm-5.6-2.8c0-1.2-.9-1.9-2.6-1.9-1 0-1.8.3-2.4.8l-.9-1.6c.8-.7 2-1.1 3.4-1.1 3 0 4.8 1.6 4.8 4.2v4.1h-2.2v-1c-.6.7-1.5 1.1-2.5 1.1-1.8 0-3.1-1.2-3.1-2.9 0-1.9 1.5-3 4.2-3h1.3v-.2c0-.3-.2-.5-.6-.5-.7 0-1.3.3-1.7.7l-1.4-1.3c.7-.8 1.8-1.3 3.1-1.3 2.1 0 3.6 1.1 3.6 3.3v.3h-1.3c-1.5 0-2.2.5-2.2 1.4 0 .8.6 1.3 1.5 1.3.9 0 1.8-.5 2.2-1.3v1.1zm11.2-6.3h2.2v1.1c.6-.8 1.5-1.3 2.5-1.3.2 0 .4 0 .6.1v2.3c-.2-.1-.5-.1-.8-.1-1.6 0-2.4 1-2.4 2.8v4.2h-2.2V3.5zM2.2 3.5h2.3v1.2C5.1 3.9 6 3.4 7 3.4c1.8 0 2.9 1.3 2.9 3.5 0 2.3-1.2 3.7-3 3.7-1 0-1.9-.5-2.4-1.3v3.9H2.2V3.5zm2.3 4.6c0 1.3.6 2 1.6 2 .9 0 1.5-.7 1.5-1.9 0-1.2-.6-1.9-1.5-1.9-1 0-1.6.7-1.6 1.8z"/>
        </svg>
      </div>
    </div>
  );
}
