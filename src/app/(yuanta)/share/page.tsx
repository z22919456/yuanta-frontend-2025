'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChangeEventHandler, useState } from 'react';

const SharePage = () => {
  const [branch, setBranch] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);
  const [errors, setErrors] = useState({
    branch: '',
    employeeId: '',
  });

  const validateBranch = (value: string) => {
    if (value.length > 3) {
      setErrors((prev) => ({ ...prev, branch: '分支代號不能超過3碼' }));
      return false;
    }
    setErrors((prev) => ({ ...prev, branch: '' }));
    return true;
  };

  const validateEmployeeId = (value: string) => {
    if (value.length > 5) {
      setErrors((prev) => ({ ...prev, employeeId: '員工編號不能超過5碼' }));
      return false;
    }
    setErrors((prev) => ({ ...prev, employeeId: '' }));
    return true;
  };

  const handleBranchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setBranch(value);
    validateBranch(value);
  };

  const handleEmployeeIdChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setEmployeeId(value);
    validateEmployeeId(value);
  };

  const generateUrl = () => {
    if (!branch || !employeeId) return '';
    return `https://www.yuantafutures.com.tw/2025cny/seminar?introducer=${branch}-${employeeId}`;
  };

  const isValid = () => {
    return (
      branch.trim() !== '' &&
      employeeId.trim() !== '' &&
      !errors.branch &&
      !errors.employeeId
    );
  };

  const handleCopy = async () => {
    if (!isValid()) return;

    try {
      await navigator.clipboard.writeText(generateUrl());
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('複製失敗:', err);
    }
  };

  return (
    <main className="relative min-h-screen bg-slate-100 pb-5 pt-[64px]">
      <div className="min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                業務專屬連結（講座報名）
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  分支代號
                </label>
                <input
                  type="text"
                  value={branch}
                  onChange={handleBranchChange}
                  className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.branch ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="請輸入分支代號 (P00)"
                  maxLength={3}
                />
                {errors.branch && (
                  <p className="text-sm text-red-500">{errors.branch}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  員工編號
                </label>
                <input
                  type="text"
                  value={employeeId}
                  onChange={handleEmployeeIdChange}
                  className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.employeeId ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="請輸入員工編號 (12345)"
                  maxLength={5}
                />
                {errors.employeeId && (
                  <p className="text-sm text-red-500">{errors.employeeId}</p>
                )}
              </div>

              <div className="mt-6 space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  業務專屬連結網址
                </label>
                <div className="flex items-center space-x-0">
                  <input
                    type="text"
                    readOnly
                    value={generateUrl()}
                    className="w-full rounded-l-md border border-gray-300 bg-gray-50 px-3 py-2"
                  />
                  <button
                    onClick={handleCopy}
                    className={`flex items-center justify-center whitespace-nowrap rounded-r-md border border-gray-300 px-3 py-2 transition-colors ${
                      isValid()
                        ? 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                        : 'cursor-not-allowed text-gray-400'
                    }`}
                    title={isValid() ? '複製網址' : '請填寫完整資料'}
                    disabled={!isValid()}
                  >
                    複製連結
                  </button>
                </div>
                {copySuccess && (
                  <p className="text-sm text-green-600">專屬分享連結</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default SharePage;
