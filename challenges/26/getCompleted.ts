function getCompleted(timeWorked: string, totalTime: string): string {
  function getTimeInMinutes(time: string): number {
    const [hours, minutes, seconds] = time.split(":");
    return +hours * 3600 + +minutes * 60 + +seconds;
  }
  const timeWorkedInMinutes = getTimeInMinutes(timeWorked);
  const totalTimeInMinutes = getTimeInMinutes(totalTime);
  return (
    "" + Math.round((100 * timeWorkedInMinutes) / totalTimeInMinutes) + "%"
  );
}
