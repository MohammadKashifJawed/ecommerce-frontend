import phonePeLogo from '../../assets/phonePe-Logo.wine.svg'
import paytm from '../../assets/Paytm.svg'
import mobikwik from '../../assets/MobiKwik.svg'
import gpay from '../../assets/gpay.svg'
import qr from '../../assets/qr.jpeg'
import { useContext } from 'react'
import { TotalPriceContext } from '@/context/TotalPriceContext'

export default function UpiPayment() {
    const { totalPayableAmount } = useContext(TotalPriceContext)
  const upiApps = [
    { name: "Google Pay", logo: gpay },
    { name: "PhonePe", logo: phonePeLogo },
    { name: "Paytm", logo: paytm },
    { name: "MobiKwik", logo: mobikwik },
  ];

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-slate-100 via-white to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-6 border border-white/30">
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-3xl shadow-lg mb-3">
            ₹
          </div>
          <h1 className="text-2xl font-bold text-slate-800">UPI Payment</h1>
          <p className="text-slate-500 text-sm">Fast, secure & instant</p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-4 mb-6 border">
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Amount</span>
            <span className="text-3xl font-bold text-slate-800">₹{totalPayableAmount}</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">Order #ORD-2026-1459</p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Enter UPI ID
          </label>
          <input
            type="text"
            placeholder="example@upi"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-6">
          <p className="text-sm font-medium text-slate-700 mb-3">Pay using</p>
          <div className="grid grid-cols-2 gap-3">
            {upiApps.map((app) => (
              <button
                key={app.name}
                className="p-4 rounded-2xl border hover:border-indigo-500 hover:bg-indigo-50 transition-all flex flex-col items-center gap-2"
              >
                <img className="text-3xl h-1/2" src={app.logo} alt='err' />
                <span className="text-sm font-medium text-slate-700">
                  {app.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-center border border-dashed">
            <div className="text-center">
              <img className="h-40" src={qr} alt="qr" />
              <p className="text-sm text-slate-500">Scan QR to pay</p>
            </div>
          </div>
        </div>

        <button className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]">
          Pay ₹{totalPayableAmount}
        </button>

        <p className="text-center text-xs text-slate-400 mt-4">
          🔒 100% secure payment powered by UPI
        </p>
      </div>
    </div>
  );
}
