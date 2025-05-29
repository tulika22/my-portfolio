import React, { useMemo, useState } from 'react';
import { rawCodingLog, generateFullCodingLog } from '../data/codingLog';
import { DayCardModal } from './DayCardModal';

const TOTAL_DAYS = 30;

function getShadeClass(status, problemsCount) {
  if (status === 'missed') return 'bg-rose-200 text-rose-900';
  if (status === 'pending') return 'bg-gray-100 text-gray-600';

  if (problemsCount === 1) return 'bg-purple-100 text-purple-900';
  if (problemsCount === 2) return 'bg-purple-200 text-purple-900';
  if (problemsCount === 3) return 'bg-purple-300 text-purple-900';
  if (problemsCount === 4) return 'bg-purple-400 text-white';
  if (problemsCount === 5) return 'bg-purple-500 text-white';
  if (problemsCount >= 6) return 'bg-purple-600 text-white';

  return 'bg-gray-100 text-gray-600';
}

export const CodingChallenge = () => {
  const codingLog = useMemo(
    () => generateFullCodingLog('2025-05-29', TOTAL_DAYS, rawCodingLog),
    []
  );

  const [selectedDay, setSelectedDay] = useState(null);

  const summary = codingLog.reduce(
    (acc, day) => {
      if (day.status === 'done') acc.done++;
      else if (day.status === 'missed') acc.missed++;
      else acc.pending++;
      return acc;
    },
    { done: 0, missed: 0, pending: 0 }
  );

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-6 max-w-6xl mx-auto rounded-xl shadow-inner">
      <h2 className="text-3xl font-bold mb-2 text-center">30-Day Coding Challenge Tracker</h2>

      {/* Summary */}
      <div className="flex justify-center gap-6 text-base sm:text-lg mb-6 flex-wrap">
        <span>✅ Done: {summary.done}</span>
        <span>❌ Missed: {summary.missed}</span>
        <span>⏳ Pending: {summary.pending}</span>
      </div>

      {/* Color Legend */}
      <div className="flex flex-wrap gap-4 items-center justify-center text-sm mb-6">
        <span className="flex items-center gap-1">
          <div className="w-4 h-4 bg-gray-200 rounded-sm" /> Pending
        </span>
        <span className="flex items-center gap-1">
          <div className="w-4 h-4 bg-rose-300 rounded-sm" /> Missed
        </span>
        <span className="flex items-center gap-1">
          <div className="w-4 h-4 bg-purple-200 rounded-sm" /> 1 Problem
        </span>
        <span className="flex items-center gap-1">
          <div className="w-4 h-4 bg-purple-400 rounded-sm" /> 3–4 Problems
        </span>
        <span className="flex items-center gap-1">
          <div className="w-4 h-4 bg-purple-600 rounded-sm" /> 6+ Problems
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {codingLog.map((day, idx) => {
          if (!day) return null;

          const problemsCount = day.problems.length;
          const shadeClass = getShadeClass(day.status, problemsCount);
          const isClickable = day.status === 'done' || problemsCount > 0;

          return (
            <div
              key={day.date}
              onClick={() =>
                isClickable && setSelectedDay({ ...day, dayNumber: idx + 1 })
              }
              className={`relative rounded-lg p-3 shadow-md transition-transform transform
                ${isClickable ? 'hover:scale-105 cursor-pointer' : 'cursor-default'}
                ${shadeClass} min-w-0`}
              title={
                problemsCount > 0
                  ? day.problems.map((p) => p.title).join(', ')
                  : 'No problems'
              }
            >
              {/* Top Row: Day number + Icon */}
              <div className="flex justify-between items-center select-none text-sm sm:text-base">
                <div className="font-semibold">{`Day ${idx + 1}`}</div>
                {day.status === 'done' && <div className="text-green-700">✅</div>}
                {day.status === 'pending' && <div className="text-gray-500">⏳</div>}
                {day.status === 'missed' && <div className="text-red-500">❌</div>}
              </div>

              {/* Missed Banner */}
              {day.status === 'missed' && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    bg-red-600 bg-opacity-90 text-white font-semibold text-xs px-3 py-1 rounded-full
                    shadow-lg select-none pointer-events-none mt-3">
                  Missed
                </div>
              )}

              {/* Problem Count */}
              {day.status !== 'missed' && (
                <div className="text-xs text-center mt-2 select-none">
                  {problemsCount > 0 ? ( day.status === 'done' ? (
                    `Solved ${problemsCount} problem${problemsCount > 1 ? 's' : ''}`
                  ):`Need to solve ${problemsCount} problem${problemsCount > 1 ? 's' : ''}`) : (
                    <span className="italic text-gray-700">No problems yet</span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <DayCardModal isOpen={!!selectedDay} onClose={() => setSelectedDay(null)} day={selectedDay} />
    </div>
  );
};
