import { Link, useParams } from "react-router-dom";
import { HiLockClosed, HiCheckCircle, HiArrowRight } from "react-icons/hi";
import { useLessons } from "../hooks/useLessons";
import { useCourse } from "../hooks/useCourses";
import { useProgress } from "../hooks/useProgress";
import ProgressBar from "../components/ui/ProgressBar";

function groupByModule(lessons) {
  return lessons.reduce((acc, lesson) => {
    if (!acc[lesson.module]) acc[lesson.module] = [];
    acc[lesson.module].push(lesson);
    return acc;
  }, {});
}

const statusDot = {
  done: "bg-ios-green text-white",
  active: "bg-ios-blue text-white",
  locked: "bg-ios-gray2 text-ios-gray4",
};

export default function Lessons() {
  const { courseId } = useParams();
  const { data: course } = useCourse(courseId);
  const { data: lessons = [], isLoading } = useLessons(courseId);
  const { isCompleted } = useProgress();

  const modules = groupByModule(lessons);
  const moduleKeys = Object.keys(modules);

  const pct = course
    ? Math.round((course.completedLessons / course.totalLessons) * 100)
    : 0;

  return (
    <div className="p-5 lg:p-8 max-w-[1100px]">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold tracking-tight text-ios-label">
          {course?.title ?? courseId} Kursi
        </h2>
        <p className="text-sm text-ios-gray4 mt-1">
          {course?.totalLessons} ta dars · {course?.completedLessons} o'tilgan ·{" "}
          {pct}% progress
        </p>
        <ProgressBar
          value={pct}
          color={course?.color ?? "blue"}
          className="mt-3 max-w-[280px] h-2"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-5">
        {/* Module nav (desktop sticky) */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-2xl overflow-hidden sticky top-20">
            {moduleKeys.map((mod) => {
              const allDone = modules[mod].every((l) => l.status === "done");
              const hasCurrent = modules[mod].some(
                (l) => l.status === "active",
              );
              return (
                <div
                  key={mod}
                  className={`flex items-center gap-3 px-4 py-3.5 border-b border-ios-gray2 last:border-0 text-sm font-medium cursor-pointer hover:bg-ios-gray1 transition-colors ${hasCurrent ? "bg-blue-50 text-ios-blue font-semibold" : "text-ios-label2"}`}
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${allDone ? "bg-ios-green text-white" : hasCurrent ? "bg-ios-blue text-white" : "bg-ios-gray2 text-ios-gray4"}`}
                  >
                    {allDone ? "✓" : hasCurrent ? "→" : "🔒"}
                  </div>
                  {mod}
                </div>
              );
            })}
          </div>
        </div>

        {/* Lessons */}
        <div className="space-y-5">
          {isLoading
            ? [1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl h-32 animate-pulse"
                />
              ))
            : moduleKeys.map((mod) => (
                <div key={mod}>
                  <p className="text-xs font-bold uppercase tracking-wider text-ios-gray4 mb-3">
                    {mod}
                  </p>
                  <div className="bg-white rounded-2xl overflow-hidden">
                    {modules[mod].map((lesson, i) => {
                      const completedLocally = isCompleted(lesson.id);
                      const effectiveStatus = completedLocally ? "done" : lesson.status;
                      const locked = effectiveStatus === "locked";
                      return (
                        <div
                          key={lesson.id}
                          title={locked ? "Bu dars hali ochilmagan" : undefined}
                          className={`flex items-center gap-3.5 px-5 py-4 ${i < modules[mod].length - 1 ? "border-b border-ios-gray2" : ""} ${locked ? "cursor-not-allowed" : "hover:bg-ios-gray1 cursor-pointer"} transition-colors`}
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold shrink-0 ${statusDot[effectiveStatus]}`}
                          >
                            {effectiveStatus === "done"
                              ? "✓"
                              : effectiveStatus === "active"
                                ? lesson.num
                                : lesson.num}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className={`text-[15px] font-semibold ${locked ? "text-ios-gray3" : "text-ios-label"}`}
                            >
                              {lesson.title}
                            </p>
                            <p className="text-xs text-ios-gray4 mt-0.5">
                              {effectiveStatus === "done" && lesson.quizScore
                                ? `Quiz: ${lesson.quizScore}%`
                                : lesson.duration}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            {effectiveStatus === "done" && lesson.quizScore && (
                              <span className="text-xs font-semibold text-ios-green">
                                {lesson.quizScore}%
                              </span>
                            )}
                            {locked ? (
                              <HiLockClosed className="text-ios-gray3 text-lg" />
                            ) : effectiveStatus === "active" ? (
                              <Link
                                to={`/lessons/${lesson.id}`}
                                className="text-xs font-semibold text-white bg-ios-blue rounded-full px-3.5 py-1.5"
                              >
                                O'qish →
                              </Link>
                            ) : (
                              <Link to={`/lessons/${lesson.id}`}>
                                <HiArrowRight className="text-ios-gray3 text-lg hover:text-ios-blue transition-colors" />
                              </Link>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
