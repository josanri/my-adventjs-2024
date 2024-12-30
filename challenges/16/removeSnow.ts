function removeSnow(s: string): string {
  const regex = /(\w)\1/;

  while (regex.test(s)) {
    s = s.replace(regex, "");
  }

  return s;
}
