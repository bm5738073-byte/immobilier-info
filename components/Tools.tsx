import React, { useState, useContext } from 'react';
import { AppContext } from '../App';
import { DICTIONARY } from '../constants';
import { Calculator, DollarSign, Percent } from 'lucide-react';

const Tools: React.FC = () => {
  const { lang } = useContext(AppContext);
  const t = DICTIONARY[lang];

  // Mortgage State
  const [loanAmount, setLoanAmount] = useState<number>(200000);
  const [interestRate, setInterestRate] = useState<number>(3.5);
  const [loanTerm, setLoanTerm] = useState<number>(25);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  // ROI State
  const [roiPrice, setRoiPrice] = useState<number>(150000);
  const [roiRent, setRoiRent] = useState<number>(12000);
  const [roiExpenses, setRoiExpenses] = useState<number>(2000);
  const [roiResult, setRoiResult] = useState<number | null>(null);

  const calculateMortgage = () => {
    const principal = loanAmount;
    const monthlyInterest = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (principal > 0 && monthlyInterest > 0 && numberOfPayments > 0) {
      const x = Math.pow(1 + monthlyInterest, numberOfPayments);
      const monthly = (principal * x * monthlyInterest) / (x - 1);
      setMonthlyPayment(monthly);
    }
  };

  const calculateROI = () => {
    if (roiPrice > 0) {
      const annualReturn = roiRent - roiExpenses;
      const roi = (annualReturn / roiPrice) * 100;
      setRoiResult(roi);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-marina-900 mb-8 flex items-center gap-2">
        <Calculator className="w-8 h-8" />
        {t.toolsTitle}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mortgage Calculator */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-marina-100">
          <h3 className="text-xl font-bold mb-4 text-marina-800 border-b pb-2">{t.mortgageCalc}</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.loanAmount}</label>
              <div className="relative">
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-marina-500 outline-none pl-10 rtl:pl-2 rtl:pr-10"
                />
                <DollarSign className="w-4 h-4 absolute left-3 top-3 text-gray-400 rtl:right-3 rtl:left-auto" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.interestRate}</label>
                <div className="relative">
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-marina-500 outline-none"
                  />
                  <Percent className="w-4 h-4 absolute right-3 top-3 text-gray-400 rtl:left-3 rtl:right-auto" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.loanTerm}</label>
                <input
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-marina-500 outline-none"
                />
              </div>
            </div>

            <button
              onClick={calculateMortgage}
              className="w-full bg-marina-600 text-white py-2 rounded hover:bg-marina-700 transition"
            >
              {t.calcButton}
            </button>

            {monthlyPayment !== null && (
              <div className="mt-4 bg-marina-50 p-4 rounded text-center">
                <p className="text-sm text-marina-800">{t.monthlyPayment}</p>
                <p className="text-3xl font-bold text-marina-600">${monthlyPayment.toFixed(2)}</p>
              </div>
            )}
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-marina-100">
          <h3 className="text-xl font-bold mb-4 text-marina-800 border-b pb-2">{t.roiCalc}</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.propertyPrice}</label>
              <input
                type="number"
                value={roiPrice}
                onChange={(e) => setRoiPrice(Number(e.target.value))}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-marina-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.annualRent}</label>
              <input
                type="number"
                value={roiRent}
                onChange={(e) => setRoiRent(Number(e.target.value))}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-marina-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.annualExpenses}</label>
              <input
                type="number"
                value={roiExpenses}
                onChange={(e) => setRoiExpenses(Number(e.target.value))}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-marina-500 outline-none"
              />
            </div>

            <button
              onClick={calculateROI}
              className="w-full bg-marina-600 text-white py-2 rounded hover:bg-marina-700 transition"
            >
              {t.calcButton}
            </button>

            {roiResult !== null && (
              <div className="mt-4 bg-green-50 p-4 rounded text-center">
                <p className="text-sm text-green-800">{t.roiResult}</p>
                <p className="text-3xl font-bold text-green-600">{roiResult.toFixed(2)}%</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
